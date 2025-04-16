import { useEffect } from "react";
import Itemdata from "./Itemdata.jsx";
import { useNavigate } from "react-router-dom";
import prev from '/prev.svg';
import next from '/next.svg';

function Mycart({ addedItems, setAddedItems }) {
    const navigate = useNavigate();

    function backClick() {
        navigate('/');
    }

    return (
        <div className="flex flex-col items-center w-full min-h-screen px-2 sm:px-8">
            <h1 className="text-xl sm:text-2xl m-6 sm:m-10 font-bold">Items</h1>

            
            <div className={`${addedItems.length === 0 ? 'flex' : 'hidden'} w-full justify-center`}>
                <h1 className="text-3xl sm:text-7xl text-center font-semibold text-gray-400">Your Cart is Empty!</h1>
            </div>

           
            <div className="flex flex-col w-full max-w-2xl items-center gap-6 sm:gap-10 mb-6 sm:mb-10">
                {addedItems.map((storeId, index) => (
                    <Itemdata
                        key={index}
                        id={storeId}
                        addedItems={addedItems}
                        setAddedItems={setAddedItems}
                        isAdded={addedItems.includes(storeId)}
                    />
                ))}
            </div>

            
            <div className="flex flex-col sm:flex-row w-full max-w-2xl justify-evenly items-center font-bold gap-4 sm:gap-0 mb-8">
                <button
                    className="flex justify-center gap-3 items-center w-full sm:w-40 h-12 sm:h-15 bg-black text-white rounded-xl sm:rounded-[20px] cursor-pointer hover:bg-gray-500 duration-180 mb-2 sm:mb-0"
                    onClick={backClick}
                >
                    <img src={prev} alt="Back" className="w-7 h-7 sm:w-10 sm:h-10" />
                    Back
                </button>
                <button
                    className={`${addedItems.length === 0 ? 'hidden' : 'flex justify-center items-center gap-3'} w-full sm:w-40 h-12 sm:h-15 bg-black text-white rounded-xl sm:rounded-[20px] cursor-pointer hover:bg-gray-500 duration-180`}
                    onClick={backClick}
                >
                    Buy
                    <img src={next} alt="Buy" className="w-7 h-7 sm:w-10 sm:h-10" />
                </button>
            </div>
        </div>
    );
}

export default Mycart;
