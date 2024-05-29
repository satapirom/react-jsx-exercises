import React, { useState } from "react";

const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

	return (
		<footer>
			<temperature 
			temperature = {temperature} 
			decrease ={decreaseTemperature} 
			increase ={increaseTemperature}/>
		</footer>
	)
};

const TemperatureButton = ({temperature, decrease,increase}) =>{
	return(
		<footer>
			<button onClick={decrease}>Down</button>
			<button onClick={increase}>Down</button>
		</footer>
	);

}
export default App;
