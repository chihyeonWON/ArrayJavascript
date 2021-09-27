var a = [1,2,3,4,5];
var b = a.map(function(x) {
    return 2*x;
});

// b = [2,4,6,8,10]

var a = [1,4,9,16,25];
var b = a.map(Math.sqrt); // b = [1,2,3,4,5]

var persons = [
    {
        name:"Tom",
        age:17
    },
    {
        name:"Huck",
        age:18
    },
    {
        name:"Becky",
        age:16
    }
];
var names = persons.map(person => person.name); /* var names = persons.map(function(person){ return person.name} ) */
var ages = persons.map(person => person.age);
console.log(names); // ->["Tom","Huck","Becky"]
console.log(ages); //-> [17,18,16]

persons.map(person => person.name).map(name => name.length);
// -> [3,4,5]
