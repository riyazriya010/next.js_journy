import { redirect } from 'next/navigation';
import {comments} from '../data'

export async function GET(
    request: Request,
    {params} : {params: {id: string}}
){
    if(parseInt(params.id) > comments.length){
        redirect("/comments")
    }
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    )
    if(!comment) redirect("/comments")
        
    return Response.json(comment)
}



//patch
export async function PATCH(
    request:Request,
    {params}: {params: {id: string}}
){
    const body = await request.json()
    const {text} = body
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    )
    comments[index].text = text
    return Response.json(comments[index])
}


//delete
export async function DELETE(
    request: Request,
    {params}: {params: {id: string}}
){
    const index = comments.findIndex(
        (comment) => comment.id === parseInt(params.id)
    )

    comments.splice(index, 1)
    return new Response('Deleted a value')
}