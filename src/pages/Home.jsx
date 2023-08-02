import Navbar from "../Components/Navbar"
import Actions from "../Components/Actions";
import Balance from "../Components/Balance";
import CurrenciesList from "../Components/CurrenciesList";
import FixedBar from "../Components/FixedBar";
import { useEffect, useRef, useState } from "react";
import Portfolio from "../Components/Portfolio";

const Home = () => {
    const fixedBarRef = useRef(null);
    const [paddingBottom, setPaddingBottom] = useState()

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPaddingBottom(fixedBarRef?.current?.offsetHeight)
        }
    }, [])
    return (
        <div style={{ paddingBottom: `${paddingBottom}px` }}>
            <Navbar />
            <Balance />
            <Actions />
            <Portfolio />
            <CurrenciesList />
            <FixedBar fixedBarRef={fixedBarRef} />
        </div>
    )
}

export default Home