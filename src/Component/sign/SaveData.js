import React from "react";
import { useHistory } from "react-router-dom";

function SaveData({ user }) {
    const history = useHistory();
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/login");
}

export default SaveData;