import React, { useState, useEffect } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";
import { useHistory } from "react-router-dom";

const EditCardStudent = () => {
    const history = useHistory();
    const initialState = {
        name: "",
        surname: "",
        year: "",
        portfolio: ""
    };
    const [data, setData] = useState(initialState);
    const [isCreateUser, setIsCreateUser] = useState(false);

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem("student"));
        if (saveData) {
            setData(saveData);
            setIsCreateUser(true);
        }
    }, []);
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
        year: {
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

    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        localStorage.setItem("student", JSON.stringify(data));
        history.push("/");
        console.log(data);
    };
    const handleClear = () => {
        localStorage.clear();
        history.push("/");
    };

    const handleBack = () => {
        history.push("/");
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">
                        {isCreateUser
                            ? "Edit card student"
                            : "Create card student"}
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label="Surname"
                            type="text"
                            name="surname"
                            value={data.surname}
                            onChange={handleChange}
                            error={errors.surname}
                        />
                        <TextField
                            label="Year of birth"
                            type="text"
                            name="year"
                            value={data.year}
                            onChange={handleChange}
                            error={errors.year}
                        />
                        <TextField
                            label="Portfolio"
                            type="text"
                            name="portfolio"
                            value={data.portfolio}
                            onChange={handleChange}
                            error={errors.portfolio}
                        />
                        <div
                            className="btn-group mb-4 w-100 mx-auto"
                            role="group"
                            aria-label="Basic example"
                        >
                            <button
                                className="btn btn-primary"
                                disabled={!isValid}
                            >
                                Save
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={handleBack}
                                type="button"
                            >
                                Back
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={handleClear}
                                type="button"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCardStudent;
