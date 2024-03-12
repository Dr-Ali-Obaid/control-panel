(function(){
    const banners = document.querySelectorAll('.c-banner__close');
    banners.forEach(item =>{
        item.addEventListener('click', i=>{
        
          const banner = i.target.parentNode;
          banner.classList.add('collapse');

          banner.addEventListener('transitionend', function(i){
            if (i.target ===this){
                this.remove()
            }
          })
          
        })
    })
})();