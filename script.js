const Age = 20
const Name = "Abel"

console.log(`${Name} is ${20} years old.`);

function greet(name) {
    console.log(`Hello ${name}`);  
}
greet("Abel")

const add = (a, b) => {
    return a + b
}
const results = add(2, 3)
console.log(results);

const student = {"name": "Abel", "grade": "B-"}

for (let key in student) {
    console.log(`${key}: ${student[key]}`); 
}

const names = ['Abel', 'Faith', 'Lencer', 'Sharon', 'Joy', 'Beril']

for (let na of names){
     console.log(`My Name is ${na}`);
     
}

const header = document.getElementById('header')
header.textContent = 'Hello Kenya!'
header.style.color = 'red'

const list = document.getElementById('list')

const li = document.createElement('li')
li.textContent = 'List 1'
list.append(li)