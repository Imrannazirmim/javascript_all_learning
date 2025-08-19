const products = [
    {id: 1, name: 'iPhone', price: 120000},
    {id: 2, name: 'sumsung phone', price: 120000},
    {id: 3, name: 'oppo phone', price: 20000},
    {id: 4, name: 'lenovo laptop', price: 20000},
    {id: 5, name: 'mac book pro', price: 320000},
    {id: 6, name: 'xiomi phone', price: 120000},
    {id: 7, name: 'realme', price: 50000},
    {id: 7, name: 'vivo Phone', price: 50000},
]

function matchedProducts(products, search) {
    const match = []
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            match.push(product)
        }
    }
    return match;
}

const result = matchedProducts(products, 'phone');
console.log(result)