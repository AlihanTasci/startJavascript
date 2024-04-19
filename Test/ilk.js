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
const listGame = (games, targetTeam, tag) => {
  const ulParent = document.createElement("p");
  ulParent.classList.add(tag, "border");
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

const btn = document.querySelector("#teamName");

btn.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (this.value === "Golden State" && !document.querySelector(".GS")) {
      if (document.querySelector(".HR")) document.querySelector(".HR").remove();
      btn.parentElement.append(listGame(warriorsGames, "Golden State", "GS"));
    } else if (
      (this.value === "Houston Rockets") &
      !document.querySelector(".HR")
    ) {
      if (document.querySelector(".GS")) document.querySelector(".GS").remove();
      btn.parentElement.append(listGame(warriorsGames, "Houston", "HR"));
    } else {
      alert("Invalid Entry");
    }
    this.value = "";
  }
});
