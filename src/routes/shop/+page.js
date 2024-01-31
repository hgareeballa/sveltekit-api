const loadProducts = async () =>{
    const productsRes = await fetch('https://dummyjson.com/products')
    const productData = await productsRes.json()    
    return productData.products
}//
export const load = async ({fetch}) =>{
    // const productsRes = await fetch('https://dummyjson.com/products')
    // const productData = await productsRes.json()
    // //console.log(productData);

    return{
        products : loadProducts()
    }
}//



