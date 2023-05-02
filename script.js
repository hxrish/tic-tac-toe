let gridcells = [...document.querySelectorAll('.cell')];

let userName = prompt(`What's your name`, 'Anything');
let markk = prompt('whats ur mark', 'anything');

let gridcellsToArr = (function (){
    let arr = [];
        for (let index = 0; index < gridcells.length ; index++) {
        arr.push(gridcells[index]);
    }

    return {
        arr,
    }
})(gridcells)

function player(name, mark, playing){
   return{
        name,
        mark,
        playing
   }
};

let player1 = player(userName, markk, true);
let player2 = player('nomnom', 'x', false);


(function whoIsplaying () {
    let playingPlayer;
    gridcellsToArr.arr.forEach(Element => {
        Element.addEventListener('click', () => {
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
                Element.innerText = 'x';
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
    if(gridcellsToArr.arr[0].innerText === gridcellsToArr.arr[4].innerText && gridcellsToArr.arr[4].innerText === gridcellsToArr.arr[8].innerText   && gridcellsToArr.arr[8].innerText != '' && gridcellsToArr.arr[0].innerText != ''  && gridcellsToArr.arr[4].innerText != '' ){
        console.log(`${player.name} win!`);
    } //Diagonal winning from 0 till 8
    else if(gridcellsToArr.arr[2].innerText === gridcellsToArr.arr[4].innerText && gridcellsToArr.arr[4].innerText === gridcellsToArr.arr[6].innerText   && gridcellsToArr.arr[2].innerText != '' && gridcellsToArr.arr[4].innerText != ''  && gridcellsToArr.arr[6].innerText != '' ){
        console.log(`${player.name} win!`);
    }
    else if(gridcellsToArr.arr[0].innerText === gridcellsToArr.arr[1].innerText && gridcellsToArr.arr[1].innerText === gridcellsToArr.arr[2].innerText   && gridcellsToArr.arr[2].innerText != '' && gridcellsToArr.arr[0].innerText != ''  && gridcellsToArr.arr[1].innerText != '' ){
        console.log(`${player.name} win!`);
    } //Horizontal line winning from 0 till 2
    else if(gridcellsToArr.arr[3].innerText === gridcellsToArr.arr[4].innerText && gridcellsToArr.arr[4].innerText === gridcellsToArr.arr[5].innerText   && gridcellsToArr.arr[3].innerText != '' && gridcellsToArr.arr[4].innerText != ''  && gridcellsToArr.arr[5].innerText != '' ){
        console.log(`${player.name} win!`);
    } //Horizontal line winning from 3 till 5
    else if(gridcellsToArr.arr[6].innerText === gridcellsToArr.arr[7].innerText && gridcellsToArr.arr[7].innerText === gridcellsToArr.arr[8].innerText   && gridcellsToArr.arr[6].innerText != '' && gridcellsToArr.arr[7].innerText != ''  && gridcellsToArr.arr[8].innerText != '' ){
        console.log(`${player.name} win!`);
    } //Horizontal line winnning from 6 till 8
    else if(gridcellsToArr.arr[0].innerText === gridcellsToArr.arr[3].innerText && gridcellsToArr.arr[3].innerText === gridcellsToArr.arr[6].innerText   && gridcellsToArr.arr[0].innerText != '' && gridcellsToArr.arr[3].innerText != ''  && gridcellsToArr.arr[6].innerText != '' ){
        console.log(`${player.name} win!`);
    } //Vertical line winning from 0 till 6
    else if(gridcellsToArr.arr[1].innerText === gridcellsToArr.arr[4].innerText && gridcellsToArr.arr[4].innerText === gridcellsToArr.arr[7].innerText   && gridcellsToArr.arr[1].innerText != '' && gridcellsToArr.arr[4].innerText != ''  && gridcellsToArr.arr[7].innerText != '' ){
        console.log(`${player.name} win!`);
    } //Vertical line winning from 1 till 7
    else if(gridcellsToArr.arr[2].innerText === gridcellsToArr.arr[5].innerText && gridcellsToArr.arr[5].innerText === gridcellsToArr.arr[8].innerText   && gridcellsToArr.arr[2].innerText != '' && gridcellsToArr.arr[5].innerText != ''  && gridcellsToArr.arr[8].innerText != ''){
        console.log(`${player.name} win!`);
    }
    else if(gridcellsToArr.arr[0].innerText === gridcellsToArr.arr[4].innerText && gridcellsToArr.arr[4].innerText === gridcellsToArr.arr[8].innerText   && gridcellsToArr.arr[0].innerText != '' && gridcellsToArr.arr[4].innerText != ''  && gridcellsToArr.arr[8].innerText != ''){
        console.log(`${player.name} win!`);
    }
}



/*else if(gridcellsToArr.arr[0].innerText === gridcellsToArr.arr[3].innerText && gridcellsToArr.arr[3].innerText === gridcellsToArr.arr[6].innerText   && gridcellsToArr.arr[0].innerText != '' && gridcellsToArr.arr[3].innerText != ''  && gridcellsToArr.arr[6].innerText != ''){
    console.log('Win!')
} */










