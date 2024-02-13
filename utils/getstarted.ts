import TVImage from "@/public/assets/Enjoy-on-tv-section-image.png";
import DownloadOfflineImage from "@/public/assets/download-offline-section-image.jpg";
import KidShowsImage from "@/public/assets/kids-profile-section-image.png";
import { FAQProps, FooterLinkProps, GetStartedPropsFeatures } from "./typings";


export const getstartedfeatures: GetStartedPropsFeatures[] = [
  {
    h2: "Enjoy on your TV",
    h3: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    img: TVImage,
  },
  {
    h2: "Download your shows to watch offline",
    h3: "Save your favorites easily and always have something to watch.",
    img: DownloadOfflineImage,
  },
  {
    h2: "Watch everywhere",
    h3: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  },
  {
    h2: "Create profiles for kids",
    h3: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    img: KidShowsImage,
  },
];


export const frequentlyaskedquestions: FAQProps[] = [
  {
    question: 'What is Netflix?',
    answer1: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    answer2: "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: 'How much does Netflix cost?',
    answer1: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.',
  },
  {
    question: 'Where can I watch?',
    answer1: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
    answer2: "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: 'How do I cancel?',
    answer1: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer1: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'Is Netflix good for kids?',
    answer1: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
    answer2: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
]

export const footerLinks: FooterLinkProps = [
  'FAQ',
  'Help Center',
  'Account',
  'Media Center',
  'Investor Relations',
  'Jobs',
  'Ways to Watch',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
  'Speed Test',
  'Legal Notices',
  'Only on Netflix',
]