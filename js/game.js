let playerInfo = JSON.parse(window.localStorage.getItem('playerInfo'));

let replay = document.getElementById('replay');

let playerName_1 = document.getElementById('player1_name');
let playerName_2 = document.getElementById('player2_name');

let playerScore_1 = document.getElementById('player1_score');
let playerScore_2 = document.getElementById('player2_score');

let backToHomepage = document.getElementById('home_img');

backToHomepage.addEventListener('click', () => {
    window.localStorage.clear();
    window.location.replace('../index.html');
})

playerName_1.innerText = `${playerInfo.player1_name}:`;

playerName_2.innerText = `${playerInfo.player2_name}:`;

let player1_score = 0;
let player2_score = 0;

playerScore_1.innerText = player1_score;
playerScore_2.innerText = player2_score;



let gridcells = [...document.querySelectorAll('.grid_cell')];


let userName = playerInfo.player1_name;
let player1_markk;
let player2_markk;


if(playerInfo.player1_mark == true){
    player1_markk = 'X';
    player2_markk = 'O';
}
else{
    player1_markk = 'O';
    player2_markk = 'X';
}

// console.log(gridcells)


function player(name, mark, playing){
   return{
        name,
        mark,
        playing
   }
}; //Constructor function to make players

let player1 = player(playerInfo.player1_name, player1_markk, playerInfo.player1_mark);
let player2 = player(playerInfo.player2_name, player2_markk, playerInfo.player2_mark);

let gamewon = false; 

let playingPlayer;

(function whoIsplaying () {
    gridcells.forEach(Element => {
        Element.addEventListener('click', () => {
            if(gamewon){
                return
            }
            if (player1.playing == true){
                if(Element.innerText != ''){
                    return;
                }  
                Element.innerText = player1_markk;
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
                Element.innerText = player2_markk;
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
    if(gridcells[0].innerText === gridcells[4].innerText && gridcells[4].innerText === gridcells[8].innerText   && gridcells[8].innerText != '' && gridcells[0].innerText != ''  && gridcells[4].innerText != '' ){        console.log(`${player.name} win!`);
    playerScore_1.innerText = player1_score;
playerScore_2.innerText = player2_score;
        gamewon = true;

        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }

    } //Diagonal winning from 0 till 8
    else if(gridcells[2].innerText === gridcells[4].innerText && gridcells[4].innerText === gridcells[6].innerText   && gridcells[2].innerText != '' && gridcells[4].innerText != ''  && gridcells[6].innerText != '' ){
        console.log(`${player.name} win!`);
        playerScore_1.innerText = player1_score;
        playerScore_2.innerText = player2_score;

        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }


        gamewon = true;
    }
    else if(gridcells[0].innerText === gridcells[1].innerText && gridcells[1].innerText === gridcells[2].innerText   && gridcells[2].innerText != '' && gridcells[0].innerText != ''  && gridcells[1].innerText != '' ){
        console.log(`${player.name} win!`);
        playerScore_1.innerText = player1_score;
        playerScore_2.innerText = player2_score;
        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }

        gamewon = true;
    } //Horizontal line winning from 0 till 2
    else if(gridcells[3].innerText === gridcells[4].innerText && gridcells[4].innerText === gridcells[5].innerText   && gridcells[3].innerText != '' && gridcells[4].innerText != ''  && gridcells[5].innerText != '' ){
        console.log(`${player.name} win!`);
        playerScore_1.innerText = player1_score;
        playerScore_2.innerText = player2_score;
        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }

        gamewon = true;
    } //Horizontal line winning from 3 till 5
    else if(gridcells[6].innerText === gridcells[7].innerText && gridcells[7].innerText === gridcells[8].innerText   && gridcells[6].innerText != '' && gridcells[7].innerText != ''  && gridcells[8].innerText != '' ){
        console.log(`${player.name} win!`);
        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }
        playerScore_1.innerText = player1_score;
playerScore_2.innerText = player2_score;

        gamewon = true;
    } //Horizontal line winnning from 6 till 8
    else if(gridcells[0].innerText === gridcells[3].innerText && gridcells[3].innerText === gridcells[6].innerText   && gridcells[0].innerText != '' && gridcells[3].innerText != ''  && gridcells[6].innerText != '' ){
        console.log(`${player.name} win!`);
        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }
        playerScore_1.innerText = player1_score;
playerScore_2.innerText = player2_score;
        gamewon = true;
    } //Vertical line winning from 0 till 6
    else if(gridcells[1].innerText === gridcells[4].innerText && gridcells[4].innerText === gridcells[7].innerText   && gridcells[1].innerText != '' && gridcells[4].innerText != ''  && gridcells[7].innerText != '' ){
        console.log(`${player.name} win!`);
        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }
        playerScore_1.innerText = player1_score;
playerScore_2.innerText = player2_score;
        gamewon = true;
    } //Vertical line winning from 1 till 7
    else if(gridcells[2].innerText === gridcells[5].innerText && gridcells[5].innerText === gridcells[8].innerText   && gridcells[2].innerText != '' && gridcells[5].innerText != ''  && gridcells[8].innerText != ''){
        console.log(`${player.name} win!`);
        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }
        playerScore_1.innerText = player1_score;
playerScore_2.innerText = player2_score;
        gamewon = true;
    }
    else if(gridcells[0].innerText === gridcells[4].innerText && gridcells[4].innerText == gridcells[8].innerText   && gridcells[0].innerText != '' && gridcells[4].innerText != ''  && gridcells[8].innerText != ''){
        console.log(`${player.name} win!`);
        if(player.name == playerInfo.player1_name){
            player1_score += 1;
        }else{
            player2_score += 1;
        }
        playerScore_1.innerText = player1_score;
playerScore_2.innerText = player2_score;
        gamewon = true;
    }
}



replay.addEventListener('click', () => {
    gridcells.forEach(Element => {
        Element.innerText = '';
    })
    gamewon = false;
    if(playerInfo.player1_mark){
        playingPlayer = player1;
        player1.playing = true;
        player2.playing = false;
    }
    else{
        playingPlayer = player2;
        player2.playing = true;
        player1.playing = false;
    }
})