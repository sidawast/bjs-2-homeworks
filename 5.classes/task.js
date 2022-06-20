class PrintEditionItem {
        
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        Object.assign(this, {name, releaseDate, pagesCount, state,type})
        //this._state = 100;
    }

    fix() {
        this.state = this._state * 1.5;
    }

    set state(num) {
        if (num < 0) {this._state = 0};
        if (num > 100) {this._state = 100
        } else {this._state = num;
            this.fix;}
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author,name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
}

class FantasticBook  extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}

class DetectiveBook  extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}

class Library {
    constructor(name = '', books = []) {
        Object.assign(this, {name, books})
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
           // console.log(this.books)
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value) {
            return this.books[i];
            } else if(this.books[i][type] !== value && i == this.books.length-1) {return value = null}
        }    
    }
    
    giveBookByName(bookName) {
        for (let i =0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) {
            this.books.splice([i], 1);
            //console.log(this.books)
            }
        }
    }
}


//Задача №3*
class Student {
    // ваш код
    constructor(name) {
        this.name = name;
    }

    getAverageBySubject(subject) {
        let sum = 0;
        let filter = this.subjects.filter(item => item.subjectName == subject);
        if (filter[0] !== undefined) {
        //    console.log(filter[0].marks);
            for (let i = 0; i < filter[0].marks.length; i++) {
                sum += filter[0].marks[i];
                if (i == filter[0].marks.length-1) {
                    let index = this.subjects.findIndex(item => item.subjectName == subject);
                    this.subjects[index].average = sum / filter[0].marks.length;
                }
          }
        }
        if(filter[0] === undefined) {console.log(subject + " Нет в списке предметов")}
    }

    addMark(mark, subjectName) {
        if(mark < 6 && mark > 0) { // Проверка корректной ОЦЕНКИ

            if (this.subjects === undefined) {
                this.checkenSubjectUndefined(mark, subjectName)    
            } else {
                this.checkenSubjectCopy(mark, subjectName);
                this.checkenSubjectDelete();
                //this.checkenSubjectDel(subjectName);
            }
        } else {
            console.log((mark + ' ' + subjectName) + " ОШИБКА, не корректная оценка");
            this.bagError = [mark];
        }
    }
    checkenSubjectUndefined(mark, subjectName) {
        this.subjects = [{subjectName}];
        for (let i = 0; i < this.subjects.length; i++) {
            if (this.subjects[i].subjectName == subjectName) {
                
                if(this.subjects[i].marks === undefined){ 
                    // добавить первую оценку
                    this.subjects[i].marks = [mark];
                }
            }
        }  
    }
    
    checkenSubjectCopy(mark, subjectName) {
        
        for (let i = 0; i < this.subjects.length; i++) {

                //if(this.subjects.find(item => item.subjectName == subjectName)) {
                if (this.subjects[i].subjectName == subjectName) {
                    // добавить вторую и последующие оценки в массив
                    if(this.subjects[i].marks === undefined) {this.subjects[i].marks = [mark];}
                    else {
                        this.subjects[i].marks.push(mark);
                    }
                }
                if (this.subjects[i].subjectName !== subjectName) {
                    this.subjects.push({subjectName});
                }          
        }
    }
    checkenSubjectDelete() {
        for (let i = 0; i < this.subjects.length; i++) {
            if(i > 0 && this.subjects[i-1].subjectName == this.subjects[i].subjectName) {
                this.subjects.splice(i, 1)
            }
        }
    }
    getAverage() {
        this.subjects.average = 0;
        
        for (let i = 0; i < this.subjects.length; i++) {
            this.subjects.average += this.subjects[i].average; 
            if (i == this.subjects.length - 1) {
                this.subjects.average = this.subjects.average / this.subjects.length;
            }
        }
    }
    exclude(message) {
    if (this.bagError !== undefined) {
        console.log(message);
    }       
        
    }
}
