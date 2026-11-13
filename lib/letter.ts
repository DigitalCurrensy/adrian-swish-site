/**
 * Minimal parser for newsletter letters stored in `content/newsletter/*.md`.
 *
 * The Markdown file is the source of truth and is rendered verbatim: this
 * parser only understands the constructs the Substack export uses and never
 * rewrites text. Supported:
 *   - `# ` (title) and `### ` (section) headings
 *   - `---` rules, `- ` lists, paragraphs, trailing-`\` hard line breaks
 *   - `[IMAGE nn]` placeholders (image position markers)
 *   - inline links, **bold**, *italic*, `code`
 * A line holding only `\` is an empty Substack spacer and is dropped, as are
 * HTML comments.
 */

export type Inline =
  | { type: "text"; value: string }
  | { type: "break" }
  | { type: "code"; value: string }
  | { type: "strong"; children: Inline[] }
  | { type: "em"; children: Inline[] }
  | { type: "link"; href: string; children: Inline[] };

export type Block =
  | { type: "heading"; level: 1 | 2; children: Inline[] }
  | { type: "paragraph"; children: Inline[] }
  | { type: "list"; items: Inline[][] }
  | { type: "image"; id: string }
  | { type: "rule" };

const INLINE =
  /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`/g;

export function parseInline(source: string): Inline[] {
  const out: Inline[] = [];
  let last = 0;
  for (const m of source.matchAll(INLINE)) {
    const at = m.index ?? 0;
    if (at > last) out.push({ type: "text", value: source.slice(last, at) });
    if (m[1] !== undefined) {
      out.push({ type: "link", href: m[2], children: parseInline(m[1]) });
    } else if (m[3] !== undefined) {
      out.push({ type: "strong", children: parseInline(m[3]) });
    } else if (m[4] !== undefined) {
      out.push({ type: "em", children: parseInline(m[4]) });
    } else {
      out.push({ type: "code", value: m[5] });
    }
    last = at + m[0].length;
  }
  if (last < source.length) out.push({ type: "text", value: source.slice(last) });
  return out;
}

function parseLines(lines: string[]): Inline[] {
  const out: Inline[] = [];
  lines.forEach((line, i) => {
    const hard = line.endsWith("\\");
    out.push(...parseInline(hard ? line.slice(0, -1) : line));
    if (i < lines.length - 1) {
      out.push(hard ? { type: "break" } : { type: "text", value: " " });
    }
  });
  return out;
}

export function parseLetter(markdown: string): Block[] {
  const chunks = markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk !== "" && chunk !== "\\");

  return chunks.map((chunk): Block => {
    const lines = chunk.split("\n");
    const image = /^\[IMAGE (\d+)\]$/.exec(chunk);
    if (image) return { type: "image", id: image[1] };
    if (chunk === "---") return { type: "rule" };
    if (chunk.startsWith("### ")) {
      return { type: "heading", level: 2, children: parseInline(chunk.slice(4)) };
    }
    if (chunk.startsWith("# ")) {
      return { type: "heading", level: 1, children: parseInline(chunk.slice(2)) };
    }
    if (lines.every((line) => line.startsWith("- "))) {
      return { type: "list", items: lines.map((line) => parseInline(line.slice(2))) };
    }
    return { type: "paragraph", children: parseLines(lines) };
  });
}

/** Plain text of inline nodes — used for the document title and JSON-LD. */
export function inlineText(nodes: Inline[]): string {
  return nodes
    .map((node) => {
      if (node.type === "text" || node.type === "code") return node.value;
      if (node.type === "break") return " ";
      return inlineText(node.children);
    })
    .join("");
}
