// const moveButton = function (element, amount, delay, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const clientWidth = document.body.clientWidth;
//       const currLeft = element.getBoundingClientRect().left;
//       const currRight = element.getBoundingClientRect().right;
//       if (currRight + amount > clientWidth || currLeft + amount < 0) {
//         reject();
//       } else {
//         element.style.transform = `translateX(${currLeft + amount}px)`;
//         resolve();
//       }
//     }, delay);
//   });
// };

// const btn = document.querySelector("button");

// async function movingButton(el, amount) {
//   await moveButton(el, amount, 1000);
//   await moveButton(el, amount, 1000);
//   await moveButton(el, amount, 1000);
//   await moveButton(el, amount, 1000);
//   await moveButton(el, amount, 1000);
// }
// movingButton(btn, 92)
//   .then(() => {
//     movingButton(btn, -108).catch(err => {
//       console.log("Left Done!!");
//     });
//   })
//   .catch(err => {
//     console.log("Right Done!!");
//     movingButton(btn, -108).catch(err => {
//       console.log("Left Done!!");
//     });
//   });

// const moveButton = function (element, amount, delay) {
//   setTimeout(() => {
//     const clientWidth = document.body.clientWidth;
//     const currLeft = element.getBoundingClientRect().left;
//     const currRight = element.getBoundingClientRect().right;
//     if (currRight + amount > clientWidth) {
//       return console.log("No more space");
//     } else {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//     }
//   }, delay);
// };

// const btn = document.querySelector("button");
// moveButton(btn, 300, 500);
// moveButton(btn, 300, 500);
// moveButton(btn, 300, 500);
// moveButton(btn, 300, 500);

// async function pokeInfo() {
//   const prom = await axios.get("https://pokeapi.co/api/v2/pokemon/");
//   console.log(prom);
//   const promises = [];
//   for (let count = 1; count <= prom.data.results.length; count++) {
//     promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`));
//   }
//   const pokemons = await Promise.all(promises);
//   for (const element in pokemons) {
//     console.log(pokemons[element].data);
//   }
// }
// pokeInfo();

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// }

// async function lightBackGround() {
//   await changeColor("teal", 1000);
//   await changeColor("pink", 1000);
//   await changeColor("violet", 1000);
//   await changeColor("blue", 1000);
// }

// lightBackGround();

// function makeDeck() {
//   return {
//     playerCards: 0,
//     dealerCars: 0,
//     deckPile: [],
//     drawnCards: [],
//     values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
//     suits: ["hearts", "diamonds", "spades", "clubs"],
//     initializedeckPile() {
//       const { deckPile, suits, values } = this;
//       if (deckPile.length < 1) {
//         for (let count = 0; count < 6; count++) {
//           for (let suit of suits) {
//             for (let value of values) {
//               deckPile.push({ suit, value });
//             }
//           }
//         }
//       }
//       return console.log(
//         "Added 6 decks to deckpile. You can start playing BLACKJACK!!!!! Don't forget to shuffle..."
//       );
//     },
//     shuffle() {
//       const { deckPile } = this;
//       if (!(deckPile === 0)) {
//         for (let i = 0; i < deckPile.length; i++) {
//           let value = Math.floor(Math.random() * (i + 1));
//           [deckPile[i], deckPile[value]] = [deckPile[value], deckPile[i]];
//         }
//       } else {
//         console.log(
//           "There is no deckPile, add decks to deckpile before playing"
//         );
//       }
//     },
//     drawCards() {
//       const { deckPile, drawnCards } = this;
//       const card = deckPile.pop();
//       drawnCards.push(card);
//       console.log(card);
//       if (card.value === "K" || card.value === "Q" || card.value === "J") {
//         card.value = "10";
//       } else if (card.value === A) {
//         if (this.playerCards >= 10) {
//           card.value = 1;
//         } else {
//           card.value = 10;
//         }
//       }
//       console.log(card.value);
//       this.playerCards = parseInt(card.value);
//     },
//     start() {
//       const { deckPile, drawnCards } = this;
//       const card = deckPile.pop();
//     }
//   };
// }
