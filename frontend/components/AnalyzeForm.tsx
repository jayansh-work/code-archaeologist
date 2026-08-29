"use client";

import { FormEvent, useState } from "react";

function isGitHubRepositoryUrl(value: string) {
  try {
    const url = new URL(value);
    const pathSegments = url.pathname.split("/").filter(Boolean);

    return (
      url.protocol === "https:" &&
      url.hostname === "github.com" &&
      pathSegments.length === 2
    );
  } catch {
    return false;
  }
}

export default function AnalyzeForm() {
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isGitHubRepositoryUrl(repositoryUrl.trim())) {
      setSubmitted(false);
      setValidationError(
        "Enter a public repository URL like https://github.com/owner/repository.",
      );
      return;
    }

    setValidationError("");
    setSubmitted(true);
  }

  return (
    <section className="mx-auto mt-12 w-full max-w-2xl px-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-surface p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-6"
      >
        <label
          htmlFor="repository-url"
          className="mb-2 block text-left text-sm font-medium text-foreground"
        >
          GitHub repository URL
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="repository-url"
            name="repositoryUrl"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="https://github.com/owner/repository"
            value={repositoryUrl}
            onChange={(event) => {
              setRepositoryUrl(event.target.value);
              setSubmitted(false);
              setValidationError("");
            }}
            aria-invalid={Boolean(validationError)}
            aria-describedby={
              validationError ? "repository-url-error" : "repository-url-help"
            }
            className="h-12 w-full flex-1 rounded-xl border border-border bg-surface-elevated px-4 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-accent aria-[invalid=true]:border-red-400"
          />
          <button
            type="submit"
            className="h-12 shrink-0 rounded-xl bg-accent px-5 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            Analyze Repository
          </button>
        </div>
        {submitted ? (
          <p className="mt-3 text-left text-sm text-muted">
            Analysis is not connected yet. This control is a Milestone 1
            placeholder.
          </p>
        ) : validationError ? (
          <p
            id="repository-url-error"
            role="alert"
            className="mt-3 text-left text-sm text-red-300"
          >
            {validationError}
          </p>
        ) : (
          <p id="repository-url-help" className="mt-3 text-left text-sm text-muted">
            Paste a public GitHub repository URL. Analysis will be added in a
            later milestone.
          </p>
        )}
      </form>
    </section>
  );
}
