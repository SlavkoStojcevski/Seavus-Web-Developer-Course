function Academy(name, students, subjects, start, end) {
  this.name = name;
  this.students = students;
  this.subjects = subjects;
  this.start = start;
  this.end = end;
  this.numberofclasses = 10;
  function PrintStudents() {
    console.log(this.students);
  }
  function PrintSubjets() {
    console.log(this.subjects);
  }
}
function Subject(title, isElective, academy, students, overrideClasses) {
  this.title = title;
  this.numberOfClasses = 10;
  this.isElective = isElective;
  this.academy = academy;
  this.students = students;
  this.academy.numberOfClasses = overrideClasses;
}
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.curentSubject = null;
  this.startAcademy=function(Academy){
    this.academy=Academy;
  };
  this.startSubject=function(Subject){
    if(this.academy===null||this.academy.subjects.some(s=>s.title===Subject.title)){
      console.log("The academy the student is enlisted in doesn\'t have this subject");
      return;
    }
    if(this.curentSubject!==null){
      this.completedSubjects.push(this.currentSubject);
    }
  }
}
