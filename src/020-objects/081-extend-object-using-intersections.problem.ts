import { Extends, Expect } from '@total-typescript/helpers';

type IdAndDate = {
  id: string;
  createdAt: Date;
};

type User = IdAndDate & {
  name: string;
  email: string;
};

type Product = IdAndDate & {
  name: string;
  price: number;
};

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
