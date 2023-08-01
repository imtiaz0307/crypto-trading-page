import styles from "./index.module.css"
import { FaArrowTrendUp } from "react-icons/fa6"
import { TbEyeHeart } from "react-icons/tb"

const Balance = () => {
    return (
        <div className={styles.balance}>
            <div className={styles.left}>
                <h5>Portfolio Balance</h5>
                <div>
                    <div>
                        <h2>
                            <span>$ </span>
                            4,562.<span>00</span>
                        </h2>
                        <select>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                    <div>
                        <span>+5.23%</span>
                        <FaArrowTrendUp />
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <TbEyeHeart />
            </div>
        </div>
    )
}

export default Balance