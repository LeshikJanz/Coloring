var myApp = myApp || {};

myApp.Button = (function () {
    function Button(id, hideId) {
        console.log('Button');
        var that = this;
        this.btn = document.querySelector(id);
        this.hideDiv = document.querySelector(hideId);

        console.log(this.btn);
        console.log(this.hideDiv);

        // this.btn.addEventListener('click', function (e) {
        //
        //     var a = e.target;
        //     alert(a);
        //     console.log(a);
        //     // that.hideDiv.classList.display = 'none';
        // });
    }

    Button.prototype.onClick = function (callBack) {
        this.onClickCallBack = callBack;
    };

    Button.prototype.hideDiv = function (){

    };


    return Button;
})();