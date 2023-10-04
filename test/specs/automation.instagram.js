const InstagramPage = require('../pageobjects/instagram.page')
const dmPage = require('../pageobjects/message.page')
const { delay } = require('../../helper/delayHelper');

describe('TC01 - Search and Follow Instagram User', () => {
    it('Click Search and Explore', async () => {
        await delay(3000);
        await InstagramPage.clickSearchButton();
    })
    
    it('Search User', async () => {
        await InstagramPage.fillUsername("Emik Adiani");
    })

    it('Click User Profile', async () => {
        await delay(1000);
        await InstagramPage.clickUserProfile();
    })
        
    it('verify account has been followed', async () => {
        await delay(1500);
        await InstagramPage.clickFollow();

        const followedAccount = await InstagramPage.followed();
        await expect(followedAccount).toContain('Mengikuti');
    })
})


describe('TC02 - Send DM to Instagram User', () => {

    it('back to HomePage', async () => {
        await InstagramPage.clickHomePage();
    })

    it('click DM button', async () => {
        await dmPage.clickdmButton();
    })

    it('search friend', async () => {
        await dmPage.clickSearchFriend('Emik Adiani');
    })

    it('choose recipient', async () => {
        await delay(1500)
        await dmPage.getFriendName();
    })

    it('typing message', async () => {
        await dmPage.typeMessage('Hi Emik, apa kabar?')
        await delay(500)
        await dmPage.clickSendButton();
    })

    it('verify message has been send', async () => {
        await dmPage.clickBack();
        await delay(500)
        
        const statusChat = await $('id:com.instagram.android:id/row_inbox_digest')
        await expect(statusChat).toHaveTextContaining('dikirim')
    })
})