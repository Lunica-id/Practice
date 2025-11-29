const inventory = [];

function findProductIndex(checkName) {
    for (let i=0;i<inventory.length;i++) {
        if (inventory[i].name.toLowerCase() == checkName.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

function addProduct(value) {
    value.name = value.name.toLowerCase();
    let i = findProductIndex(value.name);
    if (i != -1) {
        inventory[i].quantity += value.quantity;
        console.log(`${value.name} quantity updated`);
    } else {
        inventory.push(value);
        console.log(`${value.name} added to inventory`);
    }
}

function removeProduct(valueName, quantityValue) {
    let i = findProductIndex(valueName);
    if (i == -1) {
        console.log(`${valueName.toLowerCase()} not found`);
    } else {
        let amount = inventory[i].quantity;
        if (amount < quantityValue) {
            console.log(`Not enough ${valueName.toLowerCase()} available, remaining pieces: ${amount}`)
        } else if(amount == quantityValue) {
            inventory.splice(i,1);
            console.log(`Remaining ${valueName.toLowerCase()} pieces: 0`)
        } else {
            inventory[i].quantity -= quantityValue;
            console.log(`Remaining ${valueName.toLowerCase()} pieces: ${inventory[i].quantity}`);
        }
    }
}

addProduct({name: "FLOUR", quantity: 5});
console.log(inventory);
console.log(findProductIndex("FloUr"));
addProduct({name: "FLOUR", quantity: 10});
console.log(inventory);
removeProduct("FLOUR", 5);
console.log(inventory);