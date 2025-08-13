import divider from "daisyui/components/divider"
import { getServerSession } from "next-auth"
import { authOption } from "../api/auth/[...nextauth]/route"

const About = async()=>{
    const session = await getServerSession(authOption)
    console.log(session)
    return(
        <div>

        </div>

    )
}

export default About