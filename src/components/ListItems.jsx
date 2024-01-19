
const ListItems = (props) => {
  return (

      <li key={props.FoodItems} className="list-group-item">
        {props.Fooditems}
      </li>
  );
};

export default ListItems;
