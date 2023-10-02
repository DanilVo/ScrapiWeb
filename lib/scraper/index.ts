export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_e91e4567-zone-scrapiweb:bpcmd6t13vil -k https://lumtest.com/myip.json

  const userName = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225
    const session_id = (1000000 * Math.random)
