import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAge } from "../utils/utils";

const CardStudent = () => {
    const history = useHistory();
    console.log(history);
    const [data, setData] = useState({});
    const storageData = JSON.parse(localStorage.getItem("student"));
    useEffect(() => {
        if (storageData) {
            setData(storageData);
        }
    }, []);

    const isCreateUser = !!Object.keys(data).length;
    const handleEdit = () => {
        history.push("/edit");
        console.log(data);
    };

    const handleCreate = () => {
        history.push("/edit");
    };
    console.log("data:", data);
    console.log("isCreateUser:", isCreateUser);

    return (
        <>
            {isCreateUser ? (
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
