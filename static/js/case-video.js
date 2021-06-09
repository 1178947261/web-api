
$(document).on('click','.case .page .pre',function(){
    var page=$("#page").val();
    page--;
    if(page<1){
        page=1;
        alert('已经是第一页了');
        return false;
    }
    location.href="/index/video/index/p/"+page+'.html';
});
$(document).on('click','.case .page .next',function(){
    var page=$("#page").val();
    var totalpage=$(".case .case-container-list").eq(0).attr('totalpage');
    page++;
    if(page>totalpage){
        page=totalpage;
        alert('已经是最后一页了');
        return false;
    }
    location.href="/index/video/index/p/"+page+'.html';

});
