import fetchFilmsAndTVShows from "@/utils/fetchFilmsAndTVShows";
import { GenreRowProps, MovieProps } from "@/utils/typings";
import {
  PlusCircleIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import {
  PlayCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

async function Row({ title, fetchURL }: GenreRowProps) {
  const data = await fetchFilmsAndTVShows(fetchURL);
  return (
    <div className="flex relative flex-col w-full">
    <h2 className="text-gray-100 font-semibold tracking-wider text-xs sm:text-sm lg:text-base">
        {title}
      </h2>
      <div className="flex overflow-x-scroll scrollbar-hide items-center space-x-1 mt-3">
        <div className ='absolute top-0 right-0 bottom-0 w-14 h-full bg-gradient-to-l from-neutral-950 z-20'></div>
        {data?.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer duration-200 transition ease-in-out group flex-shrink-0 flex flex-col relative w-[190px] md:w-[260px] h-[210px] bg-neutral-950"
          >
            <div className="absolute w-full h-full rounded-sm overflow-hidden">
              <Image
                src={
                  `https://image.tmdb.org/t/p/original/${movie?.poster_path}` ||
                  `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                }
                alt={movie?.original_title || movie?.title}
                fill
                className="object-fit duration-200 transition transform ease-in rounded-sm group-hover:filter group-hover:brightness-[40%] w-full h-full"
              />
            </div>
            <div className="absolute left-1/2 duration-300 transition group-hover:opacity-1 scale-0 group-hover:scale-100 -translate-x-1/2 top-0 bottom-0 z-20 h-full flex flex-col w-full py-1 pb-5 px-1 md:px-3 text-gray-200 justify-end">
              <div className="flex items-center justify-between pr-2">
                <div className="flex space-x-3 items-center">
                  <PlayCircleIcon className="h-8 w-8 text-gray-100 cursor-pointer" />
                  <PlusCircleIcon className="h-8 w-8 text-gray-100 cursor-pointer" />
                  <div className ='flex flex-col mt-5 items-center'>
                    <HandThumbUpIcon className="h-8 w-8 text-gray-100 cursor-pointer" />
                    <p className ='text-[10px] md:text-sm md:tracking-wide tracking-tight font-normal'>{movie?.vote_count.toLocaleString()}</p>
                    </div>
                </div>
                <div className="rounded-full p-1 border-2 border-gray-100 cursor-pointer">
                  <ChevronDownIcon className="h-5 w-5 text-gray-100" />
                </div>
              </div>
              <h2
                className="text-sm md:text-lg lg:text-xl mt-1 tracking-wider uppercase font-semibold md:font-bold"
                style={{ fontFamily: "Arial Black" }}
              >
                {movie?.original_title || movie?.title}
              </h2>
              <h3
                className="text-[10px] sm:text-xs mt-1 md:text-sm md:tracking-wide tracking-tight font-normal line-clamp-2"
                style={{ fontFamily: "Bahnschrift" }}
              >
                {movie?.overview}
              </h3>
              <h4
                className="text-xs md:text-sm mt-1 md:tracking-wide tracking-tight font-normal"
                style={{ fontFamily: "Bahnschrift" }}
              >
                {movie?.release_date}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
