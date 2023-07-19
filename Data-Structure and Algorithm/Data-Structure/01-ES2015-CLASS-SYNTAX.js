//introduction to DA

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.late = 0;
    this.scores = [];
  }
  fullName() {
    return `${this.firstName} ${this.lastName} is in level-${this.year}`;
  }
  markLate() {
    this.late += 1;
    if (this.late >= 3) return `YOU ARE EXPELLED`;
    return `${this.firstName} ${this.lastName} has been late ${this.late} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  average() {
    let sum = this.scores.reduce((item, acc) => item + acc);
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("Tunde", "Elesho", 1);
let secondStudent = new Student("Henry", "Ford", 3);
//console.log(secondStudent);
