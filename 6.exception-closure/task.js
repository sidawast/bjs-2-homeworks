
function parseCount(a) {

if(isNaN(Number.parseInt(a)) !== false) {
   throw new Error("Невалидное значение");
   }
return Number.parseInt(a)
}

function validateCount(b) {
   try {
      let res = parseCount(b);
      return res;
   } catch (error) {
      return error
   } 
}

class Triangle {
   constructor(a, b, c) {
      Object.assign(this, {a, b, c})     
      if (a > b + c || b > a + c || c > b + a) {
         throw new Error("Треугольник с такими сторонами не существует");
      }   
   }
   getPerimeter() {
      return this.P = this.a + this.b + this.c;
   }
   getArea() {
      let p = this.P / 2;
      return this.S = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
   }
}

function getTriangle(a, b, c) {

   try {
     return new Triangle(a, b, c);
   }
   catch(e) {
      return {
         getArea() {
            return 'Ошибка! Треугольник не существует';
         },
         getPerimeter() {
            return 'Ошибка! Треугольник не существует';
         }
      } 
   }
}