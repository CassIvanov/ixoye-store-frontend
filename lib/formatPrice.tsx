export function formatPrice(price: number){
    const priceFormated = new Intl.NumberFormat('es-ES',{
        style: "currency",
        currency: "MXN"
    })

    const finalPrice = priceFormated.format(price)

    return finalPrice
}