(function(){
const uploaders = document.querySelectorAll('.js-upload');
Array.from(uploaders, uploader =>{
    const imageInput     = uploader.querySelector('.js-upload-value'),
    placeholder = uploader.querySelector('.js-upload-placeholder'),
    remove      = uploader.querySelector('.js-upload-remove');

    imageInput.addEventListener('change', function(event){
        const chosenImg = this.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(chosenImg);
        reader.onload = ()=>{
            uploader.classList.add('has-img');
            placeholder.src = reader.result;
        }
    })
    remove.addEventListener('click', event =>{
        imageInput.value = null;
        uploader.classList.remove('has-img');
        placeholder.src ="";
    })

})
})();