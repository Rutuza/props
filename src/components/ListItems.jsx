
const ListItems = (props) => {
  console.log(props.Items);
  return (

      <li key={props.Items} className="list-group-item">
        {props.Items}
      </li>
  );
};

export default ListItems;
