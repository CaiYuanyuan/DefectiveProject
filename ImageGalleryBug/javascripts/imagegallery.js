


//点击每个链接时，替换掉占位用的图片


function showPic(whichpic){
   //查找，要什么，在哪里，怎么得到

   //1.获取图片存储路径
	 //它存储在链接的href属性里
   var source = whichpic.getAttribute("href");

   //2.替换图片
	//找到被替换的图片
	//修改它的src属性
   var placeholder = document.getElementById("placeholder");
   placeholder.setAttribute("src",source);
   //与placeholder.src = source;等价，不过最好用setAttribute("","");


   //文本切换效果
   //替换图片下方，段落p的描述文字，使其显示为对文本的描述
   //对文本的描述，放在链接的title属性里

   //var text = whicpic.getAttribute("title");
   //var description = document.getElementById("description");
   //description.firstChild.nodeValue = text;
   
   //alert(description.childNodes[0].nodeValue);

}

//单击每个链接时，替换掉占位用的图片，并阻止链接被单击时的默认行为
	//单击，onclick事件
	//每个链接，遍历
	//替换，调用函数
	//阻止链接被单击时的默认行为 return false,假装链接未被单击

//被单击时，调用图片替换函数


// 算出文档中所有的节点的个数
/*
	function countBodyChildren(){
		var body_element = document.getElementsByTagName("body")[0];
		alert(body_element.childNodes.length);
        alert(body_element.nodeType);
	}
*/
	//让函数在页面加载时执行
	//window.onload = countBodyChildren;
	//window.onload = showPic;
	