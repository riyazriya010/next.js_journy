import { notFound } from "next/navigation"

function generateRandomNumber(count: number):number{
    return Math.floor(Math.random() * count)
}

export default function ReviewProduct({ params }: {
    params: { 
        productId: string,
        reviewId: string
     }
}){
    const random = generateRandomNumber(2)
    if(random == 1) throw new Error("Error Loading review")

    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return <h1>Review { params.reviewId } Product { params.productId }</h1>
}

