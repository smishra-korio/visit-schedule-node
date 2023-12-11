class CustomError extends Error {
    constructor(msg: string) {
        const message = "CustomError: "+msg;
        super(message);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export default CustomError;