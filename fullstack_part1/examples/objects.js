const object1 = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
}

const object2 = {
    name: "Full Stack web application development",
    level: "intermediate studies",
    size: 5,
}

const object3 = {
    name: {
        first: "Geralt",
        last: "Of Rivia",
    },
    grades: [2, 3, 5, 3],
    department: "Stanford University",
}

console.log(object1.name)

const fieldName = "age"
console.log(object1[fieldName])
console.log(object1.age)

// adding properties to the objects
object1.adress = 'Helsinki'
object1["secret number"] = 12341

