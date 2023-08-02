import { Link, useNavigate } from "react-router-dom";
import "./styles/common.css"

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            minHeight: "100vh",
            padding: "1rem",
            color: "white"
        }}>
            <h4 className='logo'>ABC</h4>
            <form style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }} onSubmit={e => {
                e.preventDefault()
                navigate('/')
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder='abc@xyz.com' className='input_field' />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' className='input_field' />
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