export const actors = {
  j1: {
    id: 'j1',
    name: 'Sean Connery',
    movies: [],
    img: `https://m.media-amazon.com/images/M/MV5BZTNmMmFiZTgtZWQ1OC00ZTExLWI5NTgtYjVkMzhhNzE1ZDhiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg`,
  },
  j2: {
    id: 'j2',
    name: 'George Lazenby',
    movies: [],
    img: `https://m.media-amazon.com/images/M/MV5BMGI4YTY3NzItNzQ0Mi00OTU2LWJlYTItYzkzMGFiYTcwNjExXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg`,
  },
  j3: {
    id: 'j3',
    name: 'Roger Moore',
    movies: [],
    img: `https://m.media-amazon.com/images/M/MV5BZDRjN2Y5NmEtNDkzMC00Njk3LWJiMmUtNDlhMWFiYmE5MTg0XkEyXkFqcGdeQXVyMTI3MDk3MzQ@._V1_.jpg`,
  },
  j4: {
    id: 'j4',
    name: 'Timothy Dalton',
    movies: [],
    img: `https://m.media-amazon.com/images/M/MV5BM2UzMjRjYzctZDZjZi00ZmJlLThlYTYtN2I4MjE2MTI3YTVhXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX1777_CR0,0,1777,752_AL_.jpg`,
  },
  j5: {
    id: 'j5',
    name: 'Pierce Brosnan',
    movies: [],
    img: `https://m.media-amazon.com/images/M/MV5BMDJhMWExODYtYzU2OC00NzExLThmMzUtMDcxNjY2MDRlZWM3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg`,
  },
  j6: {
    id: 'j6',
    name: 'Daniel Craig',
    movies: [],
    img: `https://m.media-amazon.com/images/M/MV5BNTU0YTk1ZjMtOWQ3NC00MmFmLTgwMGMtZWY0ZjU5OTA1NGQzXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_SX1777_CR0,0,1777,740_AL_.jpg`,
  },
}

export const movies = [
  {
    id: 'j1_1',
    title: 'Dr. No',
    year: 1962,
    bond: 'j1',
    number: 1,
    img: `https://m.media-amazon.com/images/M/MV5BMTk4YzdjOTgtNjM4NS00YjljLThhM2QtYTI3OTQ0OGVhNTMxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    review: `Dr. No. The 1961 film catapulted Ian Fleming’s James Bond into stratosphere and taking Sean Connery for the ride. The stars aligned with director, script, leading lady, locations, action and Monty Norman brilliant Bond theme. As good as the film is gets extra credit for being the first.`,
    rating: 4,
    Blofeld: false,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BOTU3NzExMTQ4N15BMl5BanBnXkFtZTcwMjkzNzQzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`
  },
  {
    id: 'j1_2',
    title: 'From Russia with Love',
    year: 1963,
    bond: 'j1',
    number: 2,
    img: `https://m.media-amazon.com/images/M/MV5BMTQxNTIzMTExN15BMl5BanBnXkFtZTcwODI4MDgzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    review: `Not bad for a second outing that keeps the sense of adventure and wonder going. We get our first look at fan favourite Desmond Llewelyn as Q, who goes on to appear in more Bond films than any other actor. The film starts to bring out the wacky stereotypes like the Russian henchwoman who talks in a harsh German ascent and slaps her horse whip to emphasis her willingness to kill for minor infractions. The biggest flaw of the film is the overuse of the Bond theme. Even simple tasks such as checking out his hotel room gets the full orchestra.`,
    rating: 3,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTQxNTIzMTExN15BMl5BanBnXkFtZTcwODI4MDgzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
    Blofeld: `Anthony Dawson`
  },
  {
    id: 'j1_3',
    title: 'Goldfinger',
    year: 1964,
    bond: 'j1',
    number: 3,
    img: `https://m.media-amazon.com/images/M/MV5BMTQ2MzE0OTU3NV5BMl5BanBnXkFtZTcwNjQxNTgzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTQ2MzE0OTU3NV5BMl5BanBnXkFtZTcwNjQxNTgzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j1_4',
    title: 'Thunderball',
    year: 1965,
    bond: 'j1',
    number: 4,
    img: `https://m.media-amazon.com/images/M/MV5BZGNhYjM3ZmQtMTRlZS00YmZiLWFhYjktYWE3ZTk0MGY0MTIwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTY1Mjc2MTYxNV5BMl5BanBnXkFtZTcwNzUzMzY3NA@@._V1_SY1000_CR0,0,661,1000_AL_.jpg`,
  },
  {
    id: 'j1_5',
    title: 'You Only Live Twice',
    year: 1967,
    bond: 'j1',
    number: 5,
    img: `https://m.media-amazon.com/images/M/MV5BZWU0MzNlZTUtNGIxYi00NzFiLWJkOTMtMzRlYmQxN2RlZmZjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTk4NTU2Mzk1OV5BMl5BanBnXkFtZTcwMzY5MDg0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },

  {
    id: 'j2_1',
    title: "On Her Majesty's Secret Service",
    year: 1969,
    bond: 'j2',
    number: 6,
    img: `https://m.media-amazon.com/images/M/MV5BMTc0NDYzMjgyNV5BMl5BanBnXkFtZTcwMjgyMzY0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTc0NDYzMjgyNV5BMl5BanBnXkFtZTcwMjgyMzY0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
    rating: 4,
    Blofeld: `Telly Savalas`
  },
  {
    id: 'j1_6',
    title: `Diamonds Are Forever`,
    year: 1971,
    bond: 'j1',
    number: 7,
    img: `https://m.media-amazon.com/images/M/MV5BMTM0MDI2MzYzOF5BMl5BanBnXkFtZTcwNDY4NTMzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTM0MDI2MzYzOF5BMl5BanBnXkFtZTcwNDY4NTMzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j3_1',
    title: 'Live and Let Die',
    year: 1973,
    bond: 'j3',
    number: 8,
    img: `https://m.media-amazon.com/images/M/MV5BMzY0M2MzODYtZDU5Yy00YTg2LWJmMGQtNmY1OWZiYjlmNzY0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMjI2NTY5MTYzMl5BMl5BanBnXkFtZTcwNzY5MDg0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j3_2',
    title: `The Man with the Golden Gun`,
    year: 1974,
    bond: 'j3',
    number: 9,
    img: `https://m.media-amazon.com/images/M/MV5BYjY3YmM1MTItMWE0NC00NjFmLWFkMDgtMWFiZjY5NzQyZGVjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BODg3NjQ0MjMwN15BMl5BanBnXkFtZTcwNTY5MDg0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j3_3',
    title: `The Spy Who Loved Me`,
    year: 1977,
    bond: 'j3',
    number: 10,
    img: `https://m.media-amazon.com/images/M/MV5BNDk3ODM2NDgtMGE3Ni00ZGVhLTk2ZTctN2JkMDVkMmRhNDQ5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMjI1MTA5NDE1NF5BMl5BanBnXkFtZTcwMDIzMzY0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j3_4',
    title: `Moonraker`,
    year: 1979,
    bond: 'j3',
    number: 11,
    img: `https://m.media-amazon.com/images/M/MV5BMjQyMjUyNzY4MF5BMl5BanBnXkFtZTcwNzIyMzY0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMjQyMjUyNzY4MF5BMl5BanBnXkFtZTcwNzIyMzY0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j3_5',
    title: 'For Your Eyes Only',
    year: 1981,
    bond: 'j3',
    number: 12,
    img: `https://m.media-amazon.com/images/M/MV5BOTNmMmUwNDctNjQ1OC00NzAwLThkM2QtN2MzOWE0OWU1MmJiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BOTEwNzY5OTgyNl5BMl5BanBnXkFtZTcwMDAxNzczNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j3_6',
    title: `Octopussy`,
    year: 1983,
    bond: 'j3',
    number: 13,
    img: `https://m.media-amazon.com/images/M/MV5BMjI2MDE0NjE1NV5BMl5BanBnXkFtZTcwNjYyMzY0NA@@._V1.._UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMjI2MDE0NjE1NV5BMl5BanBnXkFtZTcwNjYyMzY0NA@@._V1.._SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j1_7',
    title: `Never Say Never Again`,
    year: 1983,
    bond: 'j1',
    number: 14,
    img: `https://m.media-amazon.com/images/M/MV5BMTM1NjgzMDkwOF5BMl5BanBnXkFtZTcwMzM4NzI0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTM1NjgzMDkwOF5BMl5BanBnXkFtZTcwMzM4NzI0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j3_7',
    title: `A View to a Kill`,
    year: 1987,
    bond: 'j3',
    number: 15,
    img: `https://m.media-amazon.com/images/M/MV5BMTZjNzJhOWYtMjZiNS00NmU2LTllYjAtOTAzMDk1NTI0ZTFkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTMwMTYzOTIwM15BMl5BanBnXkFtZTcwODY5MDg0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },

  {
    id: 'j4_1',
    title: `The Living Daylights`,
    year: 1987,
    bond: 'j3',
    number: 16,
    img: `https://m.media-amazon.com/images/M/MV5BZjI4MjBmYzItYTY5OC00OWYzLWE0NWYtZDQxNDQxM2QzYjA4XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BOTg2MDUzNDIxMV5BMl5BanBnXkFtZTcwNjY5MDg0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j4_2',
    title: `Licence to Kill`,
    year: 1989,
    bond: 'j4',
    number: 17,
    img: `https://m.media-amazon.com/images/M/MV5BODY3M2I0NGItYzJhNy00M2NiLThhMDgtNjZkNjA1NTQzMDM4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTY0NDE2MTAzN15BMl5BanBnXkFtZTcwMjY5MDg0NA@@._V1._CR21,14,639,990_.jpg`,
  },
  {
    id: 'j5_1',
    title: `GoldenEye`,
    year: 1995,
    bond: 'j5',
    number: 18,
    img: `https://m.media-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j5_2',
    title: `Tomorrow Never Dies`,
    year: 1997,
    bond: 'j5',
    number: 19,
    img: `https://m.media-amazon.com/images/M/MV5BMTM1MTk2ODQxNV5BMl5BanBnXkFtZTcwOTY5MDg0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMTM1MTk2ODQxNV5BMl5BanBnXkFtZTcwOTY5MDg0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j5_3',
    title: `The World Is Not Enough`,
    year: 1999,
    bond: 'j5',
    number: 20,
    img: `https://m.media-amazon.com/images/M/MV5BMjA0MzUyNjg0MV5BMl5BanBnXkFtZTcwNDY5MDg0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMjA0MzUyNjg0MV5BMl5BanBnXkFtZTcwNDY5MDg0NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
  },
  {
    id: 'j5_4',
    title: `Die Another Day`,
    year: 2002,
    bond: 'j5',
    number: 21,
    img: `https://m.media-amazon.com/images/M/MV5BODNkYmIwYTMtYzdhNy00YWE3LThkYmEtNzA5ZTE5YmVjYzZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BODNkYmIwYTMtYzdhNy00YWE3LThkYmEtNzA5ZTE5YmVjYzZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX668_AL_.jpg`,
  },
  {
    id: 'j6_1',
    title: `Casino Royale`,
    year: 2006,
    bond: 'j6',
    number: 22,
    img: `https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BM2QzN2I4OWEtNWRkMC00NWZhLTlmNmYtODEwOTY2MDA2YjMzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg`,
  },
  {
    id: 'j6_2',
    title: `Quantum of Solace`,
    year: 2008,
    bond: 'j6',
    number: 23,
    img: `https://m.media-amazon.com/images/M/MV5BMjZiYTUzMzktZWI5Yy00Mzk4LWFlMDgtYjRmNWU0Mzc0MzNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BMjZiYTUzMzktZWI5Yy00Mzk4LWFlMDgtYjRmNWU0Mzc0MzNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SY1000_CR0,0,672,1000_AL_.jpg`,
  },
  {
    id: 'j6_3',
    title: `Skyfall`,
    year: 2012,
    bond: 'j6',
    number: 24,
    img: `https://m.media-amazon.com/images/M/MV5BNDVhZmJiYWMtNmIzMC00ZWNiLTkzZDYtNGNlZmViMGM4OGExXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BZGUzYjA3Y2ItZTMxYi00NDE2LTkxY2UtMDdhYTU2NjVkNWYwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,700,1000_AL_.jpg`,
  },
  {
    id: 'j6_4',
    title: `Spectre`,
    year: 2015,
    bond: 'j6',
    number: 25,
    img: `https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg`,
    imgLarge: `https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg`,
  },
]
