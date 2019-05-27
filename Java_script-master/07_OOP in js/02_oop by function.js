// Regular function:
function cat(){
    console.log("Hello cat");
}

let cat1 = cat();

// Constructor function:
function Dog(age){
    n = "Bit";
    this.color = "brown";
    this.get_info=()=>{
        console.log(`info about ${n}: age: ${age}, color: ${this.color}`);
    }
}

function Student(name,age,grade){
    this.name = name;
    this.age = age;
    this.grade = grade;

    this.get_info=()=>{
        console.log(`Student: ${this.name} in age: ${this.age}, has grade of:${this.age}`)}
}

let d1 = new Dog(3);
console.log(d1.color);
d1.get_info();

let s1 = new Student('Raya',21,100);
s1.get_info();