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

