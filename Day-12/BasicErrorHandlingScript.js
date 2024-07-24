function basicErrorHandling() {
    try {
        console.log("Trying...");
        throw new Error("An error occurred.");
    } catch (error) {
        console.log("Caught an error: " + error.message);
    } finally {
        console.log("Finally block executed.");
    }
}

basicErrorHandling();
