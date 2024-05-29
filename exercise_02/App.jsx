
const App = () => {
	return (
    <div>
      <Header/>
      <Content/>
    </div>

    
  );
};

const Header = (temperature) => {
  return(
    <div>
      <button>ON/OFF</button>
      <p>current Temperature:{temperature}</p>
    </div>
  )
}

const Content = () => {
  return(
    <div>
      <temperature />
    </div>
  );
}

const Temperature =() => {
  return<div>25 °C</div>;
};

const Footer =()=>{
  return(
    <div>
      <button>Down</button>
      <button>Up</button>
    </div>
  );
}

export default App;