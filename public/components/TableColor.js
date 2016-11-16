var myApp = myApp || {};

myApp.TableColor = (function () {

    function TableColor(id) {
        var that = this;
        this.container = document.querySelector(id);
        this.container.addEventListener('click', function (e) {
            var selectedColor = e.target.getAttribute('data-color');
            var child = e.target.parentNode.children;
            for (var i = 0; i < child.length; i++) {
                child[i].classList.remove('active');
            }

            if (e.target.className === id.slice(1)) {
                return;
            } else {
                e.target.classList.add("active");
            }


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


