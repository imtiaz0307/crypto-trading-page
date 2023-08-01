import { BiHomeSmile, BiBarChartAlt2 } from "react-icons/bi"
import { BsWallet2 } from "react-icons/bs"
import { CgArrowsExchangeAltV } from "react-icons/cg"
import { MdOutlineManageHistory } from "react-icons/md"
import "./index.css"

const FixedBar = ({ fixedBarRef }) => {
    return (
        <div style={{
            position: "fixed",
            bottom: "0px",
            left: "10px",
            width: "calc(100% - 20px)",
            borderRadius: "20px",
            padding: "1rem",
            display: "flex",
            gap: "1rem",
            zIndex: 999999
        }} ref={fixedBarRef} className="fixed__bar">
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "white",
                fontSize: "6vw"
            }}>
                <BiHomeSmile />
                <p style={{ fontSize: "3vw" }}>Home</p>
            </div>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "#a8a8a8",
                fontSize: "6vw"
            }}>
                <BsWallet2 style={{ scale: ".8" }} />
                <p style={{ fontSize: "3vw" }}>Wallet</p>
            </div>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "#a8a8a8"
            }}>
                <div style={{
                    background: "#e1f8ff",
                    color: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    scale: "2.5",
                    transformOrigin: "bottom center",
                    borderRadius: "2vw",
                    fontSize: "6vw"
                }}>
                    <CgArrowsExchangeAltV style={{ boxShadow: "0 0 2px  #e1f8ff", borderRadius: "2vw" }} />
                </div>
                <p style={{ fontSize: "3vw" }}>Exchange</p>
            </div>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "#a8a8a8",
                fontSize: "6vw"
            }}>
                <BiBarChartAlt2 />
                <p style={{ fontSize: "3vw" }}>History</p>
            </div>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "#a8a8a8",
                fontSize: "6vw"
            }}>
                <MdOutlineManageHistory />
                <p style={{ fontSize: "3vw" }}>History</p>
            </div>
        </div>
    )
}

export default FixedBar;