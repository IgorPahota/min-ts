//boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

//int
const int: number = 42;
const float: number = 4.3;
const num: number = 3e10;

//string
const message: string = 'Hello, string';

//array
const numberArray: number[] = [1,2,3,4,5,6];
const wordsFirst: string[] = ['Hello', 'ts'];

//generic
const numberArraySecond: Array<number> = [3,3,34,5];
const wordsSecond: Array<string> = ['hello', 'ts'];

//tuple
const contact: [string, number] = ['Igor', 8901];

//any
let variable: any = 42;
variable = 'string';

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Igor');

//Never
function throwError (message: string): never {
            throw new Error(message)
}

//Type

type Login = string;

const login: Login = 'Login';

type ID = string | number;
const firstId: ID = '123';
const secondId: ID = 123;

type SomeType = string | null | undefined





