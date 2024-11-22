"use client"
export default function ErrorBoundry({error}: {error: Error}){
    return <h1>Error: {error.message}</h1>
}