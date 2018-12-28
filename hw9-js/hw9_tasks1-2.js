// решение с Math.round

async function randomInteger(min, max) {
    await pause1000ms();
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

alert( randomInteger(1, 10) );


// решение c Math.floor

async function randomInteger(min, max) {
    await pause2000ms();
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

alert( randomInteger(1, 10) );