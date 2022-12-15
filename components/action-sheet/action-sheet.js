Component({
    properties: {
        showActionSheet: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ""
        },
    },
    observers: {
        'showActionSheet': function (val) {
            if (val === "" || val === null) {
                return
            }
            this.onSetContentHeight();
            this.setData({
                showMask: val,
            })
        }
    },
    lifetimes: {
        attached: function () {
            this.onSetContentHeight()
        },
    },
    data: {
        showMask: false,
        contentHeight: 0,
    },
    methods: {
        onHideMask() {
            this.setData({
                showMask: false
            })
        },
        onSetContentHeight() {
            this.createSelectorQuery().select('.content')
                .fields({
                    node: true,
                    size: true,
                }).exec(res => {
                    this.setData({
                        contentHeight: res[0].height
                    })
                })
        }
    }
})