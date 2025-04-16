import airpod from '/airpod.jpg'
import iphone from '/iphone.jpg';
import mouse from '/mouse.jpg';
import macbook from '/macbook.jpg';
import ipad from '/ipad.jpg';
import shezwan from '/shezwan.jpg';
import maggi from '/maggi.jpg';
import potato from '/potato.jpg';
import onion from '/onion.jpg';
import {useState} from 'react'

function Card({id, isAdded, setAddedItems}){
    
    
    
    let name, price, img;
    function item(){
        if(id == 'ap') name='Apple Airpods', price='₹ 2,200', img=airpod;
        else if(id == 'ip') name='Iphone 14 Pro', price='₹ 69,000', img=iphone;
        else if(id == 'ms') name='Magic Mouse', price='₹ 7,500', img=mouse;
        else if(id == 'mb') name='Mac Book Pro', price='₹ 1,11,000', img=macbook;
        else if(id == 'ipd') name='Apple Ipad', price='₹ 50,000', img=ipad;
        else if(id == 'pt') name='Potato', price='₹ 500', img=potato;
        else if(id == 'mg') name='Maggi', price='₹ 14', img=maggi;
        else if(id == 'sh') name='Schezwan Sauce', price='₹ 100', img=shezwan;
        else if(id == 'on') name='Onion', price='₹ 20', img=onion;
    }
    item();

    function addClick() {
        if (!isAdded) {
          setAddedItems(prev => [...prev, id]);
        }
    }

    return(
        
            <div>
                
                <div className="group flex flex-col flex-wrap items-center justify-evenly w-85 h-110 border-1 border-black rounded-[20px] hover:-translate-y-1 duration-400 hover:shadow-2xl">
                
                    <div className='flex justify-center items-center w-53 h-53 bg-black rounded-[20px] overflow-hidden'>
                        <img src={img} alt="er" className='w-50 h-50 rounded-[20px] group-hover:scale-120 duration-700'/>
                    </div>
                
                    <div className='flex flex-col justify-evenly h-45'>
                        <h1 className='text-xl text-center font-semibold '>{name}</h1>
                        <h1 className='text-xl  font-semibold text-center'>{price}</h1>
                        <button className={`text-lg font-semibold h-13 w-60 rounded-[25px] ${!isAdded ? 'bg-black cursor-pointer hover:bg-gray-500 text-lime-100 duration-180' : 'bg-emerald-200 text-black pointer-events-none duration-180'}`} onClick={addClick} disables={isAdded}>{!isAdded ? 'Add To Cart' : 'Item Added'}</button>
                    </div>

                </div>
            
            </div>

             
    )
}
export default Card;