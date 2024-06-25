//Functions
//1
let sum = (num1: number, num2: number) :number => {
    return num1 + num2;
}

//2

let fixed = () :number => {
    return 50;
}

//3 
let upperOrLowerv = (text: string, upper?:boolean) :string => {
    if (upper) {
        return text.toUpperCase();
    } else {
        return text.toLowerCase();
    }
}