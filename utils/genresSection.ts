import { requests } from "./TMDBRequests";

export const genreRow = [
  {
    title: "Trending Now",
    fetchURL: requests.allMovies!,
  },
  {
    title: "Blockbuster Exciting Comedy Movies",
    fetchURL: requests.comedy!,
  },
  {
    title: "US TV Programmes & Series",
    fetchURL: requests.tvMovie!,
  },
  {
    title: "Children & Family TV",
    fetchURL: requests.animation!,
  },
  {
    title: "Edge of Your Seat Thrillers",
    fetchURL: requests.thriller!,
  },
  {
    title: "Emotionally Charged and Compelling Dramas.",
    fetchURL: requests.drama!,
  },
  {
    title: "Gritty Crime Chronicles",
    fetchURL: requests.crime!,
  },
  {
    title: "Enchanting Love Stories",
    fetchURL: requests.romance!,
  },
  {
    title: "Epic Historical Journeys",
    fetchURL: requests.history!,
  },
  {
    title: "Heartwarming Family Adventures",
    fetchURL: requests.family!,
  },
  {
    title: "Intriguing Realities",
    fetchURL: requests.documentary!,
  },
  {
    title: "Wild West Sagas",
    fetchURL: requests.western!,
  },
  {
    title: "Chilling Horrorscapes",
    fetchURL: requests.horror!,
  },
  {
    title: "Melodic Musings",
    fetchURL: requests.music!,
  },
  {
    title: "Epic War Chronicles",
    fetchURL: requests.war!,
  },
  {
    title: "Futuristic Sci-Fi Worlds",
    fetchURL: requests.scienceFiction!,
  },
  {
    title: "Magical Fantasy Realms",
    fetchURL: requests.fantasy!,
  },
];
