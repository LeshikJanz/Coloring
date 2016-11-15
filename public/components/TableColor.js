var myApp = myApp || {};

myApp.TableColor = (function () {

    function TableColor(id) {
        var that = this;
        this.container = document.querySelector(id);
        this.container.addEventListener('click', function (e) {
            var selectedColor = e.target.getAttribute('data-color');
            if (that.onClickCallBack) {
                that.onClickCallBack(selectedColor);
            }
        });
    }

    TableColor.prototype.onColorSelected = function (callBack) {
        this.onClickCallBack = callBack;
    };


    return TableColor;
})();


