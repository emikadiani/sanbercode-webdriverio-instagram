const delayHelper = require('../../helper/delayHelper')

class InstagramPage {
    get searchButton(){
        return $('xpath://android.widget.FrameLayout[@content-desc="Cara dan Jelajahi"]')
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }

    get searchUser(){
        return $('id:com.instagram.android:id/action_bar_search_edit_text')
    }

    async fillUsername(string){
        await this.searchUser.click();
        await this.searchUser.setValue(string);
    }

    get userProfile(){
        return $('id:com.instagram.android:id/row_search_user_username')
    }

    async clickUserProfile(){
        await this.userProfile.click();
    }

    get followUser(){
        return $('id:com.instagram.android:id/profile_header_follow_button')
    }

    async clickFollow(){
        await this.followUser.click();
    }

    get getTextFollowing(){
        return $('id:com.instagram.android:id/profile_header_follow_button')
    }

    async followed(){
        return this.getTextFollowing.getAttribute('content-desc')
    }

}

module.exports = new InstagramPage()