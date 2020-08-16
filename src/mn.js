const puppeteer = require('puppeteer');
const { mn } = require('./config/default');
const  srcToing  = require('./helper/srcToing');
 
(async () => {
    try {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://image.baidu.com');
  await page.setViewport({
      width:1920,
      height:1080
  })
  await page.focus('#kw');//输入框id
  await page.keyboard.sendCharacter('狗');//输入内容
  await page.evaluate(()=> {
    document.querySelector('.s_btn').click()
  });
  page.on('load',async()=>{//加载完成
   console.log('page loading done ,start fetch...');
   const srcs=await page.evaluate(()=>{
       const images=document.querySelectorAll('img.main_img');
       return Array.prototype.map.call(images,img=>img.src);
   });
   console.log(`${srcs.length} images, start download`)
   srcs.forEach(async (src)=>{
    await srcToing(src,mn);
   })
   await page.waitFor(200);
   await browser.close();
  })
  
}catch (error) {
    console.log('error', error);
}
})();