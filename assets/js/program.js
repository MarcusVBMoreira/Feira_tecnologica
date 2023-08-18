window.onscroll=function(){
    rolagem()
}
function rolagem(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementsByTagName("header")[0].style.padding="1px 1px"
        document.getElementById("logo").style.fontSize="1px"
        document.getElementById("logo").style.width="20%"
    }else{
        document.getElementsByTagName("header")[0].style.padding="20px 10px"
        document.getElementById("logo").style.fontSize="20px"
        document.getElementById("logo").style.width="30%"
    }
}