
          class Game {
            constructor(){
          
            }

            play(){
            
                background(rgb(198,135,103));
                image(background_Img, 0,-displayHeight*4,displayWidth, displayHeight*5);
                
    
            
              drawSprites();
            }
          
            end(){
              console.log("Game Ended");
            }
          }