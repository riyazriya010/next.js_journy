import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
}

export default async function Blog() {
    console.log('Blog')
    await new Promise((resolve) => setTimeout(resolve, 5000)) 
    return <h1>My Blog</h1>
}

