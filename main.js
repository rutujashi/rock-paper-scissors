function playGame(userChoice)
{
   let userChoice = "rock" ;

   let choices = ["rock","paper","scissors"];

   let randomIndex = Math.floor(Math.random()* 3);
   let computerChoice = choices[randomIndex];

   console.log("User: " +userChoice);
   console.log("Computer: "+computerChoice);

   if(userChoice === computerChoice)
   {
      console.log("It's a Draw");
   }
   else if((userChoice ==="rock" && computerChoice ==="scissors") || 
          (userChoice ==="paper" && computerChoice ==="rock") ||
          (userChoice ==="scissors" && computerChoice ==="paper"))
   {
      console.log("user Wins!!!!!!");
   }
   else
   {
      console.log("Computer Wins!!!!!!!!!!");
   }
   
}