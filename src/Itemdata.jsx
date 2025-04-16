import { useEffect } from 'react';

function Itemdata({ id, addedItems, setAddedItems }) {
  let name, price;

  
  const isAdded = addedItems.includes(id);

  function item() {
    if (id === 'ap') name = 'Apple Airpods', price = '₹ 2,200';
    else if (id === 'ip') name = 'Iphone 14 Pro', price = '₹ 69,000';
    else if (id === 'ms') name = 'Magic Mouse', price = '₹ 7,500';
    else if (id === 'mb') name = 'Mac Book Pro', price = '₹ 1,11,000';
    else if (id === 'ipd') name = 'Apple Ipad', price = '₹ 50,000';
    else if (id === 'pt') name = 'Potato', price = '₹ 500';
    else if (id === 'mg') name = 'Maggi', price = '₹ 14';
    else if (id === 'sh') name = 'Schezwan Sauce', price = '₹ 100';
    else if (id === 'on') name = 'Onion', price = '₹ 20';
  }
  item();

  
  function remClick() {
    setAddedItems(prev => prev.filter(itemId => itemId !== id));
  }

  
  if (!isAdded) return null;

  return (
    <div className="flex justify-between items-center w-[50rem] h-15 px-20 rounded-[15px] gap-10 bg-yellow-100">
      <h1 className="text-lg font-semibold">{name}</h1>
      <h1 className="text-lg">{price}</h1>
      <button
        className="bg-orange-600 text-white w-25 h-9 rounded-[20px] font-semibold cursor-pointer hover:bg-orange-500 duration-200"
        onClick={remClick}
      >
        Remove
      </button>
    </div>
  );
}

export default Itemdata;
