


//���ÿ������ʱ���滻��ռλ�õ�ͼƬ


function showPic(whichpic){
   //���ң�Ҫʲô���������ô�õ�

   //1.��ȡͼƬ�洢·��
	 //���洢�����ӵ�href������
   var source = whichpic.getAttribute("href");

   //2.�滻ͼƬ
	//�ҵ����滻��ͼƬ
	//�޸�����src����
   var placeholder = document.getElementById("placeholder");
   placeholder.setAttribute("src",source);
   //��placeholder.src = source;�ȼۣ����������setAttribute("","");


   //�ı��л�Ч��
   //�滻ͼƬ�·�������p���������֣�ʹ����ʾΪ���ı�������
   //���ı����������������ӵ�title������

   //var text = whicpic.getAttribute("title");
   //var description = document.getElementById("description");
   //description.firstChild.nodeValue = text;
   
   //alert(description.childNodes[0].nodeValue);

}

//����ÿ������ʱ���滻��ռλ�õ�ͼƬ������ֹ���ӱ�����ʱ��Ĭ����Ϊ
	//������onclick�¼�
	//ÿ�����ӣ�����
	//�滻�����ú���
	//��ֹ���ӱ�����ʱ��Ĭ����Ϊ return false,��װ����δ������

//������ʱ������ͼƬ�滻����


// ����ĵ������еĽڵ�ĸ���
/*
	function countBodyChildren(){
		var body_element = document.getElementsByTagName("body")[0];
		alert(body_element.childNodes.length);
        alert(body_element.nodeType);
	}
*/
	//�ú�����ҳ�����ʱִ��
	//window.onload = countBodyChildren;
	//window.onload = showPic;
	