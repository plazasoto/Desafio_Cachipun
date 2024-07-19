let victorias = 0;
let derrotas = 0;

function resultado(gana=true){
    if(gana){
        alert(`Ganaste.`);
        victorias++;
    }
    else{
        alert(`Perdiste`);
        derrotas++;
    }
}

function num2play(num){
    switch(num){
        case 0:
            return "Piedra";
        case 1:
            return "Papel";
        case 2:
            return "Tijeras";
        default:
            return "error";
    }
}

function jugar(){
    let juegos = parseInt(prompt("¿Cuántos juegos?"));//debe ser entero positivo

    victorias = 0;
    derrotas = 0;

    for(let i=0; i<juegos; i++){
        console.log(i);

        let jugadaPlayer = parseInt(prompt("¿Piedra, papel o tijeras? (0, 1, 2)")); //input no sería n° directamente
        let jugadaCPU = Math.floor(Math.random()*3);
        console.log("CPU dice "+jugadaCPU);
        if(jugadaPlayer == jugadaCPU){
            alert("empate");
        }else{
            switch(jugadaPlayer){
                case 0:// piedra
                    switch(jugadaCPU){
                        case 1:// vs papel
                            resultado(false);
                            break;
                        case 2:// vs tijera
                            resultado(true);
                            break;
                        default:
                            alert("error inesperado");
                            break;
                    }
                    break;
                case 1:// papel
                    switch(jugadaCPU){
                        case 0:// vs piedra
                            resultado(true);
                            break;
                        case 2:// vs tijera
                            resultado(false);
                            break;
                        default:
                            alert("error inesperado");
                            break;
                    }
                    break;
                case 2:// tijera
                    switch(jugadaCPU){
                        case 0:// vs piedra
                            resultado(false);
                            break;
                        case 1:// vs papel
                            resultado(true);
                            break;
                        default:
                            alert("error inesperado");
                            break;
                    }
                    break;
                default:
                    alert("error inesperado");
                    break;
            }
        }
    }

    if(victorias > derrotas){
        alert("¡Felicidades, ganaste!");
    }else if(victorias < derrotas){
        alert("Perdiste. Mejor suerte para la próxima.");
    }else if(victorias == derrotas){
        alert("¡Empate!");
    }else{
        alert("Error. Algo salió mal.");
    }
}