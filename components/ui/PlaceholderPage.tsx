type PlaceholderPageProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export function PlaceholderPage({
  title,
  eyebrow = "Adrian Swish",
  description = "This premium section is being built as part of the Adrian Swish digital headquarters.",
}: PlaceholderPageProps) {
  return (
    <main className="min-h-screen bg-[#030407] px-6 py-24 text-white">
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#C9CDD2]">
          {eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] sm:text-7xl">
          {title}
        </h1>

        <div className="my-8 h-px w-48 bg-gradient-to-r from-[#19D8FF] via-[#C9CDD2] to-transparent" />

        <p className="max-w-2xl text-lg leading-8 text-[#A7ADB8]">
          {description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://adrianswish.book.kiwilaunch.com/"
            className="rounded-full border border-white/20 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
          >
            Book Strategy Call
          </a>

          <a
            href="mailto:swish@digitalcurrensy.com"
            className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            Contact Adrian
          </a>
        </div>
      </section>
    </main>
  );
}
