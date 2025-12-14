import { MAX_PAGE } from './dummy-import-2';

const handlePage = (page: number) => {
  if (page > MAX_PAGE) {
    console.log('Page is too large!');
  }
};

const obj = {
  21: 'alina',
};

// const map = new Map<number, {asdsa: number; sdfsf: number}> {
//   22: {asdsa: 33, sdfsf:4}
// }

const map = new Map<number, { name: string; age: number }>([
  [
    42,
    {
      name: 'Alisa',
      age: 42,
    },
  ],
]);
