var students=[
    { name: 'jhon', grade: 75 },
    { name: 'Jane', grade: 93 },
    { name: 'Samantha', grade: 90 },
    { name: 'Michael', grade: 94 }

]
//ordenar en orden descendente
students.sort((a, b) => b.grade - a.grade);
console.log('orden descendente:', students)

//reversar el arreglo
students.reverse()
console.log('reversar el arreglo:', students)

// encontrar el primer estudiante con calificacion
const firstStudentAbove90 = students.find(student => student.grade>90)
console.log('Primer estudiante con calificación mayor a 90:', firstStudentAbove90)