import React from "react";
import './login.css';
import API from "../utils/API";
import { AuthContext } from "../utils/authContext";
import { useState } from "react";
import { useContext } from "react";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useContext(AuthContext)

    // const [id, setId] = useState({})
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let user = {
            email: email.trim(),
            password: password.trim()
        }
        if (!email || !password) {
            return;
        }
        API.loginUser(user)
            .then(resData => {
                console.log(resData.data.token, resData.data.id)
                // context.login(
                //     resData.data.token,
                //     resData.data.userId
                // )
                // console.log(context)
                setUserId({ id: resData.data.id });
            }).then(() => {
                props.history.push("/Members")

            })
            .catch(err => {
                console.log(err);
            })
    };
    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.type;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        if (name === "password") {
            setPassword(value)
        } else {
            setEmail(value)
        }

        // setEmail({
        //     [name]: value
        // }); 
        if (!email || !password) {
            return;
        }
    };

    return (
        <AuthContext.Provider>
            <div>
                <br />
                <Card>
                    <Header className={"hero text-center"} value={"Login Page"} />
                </Card>
                <br />
                <Card>
                    <Header value={"Welcome to CarFacts!"} className={"title"} />
                    <br />
                    <Subtitle value={"CarFacts is your all-in-one app to track all maintenance and modifications done to your vehicle."}
                        className={"subtitle"} />
                    <Subtitle value={"If this is your first time here, click sign up and add your first vehicle!"}
                        className={"subtitle"} />
                </Card>
                <br />
                <br />
                <Card title="Login Page">
                    <form className="login">
                        <FormInput className={"style"} handleInputChange={handleInputChange} value={email} htmlFor="exampleInputEmail1" id="emailInput" placeholder="User@email.com" type="email">Email address:</FormInput>
                        <FormInput handleInputChange={handleInputChange} value={password} htmlFor="exampleInputEmail1" id="passwordInput" placeholder="Password" type="password">Password</FormInput>
                        <FormInputButton handleFormSubmit={handleFormSubmit}>Login</FormInputButton>
                    </form>
                </Card>
            </div>
        </AuthContext.Provider>
    );
}
