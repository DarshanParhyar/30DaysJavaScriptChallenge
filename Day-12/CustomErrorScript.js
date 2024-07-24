class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function customErrorScript() {
    try {
        throw new CustomError("This is a custom error.");
    } catch (error) {
        console.log(error.name + ": " + error.message);
    }
}

customErrorScript();
