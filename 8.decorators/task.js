function cachingDecoratorNew(func) {
  // Ваш код
  let cache;

  function wrapper(...arg) {

    let result = func(...arg);
    
    if (cache == undefined) {
      cache = [{hash: arg, value: result}];
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    } else {
      let objectInCache = cache.find((item) => item.hash.toString() == arg.toString());
      if(!objectInCache) {
        cache.push({hash:arg, value: result});
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
      }  
      if(cache.length > 5) {
        cache.shift();
        console.log(cache);
      }
      
      return "Из кэша: " + result;
    }       
  }
  return wrapper;
}


function debounceDecoratorNew(func, time) {
  // Ваш код
  let firstTime = true;
  let timerId = null;
  function wrapper(...args) {
    if(firstTime) {
      firstTime = false;
      func.apply(this, ...args);
    } else {
      if (timerId !== null) {
        clearTimeout(timerId)
      }
    }
  }
  return wrapper;
}

function debounceDecorator2(func) {
  // Ваш код
  let firstTime = true;
  let timerId = null;
  function wrapper(...args) {
    if(firstTime) {
      let count = 0;
      firstTime = false;
      func.apply(this, ...args);
      count++;
      console.log(count);
    } else {
      if (timerId !== null) {
        clearTimeout(timerId)
      }
    }
  }
  return wrapper;

}
/*
Представьте ситуацию, что пользователь очень часто нажимает отправить,
 при этом наш debounce декоратор отправляет сообщения не чаще чем раз
  в интервал времени, но мы хотим дополнительно знать, сколько всего
   раз была вызвана исходная функция. Усовершенствуйте декоратор из 
   задания 2 таким образом, чтобы в свойстве count декорированной функции
    хранилось количество вызовов. Для решения используйте подход, который
     был применен в лекции для декоратора-шпиона. Усовершенствованный декоратор
      должен называться debounceDecorator2.

Подсказка 1
Добавьте к обертке wrapper новое свойство count в котором храните количество вызовов.*/