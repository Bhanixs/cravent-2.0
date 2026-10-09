import { lazy, Suspense } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { work } from "@/content/cravent";
import { Section, Reveal } from "@/components/site/kit";
import { Contact } from "@/components/sections/Contact";

const PortfolioPdfViewer = lazy(() =>
  import("@/components/sections/PortfolioPdfViewer").then((m) => ({
    default: m.PortfolioPdfViewer,
  }))
);

export const Route = createFileRoute("/work_/$slug")({
  head: ({ params }) => {
    const cleanSlug = params.slug.replace(/-bizdev/, "-business-dev");
    const project =
      work.find((p) => p.slug === cleanSlug) ||
      work.find((p) => p.slug.startsWith(cleanSlug.replace(/-branding|-tech|-business-dev|-marketing/, "")));
    const title = project
      ? `${project.name} (${project.domain}) | Cravent Portfolio`
      : "Project | Cravent Portfolio";
    const description = project?.description ?? project?.focus ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const cleanSlug = slug.replace(/-bizdev/, "-business-dev");
  const project =
    work.find((p) => p.slug === cleanSlug) ||
    work.find((p) => p.slug.startsWith(cleanSlug.replace(/-branding|-tech|-business-dev|-marketing/, "")));

  if (!project) {
    return (
      <Section className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <p className="mt-4 text-muted-foreground">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to="/work"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary-bright"
          >
            ← Back to work
          </Link>
        </div>
      </Section>
    );
  }

  const projectIndex = work.indexOf(project);
  const otherDomainVersions = work.filter(
    (p) => p.name.toLowerCase() === project.name.toLowerCase() && p.slug !== project.slug
  );

  return (
    <>
      {/* Project Hero Section */}
      <Section className="relative overflow-hidden pt-40 md:pt-52">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="relative">
          {/* Back Link & Domain Badge */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary-bright"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to {project.domain} Showcase
              </Link>

              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
                {project.domain} Track
              </span>
            </div>
          </Reveal>

          {/* Eyebrow */}
          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">
                Project {String(projectIndex + 1).padStart(2, "0")} / {project.domain}
              </span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.1}>
            <h1 className="mt-4 sm:mt-6 max-w-5xl text-[clamp(2.2rem,7vw,6.5rem)] font-bold uppercase break-words leading-[1.05]">
              {project.name}
            </h1>
          </Reveal>

          {/* Industry Tag & Cross-Domain Switcher */}
          <Reveal delay={0.15}>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-bright">
                {project.industry}
              </p>

              {otherDomainVersions.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 rounded-full border border-border bg-surface/40 px-3 py-1 text-[11px]">
                  <span className="text-muted-foreground">Also available:</span>
                  {otherDomainVersions.map((other) => (
                    <Link
                      key={other.slug}
                      to="/work/$slug"
                      params={{ slug: other.slug }}
                      className="font-mono uppercase tracking-wider text-primary-bright hover:underline"
                    >
                      {other.domain} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Project Brief Section */}
      <Section className="border-t border-border">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left Column: Details */}
          <div className="space-y-8 md:col-span-1">
            <Reveal>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Domain
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
                  {project.domain}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.focus}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Scope
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.scope}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Industry
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.industry}</p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Description */}
          <div className="md:col-span-2">
            <Reveal delay={0.08}>
              <div className="border-l-2 border-primary pl-4 sm:pl-6 md:pl-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
                  About the {project.domain} Scope
                </p>
                <p className="mt-4 text-base leading-[1.8] text-muted-foreground md:text-lg">
                  {project.description ?? project.focus}
                </p>

                {/* Highlights if available */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mt-8 space-y-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-bright">
                      Key Strategic Highlights
                    </p>
                    <ul className="grid gap-2.5 sm:grid-cols-1">
                      {project.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 rounded-lg border border-border/60 bg-surface/30 p-3 text-xs leading-relaxed text-foreground sm:text-sm"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {otherDomainVersions.length > 0 && (
                  <div className="mt-8 rounded-lg border border-border/80 bg-surface/30 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Multi-Discipline Project
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Cravent also orchestrated solutions across other disciplines for {project.name}.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {otherDomainVersions.map((other) => (
                        <Link
                          key={other.slug}
                          to="/work/$slug"
                          params={{ slug: other.slug }}
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-bright hover:underline"
                        >
                          <span>View {other.domain} Track</span>
                          <span>→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* PDF Portfolio Section or Case Study Deep Dive */}
      {project.pdf ? (
        <section className="relative w-full border-t border-border bg-surface/20 py-20 md:py-28 overflow-hidden">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 mb-10 md:mb-14">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-primary" />
                  <span className="eyebrow">{project.domain} Portfolio Showcase</span>
                </div>
                {otherDomainVersions.length > 0 && (
                  <div className="flex items-center gap-2">
                    {otherDomainVersions.map((other) => (
                      <Link
                        key={other.slug}
                        to="/work/$slug"
                        params={{ slug: other.slug }}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary hover:text-primary-bright"
                      >
                        <span>{other.domain} Case</span>
                        <span>→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
          <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-4 md:px-8 lg:px-12">
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center py-24 gap-4 w-full">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Loading portfolio showcase...
                  </p>
                </div>
              }
            >
              <PortfolioPdfViewer
                pdfUrl={encodeURI(project.pdf)}
                projectName={`${project.name} (${project.domain})`}
              />
            </Suspense>
          </div>
        </section>
      ) : (
        <section className="relative w-full border-t border-border bg-surface/10 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <span className="eyebrow">{project.domain} Strategic Engagement</span>
              <h2 className="mt-4 text-2xl font-bold uppercase sm:text-3xl">
                Ready to build a similar {project.domain.toLowerCase()} system?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Discover how Cravent architects bespoke {project.domain.toLowerCase()} strategies tailored to your exact industry and operational velocity.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-[0_0_20px_var(--primary)]"
                >
                  Start a Conversation →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <Contact />
    </>
  );
}
