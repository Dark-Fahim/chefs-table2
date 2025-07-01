

const Table = ({cook, handleCurrentCooking}) => {
    // console.log(cook);
    return (
        <div className="">
            <h2 className="text-center md:text-4xl py-5 font-bold border-b-2 border-gray-300">Want To Cook: {cook.length}</h2>
            <table className="my-6 w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="text-[#878787]">
                    <tr>
                        <th></th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Time</th>
                        <th className="py-2 px-4">Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="w-full  space-y-5 overflow-hidden text-[#282828B3]">
                    {
                        cook.map((recipe, idx) => 
                            // console.log(recipe);
                            <tr key={idx}>
                                <td className="py-2 px-2">{idx +1}</td>
                                <td className="py-2 px-2">{recipe.recipe_name}</td>
                                <td className="py-2 px-2">{recipe.preparing_time} Minutes</td>
                                <td className="py-2 px-2">{recipe.calories} Calories</td>
                                <td className="py-2 px-2"><button 
                                onClick={() => handleCurrentCooking(recipe)}
                                className="btn" >Preparing</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Table;