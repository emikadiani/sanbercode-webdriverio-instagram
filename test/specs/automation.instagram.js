const InstagramPage = require('../pageobjects/instagram.page')
const dmPage = require('../pageobjects/message.page')
const { delay } = require('../../helper/delayHelper');

describe('TC01 - Search and Follow Instagram User', () => {
    it('Verify search and explore button', async () => {
        await delay(3000);
        await InstagramPage.clickSearchButton();

        const searchBar = await $('xpath://android.widget.EditText');
        await expect(searchBar).toBeDisplayed()
    })
    
    it('Verify search user', async () => {
        await InstagramPage.fillUsername('Emik Adiani');

        const targetedUser = await $('id:com.instagram.android:id/row_search_user_fullname')
        await expect(targetedUser).toHaveText('Emik Adiani')
    })

    it('Verify user account opened', async () => {
        await delay(1000);
        await InstagramPage.clickUserProfile();

        const userAccount = await $('id:com.instagram.android:id/row_profile_header_imageview')
        await expect(userAccount).toBeDisplayed();
    })
        
    it('Verify account has been followed', async () => {
        await delay(1500);
        await InstagramPage.clickFollow();

        const followedAccount = await InstagramPage.followed();
        await expect(followedAccount).toContain('Mengikuti');
    })
})


describe('TC02 - Send DM to Instagram User', () => {

    it('Verify HomePage button', async () => {
        await InstagramPage.clickHomePage();

        const home = $('id:com.instagram.android:id/avatar_image_view')
        await expect(home).toBeDisplayed();
    })

    it('Verify DM button', async () => {
        await dmPage.clickdmButton();

        const newMessage = $('xpath://android.widget.Button[@content-desc="Pesan Baru"]')
        await expect(newMessage).toBeDisplayed();
    })

    it('Verify search bar for recipient', async () => {
        await dmPage.clickSearchFriend('Emik Adiani');

        const searchRecipient = $('xpath:(//android.widget.TextView[@content-desc="Emik Adiani"])[1]')
        await expect(searchRecipient).toBeDisplayed();
        await expect(searchRecipient).toHaveText('Emik Adiani')
    })

    it('Verify recipient selected', async () => {
        await delay(1500)
        await dmPage.getFriendName();

        const chatRoom = $('id:com.instagram.android:id/thread_title')
        await expect(chatRoom).toBeDisplayed();
    })

    it('Verify chat room is opened', async () => {
        await dmPage.typeMessage('Hi Emik, apa kabar?')
        await delay(500)
        await dmPage.clickSendButton();

        const messageField = $('id:com.instagram.android:id/row_thread_composer_edittext')
        await expect(messageField).toBeDisplayed();
    })

    it('Verify message has been send', async () => {
        await dmPage.clickBack();
        await delay(500)
        
        const statusChat = await $('id:com.instagram.android:id/row_inbox_digest')
        await expect(statusChat).toHaveTextContaining('dikirim')
    })
})