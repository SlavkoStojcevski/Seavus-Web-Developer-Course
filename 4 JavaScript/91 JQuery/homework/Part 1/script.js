let submit = document.getElementById("submit");
let students=[];
submit.onclick = function () {
  let student = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
  };
  students.push(student);
  console.log(students);
};