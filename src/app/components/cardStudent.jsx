import React, { useState } from "react";

const CardStudent = () => {
    const initialState = {
        name: "",
        surname: "",
        yearOfBirth: "",
        portfolio: ""
    };
    const [state, setState] = useState(initialState);
    const handleChange = ({ target }) => {
        console.log(target.id);
        setState((prevState) => ({ ...prevState, [target.id]: target.value }));
    };
    return (
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={state.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input
                    type="text"
                    id="surname"
                    value={state.surname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="yearOfBirth">Year of birth</label>
                <input
                    type="text"
                    id="yearOfBirth"
                    value={state.yearOfBirth}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="portfolio">Portfolio</label>
                <input
                    type="text"
                    id="portfolio"
                    value={state.portfolio}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default CardStudent;
