console.log('hello')


for ( let i = 0 ; i < 100; i++) {

    const number = i + 1 ;

    if (number % 3 === 0 && number % 5 === 0) {
        console.log(number + 'FizzBuzz');
    } else if (number % 3 === 0) {
        console.log(number + 'Fizz');
    } else if (number % 5 === 0) {
        console.log(number + 'Buzz');
    }

    




}