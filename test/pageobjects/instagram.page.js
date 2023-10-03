const waitHelper = require('../../helper/delayHelper')

class InstagramPage {
    get searchButton(){
        return $('xpath://android.widget.FrameLayout[@content-desc="Cara dan Jelajahi"]')
    }

    get searchUser(){
        return $('id:com.instagram.android:id/action_bar_search_edit_text')
    }

    get userProfile(){
        return $('id:com.instagram.android:id/row_search_user_username')
    }

    get followUser(){
        return $('id:com.instagram.android:id/profile_header_follow_button')
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }

    async fillUsername(){
        await this.searchUser.click();
        await this.searchUser.setValue(string);
    }

    async clickUserProfile(){
        await this.userProfile.click();
    }

    async clickFollow(){
        await this.followUser.click();
    }

}