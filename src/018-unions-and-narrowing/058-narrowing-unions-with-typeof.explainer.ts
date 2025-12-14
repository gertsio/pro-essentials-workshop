const convertTime = (time: string | number | boolean) => {
  if (typeof time === 'string') {
    console.log(time); // string
  } else if (typeof time == 'boolean') {
    console.log(time);
  } else {
    console.log(time); // number
  }

  console.log(time); // string | number
};
