$(function(){
  
  $('p').each(function() {
      
      //ソースからアップロードした日付を取得
      var upLoad = $(this).data('upload-date')
      
      //本日の取得
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = today.getMonth() + 1;
      var dd = today.getDate();
      
      if (mm < 10) {mm = '0' + mm;}
      if (dd < 10) {dd = '0' + dd;}
      
      //経過日数を習得
      var thisToday = (yyyy+''+mm+''+dd) - upLoad;
      
      //30日経過した経過した場合classを削除
      if (thisToday > 30) {
        $(this).removeClass('red');
      }
      
  });  
});