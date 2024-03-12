calcular.addEventListener('click', verifyStickers);

function verifyStickers(){
const stickerInput = document.querySelectorAll('.stickers input');
const calcular = document.getElementById('calcular');
const resultadoStickers = document.getElementById('resultadoStickers');

let totalStickers = 0;
stickerInput.forEach(input => {
    const value = parseInt(input.value, 10) || 0;
    totalStickers += value;
});

if(totalStickers <= 10){
    resultadoStickers.textContent = "Lleva  stickers";
    }else{
     resultadoStickers.textContent = "Lleva demasiados stickers";   
    }
}
