import { createFileRoute, Link } from "@tanstack/react-router";
import { work } from "@/content/cravent";
import { Section, Reveal } from "@/components/site/kit";
import { Contact } from "@/components/sections/Contact";
import { PortfolioPdfViewer } from "@/components/sections/PortfolioPdfViewer";

export const Route = createFileRoute("/work_/$slug")({
  head: ({ params }) => {
    const project = work.find((p) => p.slug === params.slug);
    const title = project
      ? `${project.name} | Cravent Portfolio`
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
  const project = work.find((p) => p.slug === slug);

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

  return (
    <>
      {/* Project Hero Section */}
      <Section className="relative overflow-hidden pt-40 md:pt-52">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="relative">
          {/* Back Link */}
          <Reveal>
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
              Back to work
            </Link>
          </Reveal>

          {/* Eyebrow */}
          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">
                Project {String(projectIndex + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-bold uppercase">
              {project.name}
            </h1>
          </Reveal>

          {/* Industry Tag */}
          <Reveal delay={0.15}>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-bright">
              {project.industry}
            </p>
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
                  Focus
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.focus}</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
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
              <div className="border-l-2 border-primary pl-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
                  About the Project
                </p>
                <p className="mt-4 text-base leading-[1.8] text-muted-foreground md:text-lg">
                  {project.description ?? project.focus}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* PDF Portfolio Section */}
      {project.pdf && (
        <section className="relative w-full border-t border-border bg-surface/20 py-20 md:py-28 overflow-hidden">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 mb-10 md:mb-14">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-primary" />
                <span className="eyebrow">Portfolio Showcase</span>
              </div>
            </Reveal>
          </div>
          <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12">
            <PortfolioPdfViewer pdfUrl={project.pdf} projectName={project.name} />
          </div>
        </section>
      )}

      <Contact />
    </>
  );
}
