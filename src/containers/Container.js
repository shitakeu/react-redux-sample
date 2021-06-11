import { connect } from "react-redux";
import App from "../components/App";
import { minus, plus } from "../actions";

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
    }
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
