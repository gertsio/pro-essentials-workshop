type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({ foo: 'string', bar: 45, baz: true });

document.addEventListener(
  // Autocomplete this string!
  'submit',
  (event) => {
    console.log(event);
  }
);
