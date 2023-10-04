const delayHelper = require('../../helper/delayHelper')

class dmPage {
    get dmButton(){
        return $('id:com.instagram.android:id/action_bar_inbox_button')
    }

    async clickdmButton(){
        await this.dmButton.click();
    }

    get searchFriend(){
        return $('xpath://android.widget.EditText')
    }

    async clickSearchFriend(string){
        await this.searchFriend.click();
        await this.searchFriend.setValue(string)
    }

    get friendName(){
        return $('xpath://android.widget.TextView[@content-desc="Emik Adiani"]')
    }

    async getFriendName(){
        await this.friendName.click();
    }

    get messageField(){
        return $('id:com.instagram.android:id/row_thread_composer_edittext')
    }

    async typeMessage(string){
        await this.messageField.click();
        await this.messageField.setValue(string);
    }

    get sendButton(){
        return $('id:com.instagram.android:id/row_thread_composer_button_send')
    }

    async clickSendButton(){
        await this.sendButton.click();
    }

    get backButton(){
        return $('id:com.instagram.android:id/action_bar_button_back')
    }

    async clickBack(){
        await this.backButton.click();
    }

}

module.exports = new dmPage()