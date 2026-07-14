const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  
  console.log('Loading homepage...');
  await page.goto('http://localhost:8080/', { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  
  // Wait for Vue to render
  await page.waitForSelector('.VPHome', { timeout: 10000 }).catch(() => {});
  await new Promise(r => setTimeout(r, 2000));
  
  await page.screenshot({ path: '/tmp/kb-home-v2.png', fullPage: true });
  console.log('Homepage screenshot saved');
  
  // Navigate to analysis page
  console.log('Loading analysis page...');
  await page.goto('http://localhost:8080/analysis/shareholders', { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  await new Promise(r => setTimeout(r, 2000));
  
  await page.screenshot({ path: '/tmp/kb-analysis-v2.png', fullPage: false });
  console.log('Analysis screenshot saved');
  
  await browser.close();
  console.log('Done');
})();
