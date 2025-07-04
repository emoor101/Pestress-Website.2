window.addEventListener('scroll',function(){
    document.getElementById('header').style.padding = window.scrollY>50?'10px':'20px';
});