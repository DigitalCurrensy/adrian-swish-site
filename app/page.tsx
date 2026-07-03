export default function Home() {
  return (
    <main className="min-h-screen bg-[#030407] text-white overflow-hidden">
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,216,255,0.14),transparent_38%),linear-gradient(180deg,#030407,#080A0F)]" />

        <div className="relative z-10 max-w-5xl text-center">
          <p className="mb-6 text-xs tracking-[0.45em] text-[#C9CDD2] uppercase">
            Digital Currensy Inc. / Adrian Swish
          </p>

          <h1 className="text-5xl font-black tracking-[-0.06em] sm:text-7xl md:text-8xl">
            ADRIAN SWISH
          </h1>

          <div className="mx-auto my-8 h-px w-48 bg-gradient-to-r from-transparent via-[#C9CDD2] to-transparent" />

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#D8DCE2] md:text-2xl">
            Military discipline. Cultural intelligence. AI infrastructure.
            Market execution.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#858B96] md:text-lg">
            Building across music, artificial intelligence, blockchain, sports
            technology, digital marketing, creator tools, media, and digital capital.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://adrianswish.book.kiwilaunch.com/"
              className="rounded-full border border-white/20 bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105"
            >
              Book Strategy Call
            </a>

            <a
              href="mailto:swish@digitalcurrensy.com"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/10"
            >
              Contact Adrian
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
