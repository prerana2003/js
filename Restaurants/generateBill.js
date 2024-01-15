const item1 = {
    name: "Idli", type: "Rava", price: 20
}
const item2 = {
    name: "Idli", type: "Rice", price: 40
}
const item3 = {
    name: "Samosa", type: "Aloo", price: 30
}
const item4 = {
    name: "Samosa", type: "Paneer", price: 80
}


const order = {
    items:[
        {itemType: item1,
         qty: 3},
        {itemType: item3,
         qty: 2},
    ]
}

const taxes = {
    cgst: 2.5,
    sgst: 2.5,
    serviceTax: 5
}

const generateBill = (order,taxes) =>{
    let itemsTotal = 0;
    for(let i=0;i<order.items.length;i++){
        itemsTotal += order.items[i].itemType["price"] * 
            order.items[i].qty;
    }
    
    let cGST = (itemsTotal*taxes.cgst)/100;
    let sGST = (itemsTotal*taxes.sgst)/100;
    let serTax = (itemsTotal*taxes.serviceTax)/100;
    
    let grandTotal = itemsTotal + cGST + sGST + serTax;

    console.log("Sr No     " + "Items         "+"Qty   "+"Price     "+"ItemTotal")

    console.log("  "+1+"       "+order.items[0].itemType["name"]+"           "
                        +order.items[0].qty+"     "+order.items[0].itemType["price"]+"          "
                        +(order.items[0].itemType["price"] * order.items[0].qty));
    
    console.log("  "+2+"       "+order.items[1].itemType["name"]+"         "
                        +order.items[1].qty+"     "+order.items[1].itemType["price"]+"          "
                        +(order.items[1].itemType["price"] * order.items[1].qty));

    console.log("--------------------------------------------------");

    console.log("Total:                                    "+itemsTotal);
    console.log("CGST:                                       "+cGST);
    console.log("SGST:                                       "+sGST);
    console.log("Service Tax:                                "+serTax);

    console.log("--------------------------------------------------");

    console.log("Grand Total:                              "+grandTotal);

    let final= "Thank You...!!!"

    return final;
}

console.log("               "+generateBill(order,taxes));