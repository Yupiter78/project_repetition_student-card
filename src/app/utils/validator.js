export function validator(data, config) {
    const errors = {};

    function validate(validateMethod, data, config) {
        switch (validateMethod) {
            case "isRequired":
                if (data.trim() === "") return config.message;
                break;
            case "isURL": {
                const urlRegExp =
                    /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/g;
                if (!urlRegExp.test(data)) return config.message;
                break;
            }
            case "isNumber": {
                const numberRegExp = /^[0-9]+$/g;
                if (!numberRegExp.test(data)) return config.message;
                break;
            }
            default:
                break;
        }
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
