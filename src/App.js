import { useEffect, useState } from "react";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    //indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째
    //인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(item);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    //ndexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
