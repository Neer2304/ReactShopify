export const Productapi = async ({params}) => {
    const id = params.productid
    try {
        const res = await fetch (`https://fakestoreapi.com/products/${id}`)
    } catch (error) {
        console.log(error)
    }
}