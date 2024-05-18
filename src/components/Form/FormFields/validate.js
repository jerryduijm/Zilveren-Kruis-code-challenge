export function validate(value, validationFunctions) {
    const result = [].concat(validationFunctions).reduce((previous, next) => {
        return previous ? previous(value) : next(value);
    }, null);

    return result;
}
