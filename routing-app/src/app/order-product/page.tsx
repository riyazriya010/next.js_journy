"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router = useRouter()

    const handleOrder = () => {
        console.log('Placing Order')
        router.push("/")
        /* instead of pushing :
        back
        forward
        replace
        */
    }
    return(
        <>
        <h2>Order Product</h2>
        <button onClick={handleOrder}>Order</button>
        </>
    )
}