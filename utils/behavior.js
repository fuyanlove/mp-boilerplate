export default Behavior({
    data: {
        isAuth : !!wx.getStorageSync('__token'),
        theme : wx.getSystemInfoSync().theme,
    },
    methods: {
        /* 分享 */
        onShareAppMessage(o) {
            return {
                title: 'Miniprogram',
                path: 'pages/index/index'
            }
        },

        /* 朋友圈 */
        onShareTimeline() {
            return {
                title: 'Miniprogram',
                query: ''
            }
        },

        /* 收藏 */
        onAddToFavorites(o) {
            return {
                title: 'Miniprogram',
                query: o.webViewUrl ? `url=${o.webViewUrl}` : ''
            }
        },
    }
})