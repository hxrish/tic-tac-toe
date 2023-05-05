let playBtn = document.getElementById('play_btn');


playBtn.addEventListener('click', () => {
    let rightName = document.getElementById('name_right').value;
    let leftName = document.getElementById('name_left').value;
    let didLeftChooseX = document.getElementById('left_markSelector').checked;
    if(rightName.length >= 1 && leftName.length >= 1){
        
    }


});

function createPlayer(name, mark, firstTurn){
    return {
        name, 
        mark,
        firstTurn
    }
}


function playinfo(rightName, leftName, didLeftChooseX){
    return{
        rightName,
        leftName,
        whoWillGoFirst() {
            if(didLeftChooseX == true){
                let leftplayerMark = 'X';
                let rightplayerMark = 'O';
            }
            else{
                let leftplayerMark = 'O';
                let rightplayerMark = 'X';
            }
        }
    }
}