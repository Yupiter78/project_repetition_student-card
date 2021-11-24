import React, { useEffect, useState } from "react";
import TextField from "./textField";

const CardStudent = () => {
    const initialState = {
        name: "",
        surname: "",
        yearOfBirth: "",
        portfolio: ""
    };
    const [data, setData] = useState(initialState);
    const [, setErrors] = useState();
    const handleChange = ({ target }) => {
        console.log(target.id);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = {};
        for (const fieldName in data) {
            if (data[fieldName].trim() === "") {
                errors[fieldName] = `${fieldName} isRequired`;
            }
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <TextField
                label="Surname"
                name="surname"
                value={data.surname}
                onChange={handleChange}
            />
            <TextField
                label="Year of birth"
                name="yearOfBirth"
                value={data.yearOfBirth}
                onChange={handleChange}
            />
            <TextField
                label="Portfolio"
                name="portfolio"
                value={data.portfolio}
                onChange={handleChange}
            />
            <button className="btn btn-primary mt-4">Submit</button>
        </form>
    );
};

export default CardStudent;
