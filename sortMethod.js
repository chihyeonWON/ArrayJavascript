var a = [5,2,7,1,3,9,8];
a.sort(function(a,b) {
    return a-b;
});
// a->[1,2,3,5,7,8,9]

function compaireFunc(key) {
    return function(a,b) {
        return a[key]-b[key];
    };
}
var persons = [{
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
persons.sort(compaireFunc("age")); // -> (3) [{...},{...},{...}] 0: {name: 'Becky', age: 16}
                                                        //1: {name: 'Tom', age: 17}
                                                        //2: {name: 'Huck', age: 18}
console.log(persons);