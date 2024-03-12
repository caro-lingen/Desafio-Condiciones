
imgChange.addEventListener('click', ChangeStyle);

function ChangeStyle(){
    const imgChange = document.getElementById('imgChange');

    if(imgChange.style.border){
        imgChange.style.border = '';
    }else{
        imgChange.style.border = 'solid 2px red'
    }
}

