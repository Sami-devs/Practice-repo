let students = ["sami", "ali", "ahmed", "    bilal    ", "usman    "]

let studentInfo = {
    name: "Sami Afridi",
    marks: 85,
    course: "JavaScript"
}

String.prototype.fixName = function () {
    console.log(this.trim().toUpperCase())
}


Array.prototype.totalStudents = function () {
    console.log(`Total students : ${this.length}` )
}




    Object.prototype.getInfo = function () {
    for (let key in this) {
        if (this.hasOwnProperty(key)) {  // only OWN properties!
            console.log(`${key}: ${this[key]}`)
        }
    }
}

students.forEach( (student)=>{
    student.fixName()
})
students.totalStudents()

studentInfo.getInfo()