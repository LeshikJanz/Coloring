(function () {
    var TableColor = myApp.TableColor;
    var Building = myApp.Building;
    var tableColor = new TableColor('.table');
    var building = new Building('#main');


    tableColor.onColorSelected(function (color) {
        building.setColor(color);
        building.onElementSelected(function (elem) {
            var file = {
                id: elem.id,
                color : color
            };
            fileData = JSON.stringify(file);
            console.log(fileData);


        });

    });
})();



