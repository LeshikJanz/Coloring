var myApp = myApp || {};

myApp.Building = (function () {
    function Building(id) {
        var that = this;
        this.container = document.querySelector(id);
        this.color = null;
        this.container.addEventListener('click', function (e) {
            var element = e.target;
            if (element.id == 'main') {
                return;
            }

            //that.fillElement(element, that.color);

            if (that.onClickCallBack) {
                that.onClickCallBack(element);
            }
        });

        this.setPathId();
    }

    Building.prototype.fillElement = function (id, color) {
        if (color) {
            $('#' + id).attr("fill", color);
        }
    };

    Building.prototype.onElementSelected = function (callBack) {
        this.onClickCallBack = callBack;
    };


    Building.prototype.setColor = function (color) {
        this.color = color;
    };

    Building.prototype.setPathId = function () {
        var length = this.container.children.length;
        for (var i = 0; i < length; i++) {
            this.container.children[i].setAttribute('id', i);
        }
    };

    return Building;
})();
