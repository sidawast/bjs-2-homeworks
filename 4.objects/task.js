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
  this.marks = [...marks];
}

Student.prototype.getAverage = function () {
  //ваш код
  
  this.average = 0;
  this.marks.forEach((entry) => {
  this.average += entry / this.marks.length})
  let average = this.average;
return average;
}

Student.prototype.exclude = function (reason) {
  //ваш код 
  if (this.average < 3) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }  
}