import React, { useState } from "react";
import TextField from "./textField";

const CardStudent = () => {
    const initialState = {
        name: "",
        surname: "",
        yearOfBirth: "",
        portfolio: ""
    };
    const [data, setData] = useState(initialState);
    const handleChange = ({ target }) => {
        console.log(target.id);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    return (
        <form action="">
            <TextField
                label="Name"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <TextField
                label="Surname"
                type="text"
                name="surname"
                value={data.surname}
                onChange={handleChange}
            />
            <TextField
                label="Year of birth"
                type="text"
                name="yearOfBirth"
                value={data.yearOfBirth}
                onChange={handleChange}
            />
            <TextField
                label="Portfolio"
                type="text"
                name="portfolio"
                value={data.portfolio}
                onChange={handleChange}
            />
        </form>
    );
};

export default CardStudent;
