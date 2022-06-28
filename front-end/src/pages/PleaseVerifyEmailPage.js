import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const PleaseVerifyEmailPage = () => {
    Window.history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            Window.history.push('/');
        }, 3000)
    }, [Window.history]);

    return (
        <div className="content-container">
            <h1>Thanks for Signing Up!</h1>
            <p>
                A verification email has been sent to the email address you provided.
                PLease verify your email to unlock full site features!
            </p>
        </div>
    );
}