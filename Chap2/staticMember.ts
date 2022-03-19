class ClassA {
    static typeName: string;
    constructor() {}
        static getFullNAme() {
            return "ClassA " + ClassA.typeName;
    }
}

const a = new ClassA();
console.log(ClassA.typeName);