import React from "react";
import { useHistory } from "react-router-dom";

const CardStudent = () => {
    const history = useHistory();
    console.log(history);
    const data = JSON.parse(localStorage.getItem("student"));
    const handleEdit = () => {
        history.push("/edit");
        console.log(data);
    };

    const handleCreate = () => {
        history.push("/edit");
    };

    const getAge = ({ yearOfBirth }) => {
        const age = (new Date().getFullYear() - yearOfBirth).toString();
        // const exceptions = ["2", "3", "4"];
        // function getWord(age) {
        //     if (age.slice(-1) === "1" && age.substr(-2, 2) !== "11") {
        //         return "год";
        //     } else if (
        //         exceptions.includes(age.slice(-1)) &&
        //         age.substr(-2, 1) !== "1"
        //     ) {
        //         return "года";
        //     } else {
        //         return "лет";
        //     }
        // }
        function getWord(age) {
            const cases = [2, 0, 1, 1, 1, 2];
            const options = ["год", "года", "лет"];

            console.log("age.substr(-2):", age.substr(-2));

            return options[
                age.substr(-2) > 4 && age.substr(-2) < 20
                    ? 2
                    : cases[age.substr(-1) < 5 ? age.substr(-1) : 5]
            ];
        }
        return `${age} ${getWord(age)}`;
    };

    // const calculateAge = (year) => {
    //     return new Date().getFullYear() - Number(year);
    // };
    //
    // function plural(number, titles) {
    //     const cases = [2, 0, 1, 1, 1, 2];
    //     return titles[
    //         number % 100 > 4 && number % 100 < 20
    //             ? 2
    //             : cases[number % 10 < 5 ? number % 10 : 5]
    //         ];
    // }

    return (
        <>
            {data ? (
                <div
                    className="card mt-5 position-absolute start-50 translate-middle-x shadow"
                    style={{ width: "28rem" }}
                >
                    <div className="card-header">Card student</div>
                    <div className="card-body">
                        <p>
                            <span className="fs-5 fw-bold">Name: </span>
                            <span className=" fs-5 font-monospace">
                                {data.name}
                            </span>
                        </p>

                        <p>
                            <span className="fs-5 fw-bold">Surname: </span>
                            <span className="fs-5 font-monospace">
                                {data.surname}
                            </span>
                        </p>
                        <p>
                            <span className="fs-5 fw-bold">
                                Year of birth:{" "}
                            </span>
                            <span className="fs-5 font-monospace">
                                {data.yearOfBirth} ({getAge(data)})
                            </span>
                        </p>
                        <p>
                            <span className="fs-5 fw-bold">Portfolio: </span>
                            <a
                                href={data.portfolio}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="fs-5 font-monospace link-primary"
                            >
                                {data.portfolio}
                            </a>
                        </p>

                        <button
                            className="btn btn-primary mt-4 w-100"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className="card mt-5 position-absolute start-50 translate-middle-x shadow p-4"
                    style={{ width: "28rem" }}
                >
                    <div className="fs-5 fw-bold text-center font-monospace">
                        Create card student
                    </div>
                    <button
                        className="btn btn-primary mt-4 w-100"
                        onClick={handleCreate}
                    >
                        Create
                    </button>
                </div>
            )}
        </>
    );
};

export default CardStudent;
