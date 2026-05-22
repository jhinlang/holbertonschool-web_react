interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Dupont',
  age: 20,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Martin',
  age: 22,
  location: 'Lyon',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const cellFirstName: HTMLTableCellElement = row.insertCell(0);
  const cellLocation: HTMLTableCellElement = row.insertCell(1);
  cellFirstName.textContent = student.firstName;
  cellLocation.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);