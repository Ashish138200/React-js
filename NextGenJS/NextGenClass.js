// ES6 Babel
class Human{
    gender = 'Male';
    myGender=()=>{
        console.log(this.gender);
    }
}

class Person extends Human{
    name = 'Ashish';
    gender = 'female';
    myName=()=>{
        console.log(this.name);
    }
}
const person = new Person()
person.myName()
person.myGender()