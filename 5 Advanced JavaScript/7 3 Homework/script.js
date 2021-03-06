$.ajax({
  url: "https://json-server-boris.herokuapp.com/api/students",
  success: async function (data) {
    let students = await data;
    let under18 = await students.filter((student) => student.age < 18);
    let fullNames = await students.map(
      (student) => student.firstName + " " + student.lastName
    );
    let malesCanDrink = await students.filter(
      (student) => student.age > 21 && student.gender === "Male"
    );
    let grades=[];
    students.forEach((student) => (grades.push(student.averageGrade)));
    const initialValue = 0;
    const gradeSum = grades.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    let averageGrade = gradeSum / 200;
    console.log(under18);
    console.log(fullNames);
    students.forEach((student) => (student.city = student.city.toUpperCase()));
    console.log(malesCanDrink);
    console.log(averageGrade);
    students.forEach(
      (student) => (student.averageGrade = student.averageGrade + 2)
    );
    console.log(students);
  },
});
