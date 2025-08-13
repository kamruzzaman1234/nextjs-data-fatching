import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";




const  Home = async()=> {
const session = await getServerSession(authOption)
    console.log(session)

  return (
    <div >
      <main className="py-20">
          <h3 className="text-black">Home Page is ready for you</h3>
      </main>
      
    </div>
  );
}


export default Home