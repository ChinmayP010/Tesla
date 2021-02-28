import './App.css';
import Header from './Components/Header'
import Accesssories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from './Components/Item';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
          <Item 
            title="ModelS"
            desc="Money Back Guarantee"
            backgroundImg={Model3}
            leftButtonText="ORDER NOW"
            rightButtonText="LEARN MORE"
            twoButtons='true'
            first
          />
            <Item 
            title="ModelS"
            desc="Money Back Guarantee"
            backgroundImg={ModelS}
            leftButtonText="ORDER NOW"
            rightButtonText="LEARN MORE"
            twoButtons='true'
            //first
          />  <Item 
            title="ModelS"
            desc="Money Back Guarantee"
            backgroundImg={ModelX}
            leftButtonText="ORDER NOW"
            rightButtonText="LEARN MORE"
            twoButtons='true'
            //first
          />  <Item 
            title="ModelX"
            desc="Money Back Guarantee"
            backgroundImg={ModelY}
            leftButtonText="ORDER NOW"
            rightButtonText="LEARN MORE"
            twoButtons='true'
            //first
          />  <Item 
            title="ModelX"
            desc="Money Back Guarantee"
            backgroundImg={Model3}
            leftButtonText="ORDER NOW"
            rightButtonText="LEARN MORE"
            twoButtons='true'
            //first
          />  <Item 
            title="ModelX"
            desc="Money Back Guarantee"
            backgroundImg={Model3}
            leftButtonText="ORDER NOW"
            rightButtonText="LEARN MORE"
            twoButtons='true'
            //first
          />
      </div>
    </div>
  );
}

export default App;
