let gridcells = [...document.querySelectorAll('.cell')];

let userName = prompt(`What's your name`, 'Anything');
let markk = prompt('whats ur mark', 'anything');

// console.log(gridcells)


function player(name, mark, playing){
   return{
        name,
        mark,
        playing
   }
}; //Constructor function to make players

let player1 = player(userName, markk, true);
let player2 = player('nomnom', 'x', false);

let gamewon = false; 


(function whoIsplaying () {
    let playingPlayer;
    gridcells.forEach(Element => {
        Element.addEventListener('click', () => {
            if(gamewon){
                return
            }
            if (player1.playing == true){
                if(Element.innerText != ''){
                    return;
                }  
                Element.innerText = player1.mark;
                winning(player1);
                playingPlayer = player1;
                player1.playing = false;
                player2.playing = true;
                // console.log(playingPlayer);
            }
            else if(player1.playing == false && player2.playing == true){
                if(Element.innerText != ''){
                    return;
                }
                Element.innerText = 'X';
                // console.log(currentboardState)
                winning(player2);
                playingPlayer = player2;
                player2.playing = false;
                player1.playing = true;
                // console.log(playingPlayer);
            }
        })
    })
    // console.log(playingPlayer);
})(player1, player2);



function winning(player){
    if(gridcells[0].innerText === gridcells[4].innerText && gridcells[4].innerText === gridcells[8].innerText   && gridcells[8].innerText != '' && gridcells[0].innerText != ''  && gridcells[4].innerText != '' ){
        console.log(`${player.name} win!`);
        gamewon = true;
    } //Diagonal winning from 0 till 8
    else if(gridcells[2].innerText === gridcells[4].innerText && gridcells[4].innerText === gridcells[6].innerText   && gridcells[2].innerText != '' && gridcells[4].innerText != ''  && gridcells[6].innerText != '' ){
        console.log(`${player.name} win!`);
        gamewon = true;
    }
    else if(gridcells[0].innerText === gridcells[1].innerText && gridcells[1].innerText === gridcells[2].innerText   && gridcells[2].innerText != '' && gridcells[0].innerText != ''  && gridcells[1].innerText != '' ){
        console.log(`${player.name} win!`);
        gamewon = true;
    } //Horizontal line winning from 0 till 2
    else if(gridcells[3].innerText === gridcells[4].innerText && gridcells[4].innerText === gridcells[5].innerText   && gridcells[3].innerText != '' && gridcells[4].innerText != ''  && gridcells[5].innerText != '' ){
        console.log(`${player.name} win!`);
        gamewon = true;
    } //Horizontal line winning from 3 till 5
    else if(gridcells[6].innerText === gridcells[7].innerText && gridcells[7].innerText === gridcells[8].innerText   && gridcells[6].innerText != '' && gridcells[7].innerText != ''  && gridcells[8].innerText != '' ){
        console.log(`${player.name} win!`);
        gamewon = true;
    } //Horizontal line winnning from 6 till 8
    else if(gridcells[0].innerText === gridcells[3].innerText && gridcells[3].innerText === gridcells[6].innerText   && gridcells[0].innerText != '' && gridcells[3].innerText != ''  && gridcells[6].innerText != '' ){
        console.log(`${player.name} win!`);
        gamewon = true;
    } //Vertical line winning from 0 till 6
    else if(gridcells[1].innerText === gridcells[4].innerText && gridcells[4].innerText === gridcells[7].innerText   && gridcells[1].innerText != '' && gridcells[4].innerText != ''  && gridcells[7].innerText != '' ){
        console.log(`${player.name} win!`);
        gamewon = true;
    } //Vertical line winning from 1 till 7
    else if(gridcells[2].innerText === gridcells[5].innerText && gridcells[5].innerText === gridcells[8].innerText   && gridcells[2].innerText != '' && gridcells[5].innerText != ''  && gridcells[8].innerText != ''){
        console.log(`${player.name} win!`);
        gamewon = true;
    }
    else if(gridcells[0].innerText === gridcells[4].innerText && gridcells[4].innerText == gridcells[8].innerText   && gridcells[0].innerText != '' && gridcells[4].innerText != ''  && gridcells[8].innerText != ''){
        console.log(`${player.name} win!`);
        gamewon = true;
    }
}