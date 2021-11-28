// Basic JavaScript Problem Solving Assignment-4

// Q-1: Convert Seer To Mon?
// problem 1

function seerToMon(seer){

    if(typeof seer != "number"){
        return "Enter number"
    }

    else if(seer >= 0){
        const mon = seer/40;
        return mon;
    }

    else {
        return "Enter positive number";
    }
   
}

const seers = seerToMon(120);
console.log("Mon is ", seers);


// Q-2: Total sell?
// problem 2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){

    if((typeof shirtQuantity != "num") || (typeof pantQuantity != "number") || (typeof shoeQuantity != "number")){
        return "Enter quantity"
    }

    else if(shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0){
        return "Enter positive value"
    }

    else if(Number.isInteger(shirtQuantity) && Number.isInteger(pantQuantity) && Number.isInteger(shoeQuantity)){
      
    // Per price
    const shirtPerPrice = 100;
    const pantPerPrice = 200;
    const shoePerPrice = 500;

    // each total price
    const shirtTotalPrice = shirtPerPrice * shirtQuantity;
    const pantTotalPrice = pantPerPrice * pantQuantity;
    const shoeTotalPrice = shoePerPrice * shoeQuantity;

    // all total price
    const allTotalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return allTotalPrice;
    }

    else {
        return "Erorr";
    }
    
}

const totalPrice = totalSales(1, 1, 1);
console.log("Total price is ", totalPrice);


// Q-3: Delivery cost?
// problem 3

function deliveryCost(tShirtQuantity){

    // per delivery cost
    const first100DeliveryPerCost = 100;
    const sceond100DeliveryPerCost = 80;
    const thirdDeliveryPerCost = 50;

    if ((typeof tShirtQuantity != "number") || (tShirtQuantity < 0)){
        return "Erorr"
    }

    else if ((Number.isInteger(tShirtQuantity)) && (tShirtQuantity <= 100)){

        const firstTotalDeliveryCost = tShirtQuantity * first100DeliveryPerCost;
        return firstTotalDeliveryCost;
    }

    else if ((Number.isInteger(tShirtQuantity)) && (tShirtQuantity <= 199)){

        const firstDeliveryCost = 100 * first100DeliveryPerCost;
        const sceondDeliveryCost = (tShirtQuantity - 100) * sceond100DeliveryPerCost;
        const sceondTotalDeliveryCost = firstDeliveryCost + sceondDeliveryCost;
        return sceondTotalDeliveryCost;
    }

    else if ((Number.isInteger(tShirtQuantity)) && (tShirtQuantity >= 200)){

        const first100DeliveryCost = 100 * first100DeliveryPerCost;
        const sceond100DeliveryCost = 100 * sceond100DeliveryPerCost;
        const thirdDeliveryCost = (tShirtQuantity - 200) * thirdDeliveryPerCost;
        const thirdTotalDeliveryCost = first100DeliveryCost + sceond100DeliveryCost + thirdDeliveryCost;
        return thirdTotalDeliveryCost;
    }
    
    else {
        return "Erorr"
    }
}

const myDeliveryCost = deliveryCost(250);
console.log("My delivery cost ", myDeliveryCost);


// Q-4: Perfect Friend?
// problem 4


function perfectFriend(friendNames){

    for(let i = 0; i< friendNames.length; i++){
        const largestName = friendNames[i];
        if(largestName.length == 5){
            return largestName;
        }
    }
    return "Erorr";

}

const friendNames = ["Abul", "Babu", "Muhammad", "Alif", "Nowshad", "Yasin", "Lal", "Bablu"];
const myFriend = perfectFriend(friendNames);
console.log("My perfect name friend is ", myFriend);