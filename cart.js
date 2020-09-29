function product(name,price){
    this.name = name;
    this.price = price
}
var computer = new product("dell",300000);
var computer2 = new product("mac",5000000);
var computer3 = new product("lenovo",300000);
var computer4 = new product("acer",5000000);

shoppingCart =[];
shoppingCart.push(computer, computer2,computer3,computer4);

shoppingCart.splice(0,2);

console.log(shoppingCart);