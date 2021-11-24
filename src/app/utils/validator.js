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
                    /^(https?:\/\/)?(\w\.+)\.([a-z]{2,6}\.?)(\/\w\.*)*\/?$/g;
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
                statusValidate = data >= dateYear && data <= dateYear - 100;
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
            if (error) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
