
  let shoppingCart = [
    { name: "loaf of bread", type: "food", quantity: 1, price: 0.85 },
    { name: "multipack beans", type: "food", quantity: 1, price: 1 },
    { name: "mushrooms", type: "food", quantity: 10, price: 0.1 },
    { name: "can of beer", type: "alcohol", quantity: 4, price: 1.1 },
    { name: "prosecco", type: "alcohol", quantity: 1, price: 8.99 },
    { name: "steak", type: "food", quantity: 2, price: 3.99 },
    { name: "blue cheese", type: "food", quantity: 1, price: 2.99 },
    { name: "candles", type: "home", quantity: 3, price: 1.99 },
    { name: "cheesecake", type: "food", quantity: 1, price: 4.99 },
    { name: "onions", type: "food", quantity: 3, price: 0.4 },
  ];


  function totalPrice (aShoppingCart, discountAmount, discountType) {
    let calculatePrice =0;

    for (let i=0; i < aShoppingCart.length; i++) {
     
        if (aShoppingCart[i].type === discountType || discountType === "any")
        {
        calculatePrice += aShoppingCart[i].quantity * aShoppingCart[i].price * (1 - (discountAmount/100));
        //console.log (`${calculatePrice.toFixed(2)}`);
        }
        else {
            
        calculatePrice += aShoppingCart[i].quantity * aShoppingCart[i].price;
        //console.log (`${calculatePrice.toFixed(2)}`);
        
        }
    }
    return (console.log (`The total price is £${calculatePrice.toFixed(2)}`))
  }

  totalPrice(shoppingCart, 50, "any");

function itemBetweenTwoPricePoints (aShoppingCart, lowerAmount, upperAmount, quantity){

  let arrItems = [];
  
  for (let i=0; i < aShoppingCart.length; i++) {
    if (quantity === true)
    {
      if ((lowerAmount <= (aShoppingCart[i].price * aShoppingCart[i].quantity)) && 
      ((aShoppingCart[i].price * aShoppingCart[i].quantity)<= upperAmount))
      {

        arrItems.push(aShoppingCart[i]);
      }
    }
    else
    {
      if (lowerAmount <= (aShoppingCart[i].price) && (aShoppingCart[i].price)<= upperAmount)
      {

        arrItems.push(aShoppingCart[i]);
      }
    }
  }
  return arrItems;
}
console.log(itemBetweenTwoPricePoints (shoppingCart, 4, 5, true));
console.log(itemBetweenTwoPricePoints (shoppingCart, 4, 5, false));

  const array = [1, 2, 4, 3, 2, 2, 2, 5, 6, 6];

  function mean (anArray) {
    let calculateMean = 0;
    for (let i=0; i < anArray.length; i++) {
    calculateMean += anArray[i]/ anArray.length;
    //console.log (`${calculateMean}`);
    }
    return (console.log (`Mean is ${calculateMean}`))
  }



  function median (anArray) {
    anArray.sort(function (a,b) {
        return a - b;
    });
    
    let calculateMedian = 0;

    if (anArray.length % 2 === 0) {
        let middleValue1 = Math.ceil(anArray.length/2);
        let middleValue2 = (Math.floor(anArray.length/2));
        calculateMedian = (anArray[middleValue1] + anArray[middleValue2])/2;
    }
    else {
        let medianPoint = (Math.floor(anArray.length/2));
        console.log (`Median point is ${medianPoint}`);
        calculateMedian = anArray[medianPoint];
       // console.log (`${calculateMedian}`);
    }


    
    return (console.log (`Median is ${calculateMedian}`))
  }


  function mode(input) {

    // Array to store the frequency of each element
    let count_array = [];

    //initialise the count_array
    for (let i=0; i < input.length; i++) {
    
      count_array[input[i]]=0;
  
    }

    /* Iterate through each element of the input array,
    and maintaining a count which is added to count_array elements */

    for (let i=0; i < input.length; i++) {

     count_array[input[i]] = count_array[input[i]] + 1;
    }

    /* Scanning through count_array and remembering a variable with highest count so far
     */

    // Variable to remember the count
    var lastHighestCount=0;

    // Variable to remember the index
    var lastHighestInput=0;

    //looping through count_array to find the highest count, and then getting the number which is the mode
    for (let i=0; i < input.length; i++) {

    if (count_array[input[i]] > lastHighestCount){
    lastHighestCount = count_array[input[i]];
    lastHighestInput = input[i]; 
    }
  }
  console.log (`Mode is${lastHighestInput}`);
  return lastHighestInput;

}



  function calculateAverage (anArray, type) {

    switch (type) {
        case "mean":
            mean(anArray);
            break;

        case "median":
            median(anArray);
            break;        

        case "mode":
            mode(anArray);
            break;
    }

  }

  calculateAverage ([1, 2, 4, 3, 2, 2, 2, 5, 5,5,5,5,5,5,5,5,5,5,5,6, 6, 6, 6, 6, 100], "mode");