let gridcells = [...document.querySelectorAll('.cell')];

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

let player1 = player('harish', 'o', true);
let player2 = player('nomnom', 'x', false);


(function whoIsplaying () {
    let playingPlayer;
    gridcellsToArr.arr.forEach(Element => {
        Element.addEventListener('click', () => {
            if (player1.playing == true){
                Element.innerText = 'o';
                winning();
                playingPlayer = player1;
                player1.playing = false;
                player2.playing = true;
                // console.log(playingPlayer);
            }
            else if(player1.playing == false && player2.playing == true){
                winning();
                playingPlayer = player2;
                player2.playing = false;
                player1.playing = true;
                // console.log(playingPlayer);
            }
        })
    })
    // console.log(playingPlayer);
})(player1, player2);

function winning(){
    if(gridcellsToArr.arr[0].innerText === gridcellsToArr.arr[4].innerText && gridcellsToArr.arr[4].innerText === gridcellsToArr.arr[8].innerText   && gridcellsToArr.arr[8].innerText === gridcellsToArr.arr[11].innerText && gridcellsToArr.arr[8].innerText != '' && gridcellsToArr.arr[0].innerText != ''  && gridcellsToArr.arr[4].innerText != '' ){
        console.log('win!');
    }
    else if(gridcellsToArr.arr[0].innerText === gridcellsToArr.arr[1].innerText && gridcellsToArr.arr[2].innerText != '' && gridcellsToArr.arr[0].innerText != ''  && gridcellsToArr.arr[1].innerText != '' ){
        console.log('win!');
    }
}











