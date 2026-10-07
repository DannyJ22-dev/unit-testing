const cart = require("../cart.js");

let userCart = []; //empty array for storing objects (items)
let emptyCart = [];
let fullCart = ["squash", "butter", "beef", "apple"];
// different items to store
let banana = {name: "banana", cost: 2, quality: 4};
let cereal = {name: "cereal", cost: 5, quality: 2};
let chicken = {name: "chicken", cost: 9, quality: 5};
let brownBanana = {name: "banana", cost: 2, quality: -1};


describe("addItem", function(){

    test("should add an item if it is a banana, cereal, or chicken", // positve
function() {
        expect(cart.addItem(userCart, banana, banana.quality)).toBe(banana.name + " added to cart, with a quality of " + banana.quality)
        expect(cart.addItem(userCart, cereal, cereal.quality)).toBe(cereal.name + " added to cart, with a quality of " + cereal.quality)
        expect(cart.addItem(userCart, chicken, chicken.quality)).toBe(chicken.name + " added to cart, with a quality of " + chicken.quality)
});
    test("shouldn't add an item if it is not one of these", // negative
function(){ 
    expect(cart.addItem(userCart, "beans")).toBe("Invalid item");
});
    test("shouldn't add an item if quality is below 0", // edge case
function(){ 
    expect(cart.addItem(userCart, brownBanana, brownBanana.quality)).toBe("Quality must be 0 or more");
});
    test("should remove item if it is in cart", //positive
        function(){
            expect(cart.removeItem(userCart, banana)).toBe(userCart[i].name + " removed from cart");
            expect(cart.removeItem(userCart, cereal)).toBe(userCart[i].name + " removed from cart");
            expect(cart.removeItem(userCart, chicken)).toBe(userCart[i].name + " removed from cart");
        });
    test("should notify user item is not in cart",  //negative
        function(){
            expect(cart.removeItem(userCart, brownBanana)).toBe("not in cart");
        });
    test("must have userCart", //edge case
        function(){
            expect(cart.removeItem("", banana)).toBe("must provide cart");
        });
    test("Returning cart amount", //positive
        function(){
            expect(cart.getTotalItems(userCart)).toBe("cart is " + userCart.length + " items full");
        });
        test("Cart cant be below 0", //negative
        function(){
            expect(cart.getTotalItems(emptyCart)).toBe("cart is empty");
        });
        test("Cart cant be too full", //edge
        function(){
            expect(cart.getTotalItems(fullCart)).toBe("cart is too full");
        });
});