//1
class Person {
    name: string;
    age: number;
    private socialSecurityNumber: number;
     

    constructor(name: string, age: number, socialsecuritynumber: number) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialsecuritynumber;
    }
    getName():string {
        return this.name;
    }

    getAge():number {
        return this.age;
    }

}
