const records = [
  {
    id: 1,
    title: "New Order - Power, Corruption & Lies",
    image:
      "https://images.radiox.co.uk/images/126960?crop=16_9&width=660&relax=1&signature=g2yqzClaA1aiIO1fONiIcd35VN4=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Post-Punk",
    price: 11.99,
    playbtn: "https://open.spotify.com/embed/track/2EEinN4Zk8MUv4OQuLsTBj",
  },
  {
    id: 2,
    title: "The Stone Roses - The Stone Roses",
    image:
      "https://images.radiox.co.uk/images/126961?crop=16_9&width=660&relax=1&signature=X7kT-8JJFLn4WkxoAsGogz2zOF4=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Indie",
    price: 9.99,
    playbtn: "https://open.spotify.com/embed/track/2mv6GY70UsHiTCGQZ4JfgC",
  },
  {
    id: 3,
    title: "Pixies - Doolittle",
    image:
      "https://images.radiox.co.uk/images/126970?crop=16_9&width=660&relax=1&signature=FCHTAX_50aZFGgRlfLDoD7so47s=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Indie",
    price: 13.99,
    playbtn: "https://open.spotify.com/embed/track/6x0cOqPP07gTXusQfK9COQ",
  },
  {
    id: 4,
    title: "Prince - Sign 'O' The Times",
    image:
      "https://images.radiox.co.uk/images/126985?crop=16_9&width=660&relax=1&signature=DFvysDYfLDoEFCeqecAyIBmlLjc=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Funk",
    price: 19.99,
    playbtn: "https://open.spotify.com/embed/track/7lIj3j2o4Diq7EIN50sRVx",
  },
  {
    id: 5,
    title: "U2 - Boy",
    image:
      "https://images.radiox.co.uk/images/126987?crop=16_9&width=660&relax=1&signature=OrRhek6o0Q_S4t7Ng3JOmdLI-Ek=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Post-Punk",
    price: 12.99,
    playbtn: "https://open.spotify.com/embed/track/3OZG87f4TFHCt0t9VStdH0",
  },
  {
    id: 6,
    title: "Bruce Springsteen - Born In The USA",
    image:
      "https://images.radiox.co.uk/images/126994?crop=16_9&width=660&relax=1&signature=PEpUobsNS3cTWtzpj-_u4bQQ7jc=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Classic Rock",
    price: 4.99,
    playbtn: "https://open.spotify.com/embed/track/3PzsbWSQdLCKDLxn7YZfkM",
  },
  {
    id: 7,
    title: "Beastie Boys - Paul's Boutique",
    image:
      "https://images.radiox.co.uk/images/126995?crop=16_9&width=660&relax=1&signature=RJ3B22eBezLQhR9pIcp1Jf5NTpQ=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Hip-Hop",
    price: 15.99,
    playbtn: "https://open.spotify.com/embed/track/6vcf7sA7tsNiIeufH0FUFL",
  },
  {
    id: 8,
    title: "Peter Gabriel - Peter Gabriel III",
    image:
      "https://images.radiox.co.uk/images/126996?crop=16_9&width=660&relax=1&signature=vIhurcvJPX9mp5Ls4MBD1Lx1JFA=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Art-Rock",
    price: 8.99,
    playbtn: "https://open.spotify.com/embed/track/1SXSLvVq87U2DctZDXU5Id",
  },
  {
    id: 9,
    title: "David Bowie - Scary Monsters (And Super Creeps)",
    image:
      "https://images.radiox.co.uk/images/126998?crop=16_9&width=660&relax=1&signature=Z_7B0_GCKb9A5cRu0ynfm1v4AEM=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Art-Rock",
    price: 11.99,
    playbtn: "https://open.spotify.com/embed/track/1raM9iX3HPhZvINoYCSWc9",
  },
  {
    id: 10,
    title: "Talking Heads - Remain In Light",
    image:
      "https://images.radiox.co.uk/images/127000?crop=16_9&width=660&relax=1&signature=QE6EHOJuHbnEMgFRozcct9sFP54=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Post-Punk",
    price: "14.50",
    playbtn: "https://open.spotify.com/embed/track/38Ngied9rBORlAbLYNCl4k",
  },
  {
    id: 11,
    title: "The Cure - Faith",
    image:
      "https://images.radiox.co.uk/images/126999?crop=16_9&width=660&relax=1&signature=MFDIyXSNzKRJ-OTCEi9JFAFy-4s=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Post-Punk",
    price: 25.99,
    playbtn: "https://open.spotify.com/embed/track/7LX29fM6PhiGf5FDvozQm9",
  },
  {
    id: 12,
    title: "The Smiths - The Queen Is Dead",
    image:
      "https://images.radiox.co.uk/images/127009?crop=16_9&width=660&relax=1&signature=KJIaFA3E0sy9iqTh9xWZsNTDT84=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto praesentium ipsum enim.",
    genre: "Indie",
    price: 10.99,
    playbtn: "https://open.spotify.com/embed/track/6s1lXoCa6EmIGnr0GrwcJp",
  },
];

export default records;
