//boolean
var isFetching = true;
var isLoading = false;
//int
var int = 42;
var float = 4.3;
var num = 3e10;
//string
var message = 'Hello, string';
//array
var numberArray = [1, 2, 3, 4, 5, 6];
var wordsFirst = ['Hello', 'ts'];
//generic
var numberArraySecond = [3, 3, 34, 5];
var wordsSecond = ['hello', 'ts'];
//tuple
var contact = ['Igor', 8901];
//any
var variable = 42;
variable = 'string';
function sayMyName(name) {
    console.log(name);
}
sayMyName('Igor');
//Never
function throwError(message) {
    throw new Error(message);
}
var login = 'Login';
var firstId = '123';
var secondId = 123;
