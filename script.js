let player1_mark = document.getElementById('left_markSelector');
let player2_mark = document.getElementById('right_markSelector');
let play_btn = document.getElementById('play_btn');
let header = document.getElementById('header');




if(player1_mark.checked == false && player2_mark.checked == false){
    player1_mark.checked = true;
}

player1_mark.addEventListener('click', () => {
    if(player2_mark.checked == true){
        player1_mark.checked = true;
        player2_mark.checked = false;
    }
})

player2_mark.addEventListener('click', () => {
    if(player1_mark.checked == true){
        player2_mark.checked = true;
        player1_mark.checked = false;
    }
})




export let playerInfo = {};



play_btn.addEventListener('click', () => {
    let player1_name = document.getElementById('name_left').value;
    let player2_name = document.getElementById('name_right').value;


    if(player1_name.length >= 1 && player2_name.length >= 1){
        playerInfo.player1_name = player1_name;
        playerInfo.player2_name = player2_name;
        playerInfo.player1_mark = player1_mark.checked;
        playerInfo.player2_mark = player2_mark.checked;


        window.location.href = 'game.html';
    }
    else{
        header.innerText = `Names are mandatory`;
        header.style.fontSize = '4rem';
        header.style.color = '#67F0B1';
        header.style.backgroundColor = '#FC806D';
        header.style.display = `flex`;
        header.style.alignItems = `center`;
        header.style.justifyContent = `center`;
        header.style.fontFamily = `'Ubuntu', sans-serif`;

        setTimeout( function(){
            header.innerText = `Tic Tac Toe`;
            header.style.backgroundColor= '#A15145';
            header.style.display = `flex`;
            header.style.alignItems = `center`;
            header.style.justifyContent = `center`;
            header.style.fontFamily = `'Ubuntu', sans-serif`;
            header.style.fontSize = `5rem`;
            header.style.color = `#44EB9E`;
        }, 1000)
    }
})




/*Before redirecting the user to the game, I want to get their name. 
I also want either one of them to choose a different mark. 
Okay, so this is simple. 

For the mark, I can add an event listener to both of them, so if either one of them gets a 
value of true,  the other one will automatically be false. 

And I will add an event listener to the play button. So whenever it is clicked, it will check for

1. Both the player has names. 
2. Either one of them has a value of true. 
3. It will then transfer, both the player's name and their marks
to a new function. I will then have to export this function onto the other file.*/