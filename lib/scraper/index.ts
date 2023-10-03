import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  const username = "brd-customer-hl_e91e4567-zone-scrapiweb";
  const password = "bpcmd6t13vil";
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };
 
  try {
    // Fetch the product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    const title = $(`#productTitle`).text().trim();
    console.log(title);
  } catch (error: any) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
