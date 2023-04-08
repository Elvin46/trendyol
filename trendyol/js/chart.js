window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisX: {
            valueFormatString: "hh:mm" ,
            minimum:new Date("October 13, 2014 00:00:00"),
            maximum:new Date("October 13, 2014 24:00:00"),
            labelAngle: 9
        },
        axisY: {
            titleFontColor: "#4F81BC",
            includeZero: true,
            suffix:"k"
        },

        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "area",
            color:"#888",
            dataPoints: [
                { x: new Date("October 13, 2014 00:00:00"), y: 15,  },
                { x: new Date("October 13, 2014 03:00:00"), y: 18,  },
                { x: new Date("October 13, 2014 06:00:00"), y: 20,  },
                { x: new Date("October 13, 2014 09:00:00"), y: 24,  },
                { x: new Date("October 13, 2014 12:00:00"), y: 30,  },
                { x: new Date("October 13, 2014 15:00:00"), y: 35,  },
                { x: new Date("October 13, 2014 18:00:00"), y: 43,  },
                { x: new Date("October 13, 2014 21:00:00"), y: 50,  },
                { x: new Date("October 13, 2014 24:00:00"), y: 52,  }
            ]
        }]
    });
    chart.render();
    
    }