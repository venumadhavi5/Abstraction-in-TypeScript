import Animal from "./Animal";

class Elephant extends Animal{
    noOfEyes: number=2;
    noOfLegs: number=4;
    noOfTails: number=1;
    foodBehavior(): void {
        throw new Error("Pure Vegetarian.");
    }
    constructor(){
        super()
        console.log("Inside Elephant Constructor.")

    }
}

export default Elephant;