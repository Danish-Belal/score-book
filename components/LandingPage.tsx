import Navbar from "./NavBar";
import LandingPageContent from "./LandingPageContent";

export default function LandingPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar  />

      {/* Landing Page Content */}
      <main className="mt-16">
        <LandingPageContent />
      </main>
    </>
  );
}
