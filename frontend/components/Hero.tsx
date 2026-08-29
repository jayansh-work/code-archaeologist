export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 text-center">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent">
        Software forensics
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Code Archaeologist
      </h1>
      <p className="mt-4 text-xl text-foreground/90 sm:text-2xl">
        Software has a history. Make it searchable.
      </p>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
        An AI-powered software forensics platform that reconstructs how and why
        a codebase evolved. Instead of only explaining what code does today, it
        will uncover what changed, when it changed, and the evidence behind
        important decisions.
      </p>
    </section>
  );
}
