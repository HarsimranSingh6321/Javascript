var player1_score = 0;
var player2_score = 0;
var value = 0;
var player_choice = 1;
var count = 0
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.click1').disabled = true;
  document.querySelector('.hold').disabled = true;


  document.querySelector('.play').onclick = function() {

    document.querySelector('.click1').disabled = false;
    document.querySelector('.hold').disabled = false;

    document.querySelector('.turn').innerHTML = 'Player ' + player_choice + "'s turn ";

    document.querySelector('.click1').onclick = function() {
      count = 0; // Clearing the (hold button click) counter

      document.querySelector('.hold').disabled = false; //When die rolls a 1 hold button gets diabled and when player clicks roll dice button again then hold button gets enabled

      var random = Math.floor(Math.random() * 6) + 1;
      document.querySelector('.value').innerHTML = random;

      //If a player rolls a die other than 1
      if (random != 1) {
        value = value + random;
        var current_value = document.querySelector('.current_value').innerHTML;
        current_value = "Temporary Score : " + value;
        document.querySelector('.current_value').innerHTML = current_value;

        //If die rolled by player gives 1
      } else if (random === 1) {
        value = 0;
        document.querySelector('.hold').disabled = true; // When 1 is rolled disable hold button so that usin hold button the turns of the player doesn't change unnecessarily.
        document.querySelector('.current_value').innerHTML = "Temporary Score : " + value;
        if (player_choice == 1) {
          player_choice = 2;
          document.querySelector('.turn').innerHTML = 'Player  ' + player_choice + "'s turn ";
        } else {
          player_choice = 1;
          document.querySelector('.turn').innerHTML = 'Player  ' + player_choice + "'s turn ";
        }
      }
    }

    //When  a player clicks on Hold Button
    document.querySelector('.hold').onclick = function() {
      count++;
      if (count > 1) { //If a player clicks on hold button more than once consecutively
        player_choice = player_choice; //then the turn stays on that player only
        document.querySelector('.turn').innerHTML = 'Player ' + player_choice + "'s turn ";
      } else if (player_choice == 1) {
        player1_score += value;
        document.querySelector('.player1').innerHTML = "Player 1's Score : " + player1_score;
        value = 0;
        document.querySelector('.current_value').innerHTML = "Temporary Score : " + value;
        player_choice = 2;
        document.querySelector('.turn').innerHTML = 'Player ' + player_choice + "'s turn ";
      } else if (player_choice == 2) {
        player2_score += value;
        document.querySelector('.player2').innerHTML = "Player 2's Score : " + player2_score;
        value = 0;
        document.querySelector('.current_value').innerHTML = "Temporary Score : " + value;
        player_choice = 1;
        document.querySelector('.turn').innerHTML = 'Player ' + player_choice + "'s turn ";

      }
      if (player1_score >= 100) {
        document.querySelector('#wins').innerHTML = "Hurray! player 1 wins.";
        end_game();
      } else if (player2_score >= 100) {
        document.querySelector('#wins').innerHTML = "Hurray! player 2 wins.";
        end_game();

      }
    }
  }
});

function end_game() {
  document.querySelector('.turn').innerHTML = "Click On Play Again";
  document.querySelector('.play').disabled = false;
  document.querySelector('.play').innerHTML = "Play Again";
  document.querySelector('.click1').disabled = true;
  document.querySelector('.hold').disabled = true;
  document.querySelector('.play').onclick = function() {
    document.querySelector('.play').disabled = true;
    document.querySelector('.click1').disabled = false;
    document.querySelector('.hold').disabled = false;
    player1_score = 0;
    document.querySelector('.player1').innerHTML = "Player 1's Score : " + player1_score;
    player2_score = 0;
    document.querySelector('.player2').innerHTML = "Player 2's Score : " + player2_score;
    value = 0;
    player_choice = 1;
    document.querySelector('.turn').innerHTML = 'Player ' + player_choice + "'s turn ";
    document.querySelector('#wins').innerHTML = "Score 100, to win the game";
  }
}
