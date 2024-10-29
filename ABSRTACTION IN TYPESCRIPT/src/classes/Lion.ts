import Animal from "./Animal";

class Lion extends Animal{
    noOfTails: number=1;
    noOfEyes: number = 2;
    noOfLegs: number=4;
    foodBehavior(): void {
        throw new Error("Lion hunts and eats.");
    }
    constructor(){
        super()
        console.log("Inside Lion Constructor")
    }
}


export default Lion;