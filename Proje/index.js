const axios = require("axios");
const cheerio = require("cheerio");
const list = [];
async function getHTML(url) {
  try {
    const { data } = await axios.get(url);
    const page = cheerio.load(data);
    setTimeout(() => {
      page(".list .list-item .img a").each((index, element) => {
        list.push(url + page(element).attr("href"));
      });
    }, 20000);
  } catch (error) {
    console.error("HTML çekme hatasi");
  }
}

async function getMainData(url) {
  const { data } = await axios.get(url);
  const page = cheerio.load(data);
  console.log(page);
}

async function main() {
  await getHTML("https://ev-database.org");
  getMainData(list[0]);
}

main();
