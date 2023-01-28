document.body.onload = function(){
    setTimeout(function(){
        let loader = document.querySelector('.loader');
        let container = document.querySelector('.container');
        if(!loader.classList.contains('off_loader')){
            loader.classList.add('off_loader');
            container.style.display = 'block';
        };
    }, 6000);
};