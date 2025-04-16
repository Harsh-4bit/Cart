import cart2 from '/cart2.svg';
import { useNavigate } from 'react-router-dom';
import Card from './Card.jsx';
import next from '/next.svg';

function Home({ addedItems, setAddedItems }) {
  const navigate = useNavigate();
  const shop = ['ap', 'ip', 'ms', 'mb', 'ipd', 'pt', 'mg', 'sh', 'on'];

  function mycartClick() {
    navigate('/Mycart');
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen justify-between gap-10">
      
      <div className="
        backdrop-blur-xl fixed z-10 flex 
        flex-col sm:flex-row 
        justify-center items-center 
        gap-4 sm:gap-8 
        w-full sm:w-11/12 md:w-3/4 lg:w-2/3 
        h-auto sm:h-28 
        px-2 sm:px-8 py-3 
        rounded-none sm:rounded-[50px] 
        border-b-2 sm:border-3 border-lime-100
        bg-white/60
        mt-0 sm:mt-4
      ">
        <button
          className="
            flex items-center justify-evenly 
            bg-black w-full sm:w-60 h-12 sm:h-15 
            text-lime-100 text-lg sm:text-xl 
            rounded-[18px] sm:rounded-[25px] 
            font-semibold cursor-pointer 
            hover:bg-gray-600 duration-150
            mb-2 sm:mb-0
          "
          onClick={mycartClick}
        >
          MY CART
          <img src={next} alt="Next" className="w-8 h-8 sm:w-10 sm:h-10 ml-2" />
        </button>
        <div className="flex items-center">
          <img src={cart2} alt="Cart" className="w-10 h-8 sm:w-16 sm:h-10" />
          <div className="
            flex justify-center items-center 
            font-bold w-8 h-8 sm:w-10 sm:h-10 
            bg-lime-200 rounded-full text-black 
            text-lg sm:text-xl ml-2
          ">
            {addedItems.length}
          </div>
        </div>
      </div>

      
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-8 sm:gap-10 md:gap-20 
        w-full max-w-7xl 
        px-2 sm:px-4 md:px-8 
        mt-32 sm:mt-40 mb-20
      ">
        {shop.map((shopId) => (
          <Card
            key={shopId}
            id={shopId}
            isAdded={addedItems.includes(shopId)}
            setAddedItems={setAddedItems}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
