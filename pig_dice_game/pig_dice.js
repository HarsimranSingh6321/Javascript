var player1_score = 0;
var player2_score = 0;
var value = 0;
var player_choice = 1;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.click1').disabled = true;
  document.querySelector('.hold').disabled = true;

  document.querySelector('.play').onclick = function() {

    document.querySelector('.click1').disabled = false;
    document.querySelector('.hold').disabled = false;

    document.querySelector('.turn').innerHTML = 'Player ' + player_choice + "'s turn ";
    document.querySelector('.click1').onclick = function() {

      var random = Math.floor(Math.random() * 6) + 1;
      document.querySelector('.value').innerHTML = random;
      if (random != 1) {
        value = value + random;
        var current_value = document.querySelector('.current_value').innerHTML;
        current_value = "Temporary Score : " + value;
        document.querySelector('.current_value').innerHTML = current_value;
      } else if (random === 1) {
        value = 0;
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
    document.querySelector('.hold').onclick = function() {

      if (player_choice == 1) {
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
        document.querySelector('.turn').innerHTML = "Click On Play Again";
        document.querySelector('.play').innerHTML = "Play Again";
        document.querySelector('.click1').disabled = true;
        document.querySelector('.hold').disabled = true;
        document.querySelector('.play').onclick = function() {
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
      } else if (player2_score >= 100) {
        document.querySelector('#wins').innerHTML = "Hurray! player 2 wins.";
        document.querySelector('.turn').innerHTML = "Click On Play Again ";
        document.querySelector('.play').innerHTML = "Play Again";
        document.querySelector('.click1').disabled = true;
        document.querySelector('.hold').disabled = true;
        document.querySelector('.play').onclick = function() {
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
    }
  }
})
