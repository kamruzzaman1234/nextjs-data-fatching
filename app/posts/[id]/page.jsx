

const getDataFetch = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data 
}

const PostDetails = async({params})=>{
    const {title, body} = await getDataFetch(params.id)
    
    return(
        <div>
            <h3>Title : {title}</h3>
            <p>Des : {body}</p>
        </div>
    )
}

export default PostDetails;