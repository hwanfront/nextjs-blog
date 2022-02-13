import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const Todo = () => {
  const [display, setDisplay] = useState(false);
  const getProducts = useCallback(async () => {
    const url =
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const res = await axios.get(url);
    console.log(res.data);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      {display && `todo`}
      <button onClick={() => setDisplay(!display)}>토글</button>
    </div>
  );
};

export default Todo;
