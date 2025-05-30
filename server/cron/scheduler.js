const cron = require("node-cron");
const scrapeEvents = require("../scraper/scrapeEvents");

const startScheduler = () => {
  cron.schedule("0 */2 * * *", async () => {
    console.log("Scraping events...");
    await scrapeEvents();
  });

  // Run once at start
  scrapeEvents();
};

module.exports = startScheduler;
