$(function(){
	$("#submit").click(function(){
			$.get("newpost.php", { 
						title :  $("#newpost_title").val() , 
						content :  $("#newpost_content").val()  
					}, function (data, textStatus){
                        $("#resText").html(data); // 把返回的数据添加到页面上
					}
			);
	   })
})