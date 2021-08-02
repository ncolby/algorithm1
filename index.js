// from 1 to 100, return fizz for numbers that are divisible of 3,
// return buzz for numbers that are divisible of 5
// return fizzbuzz for numbers that are divisible by 3 & 5
// otherwise, just return the number
// Sample output from 1 to 10: 
// 1 
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz



function fizzBuzz() {
    for(let i = 0; i <= 100; i++) {
        let div3 = i / 3
        let div5 = i / 5
        if(Math.floor(i / 3) === div3 && Math.floor(i / 5) === div5) {
            console.log('fizzbuzz')
        } else if(Math.floor(i / 3) === div3 && Math.floor(i / 5) !== div5) {
            console.log('fizz')
        } else if(Math.floor(i / 3) !== div3 && Math.floor(i / 5) === div5) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()