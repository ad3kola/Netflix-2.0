import { MovieProps } from "./typings";

async function fetchFilmsAndTVShows(genre: string): Promise<MovieProps[]> {
    const req = await fetch(genre);
    const res = await req.json();
    return res.results;
}

export default fetchFilmsAndTVShows;
