import { useEffect, useRef, useState } from "react";
import "./styles/common.css"
import { Link, useNavigate } from "react-router-dom";
import { encryptData } from "../helpers/encryption_decryption/Encryption";
import axios from "axios";
import Loader from "../Components/Loader";

const SignupPage = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [showLoader, setShowLoader] = useState(false)
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [conPasswordError, setConPasswordError] = useState("")
    const [validCredentials, setValidCredentials] = useState(false)
    const submitButtonRef = useRef(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (token) {
                navigate("/")
            }
        }
    }, [])

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const signupHandler = (e) => {
        e.preventDefault()

        if (!fullName || !email || !password || !confirmpassword) {
            return; // All fields are required
        }
        if (!validateEmail(email)) {
            setEmailError("Invalid Email")
            setTimeout(() => {
                setEmailError("")
            }, 3000);
            return;
        }
        if (!validatePassword(password)) {
            setPasswordError("Password must contain at least 8 characters long and a capital/small character, a number, and a special character")
            setTimeout(() => {
                setPasswordError("")
            }, 3000);
            return;
        }
        if (confirmpassword !== password) {
            setConPasswordError("Password doesn't match")
            setTimeout(() => {
                setConPasswordError("")
            }, 3000);
            return;
        }

        setShowLoader(true)
        const credentials = {
            fullName,
            email,
            password,
            confirmpassword
        }

        const encrypted = encryptData(credentials)

        axios.post(`https://itsapp-3606ea51973b.herokuapp.com/api/users/signup`, {
            data: encrypted
        })
            .then((res) => {
                if (res?.data?.successMessage) {
                    navigate("/login")
                }
                setShowLoader(false)
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
            <h4 className='logo'>ABC</h4>
            <form style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }} onSubmit={signupHandler}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem",
                    position: "relative"
                }}>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" placeholder='Enter you name' className='input_field' value={fullName} onChange={e => setFullName(e.target.value)} />
                    {
                        nameError
                        &&
                        <span className="input_error">{nameError}</span>
                    }
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem",
                    position: "relative"
                }}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder='abc@xyz.com' className='input_field' value={email} onChange={e => setEmail(e.target.value)} />
                    {
                        emailError
                        &&
                        <span className="input_error">{emailError}</span>
                    }
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
                    <input type="password" name="password" id="password" placeholder='Enter your password' className='input_field' value={password} onChange={e => setPassword(e.target.value)} />
                    {
                        passwordError
                        &&
                        <span className="input_error">{passwordError}</span>
                    }
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem",
                    position: "relative"
                }}>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm password' className='input_field' value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)} />
                    {
                        conPasswordError
                        &&
                        <span className="input_error">{conPasswordError}</span>
                    }
                </div>
                <button className='submit_btn' ref={submitButtonRef}>
                    Sign Up
                </button>
                {
                    showLoader
                    &&
                    <Loader />
                }
                <p style={{ textAlign: "center", marginTop: "1rem", fontSize: ".8rem", color: "#a8a8a8" }}>
                    Already have an account? <Link to="/login" style={{ color: "white" }}> Login</Link>
                </p>
            </form>
        </div >
    );
};

export default SignupPage;