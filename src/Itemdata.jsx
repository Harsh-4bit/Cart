import { useEffect } from 'react';

function Itemdata({ id, addedItems, setAddedItems }) {
  let name, price;

  
  if (id === 'ap') name = 'Apple Airpods', price = '₹ 1000';
  else if (id === 'ip') name = 'Iphone 14 Pro', price = '₹ 29,000';
  else if (id === 'ms') name = 'Magic Mouse', price = '₹ 6,900';
  else if (id === 'mb') name = 'Mac Book Pro', price = '₹ 1,11,000';
  else if (id === 'ipd') name = 'Apple Ipad', price = '₹ 20,000';
  else if (id === 'pt') name = 'Potato', price = '₹ 50';
  else if (id === 'mg') name = 'Maggi', price = '₹ 11';
  else if (id === 'sh') name = 'Schezwan Sauce', price = '₹ 85';
  else if (id === 'on') name = 'Onion', price = '₹ 18';

  function remClick() {
    setAddedItems(prev => prev.filter(itemId => itemId !== id));
  }

  if (!addedItems.includes(id)) return null;

  return (
    <div className="
      flex flex-col sm:flex-row 
      justify-between items-center 
      w-full max-w-2xl 
      h-auto sm:h-16 
      px-4 sm:px-8 
      py-4 sm:py-0 
      rounded-lg sm:rounded-[15px] 
      gap-3 sm:gap-10 
      bg-yellow-100
      shadow
      transition-all
    ">
      <h1 className="text-base sm:text-lg font-semibold text-center sm:text-left">{name}</h1>
      <h1 className="text-base sm:text-lg text-center sm:text-left">{price}</h1>
      <button
        className="
          bg-orange-600 text-white 
          w-full sm:w-24 
          h-9 rounded-xl sm:rounded-[20px] 
          font-semibold cursor-pointer 
          hover:bg-orange-500 duration-200
          mt-2 sm:mt-0
        "
        onClick={remClick}
      >
        Remove
      </button>
    </div>
  );
}

export default Itemdata;
