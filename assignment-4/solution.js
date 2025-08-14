function totalFine(fare) {
    if(typeof fare !== 'number' || fare <= 0){
        return 'Invalid'
    }
    const fine = (fare + fare * (20 / 100) + 30)
    return fine;
    
}


function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const character = str.split(" ").join("").toUpperCase();
  return character;
}


function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let firstTeam = player1.foul + player1.cardY + player1.cardR;
  let secondTeam = player2.foul + player2.cardY + player2.cardR;

  if (firstTeam < secondTeam) {
    return player1.name;
  } else if (secondTeam < firstTeam) {
    return player2.name;
  } else {
    return "Tie";
  }
}



function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const idx in arr1) {
    if (arr1[idx] !== arr2[idx]) {
      return false;
    }
  }
  return true;
}


function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }
  let sum = 0;
  let pass = 0;
  let fail = 0;
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
    if (marks[i] >= 40) {
      pass++;
    } else {
      fail++;
    }
  }
  let score = Math.round(sum / marks.length);
  return {
    finalScore: score,
    pass: pass,
    fail: fail,
  };
}


