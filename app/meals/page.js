
import MealsPage from "@/components/Meals/Meals";


const MealsData = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-5xl w-full mx-auto">
                <div>
                    <h1 className="text-3xl font-semibold">Choose Your Meals</h1>
                    <p>Choose meals of you choise by searching........</p>
                </div>
                <div>
                    <MealsPage></MealsPage>
                </div>
            </div>
        </div>
        
    )
}
export default MealsData;