import { Equal, Expect } from '@total-typescript/helpers';

type RedirectionResponse = '301' | '302' | '304';
type ClientErrorResponse = '400' | '401' | '404';
type ServerErrorResponse = '500';
type SuccessResponse = '200' | '201' | '204';

type HttpCode =
  | RedirectionResponse
  | ClientErrorResponse
  | ServerErrorResponse
  | SuccessResponse;

const handleErrorCase = (code: ClientErrorResponse | ServerErrorResponse) => {
  // An imaginary function where we only handle the errors

  type test = Expect<Equal<typeof code, '400' | '401' | '404' | '500'>>;
};
const handleSuccessCase = (code: SuccessResponse) => {
  // An imaginary function where we only handle the success cases

  type test = Expect<Equal<typeof code, '200' | '201' | '204'>>;
};

const handleAllCase = (code: HttpCode) => {
  // An imaginary function where we handle all the cases

  type test = Expect<Equal<typeof code, '304'>>;
};
