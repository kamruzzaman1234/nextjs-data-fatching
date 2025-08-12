"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";




const Navbar = ()=>{
    const router = useRouter();
    const Links = [
        {title: "Home", path:'/'},
        {title:"About", path:'/about'},
        {title:"Service", path: '/service'},
        {title:"Meals", path: "/meals"}
    ]

    const handler = ()=>{
        router.push('/login')
    }
    return(
        <div className="py-4 bg-black">
            <div className="max-w-6xl w-full mx-auto">
                <ul className="flex justify-center items-center gap-8">
                {Links.map((link)=> <Link key={link.path} href={link.path} 
                title={link.title} className="text-white">{link.title}</Link>)}
            </ul>
            
            </div>
        </div>
    )
}

export default Navbar;