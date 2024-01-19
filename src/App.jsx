import "./App.css";
import ErrorMsg from "./components/ErrorMsg";
import FoodAppTitle from "./components/FoodAppTitle";
import FoodItems from "./components/FoodItems";

function App() {
  // let fooditems = ["dal", "salad", "ghee", "milk", "rice", "chapati"];
  

  // let emptymsg = fooditems.length === 0 ? <h3>I am still hungry</h3> : null ;
  // if(fooditems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }
  return (
    <>
      <FoodAppTitle />
      <FoodItems />
      <ErrorMsg />
    </>
  );
}

export default App;
