import React, { useState } from "react";

function EmailLogin(props) {
    const [info, setInfo] = useState(() => ({ email: "" }));
    const [errors, setErrors] = useState(() => ({ emailError: "" }));

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const changeData = (e) => {
        if (e.target.name === "email") {
            setInfo({ ...info, email: e.target.value });
            setErrors({
                ...errors,
                emailError:
                    e.target.value.length === 0
                        ? "This Field Is Required "
                        : !emailRegex.test(e.target.value)
                            ? "Invalid email format"
                            : "",
            });
        }
    };

    return (
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={info.email}
                onChange={changeData}
                placeholder="Enter Email"
            />
            {errors.emailError && <p className="text-danger">{errors.emailError}</p>}
        </div>
    );
}

export default EmailLogin;