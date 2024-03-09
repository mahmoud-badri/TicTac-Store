import React, { useState } from "react";

function Name(props) {
    const [info, setInfo] = useState(() => ({ name: "" }));
    const [errors, setErrors] = useState(() => ({ nameError: "" }));

    const nameRegex = /^[a-zA-Z ]{2,30}$/;

    const changeData = (e) => {
        if (e.target.name === "name") {
            setInfo({ ...info, name: e.target.value });
            setErrors({
                ...errors,
                nameError:
                    e.target.value.length === 0
                        ? "This Field Is Required "
                        : !nameRegex.test(e.target.value)
                            ? "Invalid name format"
                            : "",
            });
        }
    };

    return (
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={info.name}
                onChange={changeData}
                placeholder="Enter Name"
            />
            {errors.nameError && <p className="text-danger">{errors.nameError}</p>}
        </div>
    );
}

export default Name;