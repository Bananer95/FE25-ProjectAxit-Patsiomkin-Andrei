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
