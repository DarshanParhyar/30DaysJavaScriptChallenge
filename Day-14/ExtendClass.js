//ask 3: Define a class Student that extends Person


class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}

const student = new Student("mahi", 20, "S12345");
console.log(student.getStudentId());
