// app.js
// import './utils/hack'
// import lodash from 'lodash'

App({
    globalData: {
    },
    onLaunch() {
    },
    onPageNotFound(){
        wx.redirectTo({
            url: 'pages/error/error'
        })
    }
})
