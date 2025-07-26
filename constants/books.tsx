type ValidStatus = "to-read" | "reading" | "read";

export const books: {
  title: string;
  author: string;
  rating: number;
  status: ValidStatus;
  image: string;
  description: string;
  coverColor: string;
}[] = [
  {
    title: "Froth on the Daydream",
    author: "Boris Vian",
    rating: 5,
    status: "read",
    description:
      "L'Ecume des jours (Foam of the Daze) is a jazz fueled Science Fiction story that is both romantic and nihilistic! Vian's novel is an assortment of bittersweet romance, absurdity and the frailty of life. Foam of the Daze is a nimble-fingered masterpiece that is both witty and incredibly moving. It is a story of a wealthy young man Colin and the love of his life Chloe, who develops a water lily in her lung.",
    image: "@/public/vian.webp",
    coverColor: "#007ca6",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 5,
    status: "read",
    description:
      "One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable coming-of-age tale in a South poisoned by virulent prejudice, it views a world of great beauty and savage iniquities through the eyes of a young girl, as her father — a crusading local lawyer — risks everything to defend a black man unjustly accused of a terrible crime.",
    image: "@/public/mockingbird.jpg",
    coverColor: "#8f2007",
  },
  {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    rating: 2,
    status: "read",
    description:
      "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.",
    image: "@/public/acotar.jpg",
    coverColor: "#f03a4c",
  },
  {
    title: "Friends, Lovers, and the Big Terrible Thing",
    author: "Matthew Perry",
    rating: 4,
    status: "read",
    description:
      "Friends, Lovers, and the Big Terrible Thing is an unforgettable memoir that is both intimate and eye-opening—as well as a hand extended to anyone struggling with sobriety. Unflinchingly honest, moving, and uproariously funny, this is the book fans have been waiting for.",
    image: "@/public/friends.jpg",
    coverColor: "#4387a8",
  },
  {
    title: "What You Can See from Here",
    author: "Mariana Leky",
    rating: 5,
    status: "read",
    description:
      "Across three defining moments in her life, Luise grapples with life's big questions alongside her devoted friends, young and old. A story about the absurdity of life and death, a bittersweet portrait of village life and the wider world that beckons beyond, it is also a thoughtful meditation on the way loss and love shape not just a person, but a community. Mariana Leky's What You Can See from Here is a charmer—a moving novel of grief, first love, reluctant love, late love, and finding one's place in the world, even if that place is right where you started.",
    image: "@/public/okapi.jpg",
    coverColor: "#f2aaa7",
  },
];
