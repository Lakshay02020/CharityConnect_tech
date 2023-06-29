import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import "./NGOSignup.css"
import { Description } from "@mui/icons-material";

export default function NGOSignup() {
    const history = useNavigate();
    const salt = bcrypt.genSaltSync(10);
    const [data,setData]=useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebSite] = useState("");
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
                console.log(name,email,contactNumber,location,website,password);
                const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u');
                let newItem = { name: name, email: email, contact: contactNumber,description:"hdjd", location: location, website: website, password: hashedPassword };
                try {

                    const response = await fetch(`http://localhost:5161/api/ngo`, {
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
                alert("password do not match");
            }
        }
        else {
            alert("Invalid password format");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="ngo-signup-form">
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
                <span>Contact Number :</span>
                <input
                    type="text"
                    onChange={(e) => setContactNumber(e.target.value)}
                    value={contactNumber}
                />
            </label>
            <label>
                <span>Location :</span>
                <input
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                />
            </label>
            <label>
                <span>Website :</span>
                <input
                    type="text"
                    onChange={(e) => setWebSite(e.target.value)}
                    value={website}
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