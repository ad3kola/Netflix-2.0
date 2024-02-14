import { requests } from "@/utils/TMDBRequests"
import fetchFilmsAndTVShows from "@/utils/fetchFilmsAndTVShows"
import Image from 'next/image'

async function FeaturedMovies() {
	const data1 = await fetchFilmsAndTVShows(requests.thriller!)
	const data2 = await fetchFilmsAndTVShows(requests.animation!)
	const data3 = await fetchFilmsAndTVShows(requests.scienceFiction!)
	function generateRandomNumber(): number {
		return Math.floor(Math.random() * 10);
	  }
	const movie1 = data1[generateRandomNumber()]
	const movie2 = data2[generateRandomNumber()]
	const movie3 = data3[generateRandomNumber()]

	const movies = [movie1, movie2, movie3]

	return (
		<section className ='px-3 md:pl-10 mt-3 z-30 md:-mt-20 w-full'>
			<div className ='w-full flex items-center overflow-x-scroll scrollbar-hide space-x-5'>
			{movies?.map((item, indx) => (
				 <div key = {indx} className="flex-shrink-0 relative rounded-lg w-80 h-96 md:h-[450px] overflow-hidden md:w-96 cursor-pointer">
        <Image
          src={
            item?.poster_path
              ? `https://image.tmdb.org/t/p/original/${item?.poster_path}`
              : `https://image.tmdb.org/t/p/original/${item?.backdrop_path}`
          }
          alt="Movie Poster Image"
          fill
          className="object-fit w-full h-full rounded-lg hover:animate-pulse"
        />
</div>
			))}
		</div>
		</section>
	)
}

export default FeaturedMovies