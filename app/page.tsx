import Features from "@/components/shared/Home/Features";
import Footer from "@/components/shared/Home/Footer";
import HomeMain from "@/components/shared/Home/Main";
import HomeNavbar from "@/components/shared/Home/Navbar";
import Team from "@/components/shared/Home/Team";

export default function Home() {
  return (
    <main className="flex scroll-smooth flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto justify-center">
      <HomeNavbar />
      <HomeMain />
      <Features />
      <Team />
      <Footer />
    </main>
  );
}
