var myApp = myApp || {};

myApp.Button = (function () {
    function Button(id, containerId, logoId, shareBtn, socialCont) {
        var that = this;
        this.btn = document.querySelector(id);
        this.container = document.querySelector(containerId);
        this.logoId = document.querySelector(logoId);
        this.shareBtn = document.querySelector(shareBtn);
        this.social = document.querySelector(socialCont);


        this.shareBtn.addEventListener('click', function () {
            if (that.social.classList[1] == 'hide') {
                that.social.classList.remove('hide');
            } else {
                that.social.classList.add('hide')
            }
        });

        this.btn.addEventListener('click', function () {
            that.container.classList.add('hide');
            that.logoId.classList.remove('hide');
        });

        this.logoId.addEventListener('click', function () {
            that.container.classList.remove('hide');
            that.logoId.classList.add('hide');
        })
    }


    Button.prototype.onClick = function (callBack) {
        this.onClickCallBack = callBack;
    };


    return Button;
})();