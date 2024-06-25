//Basic calculator
class Calculator{

    add = (num1:number, num2:number) :number => {
        return num1 + num2;
        
    } 
      
    sub = (num1:number, num2:number) :number => {
        return num1 - num2;
        
    } 

    divide = (num1: number, num2: number): number|string => {
        if (num2 == 0) {
            return "Error! Cannot divide by 0!";
        } else {
            return num1 / num2;
        }
        
        
    } 
      
    multiply = (num1:number, num2:number) :number => {
        return num1 * num2;
        
    } 
    
}
