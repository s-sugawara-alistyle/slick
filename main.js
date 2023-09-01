import $ from 'jquery';
import 'slick-carousel';

$(function () {
    $('#js-slider-2').slick({
      infinite: true,//自動計算
      arrows: true, // 前・次のボタンを表示する
      dots: true, // ドットナビゲーションを表示する
      appendDots: $('.dots-2'), // ドットナビゲーションの生成位置を変更
      speed: 500, // スライドさせるスピード（ミリ秒）
      slidesToShow: 1, // 表示させるスライド数
      centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
      variableWidth: true, // スライド幅の自動計算を無効化
    });
  });