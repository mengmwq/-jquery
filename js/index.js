//时间格式化
Date.prototype.Format = function (fmt) {
	//var time1 = new Date().Format("yyyy-MM-dd");
	//var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss");
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
}
//获取客户统计
function getCustomerStatistics(dataX,dataY){
	var oneOption = {
		title: {
			show:false
		},
		 tooltip: {
			trigger: 'item'
		},
		animationEasing:'cubicInOut',
		animationDelay: function (idx) {
		    // 越往后的数据延迟越大
		    return idx * 100;
		},
		xAxis: {
			data: dataX,
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			}
		},
		yAxis: {
			name:'新增顾客数 (人)',
			nameTextStyle:{
				color:'#fff'
			},
			axisLine: {
				lineStyle:{
					color:'#fff'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			}
		},
		series: [
			{ // For shadow
				type: 'bar',
				itemStyle: {
					color: 'rgba(0,0,0,0.05)'
				},
				barGap: '-100%',
				barCategoryGap: '40%',
				animation: false
			},
			{
				type: 'bar',
				itemStyle: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{offset: 0, color: '#d04493'},
							{offset: 1, color: '#5264ad'}
						]
					)
				},
				data: dataY
			}
		]
	};
	var oneChart = echarts.init($('#echartOne')[0]);
	oneChart.clear();
	oneChart.setOption(oneOption);
	$(window).on('resize', function (){
		oneChart.resize();
	});
}
//客单趋势走向图
function guestStatistics(dataX,dataY){
	var threeOption = {
		title: {
			show:false
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: [{
				name:'客单金额 (元)',
				textStyle:{
					color:'#cd4191'
				}
			}],
			textStyle:{
				color:"#fff"
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				data: dataX,
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				axisLine: {
					lineStyle:{
						color:'#426491'
					}
				},
				splitLine: {
					show: true,
					lineStyle:{
					   color: ['#426491'],
					   width: 1,
					   type: 'solid'
				  }
			　　}
			}
		],
		yAxis: [
			{
				name:'金额 (元)',
				type: 'value',
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				axisLine: {
					show:false
				},
				nameTextStyle:{
					color:"#fff"
				},
				splitLine: {
					show: true,
					lineStyle:{
					   color: ['#426491'],
					   width: 1,
					   type: 'solid'
				  }
			　　}
			}
		],
		series: [
			{
				name: '客单金额（元）',
				type: 'line',
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#cd4191'
					}, {
						offset: 1,
						color: '#cd4191'
					}]),
					opacity:0.5
				},
				data: dataY,
				yAxisIndex: 0,
				lineStyle:{
					color:"#cd4191"
				},
				smooth:true
			}
		]
	};
	var threeChart = echarts.init($('#echartThree')[0]);
	threeChart.clear();
	threeChart.setOption(threeOption);
	$(window).on('resize', function (){
		threeChart.resize();
	});
}

//交易趋势走向图
function getTradeStatistics(dataX,dataY1,dataY2){
	var twoOption = {
		title: {
			show:false
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			show:true,
			data: [{
				name:'下单笔数 (笔)',
				textStyle:{
					color:'#cd4191'
				}
			},{
				name:'下单金额 (元)',
				textStyle:{
					color:'#5085bf'
				}
			}],
			textStyle:{
				color:"#fff"
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				data: dataX,
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				axisLine: {
					lineStyle:{
						color:'#426491'
					}
				},
				splitLine: {
					show: true,
					lineStyle:{
					   color: ['#426491'],
					   width: 1,
					   type: 'solid'
				  }
			　　}
			}
		],
		yAxis: [
			{
				name:'下单笔数 (笔)',
				type: 'value',
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				axisLine: {
					show:false
				},
				nameTextStyle:{
					color:"#cd4191"
				},
				splitLine: {
					show: true,
					lineStyle:{
					   color: ['#426491'],
					   width: 1,
					   type: 'solid'
				  }
			　　}
			},
			{
				name:'下单金额 (元)',
				type: 'value',
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				axisLine: {
					show:false
				},
				nameTextStyle:{
					color:"#5085bf"
				},
				splitLine: {
					show: true,
					lineStyle:{
					   color: ['#426491'],
					   width: 1,
					   type: 'solid'
				  }
			　　}
			}
		],
		series: [
			{
				name: '下单笔数',
				type: 'line',
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#cd4191'
					}, {
						offset: 1,
						color: '#cd4191'
					}]),
					opacity:0.5
				},
				data: dataY1,
				yAxisIndex: 0,
				lineStyle:{
					color:"#cd4191"
				},
				smooth:true
			},
			{
				name: '下单金额',
				type: 'line',
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0,1, [{
						offset: 0,
						color: '#5085bf'
					}, {
						offset: 1,
						color: '#5085bf'
					}]),
					opacity:0.5
				},
				yAxisIndex: 1,
				data: dataY2,
				lineStyle:{
					color:"#5085bf"
				},
				smooth:true
			}
		]
	};
	var twoChart = echarts.init($('#echartTwo')[0]);
	twoChart.clear();
	twoChart.setOption(twoOption);
	$(window).on('resize', function (){
		twoChart.resize();
	});
}

//获取随机数
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));
}   

//设置数字翻转
var timerNumber=null,moneysA=0,numsB=0;
function setNumberAnimate(moneys,odoNum){
	if(moneysA==moneys){
		if(numsB==moneys){
			odoNum.update(moneys);
			clearInterval(timerNumber);
		}
	}else{
		clearInterval(timerNumber);
		moneysA=moneys;
		//拿出200元做动画
		var _moneys=moneys-200;
		odoNum.update(_moneys);
		var stepNum=0;
		timerNumber=setInterval(function(){
			var numsA=stepNum+=GetRandomNum(1,30);
			numsB=_moneys+numsA;
			if(numsB>=moneys){
				//当累加大于等于实际金额时，更新为实际金额
				odoNum.update(moneys);
				numsB=moneys;
				clearInterval(timerNumber);
			}else{
				odoNum.update(numsB);
			}
		},700);
	}
	
}

//随机打乱数组
 function shuffle(arr) {
    for(var i=0;i<arr.length;i++){
		var random = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[random]] = [arr[random], arr[i]];
	}
	return arr;
};

//下方列表交换位置
function changePos(arrOrder){
	var liH=$("#listAnimate .list_tr").eq(0).height();
	$.each(arrOrder,function(index,item){
		$("#listAnimate .list_tr").eq(index).css({
			top:(item-1)*liH+'px'
		});
	});
};
//f11全屏展示
function setMenuHeight(){
	var winH = $(window).height();
	if(winH>1000){
		$('#mapBox').height(430);
		$('#echartOne').height(420);
		$('#echartTwo').height(420);
		$('#echartThree').height(420);
		if(winH>1200){
			$('#hder').css({'padding':'20px 0 30px 0'});
		}else{
			$('#hder').removeAttr('style');
		}
	}else{
		$('#mapBox').removeAttr('style');
		$('#hder').removeAttr('style');
		$('#echartOne').height(300);
		$('#echartTwo').height(300);
		$('#echartThree').height(300);
	}
	$(window).on('resize', function (){
		var winH = $(window).height();
		if(winH>1000){
			$('#mapBox').height(430);
			$('#echartOne').height(420);
			$('#echartTwo').height(420);
			$('#echartThree').height(420);
			if(winH>1200){
				$('#hder').css({'padding':'20px 0 30px 0'});
			}else{
				$('#hder').removeAttr('style');
			}
		}else{
			$('#mapBox').removeAttr('style');
			$('#echartOne').height(300);
			$('#echartTwo').height(300);
			$('#echartThree').height(300);
		}
		// if(oneChart){
		// 	oneChart.resize();
		// }
		// if(twoChart){
		// 	twoChart.resize();
		// }
		// if(threeChart){
		// 	threeChart.resize();
		// }
		// if(mapChart){
		// 	mapChart.resize();
		// }
	});
}
//数字动画
function numAnimate(id,num){
	// $('#'+id).countUp({
	// 	delay: 20,  //每个数字动画的延迟时间，单位毫秒
	// 	time: 500, //计数动画总的持续时间
	// 	cnum:num
	// });
	var odo1 = new Odometer('#'+id,{
		num : num
	});
}
//数字动画优化
function numAnimatets(obj,num){
	obj.updateT(num);
}
//长链接WebSocket
function connect(token,fnc) {
	var url='ws://101.201.181.1:9999/big-screen-server/'+token;
	//var url='ws://192.168.1.156:9999/big-screen-server/'+token;
	$('#loadA').show();
	$('#loadB').show();
	$('#loadC').show();
	$('#loadD').show();
	var ws = new WebSocket(url);
	ws.addEventListener('open', function (event) {
		//ws.send(f);
	});
	ws.addEventListener("message", function(event) {
		var data = event.data;
		// 处理数据
		//console.log(data)
		fnc&&fnc(data);
	});
	ws.addEventListener("close", function(event) {
	  setTimeout(function() {
		connect(token,fnc);
	  }, 1000);
	});
}

$(function(){
	//数值动画对象
	var objUV=null,objPV=null,objVisitor=null,objFlow=null,objVist=null;
	var objWork=null,objPack=null,objBuy=null,objReg=null;
	//登录获取token
	var kToken=sessionStorage.getItem('ktoken');
	
	//时间滚动
	var clock = $('.clock').FlipClock({
		clockFace: 'TwentyFourHourClock',
		autoStart: true
	});
	if(kToken){
		$('#tipBox').hide();
		$('#shadow').hide();
		//f11 全屏展示
		setMenuHeight();
		//左侧轮播
		var swiperA = new Swiper('#swiperA',{
			autoplay : 5000,
			pagination : '.swiper-pagination',
		});
		//右侧轮播
		var swiperB = new Swiper('#swiperB',{
			autoplay : 5000,
			pagination : '.swiper-pagination',
		});
		//初始化交易总金额数字动画
		var totalMoNum=sessionStorage.getItem('total_money');
		if(totalMoNum){
			var numM=totalMoNum;
		}else{
			var numM=0;
		}
		var odoNum = new Odometer('#totalMoney',{
			num : numM
		});
		
		//浏览概况数字动画
		objUV = new Odometer('#UV',{
			num : 0
		});
		objPV = new Odometer('#PV',{
			num : 0
		});
		objVisitor=new Odometer('#gVisitor',{
			num : 0,
			dot:2
		});
		objFlow=new Odometer('#gFlow',{
			num : 0,
			dot:2
		});
		objVist=new Odometer('#vistorNumber',{
			num : 0
		});
		
		//中间数字动画
		objWork=new Odometer('#workNo',{
			num : 0
		});
		objPack=new Odometer('#packNo',{
			num : 0
		});
		objBuy=new Odometer('#buyNo',{
			num : 0
		});
		objReg=new Odometer('#regNo',{
			num : 0
		});
		
		// var setTimer=setInterval(function(){
		// 	//现在时间戳
		// 	var nowNum=new Date().getTime();
		// 	//目标时间戳
		// 	var targetTimer=new Date('2020-11-12 09:53:58');
		// 	var targetNum=targetTimer.getTime();
		// 	if(nowNum>=targetNum){
		// 		//停止程序
		// 		clearInterval(setTimer);
		// 		changeBtn=false;
		// 		swiperA.stopAutoplay();
		// 		swiperB.stopAutoplay();
		// 		//停页面上的钟表,重置时间
		// 		clock.setTime(targetTimer);
		// 		clock.stop();
		// 		//重启链接
		// 		setTimeout(function(){
		// 			changeBtn=true;
		// 			clock.loadClockFace('TwentyFourHourClock', {
		// 			    autoStart: true
		// 			});
		// 			swiperA.startAutoplay();
		// 			swiperB.startAutoplay();
		// 		},1000*10);
		// 	}else{
				
		// 	}
		// },1000);
		var changeBtn=true;//控制停屏
		connect(kToken,function(data){
			//console.log(data)
			var dataJson=JSON.parse(data);
			if(dataJson.code){
				//console.log(dataJson)
				if(dataJson.code=='TASK-13'){
					//暂停程序
					changeBtn=dataJson.data.flag;
					if(changeBtn){
						swiperA.startAutoplay();
						swiperB.startAutoplay();
						//更新时间
						clock.loadClockFace('TwentyFourHourClock', {
							autoStart: true
						});
					}else{
						//暂停任务
						swiperA.stopAutoplay();
						swiperB.stopAutoplay();
						var targetTimer=new Date(dataJson.data.nowTime);
						clock.setTime(targetTimer);
						clock.stop();
					}
				}
				if(changeBtn){
					//开始执行任务
					switch(dataJson.code){
						case 'TASK-1':
							//获取订单金额
							var totalMoney=dataJson.data.price;
							sessionStorage.setItem('total_money',totalMoney);
							setNumberAnimate(totalMoney,odoNum);
							break;
						case 'TASK-2':
							//获取下单笔数
							//numAnimate('workNo',dataJson.data.orderCount);
							numAnimatets(objWork,dataJson.data.orderCount);
							break;
						case 'TASK-3':
							//获取打包数量
							//numAnimate('packNo',dataJson.data);objPack
							numAnimatets(objPack,dataJson.data);
							break;
						case 'TASK-4':
							//获取购买人数
							//numAnimate('buyNo',dataJson.data);
							numAnimatets(objBuy,dataJson.data);
							break;
						case 'TASK-5':
							//获取注册会员数
							//numAnimate('regNo',dataJson.data.memberTotalCount);
							numAnimatets(objReg,dataJson.data.memberTotalCount);
							break;
						case 'TASK-6':
							//客户增长趋势图（五日）统计图
							$('#loadA').hide();
							var dataX=[],dataY=[];
							for(var key in dataJson.data){
								dataX.push(key);
								dataY.push(dataJson.data[key].membersGrowthTrend);
							}
							getCustomerStatistics(dataX,dataY);
							break;
						case 'TASK-7':
							//获取今日访客人数
							break;
						case 'TASK-8':
							//获取今日客流概况
							//numAnimate('UV',dataJson.data.uv);
							numAnimatets(objUV,dataJson.data.uv);
							
							//numAnimate('PV',dataJson.data.pv);
							numAnimatets(objPV,dataJson.data.pv);
							
							//下单转化率
							// var objVisitor=new Odometer('#gVisitor',{
							// 	num : dataJson.data.orderConversionRate,
							// 	dot:2
							// });
							//numAnimatets(objVisitor,dataJson.data.orderConversionRate);
							objVisitor.update(dataJson.data.orderConversionRate)
							
							//付款转化率
							// var objFlow=new Odometer('#gFlow',{
							// 	num : dataJson.data.payConversionRate,
							// 	dot:2
							// });
							numAnimatets(objFlow,dataJson.data.payConversionRate);
							
							//numAnimate('vistorNumber',dataJson.data.uv);
							numAnimatets(objVist,dataJson.data.uv);
							
							break;
						case 'TASK-9':
							//获取商品销量排行
							$('#loadC').hide();
							var htmlTxt='';
							if(dataJson.data&&dataJson.data.length>0){
								var arrRank=[];
								var rankObj=shuffle(dataJson.data);
								$.each(rankObj, function (i, v){
									htmlTxt+='<div class="list_tr clearFix">'
										htmlTxt+='<span style="width: 10%;" class="first'+v.rank+'"></span>'
										htmlTxt+='<span style="width: 23%;">'+v.goodsName+'</span>'
										htmlTxt+='<span style="width: 22%;">'+v.orderCount+'</span>'
										htmlTxt+='<span style="width: 23%;">'+v.splitPrice.toFixed(1)+'</span>'
										htmlTxt+='<span style="width: 22%;">'+v.num+'</span>'
									htmlTxt+='</div>'
									arrRank.push(v.rank);
								});
								$('#listAnimate').html(htmlTxt);
								changePos(arrRank);
							}
							break;
						case 'TASK-10':
							//获取交易趋势
							//交易趋势走向图（五日)
							$('#loadB').hide();
							var dataX=[],dataY=[],dataZ=[];
							for(var key in dataJson.data){
								dataX.push(key);
								dataY.push(dataJson.data[key].orderNumToday);
								dataZ.push(dataJson.data[key].priceToday);
							}
							getTradeStatistics(dataX,dataY,dataZ);
							
							break;
						case 'TASK-11':
							//获取今日交易概况
							//下单笔数
							//numAnimate('orderNumber',dataJson.data.orderNumToday);
							$('#orderNumber').text(dataJson.data.orderNumToday);
							
							//下单金额
							//numAnimate('orderMoney',dataJson.data.priceToday);
							var floatNumA=dataJson.data.priceToday.toFixed(1);
							$('#orderMoney').text(floatNumA);
							
							//付款订单数
							//numAnimate('payNumber',dataJson.data.payCountToday);
							$('#payNumber').text(dataJson.data.payCountToday);
							
							//付款金额
							//numAnimate('payMoney',dataJson.data.payAmountToday);
							var floatNumB=dataJson.data.payAmountToday.toFixed(1);
							$('#payMoney').text(floatNumB);
							break;
						case 'TASK-12':
							//客单金额趋势图
							$('#loadD').hide();
							var dataX=[],dataY=[];
							for(var key in dataJson.data){
								dataX.push(key);
								dataY.push(dataJson.data[key]);
							}
							guestStatistics(dataX,dataY);
							break;
							
					}
				}
			}
		});
		
		//绘制中国地图
		//mapChart=echarts.init($('#chinaMap')[0]);
		var mapChart=echarts.init($('#chinaMap')[0], null, {renderer:'svg'});
		var uploadedDataURL = "data/mdata.json";
		$.getJSON(uploadedDataURL, function(geoJson) {
			echarts.registerMap('china', geoJson);
			var convertData = function(data) {
			    var res = [];
			    for (var i = 0; i < data.length; i++) {
			        var dataItem = data[i];
			        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
			        var toCoord = [116.4551, 40.2539];
			        if (fromCoord && toCoord) {
			            res.push([{
			                coord: toCoord,
			                value: dataItem[0].value
			            }, {
			                coord: fromCoord,
							value: dataItem[0].value
			            }]);
			        }
			    }
			    return res;
			};
			var seriesMap = [];
			var fliterArr=[['北京', chinaDatas]];
			fliterArr.forEach(function(item, i) {
			    seriesMap.push(
					{
			            type: 'lines',
			            zlevel: 1,
			            effect: {
			                show: true,
			                period: 4, //箭头指向速度，值越小速度越快
			                trailLength: 0.05, //特效尾迹长度[0,1]值越大，尾迹越长重
			                color: '#ffffff',
			                symbol: 'arrow', //箭头图标
			                symbolSize: 6 //图标大小
			            },
						label:{
							show:false
						},
			            lineStyle: {
			                normal: {
			                    width: 1, //尾迹线条宽度
			                    opacity: 1, //尾迹线条透明度
			                    curveness: .3 //尾迹线条曲直度
			                }
			            },
			            data: convertData(item[1])
			        }, 
					{
			            type: 'effectScatter',
			            coordinateSystem: 'geo',
			            zlevel: 2,
			            rippleEffect: { //涟漪特效
			                period: 3, //动画时间，值越小速度越快
			                brushType: 'stroke', //波纹绘制方式 stroke, fill
			                scale: 3 //波纹圆环最大限制，值越大波纹越大
			            },
			            label: {
			                normal: {
			                    show: false,
			                    position: 'right', //显示位置
			                    offset: [5, 0], //偏移设置
			                    formatter: function(params) { //圆环显示文字
			                        return params.data.name;
			                    },
			                    fontSize: 13,
			                    color:"#f0f0f0"
			                },
			                emphasis: {
			                    show: true
			                }
			            },
			            symbol: 'circle',
			            symbolSize: function(val) {
			                return 8; //圆环大小
			            },
			            itemStyle: {
			                normal: {
			                    show: false,
			                    color: '#f00'
			                }
			            },
			            data: item[1].map(function(dataItem) {
			                return {
			                    name: dataItem[0].name,
			                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
			                };
			            }),
			        }
			    );
			});
			var mapOption = {
			    background:"rgba(10,19,36,0.7)",
			    tooltip: {
			        trigger: 'item',
			        borderColor: '#FFFFCC',
			        enterable: false,
			        extraCssText: 'z-index:100',
			        formatter: function(params, ticket, callback) {
			            //根据业务自己拓展要显示的内容
			            var res = "";
						if(params.componentSubType=="effectScatter"){
							var name = params.name;
							var value = params.value;
							if(Array.isArray(value)){
								value=params.value[2];
							}else{
								value=params.value;
							}
							res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
							return res;
						}
			        }
			    },
			    visualMap: { //图例值控制
					min: 0,
					max: 1,
					calculable: true,
					show: true,
					color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
					textStyle: {
						color: '#fff'
					},
					show:false
				},
			    geo: {
			        map: 'china',
			        zoom: 1.2,
			        label: {
			            emphasis: {
			                show: false,
							color:'#ffff'
			            },
						show:true,
						color:'#fff',
						fontSize:11
			        },
			        roam: false, //是否允许缩放
			        itemStyle: {
			            normal: {
			                color: 'rgba(80,133, 191, 0.7)', //省份地图背景色
			                borderColor: '#a5a4af', //省市边界线00fcff 516a89
			                borderWidth: 1
			            },
			            emphasis: {
			                color: 'rgba(80,133, 191, 1)' //悬浮背景
			            }
			        }
			    },
			    series: seriesMap
			};
			
			mapChart.clear();
			mapChart.setOption(mapOption);
			$(window).on('resize', function (){
				mapChart.resize();
			});
		})
		
	}else{
		$('#tipBox').show();
		$('#shadow').show();
	}
	
});
