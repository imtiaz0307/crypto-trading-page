import { BiHomeSmile, BiBarChartAlt2 } from "react-icons/bi"
import { BsWallet2 } from "react-icons/bs"
import { CgArrowsExchangeAltV } from "react-icons/cg"
import { MdOutlineManageHistory } from "react-icons/md"

const FixedBar = () => {
    return (
        <div style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            width: "calc(100% - 20px)",
            background: "#171e2a",
            borderRadius: "20px",
            padding: "1rem",
            display: "flex",
            gap: "1rem",
            zIndex: 999999
        }}>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontSize: "1.1rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "white",
            }}>
                <BiHomeSmile size={30} />
                <p>Home</p>
            </div>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontSize: "1.1rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "#a8a8a8"
            }}>
                <BsWallet2 size={30} style={{ scale: ".8" }} />
                <p>Wallet</p>
            </div>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontSize: "1.1rem",
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
                    borderRadius: "10px"
                }}>
                    <CgArrowsExchangeAltV size={30} />
                </div>
                <p>Exchange</p>
            </div>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontSize: "1.1rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "#a8a8a8"
            }}>
                <BiBarChartAlt2 size={30} />
                <p>History</p>
            </div>
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".4rem",
                fontSize: "1.1rem",
                fontWeight: "500",
                cursor: "pointer",
                color: "#a8a8a8"
            }}>
                <MdOutlineManageHistory size={30} />
                <p>History</p>
            </div>
        </div>
    )
}

export default FixedBar;