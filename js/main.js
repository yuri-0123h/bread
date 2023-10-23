
$("#slider").slick({
  //ここにオプション
  asNavFor: "#thumbs"
})
$("#thumbs").slick({
  //ここにオプション
  asNavFor: "#slider",
  slidesToShow: 3,
})

$("#thumbs .slick-slide").on("click", function () {
  let index = $(this).attr("data-slick-index")
  $("#slider").slick("slickGoTo", index)
})



$(function () {
  // ハンバーガーメニューをクリックした時
  $(".toggle_btn").on("click", function () {
    $("header").toggleClass("open");
  });
  // ヘッダーに対してopenクラスを付与
  // openクラスがついているときはopenクラスを削除
  // toogleClassメソッドはその両方を行う
  $(".toggle_btn").on("click", function () {
    $(".container-sp").toggleClass("open");
  });
  $(".container-sp a").on("click", function () {
    $("header").toggleClass("open");
  });
});

$('.slider2').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
});
