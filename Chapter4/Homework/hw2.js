function findGrade(studentScore) {
    if (studentScore >= 90) {
        return "You got A"
    }
    else if (studentScore < 90 && studentScore >= 80) {
        return "You got B"
    }
    else if (studentScore < 80 && studentScore >= 70) {
        return "You got C"
    }
    else if (studentScore < 70 && studentScore >= 50) {
        return "You got D"
    }
    else if (studentScore < 50 && studentScore >= 0) {
        return "You got F"
    }
    else {
        return "Invalid Grade"
    }
}
console.log(findGrade(studentScore));
