"use strict";
//1
class Person {
    constructor(name, age, socialsecuritynumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialsecuritynumber;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
