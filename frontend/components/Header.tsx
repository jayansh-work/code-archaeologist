export default function Header() {
  return (
    <header className="border-b border-border/80">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/40 bg-surface text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 7h16M6 12h12M8 17h8" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-wide">
            Code Archaeologist
          </span>
        </div>
        <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
          Milestone 1
        </span>
      </div>
    </header>
  );
}
