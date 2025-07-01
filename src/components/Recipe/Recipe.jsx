import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, hanldeWantToCook }) => {
    // console.log(recipe);
    const { recipe_id, recipe_name, recipe_image, title, short_description, ingredients, preparing_time, calories } = recipe
    return (
        <div className="">
            <div className="card bg-base-100 md:w-96 w-auto shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={recipe_image}
                        alt={title}
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="border-b-2 border-gray-300 pb-5">{short_description}</p>
                    <p className="py-3 font-semibold text-xl">ingredients: {ingredients.length}</p>
                    <ul className="text-[#878787] border-b-2 border-gray-300 pb-5">
                        {
                            ingredients.map((ingredient, idx) => <li className="list-disc" key={idx}>{ingredient}</li>)
                        }
                    </ul>

                    <div className="flex">
                        <p className="flex items-center gap-3 text-[#282828CC] "><IoMdTime /><span>{preparing_time} Minuites</span></p>
                        <p className="flex items-center gap-3 text-[#282828CC] "><FaFire></FaFire> <span>{calories} Calories</span></p>
                    </div>


                    <div className="card-actions ">
                        <button onClick={() => hanldeWantToCook(recipe)} className="btn bg-[#0BE58A] rounded-full">Want To Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;