const InstagramPage = require('../pageobjects/instagram.page')
const { delay } = require('../../helper/delayHelper');

describe('Search and Follow Instagram User', () => {
    it('Click Search and Explore', async () => {
        await delay(5000);
        await InstagramPage.clickSearchButton();
    })
    
    it('Search User', async () => {
        await InstagramPage.fillUsername("Emik Adiani");
    })

    it('Click User Profile', async () => {
        await delay(1500);
        await InstagramPage.clickUserProfile();
    })
        
    it('Follow Profile', async () => {
        await delay(3000);
        await InstagramPage.clickFollow();

        const followedAccount = await InstagramPage.followed();
        await expect(followedAccount).toContain('Mengikuti');
    })
})