import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAge } from "../utils/utils";
import { FIELDS } from "../utils/constants";

const CardStudent = () => {
    const [data, setData] = useState({});
    const storageData = JSON.parse(localStorage.getItem("student"));
    useEffect(() => {
        if (storageData) {
            setData(storageData);
        }
    }, []);

    const isCreateUser = !!Object.keys(data).length;
    console.log("data:", data);
    console.log("isCreateUser:", isCreateUser);

    const renderContent = (type, value) => {
        console.log("type:", type);
        console.log("value:", value);
        return renderTemplate[type] || value;
    };

    const renderTemplate = {
        year: (
            <>
                {data.year} ({isCreateUser ? getAge(data) : null})
            </>
        ),
        portfolio: (
            <a
                href={data.portfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="fs-5 font-monospace link-primary"
            >
                {data.portfolio}
            </a>
        )
    };
    console.log("data:", data);

    return (
        <>
            <div
                className="card mt-5 position-absolute start-50 translate-middle-x shadow"
                style={{ width: "28rem" }}
            >
                <div className="card-header">Card student</div>
                <div className="card-body">
                    {isCreateUser ? (
                        Object.keys(data).map((type) => (
                            <div key={type}>
                                <span className="fs-5 fw-bold">
                                    {FIELDS[type].label}:{" "}
                                </span>
                                <span className=" fs-5 font-monospace">
                                    {renderContent(type, data[type])}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="fs-5 fw-bold text-center font-monospace">
                            Create card student
                        </div>
                    )}
                    <Link to="/edit" className="btn btn-primary mt-4 w-100">
                        {isCreateUser ? "Edit" : "Create"}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CardStudent;
