import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { log } from 'console';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// interface IUser {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
//   age: number;
// }

// const users: IUser[] = [
//   {
//     id: 7,
//     email: 'michael.lawson@reqres.in',
//     first_name: 'Michael',
//     last_name: 'Lawson',
//     avatar: 'https://reqres.in/img/faces/7-image.jpg',
//     age: 23,
//   },
//   {
//     id: 8,
//     email: 'lindsay.ferguson@reqres.in',
//     first_name: 'Lindsay',
//     last_name: 'Ferguson',
//     avatar: 'https://reqres.in/img/faces/8-image.jpg',
//     age: 20,
//   },
// ];

// console.log(users);

// interface Ifaculty {
//   id: number;
//   faculty: string;
//   subjects: string[];
//   countStudents: number;
// }

// const faculties: Ifaculty[] = [
//   {
//     id: 1,
//     faculty: 'History department',
//     subjects: ['The World History', 'History of Rome'],
//     countStudents: 44,
//   },
//   {
//     id: 2,
//     faculty: 'Department of Biology',
//     subjects: ['biology', 'chemistry'],
//     countStudents: 50,
//   },
//   {
//     id: 3,
//     faculty: 'Faculty of Mathematics',
//     subjects: ['mathematics', 'geometry', 'trigonometry'],
//     countStudents: 72,
//   },
//   {
//     id: 4,
//     faculty: 'Faculty of Design',
//     subjects: ['ui', 'ux', 'graphic design'],
//     countStudents: 37,
//   },
// ];

// interface Imovie {
//   id: number;
//   title: string;
//   year: number;
//   released: string;
//   runtime: string;
//   genre: string[];
//   director: string;
//   writer: string;
//   actors: string[];
//   plot: string;
//   country: string;
//   poster: string;
//   imdbRating: number;
//   imdbVotes: number;
//   type: string;
//   boxOffice: string;
//   production: string;
// }

// const movies: Imovie[] = [
//   {
//     id: 1,
//     title: 'Black Widow',
//     year: 2021,
//     released: '09 Jul 2021',
//     runtime: '134 min',
//     genre: ['Action', 'Sci-Fi', 'Adventure'],
//     director: 'Cate Shortland',
//     writer: 'Eric Pearson, Jac Schaeffer, Ned Benson',
//     actors: ['Scarlett Johansson', 'Florence Pugh', 'David Harbour'],
//     plot: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
//     country: 'United States',
//     poster:
//       'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
//     imdbRating: 6.9,
//     imdbVotes: 121932,
//     type: 'movie',
//     boxOffice: '$138,027,361',
//     production: 'Marvel Studios',
//   },
//   {
//     id: 2,
//     title: 'Harry Potter and the Deathly Hallows: Part 2',
//     year: 2011,
//     released: '15 Jul 2011',
//     runtime: '130 min',
//     genre: ['Adventure', 'Drama', 'Fantasy'],
//     director: 'David Yates',
//     writer: 'Steve Kloves, J.K. Rowling',
//     actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
//     plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
//     country: 'United Kingdom, United States',
//     poster:
//       'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',

//     imdbRating: 8.1,
//     imdbVotes: 790377,
//     type: 'movie',
//     boxOffice: '$381,409,310',
//     production: 'Heyday Films, Moving Picture Company, Warner Bros.',
//   },
// ];

// console.log(movies);
// console.log(faculties);

// interface IObj {
//   name: string;
//   age: number;
//   isMarried: boolean | string;
// }

// const obj: IObj[] = [
//   {
//     name: 'Petr',
//     age: 25,
//     isMarried: true,
//   },
//   {
//     name: 'Elena',
//     age: 25,
//     isMarried: 'Married',
//   },
// ];

// // console.log(obj);

// interface ICountry {
//   country: string;
//   abbreviation: string;
//   city: string;
//   currency_name: string;
//   population: number;
// }

// const countries: Array<ICountry> = [
//   {
//     country: 'United Arab Emirates',
//     abbreviation: 'AE',
//     city: 'Abu Dhabi',
//     currency_name: 'Arab Emirates Dirham',
//     population: 9630959,
//   },
//   {
//     country: 'Poland',
//     abbreviation: 'PL',
//     city: 'Warszawa',
//     currency_name: 'Polish Zloty',
//     population: 37974750,
//   },
//   {
//     country: 'Russian Federation',
//     abbreviation: 'RU',
//     city: 'Moscow',
//     currency_name: 'Russian Ruble',
//     population: 144478050,
//   },
// ];

// const corrency = countries.map((country) => country.currency_name);

// const citie = countries
//   .map((country) => country.city)
//   .sort((a: any, b: any) => a - b);

// console.log(citie);
// console.log(corrency);

// interface IUser {
//   name: string;
//   phone: string;
//   email: string;
//   animals?: string[];
//   cars?: string[];
//   hasChildren: boolean;
//   hasEducation: boolean;
// }

// const users: Array<IUser> = [
//   {
//     name: 'Harry Felton',
//     phone: '(09) 897 33 33',
//     email: 'felton@gmail.com',
//     animals: ['cat'],
//     cars: ['bmw'],
//     hasChildren: false,
//     hasEducation: true,
//   },
//   {
//     name: 'May Sender',
//     phone: '(09) 117 33 33',
//     email: 'sender22@gmail.com',
//     hasChildren: true,
//     hasEducation: true,
//   },
//   {
//     name: 'Henry Ford',
//     phone: '(09) 999 93 23',
//     email: 'ford0@gmail.com',
//     cars: ['bmw', 'audi'],
//     hasChildren: true,
//     hasEducation: false,
//   },
// ];

// const sumCars: number = users
//   .map((users: IUser): number => {
//     return users?.cars.length;
//   })
//   .reduce((acc: number, leng: number | undefined): number => {
//     if (leng === undefined) {
//       leng = 0;
//     }
//     return ((acc as number) += leng as number);
//   }, 0);

// console.log(sumCars);

// 1.Получить строку с именами и фамилиями всех пользователей через запятую.
// 2. Создать массив из emails по алфавиту.
// 3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле, отвечающее за имя пользователя(например username), которое должно содержать имя и фамилию.
// 4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.
// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18
// 6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте. Пример того, что надо получить, когда пользователи имеют следующие фамилии Snow, Felton , Ford, Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand']}

//  Классная работа урока 36

// interface IUser {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
//   age: number;
// }

// const users: Array<IUser> = [
//   {
//     id: 7,
//     email: 'michael.lawson@reqres.in',
//     first_name: 'Michael',
//     last_name: 'Lawson',
//     avatar: 'https://reqres.in/img/faces/7-image.jpg',
//     age: 23,
//   },
//   {
//     id: 8,
//     email: 'lindsay.ferguson@reqres.in',
//     first_name: 'Lindsay',
//     last_name: 'Ferguson',
//     avatar: 'https://reqres.in/img/faces/8-image.jpg',
//     age: 20,
//   },
//   {
//     id: 9,
//     email: 'tobias.funke@reqres.in',
//     first_name: 'Tobias',
//     last_name: 'Funke',
//     avatar: 'https://reqres.in/img/faces/9-image.jpg',
//     age: 40,
//   },
//   {
//     id: 10,
//     email: 'byron.fields@reqres.in',
//     first_name: 'Byron',
//     last_name: 'Fields',
//     avatar: 'https://reqres.in/img/faces/10-image.jpg',
//     age: 36,
//   },
//   {
//     id: 11,
//     email: 'george.edwards@reqres.in',
//     first_name: 'George',
//     last_name: 'Edwards',
//     avatar: 'https://reqres.in/img/faces/11-image.jpg',
//     age: 70,
//   },
//   {
//     id: 12,
//     email: 'rachel.howell@reqres.in',
//     first_name: 'Rachel',
//     last_name: 'Howell',
//     avatar: 'https://reqres.in/img/faces/12-image.jpg',
//     age: 45,
//   },
// ];

// // Получить строку с именами и фамилиями всех пользователей через запятую.

// const getNameInLine = (users: Array<IUser>) =>
//   users.map((user: IUser) => `${user.first_name} ${user.last_name}`);

// // 2. Создать массив из emails по алфавиту.

// const sortEmail = (users: Array<IUser>) =>
//   users
//     .map((user: IUser) => user.email)
//     .sort((a: string, b: string) => a.localeCompare(b));

// console.log(sortEmail(users));
// console.log(users);

// // 3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле, отвечающее за имя пользователя(например username), которое должно содержать имя и фамилию.

// const getUserId = (users: Array<IUser>) => {
//   return users.map((users) => {
//     return {
//       id: users.id,
//       fullName: `${users.first_name} ${users.last_name}`,
//     };
//   });
// };

// console.log(getUserId(users));

// //  В одну строчкку превратить этот  обект

// // 4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.

// const sortUsersByAge = (users: Array<IUser>) => {
//   const filteretUsers = users.filter((users) => users.age <= 40);
//   const sortedUsers = filteretUsers.sort(function compare(a, b) {
//     if (a.age < b.age) {
//       return -1;
//     }
//     if (a.age > b.age) {
//       return 1;
//     }
//     return 0;
//   });
//   return sortedUsers;
// };

// console.log(sortUsersByAge(users));

// // 5. Получить объект, где были бы
// // a) данные о среднем возрасте пользователей b) количество пользователей старше 30
// // c) количество пользователей старше 40
// // d) количество пользователей старше 18

// const getfilteredUsers = (age: number) =>
//   users.filter((user) => user.age > age);

// interface ICreateObj {
//   a: number[];
//   b: IUser[];
//   c: IUser[];
//   d: IUser[];
// }

// const createObj = (users: Array<IUser>) => {
//   const averageAge =
//     users.reduce((acc, user) => acc + user.age, 0) / users.length;

//   return {
//     a: averageAge,
//     b: getfilteredUsers(30),
//     c: getfilteredUsers(40),
//     d: getfilteredUsers(18),
//   };
// };

// console.log(createObj(users));

interface IMovie {
  id: number;
  title: string;
  year: number;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string;
  actors: string[];
  plot: string;
  country: string;
  poster: string;
  imdbRating: number;
  imdbVotes: number;
  type?: string;
  boxOffice: string;
  production: string;
}

const movies: Array<IMovie> = [
  {
    id: 1,
    title: 'Black Widow',
    year: 2021,
    released: '09 Jul 2021',
    runtime: '134 min',
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    director: 'Cate Shortland',
    writer: 'Eric Pearson, Jac Schaeffer, Ned Benson',
    actors: ['Scarlett Johansson', 'Florence Pugh', 'David Harbour'],
    plot: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
    country: 'United States',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: 'movie',
    boxOffice: '$138,027,361',
    production: 'Marvel Studios',
  },
  {
    id: 2,
    title: 'Harry Potter and the Deathly Hallows: Part 2',
    year: 2011,
    released: '15 Jul 2011',
    runtime: '130 min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    director: 'David Yates',
    writer: 'Steve Kloves, J.K. Rowling',
    actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    country: 'United Kingdom, United States',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: 'movie',
    boxOffice: '$381,409,310',
    production: 'Heyday Films, Moving Picture Company, Warner Bros.',
  },
  {
    id: 3,
    title: 'Star Wars',
    year: 1977,
    released: '25 May 1977',
    runtime: '121 min',
    genre: ['Action', 'Adventure', 'Fantasy'],
    director: 'George Lucas',
    writer: 'George Lucas',
    actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
    country: 'United States, United Kingdom',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: 'movie',
    boxOffice: '$460,998,507',
    production: 'Lucasfilm Ltd.',
  },
  {
    id: 4,
    title: 'Harry Potter and the Half-Blood Prince',
    year: 2009,
    released: '15 Jul 2009',
    runtime: '153 min',
    genre: ['Action', 'Adventure', 'Family'],
    director: 'David Yates',
    writer: 'Steve Kloves, J.K. Rowling',
    actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
    country: 'United Kingdom',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
    imdbRating: 7.6,
    imdbVotes: 492245,
    boxOffice: '$302,305,431',
    production: 'Heyday Films, Warner Bros.',
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: '16 Nov 2001',
    runtime: '152 min',
    genre: ['Adventure', 'Family', 'Fantasy'],
    director: 'Chris Columbus',
    writer: 'J.K. Rowling, Steve Kloves',
    actors: ['Daniel Radcliffe', 'Rupert Grint', 'Richard Harris'],
    plot: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
    country: 'United Kingdom, United States',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
    imdbRating: 7.6,
    imdbVotes: 684604,
    boxOffice: '$318,087,620',
    production: '1492 Pictures, Heyday Films, Warner Brothers',
  },
];

// Собрать в массив все жанры фильмов(без повторения)
//  task 1
const genreArray = (movies: Array<IMovie>) => {
  const arrGenre = movies.map((movie: IMovie) => {
    return movie['genre'];
  });
  const oneArrayfGenre = new Set(
    arrGenre.reduce((acc: string[], array: string[]) => {
      return (acc = acc.concat(array));
    }, [])
  );
  return Array.from(oneArrayfGenre);
};

console.log(genreArray(movies));
//  task 2
const actorsArray = (movies: Array<IMovie>) => {
  const arrActors = movies.map((movie: IMovie) => {
    return movie['actors'];
  });
  const oneArrayActors = new Set(
    arrActors.reduce((acc: string[], array: string[]) => {
      return (acc = acc.concat(array));
    }, [])
  );
  return Array.from(oneArrayActors);
};

console.log(actorsArray(movies));
// task 3

const sortMovies = (movies: Array<IMovie>) => {
  const moviesArray = movies.map((movie: IMovie) => {
    const someArray = [];
    someArray[0] = movie.title;
    someArray[1] = movie.imdbRating;
    return someArray;
  });
  const sortMovies = moviesArray.sort(
    (a: (string | number)[], b: (string | number)[]) => {
      return Number(b[1]) - Number(a[1]);
    }
  );
  return sortMovies;
};

console.log(sortMovies(movies));

//  task 4
const newArray = (movies: Array<IMovie>) => {
  const newArray = movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      released: movie.released,
      plot: movie.plot,
    };
  });
  return newArray;
};

console.log(newArray(movies));
//   Task 5
const movieOnYears = (movies: Array<IMovie>, b: number) => {
  const requiredArray = movies.map((movie: IMovie) => {
    if (b === movie.year) {
      return movie;
    }
  });
  const returnArray = requiredArray.filter((element) => {
    return element != null;
  });

  return returnArray;
};
console.log(movieOnYears(movies, 1977));

// task 6
const movieOnNames = (movies: Array<IMovie>, b: string) => {
  const requiredArray = movies.map((movie: IMovie) => {
    console.log(movie.title.indexOf(b));
    if (movie.title.indexOf(b) >= 0) {
      return movie;
    }
  });
  const filterArray = requiredArray.filter((e) => e !== undefined);
  return filterArray;
};

console.log(movieOnNames(movies, 'Harry'));

//  task 7

const movieOnNamesAndPlot = (movies: Array<IMovie>, b: string) => {
  const requiredArray = movies.map((movie: IMovie) => {
    if (movie.title.indexOf(b) >= 0) {
      return movie;
    } else if (movie.plot.indexOf(b) >= 0) {
      return movie;
    }
  });

  const filterArray = requiredArray.filter((e) => e !== undefined);
  return filterArray;
};

console.log(movieOnNamesAndPlot(movies, 'battle'));
// Task
const arrayWhatWeNeed = (
  movies: Array<IMovie>,
  b: string,
  c: string | number
) => {
  const requiredArray = movies.map((movie: IMovie) => {
    if (movie.hasOwnProperty(b)) {
      if (movie.title.indexOf(b) >= 0) {
        return movie;
      }
    }
  });
  return requiredArray;
};

//   // const requiredArray = movies.map((movie) => {
//   //   if (movie.b.indexOf(c)) {
//   //     return movie;
//   //   }
//   });

console.log(arrayWhatWeNeed(movies, 'title', 'Black Widow'));
