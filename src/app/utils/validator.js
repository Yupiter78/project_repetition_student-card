export function validator(data, config) {
    const errors = {};

    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                statusValidate = data.trim() === "";
                break;
            case "isURL": {
                const urlRegExp =
                    /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/g;
                statusValidate = !urlRegExp.test(data);
                break;
            }
            case "isNumber": {
                const numberRegExp = /^[0-9]+$/g;
                statusValidate = !numberRegExp.test(data);
                break;
            }
            case "isValidDate": {
                const dateYear = new Date().getFullYear();
                console.log(dateYear);
                console.log("data:", data);
                console.log("data.trim():", data.trim());
                console.log(
                    `${data.trim()} < ${dateYear} && ${data.trim()} > ${
                        dateYear - 100
                    }`,
                    data.trim() < dateYear && data.trim() > dateYear - 100
                );
                console.log("data.trim() <= dateYear:", data.trim() < dateYear);
                console.log(
                    "data.trim() > dateYear - 100:",
                    data.trim() > dateYear - 100
                );

                statusValidate = !(
                    data.trim() < dateYear && data.trim() > dateYear - 100
                );

                console.log("statusValidate:", statusValidate);
                break;
            }
            default:
                break;
        }
        if (statusValidate) return config.message;
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
