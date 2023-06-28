import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Signup.css"

export default function Signup() {
    const history = useNavigate();
    const [data,setData]=useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isPasswordValid = (password) => {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isPasswordValid(password)) {
            if (password === confirmPassword) {
                let newItem = { name: name, email: email, password: password };
                try {

                    const response = await fetch(`http://localhost:5161/api/user`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newItem),
                    });
                    const createdItem = await response.json();
                    setData([...data, createdItem]);

                } catch (error) {
                    //setError('Error creating item');
                    console.log('Error fetching data:', error);
                }

                history('/home');
            } else {
                alert("password do not match")
            }
        } 
        else {
            alert("Invalid password format")
        }

        console.log({ name, email, password });
    }

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign up</h2>
            <label>
                <span>Name :</span>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </label>
            <label>
                <span>Email Address :</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password :</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Confirm Password :</span>
                <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
            </label>
            <button className="btn">
                SIGN UP
            </button>
        </form>
    );
}