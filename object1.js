//Q2

var student = {
    name:'David Rayy',
    class:'VI',
    rollno:12
  }
  console.log([student.name,student.class,student.rollno])
  
  //Q3
  
  console.log(student)
  delete student.rollno
  console.log(student)
  
  //Q4
  
  var student = {
      name:'David Rayy',
      class:'VI',
      rollno:12
  }
  objLen=Object.keys(student)
  console.log(objLen.length)
  