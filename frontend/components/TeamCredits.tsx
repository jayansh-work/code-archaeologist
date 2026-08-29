const leader = {
  name: "Jayansh Jain",
  id: "26BCE2591",
};

const members = [
  { name: "Tanush Reddy Edula", id: "26BCE2539" },
  { name: "Jitin Yadav", id: "26BCE2526" },
  { name: "Ayushma Sharma", id: "26BDS0108" },
];

export default function TeamCredits() {
  return (
    <section className="mx-auto mt-16 w-full max-w-5xl px-6">
      <div className="mb-6 text-center sm:text-left">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          Team
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          Logos
        </h2>
        <p className="mt-2 text-sm text-muted">
          Built for DevJams 26
        </p>
      </div>

      <article className="rounded-2xl border border-accent/35 bg-surface p-6 sm:p-7">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Leader
        </p>
        <p className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
          {leader.name}
        </p>
        <p className="mt-1 font-mono text-sm text-muted">{leader.id}</p>
      </article>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {members.map((member) => (
          <article
            key={member.id}
            className="rounded-2xl border border-border bg-surface/80 p-5 text-left"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Member
            </p>
            <h3 className="mt-3 text-sm font-semibold text-foreground">
              {member.name}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">{member.id}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
