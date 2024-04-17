const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false
    }
  }
];
const listGame = (games, targetTeam) => {
  const ulParent = document.createElement("p");
  games.forEach(game => {
    const para = document.createElement("hgroup");
    para.innerHTML = gameInfo(game);
    para.classList.add(targetTeam === winnerTeam(game) ? "win" : "loss");
    ulParent.appendChild(para);
  });
  return ulParent;
};

function winnerTeam({ awayTeam, homeTeam }) {
  if (awayTeam.isWinner === true) {
    return awayTeam.team;
  } else {
    return homeTeam.team;
  }
}

function gameInfo({ awayTeam, homeTeam }) {
  const { team: ateam, points: apoints } = awayTeam;
  const { team: hteam, points: hpoints } = homeTeam;
  const teamNames = `${ateam} @ ${hteam}`;
  let teamPoints;
  if (apoints > hpoints) {
    teamPoints = `<b>${apoints}</b>-${hpoints}`;
  } else {
    teamPoints = `${apoints}-<b>${hpoints}</b>`;
  }
  return `${teamNames} <b>|</b> ${teamPoints}`;
}

const btn1 = document.querySelector("#Gs button");
console.log(btn1);
const btn2 = document.querySelector("#Hr button");
console.log(btn2);

btn1.addEventListener("click", function () {
  if (btn1.parentElement.childElementCount === 1)
    btn1.parentElement.appendChild(listGame(warriorsGames, "Golden State"));
});
btn2.addEventListener("click", function () {
  if (btn2.parentElement.childElementCount === 1)
    btn2.parentElement.appendChild(listGame(warriorsGames, "Houston"));
});
