const points = [
  {
    title: "What changed?",
    body: "Trace how files and components evolved across the history of a repository.",
  },
  {
    title: "When, and why?",
    body: "Connect important changes to the moment they landed and the discussion around them.",
  },
  {
    title: "Show the evidence",
    body: "Ground every explanation in commits, diffs, issues, and pull requests.",
  },
];

export default function FocusPoints() {
  return (
    <section className="mx-auto mt-16 w-full max-w-5xl px-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {points.map((point) => (
          <article
            key={point.title}
            className="rounded-2xl border border-border bg-surface/80 p-5 text-left"
          >
            <h2 className="text-sm font-semibold text-foreground">
              {point.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">{point.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
