/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  const result = grades.map((grade) => {
    if (grade >= 38) {
      const nearestMultiple = Math.ceil(grade / 5) * 5;
      const gradeDifference = nearestMultiple - grade;
      if (gradeDifference < 3) return nearestMultiple;
    }
    return grade;
  });
  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
console.log(
  gradingStudents([
    80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65,
    2, 5, 97, 0,
  ])
);
