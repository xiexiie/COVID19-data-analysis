


var worldmap = echarts.init(document.getElementById('worldMap'), 'white', {renderer: 'canvas'});
var chinamap = echarts.init(document.getElementById('chinaMap'), 'white', {renderer: 'canvas'});
var lineChart = echarts.init(document.getElementById('lines'), 'white', {renderer: 'canvas'});

$(
    function () {
        fetchworldMapData(worldmap);
        fetchchinaMapData(chinamap);
        fetchlineData(lineChart)
    }
);

function fetchchinaMapData(chart) {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5000/chinamap",
        dataType: "json",
        success: function (result) {
            chart.setOption(result);
        }
    });
}

function fetchlineData(chart) {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5000/lines",
        dataType: "json",
        success: function (result) {
            chart.setOption(result);
        }
    });
}

function fetchworldMapData(chart) {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5000/worldmap",
        dataType: "json",
        success: function (result) {
            chart.setOption(result);
        }
    });
}