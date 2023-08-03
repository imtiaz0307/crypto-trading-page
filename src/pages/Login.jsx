import { Link, useNavigate } from "react-router-dom";
import "./styles/common.css"
import { useEffect, useState } from "react";
import { encryptData } from "../helpers/encryption_decryption/Encryption";
import { decryptData } from "../helpers/encryption_decryption/Decryption";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
        const credentials = {
            email, password
        }

        const encrypted = encryptData(credentials)

        axios.post(`https://itsapp-3606ea51973b.herokuapp.com/api/users/login`, {
            data: encrypted
        })
            .then((res) => {
                const decrypted = decryptData(res.data.data)
                localStorage.setItem("token", decrypted.token)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            minHeight: `${window.innerHeight}px`,
            padding: "1rem",
            color: "white"
        }}>
            <h4 className='logo'>ABC</h4>
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
                    fontSize: "1rem"
                }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' className='input_field' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='submit_btn'>Login</button>
            </form>
            <p style={{ textAlign: "center", marginTop: "1rem", fontSize: ".8rem", color: "#a8a8a8" }}>
                Don't have an account? <Link to="/signup" style={{ color: "white" }}> Sign up</Link>
            </p>
        </div >
    );
};

export default LoginPage;