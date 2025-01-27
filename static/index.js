// 各类型新能源上牌数
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var pieData = [
    { name: '消费级无人机', value: 319587 },
    { name: '工业级无人机', value: 295003 },
    { name: '军用无人机', value: 57362 },
    { name: '固定翼无人机', value: 49167 },
    { name: '多旋翼无人机', value: 24584 },
    { name: '无人直升机', value: 16389 },
    { name: '复合翼无人机', value: 40973 },
    { name: '服务与应用领域', value: 16389 }
  ]
  option = {
    color: [
      "#A0CE3A",
      "#31C5C0",
      "#1E9BD1",
      "#0F347B",
      "#585247",
      "#7F6AAD",
      "#009D85",
      "rgba(250,250,250,0.3)",
    ],
    legend: {
      orient: "vertical",
      top: "middle",
      right: "3%",
      textStyle: {
        color: "#f2f2f2",
        fontSize: transformFontSize(12),
      },
      icon: "roundRect",
      data: pieData,
    },
    tooltip: {
      show: true,
      valueFormatter: (value) => value + '个'
    },
    series: [
      // 主要展示层的
      {
        radius: ["30%", "65%"],
        center: ["37%", "50%"],
        type: "pie",
        label: {
          normal: {
            show: false,
            formatter: "{c}个",
            textStyle: {
              color: "rgba(250,250,250)",
              fontSize: transformFontSize(12),
            },
            position: "outside",
          },
          emphasis: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
            length: transformFontSize(5),
            length2: 0
          },
          emphasis: {
            show: true,
          },
        },
        name: "上牌数",
        data: pieData,
      },
      // 边框的设置
      {
        radius: ["30%", "34%"],
        center: ["37%", "50%"],
        type: "pie",
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        animation: false,
        tooltip: {
          show: false,
        },
        data: [
          {
            value: 1,
            itemStyle: {
              color: "rgba(250,250,250,0.3)",
            },
          },
        ],
      },
      {
        name: "外边框",
        type: "pie",
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        center: ["37%", "50%"],
        radius: ["70%", "70%"],
        label: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: 9,
            name: "",
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: "#0b5263",
              },
            },
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 各类型新能源上牌数
(function () {
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));
  var pieData = [
    { name: '0-2000元', value: 163890 },
    { name: '2001-5000元', value: 122918 },
    { name: '5001-10000元', value: 163890 },
    { name: '10001-20000元', value: 204863 },
    { name: '20001-500000元', value: 81945 },
    { name: '500000元以上', value: 81945 },
  ]
  option = {
    color: [
      "#31C5C0",
      "#009D85",
      "#A0CE3A",
      "#7F6AAD",
      "#585247",
      "rgba(250,250,250,0.3)",
      "#1E9BD1",
      "#0F347B",
    ],
    legend: {
      orient: "vertical",
      top: "middle",
      right: "3%",
      textStyle: {
        color: "#f2f2f2",
        fontSize: transformFontSize(12),
      },
      icon: "roundRect",
      data: pieData,
    },
    tooltip: {
      show: true,
      valueFormatter: (value) => value + '个'
    },
    series: [
      // 主要展示层的
      {
        radius: ["30%", "65%"],
        center: ["37%", "50%"],
        type: "pie",
        label: {
          normal: {
            show: false,
            formatter: "{c}个",
            textStyle: {
              color: "rgba(250,250,250)",
              fontSize: transformFontSize(12),
            },
            position: "outside",
          },
          emphasis: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
            length: transformFontSize(5),
            length2: 0
          },
          emphasis: {
            show: true,
          },
        },
        name: "上牌数",
        data: pieData,
      },
      // 边框的设置
      {
        radius: ["30%", "34%"],
        center: ["37%", "50%"],
        type: "pie",
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        animation: false,
        tooltip: {
          show: false,
        },
        data: [
          {
            value: 1,
            itemStyle: {
              color: "rgba(250,250,250,0.3)",
            },
          },
        ],
      },
      {
        name: "外边框",
        type: "pie",
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        center: ["37%", "50%"],
        radius: ["70%", "70%"],
        label: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: 9,
            name: "",
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: "#0b5263",
              },
            },
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".words .chart"));
  option = {
    series: [
      {
        name: "热点分析",
        type: "wordCloud",
        // size: ['9%', '99%'],
        // sizeRange: [6, 66],//最小文字——最大文字
        // textRotation: [0, 45, 90, -45],
        // rotationRange: [-45, 90],//旋转角度区间
        // rotationStep: 90,//旋转角度间隔
        // shape: 'circle',
        // gridSize: 10,//字符间距
        textPadding: 0,
        autoSize: {
          enable: true,
          minSize: 6,
        },
        textStyle: {
          normal: {
            color: function () {
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 105) + 150,
                  Math.round(Math.random() * 105) + 150,
                  Math.round(Math.random() * 105) + 150,
                ].join(",") +
                ")"
              );
            },
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: "#333",
          },
        },
        data: [
          { name: "大疆性能", value: Math.random() * 100 },
          { name: "植保效率", value: Math.random() * 100 },
          { name: "续航能力", value: Math.random() * 100 },
          { name: "工业应用", value: Math.random() * 100 },
          { name: "智能化", value: Math.random() * 100 },
          { name: "低空经济", value: Math.random() * 100 },
          { name: "售后服务", value: Math.random() * 100 },
          { name: "物流运输", value: Math.random() * 100 },
          { name: "噪音问题", value: Math.random() * 100 },
          { name: "电池技术", value: Math.random() * 100 },
          { name: "测绘精准", value: Math.random() * 100 },
          { name: "安全性", value: Math.random() * 100 },
          { name: "法规完善", value: Math.random() * 100 },
          { name: "产业链整合", value: Math.random() * 100 },
          { name: "急救运输", value: Math.random() * 100 },
          { name: "自主避障", value: Math.random() * 100 },
          { name: "市场前景", value: Math.random() * 100 },
          { name: "技术创新", value: Math.random() * 100 },
          { name: "智慧城市建设", value: Math.random() * 100 },
          { name: "国际合作", value: Math.random() * 100 },
          { name: "航拍效果", value: Math.random() * 100 },
          { name: "植保帮手", value: Math.random() * 100 },
          { name: "更长续航", value: Math.random() * 100 },
          { name: "工业利器", value: Math.random() * 100 },
          { name: "操作简单", value: Math.random() * 100 },
          { name: "新舞台", value: Math.random() * 100 },
          { name: "售后无忧", value: Math.random() * 100 },
          { name: "运输新方式", value: Math.random() * 100 },
          { name: "需改进", value: Math.random() * 100 },
          { name: "发展瓶颈", value: Math.random() * 100 },
          
        ],
      },
    ],
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 新能源汽车销量前10
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  xData = ["DJI Mini 3 Pro", "DJI Mavic 3 Classic", "DJI Air 3", "DJI Avata 2", "Parrot Anafi USA", "Autel Robotics EVO II", "Yuneec H520", "Skydio X2", "AgEagle RX60", "Bird's Eye Aerial Drones"];
  yData = [120456, 100234, 80123, 60456, 40789, 30678, 20543, 15432, 10123, 5432];
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: 0,
      top: 15,
      right: 40,
      bottom: -15,
      containLabel: true
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        axisLabel: {
          textStyle: {
            color: "#81E7ED",
          },
        },
        data: xData,
      },
    ],
    series: [
      {
        name: "上牌数",
        type: "bar",
        data: yData,
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: function (param) {
              return param.value + "个";
            },
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        barWidth: transformFontSize(13),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: "#00FFE3",
            },
            {
              offset: 1,
              color: "#4693EC",
            },
          ]),
          barBorderRadius: [30, 30, 30, 30],
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 新能源汽车销量后10
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  xData = ["Flytrex", "Manna Aero", "Wingcopter", "Elroy Air", "Swoop Aero", "Lockheed Martin", "Yamaha", "Textron", "Teledyne FLIR", "XAG"];
  yData = [4567, 3456, 2345, 1224, 3678, 1789, 2890, 3901, 4012, 1294];
  option = {
    grid: {
      top: 20,
      left: 0,
      bottom: 0,
      right: 10,
      containLabel: true,
    },
    tooltip: {
      show: true,
    },
    animation: false,
    xAxis: [
      {
        type: "category",
        data: xData,
        axisTick: {
          alignWithLabel: true,
        },
        nameTextStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: transformFontSize(12)
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#82b0ec",
          },
        },
        axisLabel: {
          interval: 0,
          rotate: 25,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: transformFontSize(12)
          },
        },
      },
    ],
    yAxis: [
      {
        show: true,
        type: "value",
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: transformFontSize(12)
          },
        },
        splitLine: {
          lineStyle: {
            color: "#0c2c5a",
          },
        },
        axisLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "bar",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#00FFE3",
            },
            {
              offset: 1,
              color: "#4693EC",
            },
          ]),
          barBorderRadius: [30, 30, 30, 30],
        },
        barWidth: transformFontSize(16),
        data: yData,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 各类别销售(上牌数)趋势
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var lineYear = [202406, 202407, 202408, 202409, 202410, 202411, 202412, 202501];
  var lineOneData = [150310, 155978, 160501, 165233, 170141, 175015, 180294, 185054];  // 微型无人机
  var lineTwoData = [120540, 125371, 130201, 135705, 140233, 145522, 152317, 155007];  // 小型无人机
  var lineThreeData = [81071, 85087, 90203, 95016, 100561, 105061, 110281, 115947];  // 中型无人机
  var lineFourData = [51265, 52041, 54177, 56001, 58021, 60002, 62311, 64095];  // 大型无人机
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "10%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: transformFontSize(16)
      }
    },
    grid: {
      left: "2%",
      top: "23%",
      right: "6%",
      bottom: "6%",
      containLabel: true
    },
    calculable: true,
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#90979c",
        },
      },
      splitLine: "none",
      axisTick: "none",
      splitArea: "none",
      axisLabel: {
        interval: 0,
        fontSize: transformFontSize(16)
      },
      data: lineYear,
    },
    yAxis: {
      type: "value",
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: transformFontSize(16)
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    },
    series: [
      {
        name: "微型无人机",
        type: "line",
        symbol: "circle",
        symbolSize: 5,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          color: "#0184d5",
        },
        data: lineOneData,
      },
      {
        name: "小型无人机",
        type: "line",
        symbol: "circle",
        symbolSize: 5,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
          }
        },
        data: lineTwoData
      },
      {
        name: "中型无人机",
        type: "line",
        symbol: "circle",
        symbolSize: 5,
        lineStyle: {
          color: "#F8B448",
          width: 2
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(248,180,72, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(248,180,72, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          color: "#F8B448",
        },
        data: lineThreeData
      },
      {
        name: "大型无人机",
        type: "line",
        symbol: "circle",
        symbolSize: 5,
        lineStyle: {
          normal: {
            color: "#e32f46",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(227,47,70, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(227,47,70, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          color: "#e32f46",
        },
        data: lineFourData
      },

    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();


(function () {
  var speed = 50;
  var list = document.getElementById('list');
  var list2 = document.getElementById('list2');
  var rule = document.getElementById('rule');
  list2.innerHTML = list.innerHTML;
  function Marquee() {
    if (list2.offsetTop - rule.scrollTop <= 0)
      rule.scrollTop -= list.offsetHeight;
    else {
      rule.scrollTop++;
    }
  }
  var MyMar = setInterval(Marquee, speed);
  rule.addEventListener('mouseover', function () {
    clearInterval(MyMar)
  });
  rule.addEventListener('mouseout', function () {
    MyMar = setInterval(Marquee, speed)
  });
})();

function transformFontSize(px) {
  let clientWidth = window.innerWidth || document.body.clientWidth
  if (!clientWidth) {
    return 0
  }
  let fontSize = clientWidth / 1920
  return px * fontSize
}
