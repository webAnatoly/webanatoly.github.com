let moveDiv = () => {
  let container = document.querySelector('.container');
  let item_1 = document.querySelector('.container__item-1');
  let item_2 = document.querySelector('.container__item-2');
  let step = 25;

  let directions = {
    item_1: {
      leftToRight: true,
      topToBottom: true,
    },
    item_2: {
      leftToRight: false,
      topToBottom: false,
    }
  }

  let changeDirection = (direction, item, all) => {
    // изменить одно направление
    if (direction && item) {
      directions[item][direction] = !directions[item][direction];
    }
    if (all) { // изменить все направления на противоположные
      directions.item_1 = {
        leftToRight: false,
        topToBottom: false,
      };
      directions.item_2 = {
        leftToRight: true,
        topToBottom: true,
      };
    }
  }

  // функция для получения границ элемента относительно документа
  let getCoords = (elem) => {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      bottom: box.bottom + pageYOffset,
      left: box.left + pageXOffset,
      right: box.right + pageXOffset,
    };
  }

  // функция проверки пересечения двух дивов друг с другом. Если пересекаются, то вернет true
  let checkOverlap = (boxOne, boxTwo) => {
    let box1 = getCoords(boxOne);
    let box2 = getCoords(boxTwo);
    let isOverlap = (box1.right >= box2.left && box1.left <= box2.right) &&
                    (box1.bottom >= box2.top && box1.top <= box2.bottom);
    return isOverlap;
  }



  // рандомное движение дивов в нутри контейнера
  let moveItemInRandomDirection = (item, itemName) => {

    // проверка нахлестывания дивов друг на друга
    if ( checkOverlap(item_1, item_2)) {
      changeDirection('topToBottom', itemName);
      changeDirection('leftToRight', itemName);
    };

    let moveTop = () => {
      let distance = getCoords(item).top - getCoords(container).top;
      if (getCoords(item).top - step > getCoords(container).top) {
        item.style.top = `${distance - step}px`;
      } else {
        item.style.top = `${0}px`;
        changeDirection('topToBottom', itemName);
      }
    }

    let moveBottom = () => {
      let distance = getCoords(item).top - getCoords(container).top;
      if (getCoords(item).bottom + step < getCoords(container).bottom) {
        item.style.top = `${distance + step}px`;
      } else {
        item.style.top = `${container.clientHeight - item.clientHeight}px`;
        changeDirection('topToBottom', itemName);
      }
    }

    let moveLeft = () => {
      let distance = getCoords(item).left - getCoords(container).left;
      if (getCoords(item).left - step > getCoords(container).left) {
        item.style.left = `${distance - step}px`;
      } else {
        item.style.left = `${0}px`;
        changeDirection('leftToRight', itemName);
      }
    }

    let moveRight = () => {
      let distance = getCoords(item).left - getCoords(container).left;
      if (getCoords(item).right + step < getCoords(container).right) {
        item.style.left = `${distance + step}px`;
      } else {
        item.style.left = `${container.clientWidth - item.clientWidth}px`;
        changeDirection('leftToRight', itemName);
      }
    }

    if (directions[itemName].leftToRight) { 
      moveRight();
    } else {
      moveLeft();
    }

    if (directions[itemName].topToBottom) {
      moveBottom();
    } else {
      moveTop();
    }
  }

  let intervalId_1 = setInterval(() => moveItemInRandomDirection(item_1, 'item_1'), 100);
  let intervalId_2 = setInterval(() => moveItemInRandomDirection(item_2, 'item_2'), 200);

  let stopMoving = () => {
    clearInterval(intervalId_1);
    clearInterval(intervalId_2);
  }

  let startMoving = () => {
    clearInterval(intervalId_1);
    clearInterval(intervalId_2);
    intervalId_1 = setInterval(() => moveItemInRandomDirection(item_1, 'item_1'), 100);
    intervalId_2 = setInterval(() => moveItemInRandomDirection(item_2, 'item_2'), 200);
  }

  // навешиваем обработчики на кнопки "start", "stop"
  document.querySelector('#startButton').addEventListener('click', startMoving);
  document.querySelector('#stopButton').addEventListener('click', stopMoving);
}

