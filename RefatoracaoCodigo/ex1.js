// Refatore o seguinte trecho de código JS para torná-lo mais legível e eficiente. 
// Além disso, aplique o princípio "Replace Temp with Query":
// Você deve refatorar o código, removendo as variáveis temporárias total, discount, e shippingCost, substituindo-as por consultas diretas. 
// Certifique-se de manter a funcionalidade original do código.

function calculateTotalPrice(products) {
    return finalPrice(total(products)).toFixed(2);
}

function discount(){
    return 0.1;
}

function shippingCost(){
    return 5;
}

function total(products){
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
}

function finalPrice(subtotal){
    if (subtotal > 100) {
        return subtotal * (1 - discount());
    }

    if (subtotal < 50) {
        return subtotal + shippingCost();
    }

    return subtotal;
}
