function FruitList({ fruitList }) {
  return (
    <ul>
      {fruitList.map((fruit) => {
        return <li>{fruit}</li>;
      })}
    </ul>
  );
}

export default FruitList;
