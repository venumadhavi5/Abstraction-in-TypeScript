import Animal from "./Animal";

class Tiger extends Animal{
    noOfTails: number=1;
    noOfEyes: number=2;
    noOfLegs: number=4;
    foodBehavior(): void {
        throw new Error("Tiger hunts Deers and eat.");
    }
    
    constructor(){
        super();
        console.log("Inside Tiger Constructor")
    }
}


export default Tiger;