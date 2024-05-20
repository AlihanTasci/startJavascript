const axios = require("axios");
const cheerio = require("cheerio");

async function getHTML(url) {
  const list = [];
  try {
    const { data } = await axios.get(url);
    const page = cheerio.load(data);
    let count = 0;
    page("main .list .list-item .img a").each((index, element) => {
      if (page(element) === this) {
        count++;
        console.log(count);
      }
    });
  } catch (error) {
    console.error("HTML çekme hatasi");
  }
}

const webPage = getHTML("https://ev-database.org/");
