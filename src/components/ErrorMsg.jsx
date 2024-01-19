const ErrorMsg = () => {
    let fooditems = ["dal", "salad", "ghee", "milk", "rice", "chapati"];
    
  return (
    <>
        {fooditems.length === 0 && <h3>I am still hungry</h3>}
    </>
  );
}

export default ErrorMsg;
