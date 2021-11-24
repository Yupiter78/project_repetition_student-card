import React, { useEffect, useState } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";

const CardStudent = () => {
    const initialState = {
        name: "",
        surname: "",
        yearOfBirth: "",
        portfolio: ""
    };
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const handleChange = ({ target }) => {
        console.log(target.id);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        name: { isRequired: { message: "Email isRequired" } },
        surname: { isRequired: { message: "Surname isRequired" } },
        yearOfBirth: {
            isRequired: { message: "Year of birth isRequired" },
            isNumber: { message: "Enter only number" },
            isValidDate: { message: "Enter the correct date" }
        },
        portfolio: {
            isRequired: { message: "Portfolio isRequired" },
            isURL: { message: "Portfolio field must be a link" }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        console.log("Object.keys(errors):", Object.keys(errors));
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
                error={errors.name}
            />
            <TextField
                label="Surname"
                name="surname"
                value={data.surname}
                onChange={handleChange}
                error={errors.surname}
            />
            <TextField
                label="Year of birth"
                name="yearOfBirth"
                value={data.yearOfBirth}
                onChange={handleChange}
                error={errors.yearOfBirth}
            />
            <TextField
                label="Portfolio"
                name="portfolio"
                value={data.portfolio}
                onChange={handleChange}
                error={errors.portfolio}
            />
            <button className="btn btn-primary mt-4">Submit</button>
        </form>
    );
};

export default CardStudent;
