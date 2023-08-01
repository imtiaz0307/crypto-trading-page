import { useEffect, useRef, useState } from "react";
import "./App.css"
import Actions from "./Components/Actions";
import Balance from "./Components/Balance";
import CurrenciesList from "./Components/CurrenciesList";
import FixedBar from "./Components/FixedBar";
import Navbar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio";

const App = () => {
  const fixedBarRef = useRef(null);
  const [height, setHeight] = useState()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(fixedBarRef?.current?.offsetHeight)
    }
  }, [])
  return (
    <div style={{ paddingBottom: `${height}px` }}>
      <Navbar />
      <Balance />
      <Actions />
      <Portfolio />
      <CurrenciesList />
      <FixedBar fixedBarRef={fixedBarRef} />
    </div>
  )
}

export default App;