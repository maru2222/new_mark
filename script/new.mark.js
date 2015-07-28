$(function(){
  $('p').each(function() {

    // ソースからアップロードした日付を取得
    var upLoad = $(this).data('upload-date');

    // ソースからアップロードした日付New Dateへ格納
    var upLoadDate = new Date(upLoad);

    // 本日を取得
    var today = new Date();

    // 経過日数を取得
    var keika = Math.floor((today - upLoadDate) / (1000 * 24 * 60 * 60));
    // console.log(keika);

    // 30日経過した経過した場合classを削除
    if (keika > 30) {
      $(this).removeClass('red');
    }
    
  });
});

/*------------------------

差分の計算
参考サイト：http://write-remember.com/program/javascript/date_diff/

------------------------*/