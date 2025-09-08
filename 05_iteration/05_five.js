// reduce 

const myCourse=[{
    itemName:"MobileDevelopment",
    price:12999
},{
    itemName:"WebDevelopment",
    price:11999

},{
    itemName:"DataScience",
    price:24999
}]

const priceToPay = myCourse.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
