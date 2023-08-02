import "./styles/common.css"
import { Link } from "react-router-dom";

const SignupPage = () => {
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
            <form style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" placeholder='Enter you name' className='input_field' />
                </div>
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
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.3rem",
                    gap: ".4rem",
                    fontSize: "1rem"
                }}>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm password' className='input_field' />
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