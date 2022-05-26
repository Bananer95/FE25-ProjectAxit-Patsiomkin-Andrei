import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

interface IUser {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: Array<IUser> = [
  {
    name: 'Harry Felton',
    phone: '(09) 897 33 33',
    email: 'felton@gmail.com',
    animals: ['cat'],
    cars: ['bmw'],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: 'May Sender',
    phone: '(09) 117 33 33',
    email: 'sender22@gmail.com',
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: 'Henry Ford',
    phone: '(09) 999 93 23',
    email: 'ford0@gmail.com',
    cars: ['bmw', 'audi'],
    hasChildren: true,
    hasEducation: false,
  },
];

// Task 1

const stringFromName: string = users
  .map((users: IUser): string => {
    return users.name;
  })
  .join(',');

// Task  2

const sumCars: any = users
  .map((users: IUser): number | undefined => {
    return users.cars?.length;
  })
  .reduce((acc: number | undefined, leng: number | undefined): number => {
    if (leng === undefined) {
      leng = 0;
    }
    return ((acc as number) += leng as number);
  }, 0);

// Task 3

const sortArray = (arr: Array<IUser>): IUser[] => {
  const secondArrayUsers = arr.sort((a: IUser, b: IUser) => {
    return Number(b['hasEducation']) - Number(a['hasEducation']);
  });
  return secondArrayUsers;
};

//  Task 4

const sortArrayByAnimals = (arr: Array<IUser>): IUser[] => {
  const firstArrayByAnimals = arr.sort((a: IUser, b: IUser) => {
    return (
      Number(a.hasOwnProperty('animals')) - Number(b.hasOwnProperty('animals'))
    );
  });
  return firstArrayByAnimals;
};

// с животным внизу, так как, изначально юзер с котом  идет первым

// Task 5

const stringAuto = (arr: any) => {
  const newArray = arr
    .map((users: IUser) => {
      return users.cars;
    })
    .join(',');
  return newArray.replace(/,+/g, ',');
};

console.log(stringAuto(users));
