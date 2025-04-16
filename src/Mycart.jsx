import { useEffect } from "react";
import Itemdata from "./Itemdata.jsx";
import { useNavigate } from "react-router-dom";
import prev from '/prev.svg';
import next from '/next.svg';

function Mycart({addedItems, setAddedItems}){
    const navigate = useNavigate();
    
    function backClick(){
        navigate('/');
    }

    return(
        <div className="flex flex-col items-center justify-evenly w-full">
            <h1 className="text-2xl m-10 font-bold">Items</h1>

            <div className={`${addedItems.length == 0 ? 'flex' : 'hidden'}`}>
                <h1 className="text-7xl text-center">Your Cart is Empty !</h1>
            </div>
            
            
            <div className="flex flex-col w-full items-center justify-evenly gap-10 mb-10">
                {
                    addedItems.map((storeId, index) => (
                        <Itemdata 
                            key={index} 
                            id={storeId} 
                            addedItems={addedItems} 
                            setAddedItems={setAddedItems}
                            isAdded={addedItems.includes(storeId)}
                        />
                    ))
                }
            </div>
        
       
            <div className="flex w-[50rem] justify-evenly items-center font-bold mb-10">
                <button className="flex justify-center gap-5 items-center w-40 h-15 bg-black text-white rounded-[20px] cursor-pointer hover:bg-gray-500 duration-180" onClick={backClick}>
                    <img src={prev} alt="er" className="w-10 h-10"/>
                    Back
                </button>
                <button className={`${addedItems.length == 0 ? 'hidden' : 'flex justify-center items-center gap-5'} w-40 h-15 bg-black text-white rounded-[20px] cursor-pointer hover:bg-gray-500 duration-180`} onClick={backClick}>
                    Buy
                    <img src={next} alt="er" className="w-10 h-10"/>    
                </button>
            </div>
       </div>
    )
}
export default Mycart;