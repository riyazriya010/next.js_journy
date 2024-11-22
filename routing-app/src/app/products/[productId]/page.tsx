import { Metadata } from "next"

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = async ( { params }: Props ): Promise<Metadata> => {
    // const { productId } = await params;
    const title = await new Promise((resolve) => {
        setTimeout( async () => {
            const { productId } = await params;
            resolve(`iphone ${productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    };
};

export default async function SingleProduct({ params }: Props){
    const { productId } = await params;
    return <h1>Details About Product { productId }</h1>
};


// export default function SingleProduct({ params }: { params: {productId: string} }){
//     return <h1>Details About Product { params.productId }</h1>
// }
