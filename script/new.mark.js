$(function(){
  $('p').each(function() {
      
      // ソースからアップロードした日付を取得
      var upLoad = $(this).data('upload-date')
      
      // 本日を取得
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = today.getMonth() + 1;
      var dd = today.getDate();
      
      if (mm < 10) {mm = '0' + mm;}
      if (dd < 10) {dd = '0' + dd;}
           
      var thisToday = (yyyy+'/'+mm+'/'+dd);
      
      // 経過日数を取得
      var keika = getDiff(upLoad, thisToday);
      
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

function getDiff(upLoadDate, todayDate) {
	var date1 = new Date(upLoadDate);
	var date2 = new Date(todayDate);

	// getTimeメソッドで経過ミリ秒を取得し、２つの日付の差を求める
	var msDiff = date2.getTime() - date1.getTime();

	// 求めた差分（ミリ秒）を日付へ変換します（経過ミリ秒÷(1000ミリ秒×60秒×60分×24時間)。端数切り捨て）
	var daysDiff = Math.floor(msDiff / (1000 * 60 * 60 *24));

	// 差分へ1日分加算して返却します
	return ++daysDiff;
}