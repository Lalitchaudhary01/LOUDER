const axios = require("axios");
const cheerio = require("cheerio");
const Event = require("../models/Event");

const scrapeEvents = async () => {
  const { data } = await axios.get(
    "https://www.eventbrite.com.au/d/australia--sydney/events/"
  );
  const $ = cheerio.load(data);
  const events = [];

  $(".eds-event-card-content__content").each((_, el) => {
    const title = $(el).find("h3").text().trim();
    const date = $(el).find(".eds-event-card-content__sub-title").text().trim();
    const link = $(el).closest("a").attr("href");
    if (title && date && link) {
      events.push({ title, date, link });
    }
  });

  await Event.deleteMany({});
  await Event.insertMany(events);
};

module.exports = scrapeEvents;
