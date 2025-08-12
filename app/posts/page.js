import { ApiFetch } from "@/components/ApiFetch/ApiFetch";
import Link from "next/link";


const PostPage = async ()=> {
const postsData = await ApiFetch()   
  
    return(
     <div className="max-w-7xl w-full mx-auto">
        <div>
            <h3 className="text-4xl text-black font-bold">Our All Post Data</h3>
            <div className="grid grid-cols-3 gap-6">
                {
                  postsData?.slice(1,9).map(({id, title, body})=>(
                    <div key={id} className="border-2 border-green-500 p-4">
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <button className="bg-green-500 text-white px-4 py-2">
                             <Link href={`/posts/${id}`}>View Details</Link> </button>
                    </div>
                  ))
                }
            </div>
        </div>
     </div>   

    )
}

export default PostPage;