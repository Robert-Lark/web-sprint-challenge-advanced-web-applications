import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { axiosWithAuth } from "../API/axiosAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { useParams } from "react-router-dom";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

const params = useParams();
console.log(params);

const getData = () => {
	axiosWithAuth()
		.get("/colors")
		.then((res) => setColorList(res.data))
		.catch((err) => console.log(err));
};
const getData2 = () => {
	axiosWithAuth()
		.get("/colors")
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
};

	useEffect(() => {
		getData();
  }, []);
  
	useEffect(() => {
		getData2();
	}, []);

  
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
		<>
			{/* <Route path="protected/:id"> */}
				<ColorList colors={colorList} updateColors={setColorList} />
			{/* </Route> */}
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
