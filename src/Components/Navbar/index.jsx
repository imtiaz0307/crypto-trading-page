import styles from "./index.module.css"
import { GoSortAsc } from "react-icons/go"
import { IoMdNotificationsOutline } from "react-icons/io"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <img src="https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905" alt="gc" />
                <h5>Giga Chad</h5>
            </div>
            <div className={styles.right}>
                <GoSortAsc />
                <IoMdNotificationsOutline />
            </div>
        </nav>
    )
}

export default Navbar;