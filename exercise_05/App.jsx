
import React, {useState} from "react";

const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value
	const [isOn, setIsOn] = useState(true); // Initial visibility state

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);
	const toggleIsOn = () => setIsOn(!isOn);

	return (
		<div>
			<header isOn = {isOn} toggleIsOn ={toggleIsOn}/>
			<temperature 
			temperature = {temperature} 
			decrease ={decreaseTemperature} 
			increase ={increaseTemperature}/>
		</div>
	);
};

const Header = (isOn, toggleIsOn)=>{
	return(
		<header>
			<button onClick = {toggleIsOn}>{isOn ? 'OFF' : 'NO'}</button>
			{isOn && <div>Current Temperature</div>}
		</header>
	)
}

const TemperatureButton = ({temperature, decrease,increase}) =>{
	return(
		<footer>
			<span>Current Temperature:{temperature}°C</span>
			<button onClick={decrease}>Down</button>
			<button onClick={increase}>Down</button>
		</footer>
	);

}

export default App;

