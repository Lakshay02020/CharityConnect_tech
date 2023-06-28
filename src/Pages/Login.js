import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css"

export default function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5161/api/user');
            console.log(response);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    console.log(data);

    if (data == null) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const x = data.filter((user) => {
            return user.email === email && user.password === password  
        });
        
        if (x.length > 0) { history('/home') } else { alert("data not found") };
        console.log({ email, password });
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
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
            <button className="btn">
                LOGIN
            </button>
        </form>
    );
}