import Behavior from '../../utils/behavior'
Page({
    data: {
        url: ""
    },
    behaviors: [Behavior],
    onLoad(options) {
        let ts = `?ts=${Date.now()}`
        this.setData({
            url : options.url + ts || ''
        })
    },
})