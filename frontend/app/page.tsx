import AnalyzeForm from "@/components/AnalyzeForm";
import FocusPoints from "@/components/FocusPoints";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamCredits from "@/components/TeamCredits";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.12),_transparent_60%)]"
      />
      <Header />
      <main className="relative flex flex-1 flex-col items-center justify-center py-16 sm:py-24">
        <Hero />
        <AnalyzeForm />
        <FocusPoints />
        <TeamCredits />
      </main>
      <Footer />
    </div>
  );
}
