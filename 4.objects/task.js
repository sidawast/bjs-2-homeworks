function Student(name, gender, age) {
    // Ваш код
    Object.assign(this, {name, gender, age});

}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  //ваш код    
  if(this.marks === undefined){ 
    // добавить первую оценку
    this.marks = [mark];

    } else {
      // добавить вторую и последующие оценки в массив
    this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  //ваш код
  this.marks = [];
  this.marks.push(Student.prototype.addMark(marks));
}

Student.prototype.getAverage = function () {
  //ваш код
  sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
    if (i == this.marks.length-1) {
      this.average = sum / this.marks.length;
    }
  }  
}

Student.prototype.exclude = function (reason) {
  //ваш код  
  if (this.average < 3) {
    delete this.subject;
    delete this.marks;
    this.exclude = reason;
  }  
}