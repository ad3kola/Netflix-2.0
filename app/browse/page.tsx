'use client'
import MainDisplay from "@/components/MainDisplay";
import MovieGenresSection from "@/components/MovieGenresSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import FeaturedMovies from "@/components/FeaturedMovies";
import { useEffect } from "react";
import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import GetStarted from "@/components/GetStarted";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function page() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector(
    (state) => state.user.value.userData
  );
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (userExists) => {
      if (!userExists) {
        router.push("/");
      }
    });
  }, [dispatch]);
  return (
    <>
      {!user ? (
        <GetStarted />
      ) : (
        <main className="flex flex-col overflow-hidden bg-neutral-950">
          <Navbar />
          <MainDisplay />
          <FeaturedMovies />
          <MovieGenresSection />
          <Footer />
        </main>
      )}
    </>
  );
}
