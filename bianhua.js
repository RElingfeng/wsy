$(function(){
   	//获取元素
   	var $btn = $('.btns input');
    var $div = $('.cons div');
           
    $btn.click(function(){
        //this是原生的this ，指的是当前所点击的对象，$(this)是jQuery对象
        //addClass是驼峰式,.siblings()表示所选元素之外的剩余同级元素
        //当前点击的按钮加上current类选择器的样式，然后对剩余的同级元素进行移除current样式的操作
        $(this).addClass('current').siblings().removeClass('current'); 
        //用索引值index()来实现点击哪个选项就呈现相应的内容 $(this).index()
        $div.eq($(this).index()).addClass('con').siblings().removeClass('con');
    })
})