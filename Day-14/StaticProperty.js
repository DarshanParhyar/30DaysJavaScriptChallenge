//Task 6: Add a static property to the Student class

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    static getStudentCount() {
        return `Total students: ${Student.studentCount}`;
    }
}

const student1 = new Student("mahi", 20, "S12345");
const student2 = new Student("jinxy", 22, "S67890");
console.log(Student.getStudentCount());
