
import React from "react";
import "./LoginPage.css"
import MyButton from "../Component/MyButton";
import TitleAndFooter from "../Component/sign/TitleMessage";
import FooterMessage from "../Component/sign/FooterMessage";
import PasswordLogin from "../Component/sign/PasswordLogin";
import EmailLogin from "../Component/sign/EmailLogin";


//import "./LoginPage.css"
//import MyButton from "../Component/MyButton"
//import TitleMessage from "../Component/TitleMessage"
//import FooterMessage from "../Component/FooterMessageLog"
//import PasswordLogin from "../Component/PasswordLogin"
//import EmailLogin from '../Component/EmailLogin';
function LoginPage(props) {


    const done = (e) => {

        console.log(e)
        e.preventDefault()
        props.history.push("/")

    };
    return (

        <div className="row mt-5">

            <div className="col-lg-5 bg-white m-auto rounded line">
            <form onSubmit={(e) => done(e)}>
                <TitleAndFooter t_name="Login Now" />
                {/*Form Start*/}
                <EmailLogin />
                <PasswordLogin />
                <MyButton btn_name="Log In" sub={done} />
                <FooterMessage title="Register" link="#" n_line="Register Here" />
                </form>
            </div>
        </div>


    )
}

export default LoginPage;