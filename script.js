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

function createPlayer(name, mark){
    return {
        name,
        mark,
        playing: function decide(){
            if(mark == 'x'){
                return false;
            }
            else if(mark == 'o'){
                return true;
            };
        }
    }
}

let player1 = createPlayer('harish', 'o');
let player2 = createPlayer('nomnom', 'x');

let whoIsPlaying = (function (){
    let playing;
    if(player1.playing = true){
        playing = player1;
    }
    else if(player1.playing = false){
        playing = player2;
    }
    return playing;
})(player1, player2);


gridcellsToArr.arr.forEach(element => {
    element.addEventListener('click', () => {
        if (player1.playing = false){
            console.log('nhji');
            // player1.playing = true;
            // player2.playing = false;
            console.log(whoIsPlaying);
        }
        else if (player1.playing = true){
            console.log('hi');
            player1.playing = false;
            player2.playing = true;
            console.log(whoIsPlaying);
        }
    })
});






