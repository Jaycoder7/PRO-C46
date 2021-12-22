class Form {

    constructor() {
      this.input = createInput("name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.question = createImg("images/question.png");
      this.input1 = createInput("answer");
      this.button1 = createButton('Play');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.input1.hide();
      this.button1.hide();
      this.question.hide();
    }
    display(){
     
      if(gameState === "start")
      {
        
        this.title.html("The Key Runner");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
      }
      else if(gameState === "answer")
      {
        
       this.question.position(1750,200);
       this.question.class("gameImage");
  //      question.visible = true; 
        console.log(gameState);
this.input1.position(displayWidth/2 + 1000, displayHeight/2-100);
this.button1.position(displayWidth/2 + 1000,500);
this.button1.mousePressed(()=>{
  answer = this.input1.value();
this.question.hide();
    if(answer === "coin"){

gameState = "correct"

this.input1.hide();
this.button1.hide();
score = score+1;
console.log(score)
man.position.x = 1000;
man.position.y=100;
gameState = "play"

      }
      else if (answer !== "coin"){
        gameState ="incorrect";
        this.input1.hide();
        this.button1.hide();
      }
});

    
    }
    
 if(gameState=="start"){
 console.log("here");
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        
        player = this.input.value();
       this.greeting.html("Hello " + player);
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        gameState ="play";
        
      });
      this.greeting.hide();
    }
    
    }
    }