// ハンバーガーメニューをクリックごアニメーション 
function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );


// ページ内遷移後、メニューを閉じる
$('#manu a[href]').on('click', function(event) {
  $('#hamburger').trigger('click');
});


// ボタン・メニュー以外を選択後、メニューを閉じる


  (function($) {
    $(function() {
        var $header = $('#topPage');
        // Nav Toggle Button
        $('#hamburger').click(function(){
            $header.toggleClass('open');
        });
        $(document).on('click touchstart', function(event) {
          if (!$(event.target).closest('#topPage').length) {
            $header.removeClass('open');
          }
        });
    });
})(jQuery);