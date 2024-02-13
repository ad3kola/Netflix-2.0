import MainDisplay from "@/components/MainDisplay";
import MovieGenresSection from "@/components/MovieGenresSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import FeaturedMovies from "@/components/FeaturedMovies";

export default function page() {
  return (
    <main className ='flex flex-col overflow-hidden bg-neutral-950'>
      <Navbar />
      <MainDisplay />
      <FeaturedMovies />
      <MovieGenresSection />
      <Footer />
    </main>
  );
}
