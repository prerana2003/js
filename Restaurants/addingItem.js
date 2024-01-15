let item =[];
let msg;

const found = (item, name)=>{
    for(let i=0;i<item.length;i++){
        if(item[i].iname == name){
            return true;
        }
    }
}

const addItem = (name, price, type) => {
    let tempItem = {};

    tempItem.iname = name;
    tempItem.iprice = price;
    tempItem.itype = type;

    if(found(item, name)){
        msg = "Item Already Exist";
    }
    else{
        item.push(tempItem);
        msg = "Item is successfully added";
    }
    
    return msg;
}

const deleteItem = (name) =>{

    for(let i=0;i<item.length;i++){
        if(item[i].iname === name){
            item.splice(i,1);
            msg = "Item is successfully deleted";
            break;
        }
        else{
            msg = "No such item present";
        }
    }
    
    return msg;
}

obj = {
    name: "Dosa",
    price: 50,
    type: "rava",
    hello :"ajckjas"
}

const updateItem = (name,obj) =>{

    for(let i=0;i<item.length;i++){
        if(item[i].iname === name){
            item[i].iname = obj.name;
            item[i].iprice = obj.price;
            item[i].itype = obj.type;
            msg = "Item is successfully updated";
            break;
        }
        else{
            msg = "No such item present";
        }
    }
    
    return msg;
}

console.log(addItem("idli",20,"rava"));
console.log(addItem("samosa",40));
console.log(addItem("samosa",20,"rava"));
console.log(addItem("Dosa",40,"rava"));

console.log(updateItem("D", obj))
console.log(updateItem("Dosa", obj))

console.log(deleteItem("idlii"));
console.log(deleteItem("samosa"));


console.log()
console.log("Item Name  | "+"Price | "+"Type")
for(let i=0;i<item.length;i++){
console.log(item[i].iname+"   |   "+item[i].iprice+"   |  "+item[i].itype)
}



// const createOrder = (id, itemName, qty) => {
//     restaurants[id].order = {
//         item: itemName,
//         qty: qty
//     };
//     // tempOrder.item = itemName;
//     // tempOrder.qty = qty;

//     // for()
//     // restaurants.order = order;

//     // for(let i=0;i<restaurants.length;i++){
//     //     if(id === restaurants[i].id){
//     //         restaurants[i].order = tempOrder;
//     //         msg = "Order Placed!";
//     //     }
//     //     else{
//     //         msg = "Please confirm restaurant ID";
//     //     }
//     // }
//     return msg;
// }