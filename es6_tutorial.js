const integers = [1,2,3];

const updatedIntegers = integers.map((number) => number+=1);

console.log(integers);
console.log(updatedIntegers);

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`I am ${this.name} and my age is ${this.age}`);    
    }
}

const bill = new Person('Saurabh',33);
bill.speak();
console.log(bill);