'use client'
import React, { useEffect, useState } from "react";
import fetchFilmsAndTVShows from "@/utils/fetchFilmsAndTVShows";
import { requests } from "@/utils/TMDBRequests";
import Image from "next/image";
import { MovieProps } from "@/utils/typings";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import {Toaster} from 'react-hot-toast'

function MainDisplay() {
   useEffect(() => {
    const getMovies = async () => {
      const data = await fetchFilmsAndTVShows(req);
      const range =
        Math.floor(Math.random() * (data.length - 0 + 1)) +
        0;
      setMovie(data[range]);
    };
    getMovies();
   }, []);
  const [movie, setMovie] = useState<MovieProps | null>(
    null
  );
  const req = requests.allMovies!;
 
  return (
    <section className="z-20 relative w-full h-[500px] md:h-[550px] lg:h-[600px] xl:h-[720px]">
      <Toaster />
      <div className="z-20 absolute top-0 left-0 right-0 bottom-0">
        <Image
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
              : `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
          }
          alt="Movie Poster Image"
          fill
          className="object-cover filter brightness-75"
        />
      </div>
      <div className="flex h-full w-full items-end justify-between px-5 md:px-10 pb-20 md:pb-28 lg:pb-32">
        <div className="flex flex-col z-20 text-gray-100 max-w-sm sm:max-w-md md:max-w-2xl space-y-4">
          <h2
            className="text-4xl/[40px] md:text-5xl/[45px] uppercase"
            style={{ fontFamily: "Arial Black" }}
          >
            {movie?.title || movie?.original_title}
          </h2>
          <h3
            className="text-sm mt-1 md:text-base line-clamp-2 md:line-clamp-3 lg:line-clamp-4 tracking-wide"
            style={{ fontFamily: "Bahnschrift" }}
          >
            {movie?.overview}
          </h3>
          <div className="flex items-center space-x-3">
            <button className="flex hover:scale-105 duration-200 transition-transform ease-in-out items-center px-5 py-2 rounded-md space-x-3 bg-gray-100 text-neutral-950">
              <PlayIcon className="w-6 h-6 mr-2" /> Play
            </button>
            <button className="flex hover:scale-105 duration-200 transition-transform ease-in-out items-center px-4 py-2 rounded-md space-x-3 bg-neutral-700 text-gray-100">
              <InformationCircleIcon className="w-6 h-6 mr-2 " />{" "}
              More Info
            </button>
          </div>
        </div>
        <p className="bg-neutral-800 px-2 py-1 text-xs border-l-4 border-gray-100 text-gray-100 font-medium pr-5">
          {movie?.adult == true ? "16+" : "13+"}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 left-0 w-full h-12 z-30 bg-gradient-to-t from-neutral-950 via-black/50"></div>
    </section>
  );
}

export default MainDisplay;
