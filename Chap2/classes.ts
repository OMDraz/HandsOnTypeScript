class Person {
    constructor(private readonly msg: string) {}
    
    speak() {
        console.log(this.msg);
    }
}

const tom = new Person("hello");
// tom.msg = "hello";
tom.speak();