
function addItem(cart, item, quality){
    if(item.name !== "banana" && item.name !== "chicken" && item.name != "cereal"){
        return "Invalid item";
    }
    if(item.quality < 0){
        return "Quality must be 0 or more";
    }
    cart.push(item);
    return(item.name + " added to cart, with a quality of " + quality);
}
function removeItem(cart, item){
    if (!cart) return "must provide cart";
    for(i = 0; i < cart.length; i++){
        if (cart[i] === item){
            return cart[i].name + " removed from cart";
            //delete cart[i];
        }
    }
    return "not in cart";
}
function getTotalItems(cart = userCart){
    if (cart.length === 0) return "cart is empty";
    if (cart.length >= 4) return "cart is too full";
    return "cart is " + cart.length + " items full";
}

//testing functions - adding items 
// 
/*
addItem(userCart, banana);
addItem(userCart, cereal);
addItem(userCart, chicken);
console.log(userCart); 
// get total
console.log("Total items in cart: " + getTotalItems(userCart));
// remove and get new total
removeItem(userCart, banana); //function successfully removed item, but leaves a blank item.
console.log(userCart); 
console.log("Total items in cart: " + getTotalItems(userCart));// still counts 3 because of blank item.
*/

module.exports = {
    addItem, 
    removeItem, 
    getTotalItems
}

