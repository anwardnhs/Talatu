import { NotFoundContent } from "@/components/feedback/NotFoundContent";

export default function ProgrammeNotFound() {
  return <main id="main-content" tabIndex={-1} className="error-page-shell"><NotFoundContent title="Programme not found." href="/foundation" label="Explore the Foundation" /></main>;
}
