import { connect } from "react-redux";
import App from "../components/App";
import { minus, plus, asyncMinus, getJson } from "../actions";

const mapStateToProps = (state) => {
  return {
    number: state.number,
    day: state.day,
    title: state.title
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch(plus(num));
    },
    minus: (num) => {
      dispatch(minus(num));
    },
    asyncMinus: (num) => {
      dispatch(asyncMinus(num));
    },
    getJson: () => {
      dispatch(getJson());
    }
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
