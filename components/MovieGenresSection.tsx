import React from "react";
import Row from "./Row";
import { genreRow } from "@/utils/genresSection";

function MovieGenresSection() {
  return (
    <section className="pb-8 mt-5">
      <div className ='flex flex-col space-y-9 px-3 md:pl-10 md:space-y-14 w-full'>
        {genreRow.map((data, indx) => (
          <Row
            key={indx}
            title={data.title}
            fetchURL={data.fetchURL}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieGenresSection;
