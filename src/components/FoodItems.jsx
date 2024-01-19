import ListItems from "./ListItems";


const FoodItems = () => {
  let fooditems = ["dal", "salad", "ghee", "milk", "rice", "chapati"];
  return (
    <>
      <ul className="list-group">
        {/* conditional rendering
        {fooditems.length === 0 ? <h4>I am still hungry.</h4> : null}
        {emptymsg} */}
        {fooditems.map((items) => {
            <ListItems FoodItems={items}></ListItems>

        })}
      </ul>
    </>
  );
};

export default FoodItems;
