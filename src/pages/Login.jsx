import { Link, useNavigate } from "react-router-dom";
import "./styles/common.css"
import { useEffect, useState } from "react";
import { encryptData } from "../helpers/encryption_decryption/Encryption";
import { decryptData } from "../helpers/encryption_decryption/Decryption";
import axios from "axios";
import Loader from "../Components/Loader";
import logo from "../../public/logo.png"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showLoader, setShowLoader] = useState(false);
    const [loginError, setLoginError] = useState("")
    const [passwordType, setPasswordType] = useState("password")

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (token) {
                navigate("/")
            }
        }
    }, [])

    const loginHandler = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setLoginError("Invalid Credentials")
            return
        }
        setShowLoader(true)
        const credentials = {
            email, password
        }

        const encrypted = encryptData(credentials)

        axios.post(`https://itsapp-3606ea51973b.herokuapp.com/api/users/login`, {
            data: encrypted
        })
            .then((res) => {
                if (res.data.message) {
                    setLoginError("Invalid Credentials")
                    setShowLoader(false)
                } else {
                    const decrypted = decryptData(res.data.data)
                    localStorage.setItem("token", decrypted.token)
                    setShowLoader(false)
                    navigate("/")
                }
            })
            .catch(err => {
                console.log(err)
                setShowLoader(false)
            })
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-around",
            minHeight: `${window.innerHeight}px`,
            padding: "1rem",
            color: "white"
        }}>
            <img src={logo} alt="logo" style={{ filter: "drop-shadow(9px 0px 50px rgba(33, 200, 215, 0.5))", width: "60vw", margin: "1rem auto" }} />
            <form style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }} onSubmit={loginHandler}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder='abc@xyz.com' className='input_field' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem",
                    position: "relative"
                }}>
                    <label htmlFor="password">Password</label>
                    <input type={passwordType} name="password" id="password" placeholder='Enter your password' className='input_field' value={password} onChange={e => setPassword(e.target.value)} required />
                    {
                        passwordType === "password"
                            ?
                            <AiFillEye color="#20d6de" onClick={() => setPasswordType("text")} style={{
                                position: "absolute",
                                top: "39px",
                                fontSize: "1.6rem",
                                right: "10px"
                            }} />
                            :
                            <AiFillEyeInvisible color="#20d6de" onClick={() => setPasswordType("password")} style={{
                                position: "absolute",
                                top: "39px",
                                fontSize: "1.6rem",
                                right: "10px"
                            }} />
                    }
                </div>
                <button className='submit_btn'>
                    Login
                </button>
                <p style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                    <Link to={"/login"} style={{ color: "white", fontWeight: 600, fontSize: ".8rem" }}>Forgot password?</Link>
                </p>
                {
                    showLoader
                    &&
                    <Loader />
                }
                {
                    loginError
                    &&
                    <p style={{ margin: "1rem 0 0", color: "red", textAlign: "center" }}>{loginError}</p>
                }
                <p style={{ textAlign: "center", marginTop: "1rem", fontSize: ".8rem", color: "#a8a8a8" }}>
                    Don't have an account? <Link to="/signup" style={{ color: "white" }}> Sign up</Link>
                </p>
            </form>
        </div >
    );
};

export default LoginPage;