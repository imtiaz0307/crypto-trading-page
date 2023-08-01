import "./App.css"
import Actions from "./Components/Actions";
import Balance from "./Components/Balance";
import CurrenciesList from "./Components/CurrenciesList";
import FixedBar from "./Components/FixedBar";
import Navbar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <Balance />
      <Actions />
      <Portfolio />
      <CurrenciesList />
      <FixedBar />
    </div>
  )
}

export default App;