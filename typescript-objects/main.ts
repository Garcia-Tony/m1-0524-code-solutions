interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Anthony',
  lastName: 'Garcia',
  age: 25,
};

const vehicle: Vehicle = {
  make: 'Dodge',
  model: 'Charger',
  year: 2023,
};

const pet: Pet = {
  name: 'Cleo',
  kind: 'Cat',
};

const firstName: string = student.firstName;
const lastName: string = student.lastName;
const fullName: string = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Office';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
