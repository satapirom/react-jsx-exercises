import React, { useState } from "react";

const App = () => {
	const temperature = 25;

	return(
		<>
			<Header temperature={temperature}/>
			<Content temperature={temperature}/>

		</>
	);
};

const Header =({temperature}) => {
	return(
		<div>
			<button>ON/OFF</button>
     		<p>current Temperature:{temperature} °C</p>
		</div>
	)
}
const Content = ({temperature}) => {
	return(
	  <div>
		<Temperature temperature = {temperature}/>
	  </div>
	);
  }
  
  const Temperature =({temperature}) => {
	return<div>temperature = {temperature}°C</div>;
  };

export default App;
