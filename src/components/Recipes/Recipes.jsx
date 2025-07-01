import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Table from "../Table/Table";
import { ToastContainer, toast } from 'react-toastify';
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Recipes = () => {
    const notify = () => toast("Already Added");
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    const [cook, setCook] = useState([])
    const [currentCooking, setCurrentCooking] = useState([])
    const hanldeWantToCook = recipe => {
        for(const cooking of cook){
            if(cooking.recipe_id === recipe.recipe_id){
                // console.log('already added');
                notify()
                return
            }
            
        }
        const newCook = [...cook, recipe]
            setCook(newCook)
        
    }


    const handleCurrentCooking = recipe =>{
        console.log('hitted', recipe);
        setCurrentCooking([...currentCooking, recipe])
        const remaining = cook.filter(recip => recip.recipe_id !== recipe.recipe_id);
        setCook(remaining)
    }


    return (
        <div>
            <h2 className="md:text-4xl text-center my-5 font-bold">Our Recipes</h2>
            <ToastContainer />
            <p className="md:w-3xl mx-auto text-center mb-5">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            <div className="flex gap-10">
                <div className="w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            recipes.map((recipe, idx) => <Recipe 
                            hanldeWantToCook={hanldeWantToCook}
                            recipe={recipe} 
                            key={idx}></Recipe>)
                        }
                    </div>
                </div>

                <div className="w-1/3">
                    <Table cook={cook} handleCurrentCooking={handleCurrentCooking}></Table>
                    <CurrentCooking currentCooking={currentCooking}></CurrentCooking>
                </div>
            </div>
        </div>
    );
};

export default Recipes;