const sum = (p1, p2)=> {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)


const square = p => {
    console.log(p)
    return p * p
}
const result2 = square(4)
console.log(result2)

//for a single expr. {} are not needed
const square2 = p => p * p


//func for mapping
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
console.log( "this is squared t",tSquared)

//function expression
const averege = function (a, b) {
    return (a + b)/ 2
}
const result3 = averege(2,5)
console.log(result3)