const InstagramPage = require('../pageobjects/instagram.page')
const { delay } = require('../../helper/delayHelper');

describe('Search and Follow Instagram User', () => {
    it('Search and Follow Emik Adiani', async () => {
        await delay(5000);
        await InstagramPage.clickSearchButton();
        await InstagramPage.fillUserName('Emik Adiani');
        await InstagramPage.clickUserProfile();
        await InstagramPage.clickFollow();
        await delay(2000);
        await expect(InstagramPage.clickFollow).toContain('Mengikuti')
    });
})
