import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
    const validator = () => {
        if(props.numberOfCakes < 1) {
            alert ("no more cakes in the store")
        }
    }
    const buyCakeHandler = () => {
        props.buyCake()
        validator()
    }
  return (
    <div>
      <h2>Number of cakes: {props.numberOfCakes}</h2>
      <button onClick={buyCakeHandler}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
