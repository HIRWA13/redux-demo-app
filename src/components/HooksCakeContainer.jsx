import { useSelector } from "react-redux";

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.numberOfCakes);
    console.log(numberOfCakes);
  return (
    <div>
      <h1>Number of available cakes - {numberOfCakes}</h1>
      <button>Buy Cake</button>
    </div>
  );
}
export default HooksCakeContainer;
