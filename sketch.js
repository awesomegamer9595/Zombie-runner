var Background1,BackgroundImage;
var car,Jake,zombie1,Jake_Image,zombieImage;
var edge;
function preload(){
    BackgroundImage=loadImage("level_One.gif.2.gif")
    Jake_Image=loadAnimation("png/Run_000.png","png/Run_001.png","png/Run_002.png","png/Run_003.png","png/Run_004.png","png/Run_005.png","png/Run_006.png","png/Run_007.png","png/Run_008.png","png/Run_009.png")
zombieImage=loadAnimation("zombie/Walk (1).png","zombie/Walk (2).png","zombie/Walk (3).png",
"zombie/Walk (4).png","zombie/Walk (5).png","zombie/Walk (6).png","zombie/Walk (7).png",
"zombie/Walk (8).png")
}


function setup(){
createCanvas(1000,455)
Background1=createSprite(0,225,1000,680)
Background1.x=Background1.width/2
//Background1.width = 1200;
//Background1.height = 600;
edge=createEdgeSprites();

Background1.addImage(BackgroundImage)
Jake=createSprite(400,400,10,40)
Jake.addAnimation("Jake_Image",Jake_Image)
Jake.scale=0.25;

}

function draw(){
background(0)
Background1.velocityX=-2
if(Background1.x<0){
Background1.x=Background1.width/2

}

if(keyDown(RIGHT_ARROW)){
Jake.x=Jake.x+10

}
else if(keyDown(LEFT_ARROW)){
    Jake.x=Jake.x-10
    
    }
 else if(keyDown("space")){
        Jake.velocityY=-6
        
        }
 else if(keyDown(DOWN_ARROW)){
            Jake.y=Jake.y+20
            
            }
        
Jake.velocityY=Jake.velocityY+0.4
Jake.collide(edge[3])
spawnZombie();

drawSprites();
}


function spawnZombie(){

if(frameCount%60===0){
zombie1=createSprite(Jake.x+700,Jake.y,40,40)
zombie1.velocityX=2


zombie1.addAnimation("ZOMBIE",zombieImage)

zombie1.scale=0.25;

}



}