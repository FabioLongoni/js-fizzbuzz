

const grigliaElement = document.querySelector('.griglia');
console.log(grigliaElement);

for ( let i = 0 ; i < 100; i++) {

    const number = i + 1 ;


    const divElement = document.createElement('div');
    divElement.classList.add('cella');
    console.log(divElement);

    

    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');
        divElement.classList.add('FizzBuzz');
        divElement.append('FizzBuzz');

    } else if (number % 3 === 0) {
        console.log('Fizz');
        divElement.classList.add('Fizz');
        divElement.append('Fizz');

    } else if (number % 5 === 0) {
        console.log('Buzz');
        divElement.classList.add('Buzz');
        divElement.append('Buzz');
        
    } else if (number % 3 !== 0 && number % 5 !== 0) {
        console.log(number);
        divElement.append(number);
    }
    
    grigliaElement.append(divElement);

}       
