import { useEffect, useState } from "react";
import "./styles/common.css"
import { Link, useNavigate } from "react-router-dom";
import { encryptData } from "../helpers/encryption_decryption/Encryption";
import axios from "axios";

const SignupPage = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (token) {
                navigate("/")
            }
        }
    }, [])

    const signupHandler = (e) => {
        e.preventDefault()
        const credentials = {
            fullName,
            email,
            password,
            confirmpassword
        }

        const encrypted = encryptData(credentials)
        console.log(credentials, encrypted)

        axios.post(`https://itsapp-3606ea51973b.herokuapp.com/api/users/signup`, {
            data: encrypted
        })
            .then((res) => {
                console.log(res.data.data)
                // const decrypted = decryptData(res.data.data)
                // console.log(decrypted)
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
            <form style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }} onSubmit={signupHandler}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" placeholder='Enter you name' className='input_field' value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder='abc@xyz.com' className='input_field' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' className='input_field' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm password' className='input_field' value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)} />
                </div>
                <button className='submit_btn'>Sign Up</button>
            </form>
            <p style={{ textAlign: "center", marginTop: "1rem", fontSize: ".8rem", color: "#a8a8a8" }}>
                Already have an account? <Link to="/login" style={{ color: "white" }}> Login</Link>
            </p>
        </div >
    );
};

export default SignupPage;