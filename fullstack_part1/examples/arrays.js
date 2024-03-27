const t = [1, -1, 3]

t.push(5) // adds 5 to the list

const t2 = t.concat(5) // creates new array

console.log(t)
console.log(t2)

console.log(t.length)
console.log(t[1])

t.forEach(value => { // numbers 1, -1, 3, 5 are printed, each on its own line
    console.log(value)
})

const mac = [1,2,3]

const m1 = mac.map(value => value * 2)
console.log(m1)

const m2 = m1.map(value => "<li>" + value + "<li>")
console.log(m2)


// destructuring assignment
const c = [1, 2, 3, 4, 5]
const [first, second, ...rest] = c

console.log(first, second)
console.log(rest)