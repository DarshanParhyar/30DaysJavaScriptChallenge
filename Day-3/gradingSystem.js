// Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 99;

switch (true) {
    case score >= 90 && score <= 100:
        console.log('Grade: A');
        break;
    case score >= 80 && score < 90:
        console.log('Grade: B');
        break;
    case score >= 70 && score < 80:
        console.log('Grade: C');
        break;
    case score >= 60 && score < 70:
        console.log('Grade: D');
        break;
    case score >= 0 && score < 60:
        console.log('Grade: F');
        break;
    default:
        console.log('Invalid score. Score must be between 0 and 100.');
}
