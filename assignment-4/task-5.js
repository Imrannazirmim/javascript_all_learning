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


