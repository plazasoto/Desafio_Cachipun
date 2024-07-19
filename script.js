let victorias = 0;
let derrotas = 0;

/* Función para aumentar el contador correspondiente a victoria/derrota */
function cachipun(gana=true){
    if(gana){
        victorias++;
        return "¡Ganaste!";
    }
    else{
        derrotas++;
        return "¡Perdiste!";
    }
}

/* Crea la alert del resultado de una ronda */
function veredicto(resultado, manoPlayer, manoCPU){
    alert(`
    Tu jugada:\t\t\t ${manoPlayer}\n
    La de la máquina:\t ${manoCPU}\n
    ${resultado}
    `)
}

/* Convertir string (ingresado por usuario) a número correspondiente */
function parseHand(mano){
    mano = mano.toLowerCase();
    if(mano == "piedra"){
        return 0;
    }
    if(mano == "papel"){
        return 1;
    }
    if(mano == "tijera" || mano == "tijeras"){
        return 2;
    }
    return 3;//error
}

/* Interpreta número como nombre de jugada (lo opuesto a la función anterior) */
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

/* Función principal del juego */
function jugar(){
    //Ingresar cantidad de rondas de la partida
    let rondas = parseInt(prompt("¿Cuántas rondas?"));//debe ser entero positivo
    while(rondas<=0 || isNaN(rondas)){
        rondas = parseInt(prompt("¿Cuántas rondas?\nDebe ingresar un número positivo."))
    }

    //Reiniciar contadores en caso de múltiples partidas
    victorias = 0;
    derrotas = 0;

    //Bucle de rondas
    for(let i=0; i<rondas; i++){
        //console.log(i);

        //La jugada del jugador
        let jugadaPlayer = 3;
        while(jugadaPlayer==3){
            jugadaPlayer = parseHand(prompt(`Ronda ${i+1} de ${rondas}\nEscriba su jugada:\n¿Piedra, papel o tijeras?`));//usuario ingresa texto, luego se convierte a número de 0 a 2.
        }

        //Jugada de la máquina
        let jugadaCPU = Math.floor(Math.random()*3);
        //console.log("CPU dice "+jugadaCPU);

        //Determinar resultado
        let resultado = "¡Empate!"
        if(jugadaPlayer != jugadaCPU){
            switch(jugadaPlayer){
                case 0:// piedra
                    switch(jugadaCPU){
                        case 1:// vs papel
                            resultado = cachipun(false);
                            break;
                        case 2:// vs tijera
                            resultado = cachipun(true);
                            break;
                        default:
                            alert("Error: La máquina ha generado una jugada ilegal.");
                            break;
                    }
                    break;
                case 1:// papel
                    switch(jugadaCPU){
                        case 0:// vs piedra
                            resultado = cachipun(true);
                            break;
                        case 2:// vs tijera
                            resultado = cachipun(false);
                            break;
                        default:
                            alert("Error: La máquina ha generado una jugada ilegal.");
                            break;
                    }
                    break;
                case 2:// tijera
                    switch(jugadaCPU){
                        case 0:// vs piedra
                            resultado = cachipun(false);
                            break;
                        case 1:// vs papel
                            resultado = cachipun(true);
                            break;
                        default:
                            alert("Error: La máquina ha generado una jugada ilegal.");
                            break;
                    }
                    break;
                default:
                    alert("Error al interpretar tu jugada.");
                    break;
            }
        }
        //resultado de la ronda
        veredicto(resultado, num2play(jugadaPlayer), num2play(jugadaCPU));
    }

    //Mostrar resultados finales
    let marcador = `Marcador final: ${victorias} - ${derrotas}\n`
    if(victorias > derrotas){
        alert(marcador+"¡Felicidades, ganaste!");
    }else if(victorias < derrotas){
        alert(marcador+"Perdiste. Mejor suerte para la próxima.");
    }else if(victorias == derrotas){
        alert(marcador+"¡Empate!");
    }else{
        alert("Error. Algo salió mal.");
    }
}