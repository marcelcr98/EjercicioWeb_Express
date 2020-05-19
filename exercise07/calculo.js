const Price = (curso) => {
    let precio = 0
    if (curso == "Java") {
        precio = 1200
    } else if (curso  == "PHP"){
        precio = 800
    } else if (curso == ".Net"){
        precio = 1500
    }
    return precio
}

const Discount = (pago) => {
    let descuento = 0
    if(pago  == "Cash") {
        descuento = 10
    }
    return descuento
}

module.exports = {
    Price,
    Discount
}