
	$("#slider").slick({
    //ここにオプション
    asNavFor:"#thumbs"
  })
	$("#thumbs").slick({
  //ここにオプション
asNavFor: "#slider",
slidesToShow: 3,
  })

  $("#thumbs .slick-slide").on("click",function(){
		let index=$(this).attr("data-slick-index")
		$("#slider").slick("slickGoTo",index)
	})
