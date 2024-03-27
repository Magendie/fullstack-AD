const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
    greet: function()  {
        console.log("hello, my name is " + this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    },
}
arto.greet()
// can be added after the creation of the object
arto.growOlder = function() {
    this.age += 1
}
console.log(arto.age)
arto.growOlder()
console.log(arto.age)


arto.doAddition(1, 4)

const referenceToAddition = arto.doAddition
referenceToAddition(10, 20)

// this is now lost
setTimeout(arto.greet,1000)
// to avoid it, we can use 
setTimeout(arto.greet.bind(arto))