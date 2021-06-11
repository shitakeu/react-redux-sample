import axios from "axios";

export const plus = (num) => {
  return { type: "PLUS", payload: { num: num } };
};
export const minus = (num) => {
  return { type: "MINUS", payload: { num: num } };
};
export const asyncMinus = (num) => {
  return (dispach) => {
    setTimeout(() => {
      dispach({ type: "MINUS", payload: { num: num } });
    }, 1000);
  };
};

export const getJson = () => {
  return (dispach) => {
    const url = "https://www.google.com/";
    axios.get(url).then((res) => {
      console.log(res.data);
    });
  };
};
