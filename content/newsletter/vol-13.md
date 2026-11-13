# Value & Compute: The Hands Are Mine Now

Building In Public Vol. 13

The letter lives at [adrianswish.xyz/valueandcompute](https://adrianswish.xyz/valueandcompute).

**By Adrian Swish**\
Founder, Digital Currensy Inc. · Director of the Prep Academy, The U Basketball Prep Academy · COO, The Sixth Man\
[medium.com/@labeliqai](https://medium.com/@labeliqai) · [adrianswish.xyz](https://adrianswish.xyz) · [@IAmAdrianSwish](https://x.com/IAmAdrianSwish)

---

### For New Readers: Who I Am

I build the business infrastructure behind independent music and sports talent. I am now putting AI at the center of it.

For more than fifteen years I have worked every seat: artist manager, athlete representative, distributor, dealmaker, and founder. I have negotiated and secured **$10 million+** in contracts for artists, producers, content creators, and athletes across record, publishing, NIL, endorsement, and brand deals with Motown, Interscope/A&M, EMPIRE, BMG, Foundation Media, Priority Records, Sony, T-Mobile, and others. The work has included top-10 radio songs, Billboard-charting albums campaigns with Kid Ink, executive production on Dave East’s *GEMINI* (the tape Nas heard), and multiple projects with Icewear Vezzo that led to Motown. I have worked with talented artists from all over the world throughout my career. Recognition includes Rolling Stone (RMR “Rascal”) and Influencive. I wrote *Artist Managers Anonymous* (#1 Best New Seller Amazon in its category) and a NIL playbook.

In 2018 I founded **Digital Currensy Inc.** (DCI) in Los Angeles. That year I published one of the earliest whitepapers on music distribution on blockchain, artist ownership, digital rights, and independent infrastructure. DCI is the foundation everything else is built from. The live platform at [digitalcurrensy.com](https://www.digitalcurrensy.com) runs independent distribution and label services: no upfront fees, artists keep 80%. Published results: **800+** artists onboarded, **100M+** streams, **$600K+** in revenue across services, **15K+** assets, and **30+** in-house playlists. Campaigns have reached Warner, Atlantic, Motown, Interscope, EMPIRE, BMG, and brands including PUMA, T-Mobile, FOX Sports, ESPN, MTV, and BET.

The problem never changes. Talent creates the value. The money moves slowly and away from them. Everything I build is designed to fix that.

Sports runs on the same operating system. I am Director of the Prep Academy at [The U Basketball Prep Academy](https://www.theubasketballprepacademy.com/), a partnership with founder Olin “The Guard Whisperer” Simplis (30+ years, multiple lottery picks). I am COO of [The Sixth Man](https://thesixthman.ai/), the VR product built from his methods.

The houses do not merge. Music, sports, civic, and specialized technical work stay distinct. They compound because one operator and one standard run through them. AI sits inside the live rooms, not as a sidecar.

Part of what pushed me to own the technical layer was reading my good friend and business partner Vincent Owens’ book, [*The Art of Vibe Coding*](https://www.amazon.com/Art-Vibe-Coding-Creators-Create/dp/B0FJLCQDT8). Owens frames coding as culture in motion. Lived experience becomes the source of the prompt. The machine should reflect human creativity instead of flattening it. The digital divide is measured in mindsets, not just megabytes. The same creativity that stretched a dollar or flipped a hustle is the creativity that powers the systems. That landed. I already had the culture, the judgment, and the network. The book clarified that the next step was to let the creators create — including myself.

A concrete moment from the earlier period still shapes the standard. On one campaign the creative and the deal were locked. The systems that should have moved the money and the assets could not move without one person who did not own the outcome. The talent had already created the value. The delay was not creative. It was structural. That gap is why the hands had to become mine.

This series documents the build in public. Volume 13 is the moment the hands became mine.

---

### The Arc of the Series

Volume 8 stressed infrastructure before scale. Volume 9 named the cost of relying on people who do not own the outcome. Volume 10 described the sovereign reset and the agency pivot. Volume 11 said the work has a shape now.

The shape is clearer because the person responsible for the systems can now move them.

---

### The Reset:

### Learning the Stack After the Shady Developer

I took several months off after working with a developer whose incentives were not aligned with the product. Critical systems could not move without that person. I stopped feeling sorry for the situation and decided to close the skill gap myself.

I studied basic coding principles. I learned the terminal until it became a consistent, confident daily tool. I committed to learning by building. The method is vibe coding — high-speed iteration with multiple large language models, constant testing, and human judgment on what actually ships. Owens’ framing helped here: the prompts stay rooted in the lived experience of the domain, not generic syntax. The culture does not get flattened.

The daily stack and how it is actually used:

- **Codex, Fable 5.2, Opus 5.5-class models** — primary drafting and structural reasoning. I run the same problem across more than one and compare outputs.
- **Cursor** — the main editing environment. Terminal + editor in one place for rapid local iteration.
- **Super Grok, Grok Bot, Muse, Dots, Hermes** — secondary and specialized passes. Testing for different strengths on documentation, edge cases, and alternative approaches.
- **GitHub Copilot** — tested and rejected as primary. It has not met the standards we hold for reliability and control.
- **Docker, Railway, Vercel, local setups** — deployment and runtime. I move between them depending on the product.
- **Home lab (in progress)** — additional local compute for training and fine-tuning smaller models under our own control. This is the next sovereignty step. Reduce single points of failure. Keep the critical loops owned.

Confident daily terminal use does not remove the vibe-coding label. It upgrades it. The multi-model workflow is an accelerator and a learning partner. The judgment that decides what is true enough to ship still comes from more than fifteen years inside music and sports entertainment. The hours since mid-June have been focused and motivated by that decision.

---

### GitHub Activity and Open Source Since Mid-June

The public record lives at [github.com/DigitalCurrensy](https://github.com/DigitalCurrensy). The organization description is accurate: software for music, sports, entertainment, electric vehicles, and lunar sites.

[IMAGE 01]

Activity since mid-June has been sustained and high-volume:

- **9,133** contributions in the last year
- **1,435** commits across **200** repositories in the October / Nov window alone
- **73** repositories created in the same concentrated period
- Roughly **29** public repositories currently visible, many advanced or created post-June
- 20+ repositories cloned or forked as learning and contribution surfaces

The first public repository was Compton One. The rest of the public work list shows deliberate creative range under the same company.

One concrete milestone was my first pull request on a major open-source NBA analytics project. I opened Pull Request #340 on `jaebradley/basketball_reference_web_scraper`. The change fixed an invalid escape sequence in a regex that was raising a SyntaxWarning. In future Python versions that warning becomes a hard SyntaxError. The fix converted the pattern to a raw string. It was merged into version 4.22.1. I am listed as a contributor.

It was a small change on real production code used by analysts. The discipline it taught was more useful than the size of the diff: meet the standards of an existing library rather than only your own projects. Read the issue. Understand the future breakage. Ship the minimal correct fix. That habit transfers. I also forked and worked inside `swar/nba_api`.

---

### Compton One:

### First Public Repo and Civic Hackathon Origin

[IMAGE 02]

[compton-one.vercel.app](https://compton-one.vercel.app) · [github.com/DigitalCurrensy/compton-one](https://github.com/DigitalCurrensy/compton-one)

Compton One was my first public repository. It originated as a concept submitted for the Compton Tech Week 2026 Hackathon hosted by the City of Compton. The challenge was to build solutions that empower the community. I submitted this because the need was real in the city. I have worked with several talented artists from Compton throughout my career. The connection was personal and practical.

A resident describes a problem in plain language — English, Spanish, Tagalog, or Chinese — and receives the single official next step: the correct department, a verified phone number or form, a checklist of evidence to gather, and a ready-to-use call script. The output is a Civic Action Receipt the resident can keep and track. It does not file the report. It does not talk to city servers. It does not use AI to guess a department. Routing is deterministic keyword and phrase matching against a catalog of 22 verified Compton services. Data stays on the phone. There is no account.

Most civic apps try to be smart. This one refuses to guess. That design choice keeps it trustworthy, zero-cost to run, and honest about what it cannot do. Thirteen of the twenty-two routes have no dedicated online form — they are phone-first. The app closes that gap without pretending to replace the city’s systems. It was built in the spirit of Compton Tech Week, which runs hands-on technology education for youth and young adults in the city. Compton One is infrastructure that sits downstream of that same idea: give people a clearer path to the systems that already exist.

---

### The U Basketball Prep Academy

[IMAGE 03]

[theubasketballprepacademy.com](https://www.theubasketballprepacademy.com/)

Public hub: [github.com/DigitalCurrensy/the-u-basketball-prep-academy](https://github.com/DigitalCurrensy/the-u-basketball-prep-academy)

The U is a training academy, not a school. Middle- and high-school student-athletes train daily in The Dojo under professional development staff while completing academics through the online school or homeschool program their family chooses. Founded by Olin Simplis — The Guard Whisperer — with more than thirty years developing NBA and WNBA players, including multiple lottery picks, the program runs a 2:1 player-to-coach ratio. My role as Director of the Prep Academy is a partnership with Coach O. It covers operations, enrollment pathways, partnerships, and the systems that keep the academy at the standard he set.

The through-line is deliberate. The physical Dojo is the real room. Youth learn the technology by using it inside the actual development environment and leave able to leverage it. The same standards that ran music campaigns now run the academy’s operations and partnerships.

---

### The Sixth Man - Live Beta and NBA Launchpad

[IMAGE 04]

[thesixthman.ai](https://thesixthman.ai/)

The Sixth Man is a VR basketball shooting coach for Meta Quest 3 built from Coach Olin Simplis’s methods and his Six Pillars of Shooting. It is a private shooting lesson with The Guard Whisperer. The product focuses on form rather than makes. A player calibrates height and reach, takes real reps in VR, and receives focused feedback on one issue at a time. Training works offline. Optional sync keeps private companion profiles.

The product is in active live beta testing with strong early results. This month we submitted it to the NBA Launchpad cohort. I serve as COO, handling operations and partnerships. The Sixth Man is the layer that makes Coach O’s teaching available beyond ZIP code. It sits inside basketball culture rather than next to it. It is its own product with its own development path, beta results, and current submission cycle.

---

### ROP 4 - Album Campaign + Playable Game

\

[IMAGE 05]

Campaign: [richoffpints.com](https://richoffpints.com/) ·

Game: [blue-cloud-787.higgsfield.gg](https://blue-cloud-787.higgsfield.gg/) · Stream: [foundation-media.ffm.to/rop4](https://foundation-media.ffm.to/rop4)

Icewear Vezzo’s *Rich Off Pints 4* released July 17, 2026 on Iced Up Records. The campaign site pairs the album with a playable experience. The game is **6 Mile Night Run**, hosted on Higgsfield. Players drive a white ROP 4 sedan through Detroit night traffic, collect Purple Pints, thread Perfect Dodges, fire Purple Boost, and post a rank card. One run lasts about a minute. No account required.

I am in the Higgsfield Creator Program. The game is a working example of AI-assisted interactive media attached to a real music release rather than a demo. The creative direction is album world as playable space: Detroit night, luxury sedan, score that can be shared. The repos for the website and the official game source sit under DigitalCurrensy.

---

### AIO.GEO - Live and #22 on Product Hunt

[IMAGE 06]

[aiogeoprotocol.com](https://www.aiogeoprotocol.com/) · Product Hunt: launched August 13, 2026

AIO.GEO is live. It measures how AI search systems parse, understand, and cite a site, then produces structural fixes sealed with cryptographic receipts. It does not sell rankings. It sells measurable structure and proof. The positioning is clear: SEO tests if humans can find you on Google. AIO.GEO tests if AI agents can do business with you.

On August 13, 2026 it launched on Product Hunt and ranked **#22 Product of the Day** with 79 points. The launch was significant. It is open-core (MIT), with CLI, SDK, MCP server, and GitHub Action available. Dry-run fix packs, rescoring, and HMAC receipts are part of the workflow. This is a public, measurable product that sits outside the music and sports houses while still serving the same standard of honesty.

[IMAGE 07]

---

\

### Label IQ AI and the Music Infrastructure

Label IQ remains the music intelligence and creation layer connected to DCI’s existing artist base, distribution, and catalog. Artists can release music. LABEL IQ AI lets artists create songs and music videos with AI, raise funding from fans starting at $1, and pay every contributor automatically, without giving up their rights. The current focus is the AI HQ — the internal platform that will host the music desk, rights tooling, and controlled generation workflows. Public claims stay inside what is actually live. Certain generation paths remain gated behind founder approval. The agency side continues to fund core development.

DCI GPT is the assistant that already lives on the company site for release, royalty, playlist, and label questions. It is one of the live tools that ships rather than a pitch. The advantage of the full stack is the existing base. The platform launches on DCI’s 800+ artists, distribution rails, and catalog rather than starting from zero.

I build, not just pitch. The open-source work, the first PR, Compton One, AIO.GEO, and the live systems are the proof.

---

### Creative Range: Other Public Builds

The public work under DigitalCurrensy shows intentional range rather than random experiments. Each tool does one clear job with honest boundaries.

[IMAGE 08]

**First Bucket Studios** ([github.com/DigitalCurrensy/first-bucket-studios](https://github.com/DigitalCurrensy/first-bucket-studios)): Rip a basketball pack in the browser. Ten cards. Five names. Eighty-two nights. The card is a PNG. The walk is a URL. NBA and WNBA treatment with holographic foil. Sports entertainment, not a stats dashboard.

\

\

[IMAGE 09]

**Open Hood** ([github.com/DigitalCurrensy/open-hood](https://github.com/DigitalCurrensy/open-hood)): The owner’s car book. Decode the VIN, read the spec, mark up the repair order, and walk to the window with sentences you can say. Not a shop, not a warranty, not a meetup.

**Module Kinetic**: Proof, not opinion, for every EV charger repair. A broken charger is signed off, or it is refused. Documentation only.

\

[IMAGE 10]

**Lunar and specialized suite** (`desks`, `rimkeep`, `tubewalk`, `pinfault`, `fitslip`, `feasfront`, `dosepath`, `baghold`, `archhold`, and others): Small, deterministic tools for lunar site scoring, pathfinding, structural checks, radiation dose, and related measurements. Eight checks can each say no. Ok is not a decision to enter. Pure technical curiosity under the same company that runs music distribution and basketball development.

\

[IMAGE 11]

**Healthie (Honest Aisle)**: A pack-scoring prototype. GTIN maps to a 0–100 score using Nutri-Score 2023 plus a NOVA cap. A single honest number for a food pack rather than a marketing claim.

**Founder hub**: [adrianswish.xyz](https://adrianswish.xyz)

The creative direction is consistent: tools that prepare the human, tell the truth, and get out of the way. The range demonstrates the same systems thinking applied across domains.

---

### Compute Sovereignty and the Next Layer

A local setup is already running as a substitute for pure cloud dependence. The home lab is the next explicit step for additional compute so we can train and fine-tune smaller models under our own control. The objective is the same one that runs through the rest of the work: reduce single points of failure and keep the critical loops owned. Compute sovereignty is part of the same decision that closed the skill gap after the shady developer period.

Honest limitations right now: the home lab is not fully online yet. Certain Label IQ generation paths remain gated behind founder approval. The learning curve is still active. Those are features of the current stage, not reasons to stop.

---

### **New AI Tools Across Music, Sports, and the Founder Stack**

My test for any tool is simple: does it fit into work I’m already doing, or is it just one more tab? Most new AI tools don’t pass. These nine do, three for each part of my world, and each one comes with a real way to set it up.

**Music**

- [Moises](https://moises.ai/) splits any song into vocals, drums, bass and keys in about a minute. Setup: drop in a reference track, mute the vocal, and practice or write over the beat. It’s the fastest way to study how a record was built.
- [iZotope Ozone](https://www.izotope.com/en/products/ozone.html) has a mastering assistant that listens to your mix and suggests a starting master. Setup: run it on your bounce, compare it to a reference, then adjust by ear. The AI gets you close and you finish it.
- [Splice](https://splice.com/) gives you sounds you’re cleared to use, so samples don’t turn into legal problems later. Setup: build each beat from your Splice library and you know where every sound came from.

**Sports**

- [Hudl](https://www.hudl.com/) is where most teams already keep their film. Setup: upload every game, tag possessions, and cut a 3-minute highlight reel per player for recruiting.
- [HomeCourt](https://www.homecourt.ai/) tracks makes, misses and shot spots with nothing but a phone camera. Setup: prop the phone at the baseline for every workout, and you’ll have weekly shooting numbers to show coaches.
- [Catapult](https://www.catapult.com/) wearables measure workload, so you can see when an athlete is overdoing it. Setup: it’s for programs with a budget. Track load across a season and plan rest days around the data.

**Founder stack**

- [Cursor](https://cursor.com/) is an AI code editor that writes, fixes and explains code inside your actual project. Setup: open your repo, describe the change in plain English, and review every diff before you ship it.
- [Granola](https://www.granola.ai/) takes notes during calls without a bot joining the meeting. Setup: turn it on for every partner or label call, and you’ll have clean notes and action items when you hang up.
- [n8n](https://n8n.io/) connects your apps and runs automations you own and can host yourself. Setup: start with one loop, like sending a new form signup to your CRM and then to a welcome email, so you’re not the one copying data between tools.

The pattern is the same in all three: let the tool do the repetitive part, and keep the call on what’s good or true for yourself.

---

### What This Volume Is Actually About

The previous volumes described the problem and the posture. This one records the practical result of deciding to own the skill while keeping the judgment that came from the music and sports years.

The houses still do not merge. Music infrastructure, sports development environments, civic tools, and specialized technical work remain distinct. What changed is that the person responsible for them can now move the code, document the boundaries, and ship the next version without waiting on someone else’s calendar or incentives.

The advantage is the combination: more than fifteen years of real relationships, creative judgment, operational experience, dealmaking record, and network inside music and sports entertainment, plus the ability to build the systems instead of renting them. The connective tissue is direct. The same standards that decided whether a campaign was true enough to ship now decide whether a system is true enough to ship. Owens’ point lands here too: the creativity that already existed is the creativity that powers the new layer. Code is culture in motion.

I am using that deep knowledge in entertainment, music, sports, culture, technology, and AI to help educate the next generation of founders, entertainers, managers, artists, athletes, engineers, and vibe coders. Youth and athletes who touch these tools learn the technology by using it inside the actual rooms and leave able to leverage it. Brands get the same merge rather than a sidecar demo. The series exists so the path is visible.

The work continues. The series continues.

**Who this is for and how to stay in the loop**

This series is for artists, managers, athletes, founders, engineers, and anyone building inside music or sports who wants the systems to match the culture instead of sitting beside it. Follow the archive at [medium.com/@labeliqai](https://medium.com/@labeliqai). Stay current on X at [@IAmAdrianSwish](https://x.com/IAmAdrianSwish). For direct work or partnerships, the founder hub is at [adrianswish.xyz](https://adrianswish.xyz).

**Live systems right now**

- Digital Currensy: [digitalcurrensy.com](https://www.digitalcurrensy.com)
- Academy: [theubasketballprepacademy.com](https://www.theubasketballprepacademy.com/)
- Sixth Man: [thesixthman.ai](https://thesixthman.ai/)
- Compton One: [compton-one.vercel.app](https://compton-one.vercel.app)
- ROP 4: [richoffpints.com](https://richoffpints.com/) · [blue-cloud-787.higgsfield.gg](https://blue-cloud-787.higgsfield.gg/)
- AIO.GEO: [aiogeoprotocol.com](https://www.aiogeoprotocol.com/)
- GitHub: [github.com/DigitalCurrensy](https://github.com/DigitalCurrensy)
- Founder: [adrianswish.xyz](https://adrianswish.xyz)
- Series: [medium.com/@labeliqai](https://medium.com/@labeliqai)
- *The Art of Vibe Coding*: [Amazon](https://www.amazon.com/Art-Vibe-Coding-Creators-Create/dp/B0FJLCQDT8)

The hands are mine now. The next volumes will show what they build.

Adrian Swish\
November 2026

<!-- Substack contains no image captions. -->
