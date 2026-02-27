import {useState, useEffect} from 'react'

const LaughterMenu = [
  {
    name: "Bobolo and ndole",
    ingredients: "Washed bitterleaf and clean fermented cassava",
    price: 10,
    photoName: "assets/BOBOLO.jpg",
    summary:
      "Ndole is a beloved Cameroonian dish, often considered a national dish, known for its rich, savory, and slightly bitter flavor. It's a stew-like dish primarily made with ndoleh leaves (a type of bitter leaf), groundnuts (usually peanuts), and a choice of meat or fish",
    id: 567,
  },
  {
    name: "Deje",
    ingredients:
      "French fried Chicken mixed with fried plantain inside stemming sauce ",
    price: 30,
    photoName: "assets/Deje.jpeg",
    summary:
      "Poulet DG  also known as Chicken DG or Poulet Directeur Général, is a popular Cameroonian dish that translates to Chicken for the Director General. It is a flavorful combination of fried chicken and plantains, typically served with a tomato-based sauce and vegetables",
    id: 231,
  },
  {
    name: "Egwang",
    ingredients: "Cocoa wrap inside leaf mixed with red oil and fish",
    price: 12,
    photoName: "assets/egwang.jpg",
    summary:
      "Ekwang, also known as Ekpang Nkukwo, is a traditional Cameroonian and Nigerian dish made with grated cocoyams wrapped in cocoyam leaves and simmered with various ingredients",
    id: 135,
  },
  {
    name: "Achu",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "assets/achu.jpg",
    summary:
      "Achu is a traditional Cameroonian dish consisting of pounded cocoyam (taro) served with a flavorful yellow soup. The soup is made with palm oil, spices, and sometimes limestone, and the pounded cocoyam is often shaped into a ball or cone and eaten with one finger",
    id: 345,
  },
  {
    name: " Jellof",
    ingredients: "Fried rice and chicken",
    price: 15,
    photoName: "assets/jellof.jpg",
    summary:
      "Jollof is a popular West African one-pot rice dish known for its vibrant color and rich, savory flavor. It's typically made with long-grain rice, tomatoes, onions, peppers, and a blend of spices, often including curry powder, thyme, and bay leaves. ",
    id: 768,
  },
  {
    name: "Kwa Coco",
    ingredients: "Kwa Cocoa wrap inside plaintain Leaf",
    price: 18,
    photoName: "assets/kwacoco.jpg",
    summary:
      "Kwacoco, also known as Kwacoco Bible, is a traditional Cameroonian dish. It's made from grated cocoyam (taro) mixed with ingredients like smoked fish, palm oil, and spices, then wrapped and steamed in banana or plantain leaves ",
    Status: "Popular",
    id: 97,
  },
  {
    name: "Ndole",
    ingredients: "Clean washed bitterleaf prepared with special Groundnut",
    price: 18,
    photoName: "assets/Ndole.jpg",
    summary:
      " Ndole is a stewed dish that is considered the national dish of Cameroon. It's made with ndoleh leaves (a type of bitter leaf), groundnuts (usually peanuts), and a choice of meat or fish, often with the addition of crayfish and spices. The dish is known for its rich, slightly bitter flavor and is often served with boiled plantains, rice, or fufu.",
    Status:"Popular",
      id: 653,
  },
  {
    name: "Peper Soup Plaintain",
    ingredients: "Spicy plaintain and loaded egusi",
    price: 18,
    photoName: "assets/plaintainsoup.jpg",
    summary:
      "Peppersoup is a spicy, light-bodied soup popular in Nigeria and other parts of West Africa. It's characterized by its use of chili peppers, various meats or fish, and aromatic herbs and spices like scent leaves and calabash nutmeg.",
    Status: "Popular",
    id: 975,
  },
  {
    name: "Snails",
    ingredients: "Well cooked spicy nails",
    price: 18,
    photoName: "assets/snails.jpg",
    snails:
      "Snail soup is a type of soup that features snails as a primary ingredient. Several variations exist, with different regions and cultures having their own unique recipes and preparations. ",
    id: 943,
  },
  {
    name: "Turning Coacoa",
    ingredients: "Coacoa and red oil",
    price: 18,
    photoName: "assets/turnindCocoa.jpg",
    summary:
      "Cocoa dish typically refers to dishes that incorporate cocoa powder or chocolate, the products made from cacao beans. Cocoa powder is a dry powder made from roasted and ground cacao beans, with the fat (cocoa butter) removed. ",
    id: 753,
  },
  {
    name: "Water Fufu & Eru soap",
    ingredients: "Fermented Cassava and African Eru with Kanda",
    price: 18,
    photoName: "assets/waterfufu.jpg",
    summary:
      " Water fufu and eru is a popular Cameroonian dish consisting of a starchy, smooth dumpling called water fufu, typically made from cassava or yam flour, and a rich, flavorful soup called eru.",
    Status: "Popular",
    id: 921,
  },
];

const Hours=[
{
  day:"Monday",
  delivery:"12:00 - 22:00",
  pickUp:"12:00-22:00",
},
{
  day:"Tuesday",
  delivery:"12:00 - 22:00",
  pickUp:"12:00-22:00",
},
{
day:"Wednesday",
  delivery:"12:00 - 22:00",
  pickUp:"12:00-22:00",
},
{
  day:"Thursday",
  delivery:"12:00 - 22:00",
  pickUp:"12:00-22:00",
},
{
day:"Friday",
  delivery:"12:00 - 22:00",
  pickUp:"12:00-22:00",
},
{
  day:"Saturday",
  delivery:"12:00 - 22:00",
  pickUp:"12:00-22:00",
}
];
  
const sum=(arr)=>arr.reduce((a,b)=>a+b,0)
export default function Home() {
  const [meals, setMeals] = useState(LaughterMenu)
  const [showOrderForm, setShowOrderForm] = useState(true)
  const [selected, setSelected] = useState(null)
  const [order, setOrder] = useState(1)
  const [items, setItems] = useState([])
  const [openingHours, setOpeningHours] = useState(Hours)
  const [showOpeningHours, setShowOpeningHours] = useState(false)
   const [selectedItem, setSelectedItem] = useState(null);

  
  function handlePlaceOrder(meal){
    setSelected((select) => (select?.id === meal.id ? null : meal))
    setShowOrderForm(true)
  }
/*  function handleAddtocart(item){
    if (item.name !==selected.name)  {
    setItems((items) => [
      ...items,
      { 
        name: selected.name,
        price: selected.price * order,
        photo: selected.photoName,
        order: order,
      }
    ]);
  } else{
      setItems((items)=>
        items.map((i)=>
          i.name === item.name
        ? {
          ...i, 
         price:i.price + selected.price*order ,
         order:i.order + order        
      } : i
     )
    )  
    }
    setShowOrderForm(false)
    setSelected(null)
  }

    function handleAddtocart(item) {
      if (item.name !== selected.name) {
        setItems((items) => [
          ...items,
          {
            name: selected.name,
            price: selected.price * order,
            photo: selected.photoName,
            order: order,
          },
        ]);
      } else {
        setItems((items) =>
          items.map((i) =>
            i.name === item.name
              ? {
                  ...i,
                  price: i.price + selected.price * order,
                  order: i.order + order,
                }
              : i
          )
        );
      }

      setShowOrderForm(false);
      setSelected(null);
      setOrder(1);
    }*/
   
function handleAddtocart(item) {
  const alreadyInCart = items.find((i) => i.name === item.name);

  if (!alreadyInCart) {
    setItems((items) => [
      ...items,
      {
        name: selected.name,
        price: selected.price * order,
        photo: selected.photoName,
        order: order,
      },
    ]);
  } else {
    setItems((items) =>
      items.map((i) =>
        i.name === item.name
          ? {
              ...i,
              price: i.price + selected.price * order,
              order: i.order + order,
            }
          : i
      )
    );
  }

  setShowOrderForm(false);
  setSelected(null);
  setOrder(1); // reset to 1
}

  function handleOpeningHours(){
    setShowOpeningHours(true)
    setOpeningHours((openingHours)=>[
      ...openingHours,{ day:"", delivery:"", pickUp:""
      }
    ])
  }
  return (
    <div>
      <div class="bg-[url('https://s3.amazonaws.com/shecodesio-production/uploads/files/000/171/052/original/Traditional-African-Food.jpg?1753347598')] bg-cover bg-no-repeat h-96 mt-[20px]">
        <h1 class="text-center text-5xl mt-[10px]">
          WELCOME TO LAUGHTER KITCHEN
        </h1>
      </div>


      <div className="w-full flex mt-10">
        <div className='w-9/12'>
        <Menu
          meals={meals}
          onhandlePlaceOrder={handlePlaceOrder}
          selected={selected}
        />
        </div>
        <div className=" w-3/12 h-fit bg-white rounded-lg p-3 mr-4 shadow-md border border-white mt-3">
        <YourOrder items={items} setItems={setItems} showOrderForm={showOrderForm} onhandleOpeningHours={handleOpeningHours} />
        </div>
      </div>
      { showOrderForm && selected &&  (
        <div className="fixed inset-0  bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50 w-2-12">
          <OrderForm
            selected={selected}
            setSelected={setSelected}
            onhandleAddtocart={handleAddtocart}
            order={order}
            setOrder={setOrder}
          />
        </div>
      )}
      { showOpeningHours &&
      <div className ="fixed inset-0  bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50 w-2-12" >
      <OpeningHours
      openingHours={openingHours}
     onhandleOpeningHours={handleOpeningHours}
      />
      </div>
}
    </div>
  );
}
// i try to composed but it not work
function Menu({
  meals,
  onhandlePlaceOrder,
  selected,
}) {
  const [showFood, setShowFood] = useState(null)
  const [rate, setRate] = useState(0)
  const [temp, setTemp] = useState(2)
  const [viewersRating, setViewerRating] = useState(0)
  function handleShowFood(id) {
    setShowFood(id !== showFood ? id : null);
  }
  function handleRating(rate) {
    setRate(rate)
    setTemp(rate)
    setViewerRating(rate)
  }
  // Menu is responsible for managing the individual items that why i lifted the state
  return (
    <div>
        <h1 class="text-[30px] font-bold text-center">Menu</h1>
        <span class="flex">
        {Array.from({ length: 5 }, (_, i) => (
          <StarRating
            full={temp ? temp >= 1 + i : rate >= 1 + i}
            onRating={() => handleRating(i + 1)}
            onHoverEnter={() => setTemp(i + 1)}
            onHoverLeave={() => setTemp(0)}
            viewersRating={viewersRating}
          />
        ))}
      </span>
      {meals.map((meal) => (
        <MenuList
          meal={meal}
          key={meal.id}
          showFood={showFood}
          setShowFood={setShowFood}
          onhandleShowFood={handleShowFood}
          onhandlePlaceOrder={onhandlePlaceOrder}
          selected={selected}
        />
      ))}
    </div>
  );
}
 function MenuList({meal, showFood, onhandleShowFood, onhandlePlaceOrder}){
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
 // const isSelected = selected?.id === meal.id
 // i put this but because i havent use the isSelected, i dont think its neccessary
  function handleLike(){
 setLike(like < 1 ? like + 1 : 1)
 setDislike(dislike === 1 ? dislike - 1 : dislike)
  }
function handleDislike(){
  setDislike(dislike < 1 ? dislike + 1 : 1)
  setLike(like === 1 ? like - 1 : like)
}
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mb-4 w-11/12">
      <div className="flex justify-between">
        <span>
          <h1
            className="text-[30px] font-bold text-gray-800 hover:underline"
            onClick={() => onhandleShowFood(meal.id)}
          >
            {meal.name}
          </h1>
          <p className="text-[15px] text-gray-600">{meal.ingredients}</p>
          {meal.Status && (
            <p className="bg-green-400 p-2 w-fit border-none rounded-lg">{meal.Status}</p>
          )}
          <p>{meal.price}$</p>
          <button onClick={handleLike}> 👍</button>
          <span>{like}</span>
          <button onClick={handleDislike}>👎</button>
          <span>{dislike}</span>
        </span>
        {meal.id === showFood && (
          <span>
            <img
              src={meal.photoName}
              className="w-[70px] h-auto object-cover rounded-lg"
            />
            <button onClick={()=>onhandlePlaceOrder(meal)} className="bg-green-800 mt-2 border rounded-lg text-md p-1 text-white  hover:text-blue-400">Place Order</button>
          </span>
        )}
      </div>
    </div>
  );
 }

 function OrderForm({selected, setSelected, order, setOrder, onhandleAddtocart}){
  const [error, setError] = useState("Max amount of order is 5☹️")
  function handleOrder(){
    if(order >= 5) return;
    setOrder(order + 1)
  }
const  price = order* selected.price
function closeForm(){
  setSelected(null)
}
 return (
   <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto animate-fade-in-up relative ">
     <span>
       <button onClick={closeForm}>X</button>
     </span>
     <img
       className="w-full h-64 object-cover rounded-md mb-4 "
       src={selected.photoName}
     />

     <h1>{selected.name}</h1>
     <p>{selected.summary}</p>

     <div className="flex w-full flex-row gap-4">
       <span className="bg-gray-200 rounded-sm w-2/12 p-2 justify-between items-center flex">
         {order}
         <button onClick={handleOrder} className="bg-gray-100 w-1/3 ml-2">
           +
         </button>
       </span>
       <div className="bg-red-500 rounded-md p-2 flex-1 flex justify-between items-center ml-[40px]">
         <span className="text-white text-sm"> Add {order} to order</span>{" "}
         <span>{price}</span>
       </div>
     </div>
     <button onClick={()=>onhandleAddtocart(selected)} className="bg-blue-300 w-[300px] justify-center items-center ml-[150px] mr-[150px] rounded-lg p-2 mt-3">
       Add to Cart
     </button>
   </div>
 );
 }
   function YourOrder({items, setItems, onhandleOpeningHours}){
    const [message, setMessage]= useState("")
    const [showBill, setShowBill] =useState(false)
   
    function handlePayMent(){
      setShowBill(true)
    }
    function handleRemoveItem(itemName){
      setItems((items)=>items.filter((item)=> item.name !== itemName)) // because the items id is item.name
    }

    const itemsSum= sum(items.map((item)=>item.price))
    const orders = sum(items.map((item)=>item.order))
    const Vat = 3/100 * itemsSum
    const deliveryFee = 1/100 * itemsSum
    const Bill = itemsSum + Vat + deliveryFee
    
  useEffect (()=>{
    handleDeliveryMessage();
  }, []);
  function handleDeliveryMessage(){
    setMessage("Delivery is currently unavailable. Please check back")
  }
     
     function handlePickupMessage(){
      setMessage("Please provide details on who is picking up your Order")
    
     }
    return (
      <div>
        <div>
          <span className="bg-gray-200 p-1 flex justify-between">
            <button onMouseOver={handleDeliveryMessage}>Delivery</button>
            <button onMouseOver={handlePickupMessage}>PickUp</button>
          </span>
          <div className="bg-gray-100 p-4 mt-2 p-4">
            {message}
            <span>
              <button onClick={onhandleOpeningHours} class="border-[3px] bg-gray-300 rounded-lg p-1 text-[15px] hover:text-white">
                Check Our Opening Hours
              </button>
            </span>
          </div>
        </div>
        {orders <= 0 && (
          <p> Your Cart is Empty </p>
        )}
          <div>
            {items.map((item) => (
              <div key={item.name}>
                <h1 className="text-lg font-bold">Your Order</h1>
                <span className="flex justify-between">
                  <p>{item.name}</p>

                  <img className="w-[50px] rounded-md" src={item.photo} />
                </span>
                <p>{item.order}</p>
                <p>{item.price}$</p>
                <button className='text-[9px] text-red-900' onClick={()=>handleRemoveItem(item.name)}>Remove Item</button>
              </div>
            ))}
          </div>
        
        <div>
          {showBill && (
            <div className="bg -gray-100 p-4 rounded-md space-y-2">
              <span className="flex justify-between">
                <p>Food cost </p>
                <p>{itemsSum}$</p>
              </span>
              <span className="flex justify-between">
                <p>Vat 3%</p>
                <p>{Vat}$</p>
              </span>
              <span className="flex justify-between">
                <p>Delivery fee 1%</p>
                <p>{deliveryFee}$</p>
              </span>
              <span className="flex justify-between">
                <p>Total Bill</p>
                <p>{Bill}$</p>
              </span>
            </div>
          )}
          {orders >= 1 && (
            <button onClick={handlePayMent} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              {showBill === false ? "CheckOut" : "Pay"}
            </button>
          )}
        </div>
      </div>
    );
   }

  function OpeningHours({openingHours}){
    return(
      <div>
        <h2>OpeningHours</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Delivery</th>
              <th>PickUp</th>
            </tr>
          </thead>
          <tbody>
          {openingHours.map((hour)=>(
            <tr>
            <td>{hour.day}</td>
            <td>{hour.delivery}</td>
            <td>{hour.pickUp}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }

  function StarRating({full,
     onRating, onHoverEnter, onHoverLeave,}){
    
    return(
      <div class="w-[20px]"
      onClick={onRating}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      >
        { full ? (
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="red"
        stroke="blue"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
        ):(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="red"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
        )}
      </div>
    )
  }