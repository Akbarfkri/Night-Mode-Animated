
const putih = document.querySelector('.container .putih');
        putih.addEventListener('click', function() {
        document.body.style.backgroundColor= 'white';    
    });


    const hitam = document.querySelector('.container .hitam');
         hitam.addEventListener('click', function() {
        document.body.style.backgroundColor= 'black';

        const opacity = document.querySelector('.container');
        opacity.style.backgroundColor= 'rgba(228, 220, 220, 0.50)';
    });

    const rainbow = document.querySelector('.container .rainbow');
         rainbow.addEventListener('click', function() {
         document.body.style.backgroundColor= 'rgb(252,176,69)';


    });