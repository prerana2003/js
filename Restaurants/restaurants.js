restaurants = {};

const tax1 = {
    CGST: 2.5,
    SGST: 2.5
}

const tax2 = {
    CGST: 5,
    CGST: 5,
    "Service Tax": 2.5
}

// create restaurants function
const createRestaurant = (name, add, phone, taxes) =>{
    let id = Object.keys(restaurants).length + 1
    if(restaurants[id] === undefined){
        restaurants[id] = {
            id : "H"+id,
            name: name,
            address: add,
            phoneNo: phone,
            tax: taxes,
            menu: {},
            order: {}
        }
    };

    return "Restaurant is successfully created";
}

// adding items
const addItem = (id, name, price, type) => {
    if(name in restaurants[id].menu){
        return "Item is already exist";
    }
    else{
        restaurants[id].menu[name] = {
            Price: price,
            Type: type
        }
        return "Item is successfully added";
    }
}

const deleteItem = (id, name) =>{
    if(name in restaurants[id].menu){
        delete restaurants[id].menu[name];
        return "Item is successfully deleted";
    }
    else{
        return "No such item present";
    }
}

obj = {
    Price: 50,
    Type: "aloo"
}

const updateItem = (id,name,obj) =>{
    if(name in restaurants[id].menu){
        restaurants[id].menu[name] = {...restaurants[id].menu[name],...obj};
        return "Item is successfully updated";
    }
    else{
        return "No such item present";
    }
}

ordObj=[
    {   id:1, 
        oID:"O1",
        items:[
            {itemName:"idli", qty: 1}, {itemName:"samosa", qty: 2}, {itemName:"idli", qty: 2}
        ]
    },
    {   id:1, 
        oID:"O2",
        items:[
            {itemName:"pavbhaji", qty: 1}
        ]
    },
    {   id:2, 
        oID:"O1",
        items:[
            {itemName:"samosa", qty: 1}
        ]
    }
]

// place order
const createOrder = (ordObj) => {
    let msg = "";
    for(let i=0;i<ordObj.length;i++){
        if(restaurants[ordObj[i].id].order[ordObj[i].oID] === undefined){
            restaurants[ordObj[i].id].order[ordObj[i].oID] = {
                    [ordObj[i].items[0].itemName]: ordObj[i].items[0].qty
            }
            msg = "Order placed..!!!";
        }
    }

    for(let i=0;i<ordObj.length;i++){
        for(let j=1;j<ordObj[i].items.length;j++){
            if(ordObj[i].items[j].itemName in restaurants[ordObj[i].id].order[ordObj[i].oID]){
                restaurants[ordObj[i].id].order[ordObj[i].oID][ordObj[i].items[j].itemName] = restaurants[ordObj[i].id].order[ordObj[i].oID][ordObj[i].items[j].itemName] + ordObj[i].items[j].qty;
                msg = "Quantity Updated";
            }
            else{
                restaurants[ordObj[i].id].order[ordObj[i].oID][ordObj[i].items[j].itemName] = ordObj[i].items[j].qty
                msg = "Order placed..!!!";
            }
        }
       
    }
    return msg;
}

const items_in_order = (id,oID) =>{
    let Items = [];

    for(let x in restaurants[id].order[oID]){
        let iqty=restaurants[id].order[oID][x];
        let iprice=restaurants[id].menu[x].Price;
        let iTotal = iqty * iprice

        let tempItem = {
            itemName: x,
            qty: iqty,
            price: iprice,
            iTotal: iTotal
        }
        Items.push(tempItem)
    }
    return Items;
}

const generateBill = (id,oID) =>{
    let total = 0;
    
    let result = [];
    result.push(items_in_order(id,oID));

    for(let i=0;i<result[0].length;i++){
        total = total + result[0][i].iTotal
    }

    let taxesObj = {};
    let gTotal = 0;
    for(let x in restaurants[id].tax){
        taxesObj[x] = (total*restaurants[id].tax[x])/100
        gTotal = total+taxesObj[x];
    }

    let tempresult ={
        total: total,
        taxes: taxesObj,
        gtotal: gTotal
    }
    result.push(tempresult);

    return result;
}



createRestaurant("Hotel Maratha","Narhe, Pune",324234234,tax1);
createRestaurant("Hotel Pune","Pune",799382479,tax2);
// console.log(createRestaurant(3,"Agatya","Pune",29879898,tax1));
// console.log(createRestaurant(4,"Dominos","Pune",1234567892,tax1));

addItem(2,"idli",30,"rava");
addItem(1,"dosa",60,"rava");
addItem(1,"samosa",40,"rava");
addItem(2,"samosa",40,"rava");
addItem(1,"idli",50,"rava");
addItem(1,"pavbhaji",90,"rava");
addItem(2,"pizza",100,"rava");

// console.log(deleteItem(2,"idli"))
// console.log(deleteItem(1,"samosa"))

// console.log(updateItem(2,"samosa",obj))

createOrder(ordObj)

console.log("----------------Restaurants----------------------")
// console.log(Object.keys(restaurants).length)
console.log(restaurants)
console.log()

console.log("----------------Menues----------------------")
console.log(restaurants[1].menu)
console.log(restaurants[2].menu)
console.log()

console.log("----------------Orders----------------------")
console.log(restaurants[1].order)
console.log(restaurants[2].order)
console.log()

console.log("-----------------Generate Bill-------------------");
console.log();
let bill = generateBill(1,"O1");
console.log(bill)
console.log("**********************")
console.log("Sr No  |   " + "Items       |  "+"Qty | "+"Price    | "+"ItemTotal");
console.log("------------------------------------------------------")
for(let i=0;i<bill.length;i++){
    for(let j=0;j<bill[i].length;j++){
        console.log(j+1+"      |   "+bill[i][j].itemName+"        |    "+bill[i][j].qty+" | "+bill[i][j].price+"       |  "+bill[i][j].iTotal)
        if(j === bill[i].length-1){
            console.log("------------------------------------------------------")
            break;
        }
    }
    if(i>0){
        console.log("Total:                    |                "+bill[i].total)
        for(let x in bill[i].taxes){
            console.log(x+"                     |              "+bill[i].taxes[x])
        }
        console.log("------------------------------------------------------")
        console.log("Grand Total:             |                "+bill[i].gtotal)
    }
    
}