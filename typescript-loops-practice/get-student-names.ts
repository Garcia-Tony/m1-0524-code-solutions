/* exported getStudentNames */
function getStudentNames(students: { name: string }[]): any[] {
  const names: string[] = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
