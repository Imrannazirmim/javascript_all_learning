
/**
 * first100 --> 100
 * 101to200 --> 90
 * above200 --> 70
 */

function layerDiscountShoppingCart(quantity){
    const firstPrice = 100;
    const secondPrice = 90;
    const abovePrice200 = 70

    if(quantity <= 100){
        const total = quantity * firstPrice;
        return total
    }else if(quantity <= 200){
        const first100Total = 100 * firstPrice;
        const remainingQuantity = quantity - 100;
        const remainingQuantityTotal = remainingQuantity * secondPrice;
        const total = remainingQuantityTotal + first100Total;
        return total
    }else{
        const first100Total = 100 * firstPrice;
        const secondPriceTotal = 200 * secondPrice;
        const remainingQuantity = quantity - 200;
        const remainingQuantityTotal = remainingQuantity - abovePrice200;
        const total = first100Total + secondPriceTotal + remainingQuantityTotal;
        return total
    }
}
layerDiscountShoppingCart(20)
