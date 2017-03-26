// JavaScript Document
	//清空输入框文本----------------------------------------------------------------------------
	function placeholder(obj,txt){//obj--输入框 txt输入文本 placeholder是classname改变字体颜色
		obj.value = txt;
		obj.className = 'placeholder';
		obj.onfocus = function(){
			if(this.value == txt){
				this.value = '';
				this.className = '';
			};
		};
		obj.onblur = function(){
			if(this.value == ''){
				this.value = txt;
				this.className = 'placeholder';
			};
		};
	};
	
	//拖拽div或div的标题----------------------------------------------------------------------------
	function drag(obj,title){//拖拽对象obj，标题拖拽id = title
		title = title || obj;
		
		title.onmousedown = function(ev){
			var oEv = ev || window.event;
			var disX = oEv.clientX - obj.offsetLeft;//计算出鼠标距离obox距离obox边缘的距离
			var disY = oEv.clientY - obj.offsetTop;
			//点击oBox产生的拖拽事件，让oBox跟随鼠标移动
			document.onmousemove = function(ev){//document下的事件，获取鼠标坐标，用clientY获取坐标，赋值给obox的top，实现跟随效果
				var oEv = ev || window.event;
				var z_l = document.documentElement.clientWidth;
				var z_t = document.documentElement.clientHeight;
				var l = oEv.clientX - disX;//申明一个l代表obox和鼠标定位和obox的定义相等，鼠标的坐标值-鼠标距离obox距离
				var t =	oEv.clientY - disY;
				if(l<0){//防止obox画出屏幕左边
					l = 0;
				}
				if(l>z_l-obj.offsetWidth){//屏幕总宽度减去obj的宽度
					l = z_l-obj.offsetWidth;
				}
				if(t<0){
					t = 0;
				}
				if(t>z_t-obj.offsetHeight){//防止obox画出屏幕下面
					t = z_t-obj.offsetHeight;
				}
				//先判断后赋值，
				obj.style.left = l+'px';//实现跟随绑定 指定的是obj的移动事件
				obj.style.top = t+'px';
			};
				//松开鼠标停止拖拽效果，在document下写是为了防止鼠标在快速移动时离开oBox造成的脱离
			document.onmouseup = function(){
				document.onmousemove=null;
			};
		return false;//阻止默认事件(鼠标按下时的默认选取事件)
		};
	};