btnLigarCronometro=document.querySelector("#ligar")
btnPausarCronometro=document.querySelector("#pausar");
btnResetarCronometro=document.querySelector("#resetar");
btnContinuarCronometro=document.querySelector("#continuar");

btnContinuarCronometro.style.display="none";
btnPausarCronometro.style.display="block";

let hora=0;
let minuto=0;
let segundo=0;
let time=`${hora}:${minuto}:${segundo}`;
let isPaused=false;



function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

const paragrafo=document.querySelector("p");


btnLigarCronometro.addEventListener('click', ligarCronometro)

function ligarCronometro(){
    intervalo=  setInterval( () =>{
        if(!isPaused){
            segundo++;
            if(segundo>=59){
                minuto++;
                segundo=0;
            }
            if(minuto>=59){
                hora++;
                minuto=0;
            }
            time=`${formatarTempo(hora)}:${formatarTempo(minuto)}:${formatarTempo(segundo)}`
            paragrafo.innerText=time;  
        }
    
        } , 1000);
    
    }


btnPausarCronometro.addEventListener('click', ()=>{
    isPaused=true;
    btnPausarCronometro.style.display="none";
    btnContinuarCronometro.style.display="block";

})

btnContinuarCronometro.addEventListener('click', ()=>{
    isPaused=false;
    btnPausarCronometro.style.display="block";
    btnContinuarCronometro.style.display="none";
})

btnResetarCronometro.addEventListener('click', ()=>{
    clearInterval(intervalo)
    segundo=0;
    hora=0;
    time=`${formatarTempo(hora)}:${formatarTempo(minuto)}:${formatarTempo(segundo)}`
    paragrafo.innerText=time;  
})

