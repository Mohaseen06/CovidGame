var score = 0
var immunity = 100;
var status1 = "not collected";
var status2 = "not collected";
var status3 = "not collected";


var gameState = "play"

var infected1 = false
var infected2 = false
var infected3 = false
var infected4 = false
var infected5 = false
var infected6 = false
var infected7 = false
var infected8 = false
var infected9 = false


function preload() {
    backgroundImg = loadImage("bg7.png");
    house = loadImage("house1.png")
    playerImg = loadImage("man1.png")
    medicalSuppliesImg = loadImage("medicalsupplies1.png")
    groceryStoreImg = loadImage("grocerystore.png")
    superMarketImg = loadImage("supermarket1.png")
    icImg = loadImage("ic.png")
}

function setup(){
createCanvas(1200,600);

player = createSprite(1180,270,40,40);
player.shapeColor = "black"
player.addImage(playerImg);
player.scale = 0.5

playerHouse = createSprite(1160,270,40,40);
player.shapeColor = "black"
playerHouse.addImage(house)
playerHouse.scale = 0.75


 //medicalSuppliesYellow
ic1 = createSprite(1050,400,20,20);
ic1.shapeColor = "yellow"
ic1.velocityY = 20;
ic1.addImage(icImg);
ic1.scale = 0.2

//medical supplies white
ic2 = createSprite(894,336,20,20);
ic2.shapeColor = "white"
ic2.velocityX = 20;
ic2.addImage(icImg);
ic2.scale = 0.2

//grocery score violet
ic3 = createSprite(370,140,20,20);
ic3.shapeColor = "violet"
ic3.velocityY = 7;
ic3.addImage(icImg);
ic3.scale = 0.2

//grocery score maroon
ic4 = createSprite(259,140,20,20);
ic4.shapeColor = "maroon"
ic4.velocityX = 9;
ic4.addImage(icImg);
ic4.scale = 0.2

//middle right side
ic5 = createSprite(670,270,20,20);
ic5.shapeColor = "purple"
ic5.velocityY = 8;
ic5.addImage(icImg);
ic5.scale = 0.2

//middle left side
ic6 = createSprite(650,120,20,20);
ic6.shapeColor = "pink"
ic6.velocityY = 7.5;
ic6.addImage(icImg);
ic6.scale = 0.2

ic7 = createSprite(582,477,20,20);
ic7.shapeColor = "white"
ic7.velocityY = 7.5;
ic7.addImage(icImg);
ic7.scale = 0.2

//super market
ic8 = createSprite(366,376,20,20);
ic8.shapeColor = "white"
ic8.velocityY = 11;
ic8.addImage(icImg);
ic8.scale = 0.2

ic9 = createSprite(115,194,20,20);
ic9.shapeColor = "white"
ic9.velocityY = 11;
ic9.addImage(icImg);
ic9.scale = 0.2



tint(0,0)
groceryStore = createSprite(196,178,40,40);
groceryStore.shapeColor = "red"
groceryStore.addImage(groceryStoreImg);
groceryStore.scale = 0.4

medicalSupplies = createSprite(871,429,40,40);
medicalSupplies.shapeColor = "green"
medicalSupplies.addImage(medicalSuppliesImg);
medicalSupplies.scale = 0.25


superMarket = createSprite(290,451,40,40);
superMarket.shapeColor = "white"
superMarket.addImage(superMarketImg);
superMarket.scale = 0.3



//upperline
 ul = createSprite(600,50,1102.5,5);
ul.shapeColor = "#4fc3f7"

//leftline
 ll1 = createSprite(50,148,5,200);
ll1.shapeColor = "#4fc3f7"
ll2 = createSprite(50,430,5,250);
ll2.shapeColor = "#4fc3f7"

//bottomline
 bl1 = createSprite(240,555,385,5);
bl1.shapeColor = "#4fc3f7"
 bl2 = createSprite(830,555,650,5);
bl2.shapeColor = "#4fc3f7"

//rightline
rl1 = createSprite(1152.5,148,5,200);
rl1.shapeColor = "#4fc3f7"
rl2 = createSprite(1152.5,430,5,250);
rl2.shapeColor = "#4fc3f7"


//middleUp T
strokeWeight(3)
 mu1 = createSprite(575,170,100,80);
mu1.shapeColor = "#4fc3f7"
 mu2 = createSprite(575,210,350,50);
mu2.shapeColor = "#4fc3f7"

//middleDown T
strokeWeight(3)
md1 = createSprite(575,350,350,50);
md1.shapeColor = "#4fc3f7"
md2 = createSprite(575,390,100,80);
md2.shapeColor = "#4fc3f7"

//lines
//right side 4 lines
 l1 = createSprite(940,115,300,5);
l1.shapeColor = "#4fc3f7"

    l2 = createSprite(795,320,5,300);
l2.shapeColor = "#4fc3f7"

 l3 = createSprite(942.5,470,300,5);
l3.shapeColor = "#4fc3f7"

    l4 = createSprite(1087.5,265,5,300);
l4.shapeColor = "#4fc3f7"


  
//left side C
    l5 = createSprite(305,490,240,5)
l5.shapeColor = "#4fc3f7"

    l6 = createSprite(280,540,295,5)
l6.shapeColor = "#4fc3f7"

    l7 = createSprite(185,380,5,225)
l7.shapeColor = "#4fc3f7"

    l8 = createSprite(133,415,5,250)
l8.shapeColor = "#4fc3f7"

    l9 = createSprite(285,270,200,5)
l9.shapeColor = "#4fc3f7"

    l10 = createSprite(260,220,250,5)
l10.shapeColor = "#4fc3f7"

    l11 = createSprite(384,242,5,50)
l11.shapeColor = "#4fc3f7"

//boxes
b1 = createSprite(350,80,200,30)
b1.shapeColor = "#4fc3f7"

b2 = createSprite(345,320,60,60)
b2.shapeColor = "#4fc3f7"

b3 = createSprite(983,276,150,30)
b3.shapeColor = "#4fc3f7"

b4 = createSprite(960,365,20,80)
b4.shapeColor = "#4fc3f7"

b5 = createSprite(115,350,30,130)
b5.shapeColor = "#4fc3f7"

//t's

t1 = createSprite(150,100,100,30);
t1.shapeColor = "#4fc3f7"

t2 = createSprite(150,115,50,45);
t2.shapeColor = "#4fc3f7"

    t3 = createSprite(900,155,100,30);
t3.shapeColor = "#4fc3f7"
    t4 = createSprite(900,170,50,45);
t4.shapeColor = "#4fc3f7"

    /*t5 = createSprite(930,250,100,30);
t5.shapeColor = "#4fc3f7"
    t6 = createSprite(930,265,50,45);
t6.shapeColor = "#4fc3f7"*/


}

function draw(){
    tint(126,255);
    background(backgroundImg)   
    
    textSize(16);
    fill("white")

    text("Score: "+score,1100,30)
    text("Immunity: "+immunity+"%",970,30)

 if(gameState === "play"){
     if (keyDown(DOWN_ARROW)) {
            player.y = player.y+10
            }
    if (keyDown(RIGHT_ARROW)) {
            player.x = player.x+10;       
            }    
    if (keyDown(LEFT_ARROW)) {
              player.x = player.x-10     
          }
     if (keyDown(UP_ARROW)) {
            player.y = player.y-10
                 }
}            

if(gameState === "play"){
    //medicalSuppliesYellow
    bounceOff(ic1,b3);
    bounceOff(ic1,l3);

    //medical supplies white
    bounceOff(ic2,b4)
    bounceOff(ic2,l2)

    //grocery store violet
    bounceOff(ic3,b1)
    bounceOff(ic3,l10)

    //grocery store maroon
    bounceOff(ic4,t1)
    bounceOff(ic4,mu1)

    //middle right
    bounceOff(ic5,md1)
    bounceOff(ic5,mu2)

    //middle left
    bounceOff(ic6,ul)
    bounceOff(ic6,mu2)
    
    //middle downest
    bounceOff(ic7,md2)
    bounceOff(ic7,bl2)

    bounceOff(ic8,b2)
    bounceOff(ic8,l5)

    bounceOff(ic9,b5)
    bounceOff(ic9,t2)
}

    if(immunity === 0 && gameState === "play"){
        gameState = "end"
    }

    textSize(20)
    fill("white")
    text("Stay Safe From The Covid Infected People (Who are continuously moving)!!!!",200,26)


    player.collide(ul)
    player.collide(ll1)
    player.collide(ll2)
    player.collide(bl1)
    player.collide(bl2)
    player.collide(rl1)
    player.collide(rl2)

    player.collide(t1)
    player.collide(t2)
    player.collide(t3)
    player.collide(t4)
    //player.collide(t5)
    //player.collide(t6)

    player.collide(mu1)
    player.collide(mu2)
    player.collide(md1)
    player.collide(md2)

    player.collide(l1)
    player.collide(l2)
    player.collide(l3)
    player.collide(l4)
    player.collide(l5)
    player.collide(l6)
    player.collide(l7)
    player.collide(l8)
    player.collide(l9)
    player.collide(l10)
    player.collide(l11)

    player.collide(b1)
    player.collide(b2)
    player.collide(b3)
    player.collide(b4)
    player.collide(b5)


        if(gameState === "end"){
        textSize(40)
        fill("white")
        text("Game Over!!!! You Got Infected",300,300)  
        }

        if(immunity < 0){
            immunity = 0
        }


      if(player.isTouching(medicalSupplies)){
          fill("white")
          text("Collected!",player.x,player.y-30)
          player.velocityX = 0;
          player.velocityY = 0;
          if(status1 === "not collected"){
          status1 = "collected"
          score = score+15
          }
      }

      if(player.isTouching(groceryStore)){
        fill("white")
        text("Collected!",player.x,player.y-30)
        player.velocityX = 0;
        player.velocityY = 0;
        if(status2 === "not collected"){
        status2 = "collected"
        score = score+15
        }
    }

    if(player.isTouching(superMarket)){
        fill("white")
        text("Collected!",player.x,player.y-30)
        player.velocityX = 0;
        player.velocityY = 0;
        if(status3 === "not collected"){
        status3 = "collected"
        score = score+15
        }
    }






      if(ic1.isTouching(player) && infected1 === false){
          infected1 = true
          fill("white")
          text("Got Infected!!",player.x,player.y-30)
          if(infected1 === true){
            immunity = immunity-Math.round(random(10,20));
          }  
      }

      if(ic2.isTouching(player) && infected2 === false){
        infected2 = true
        fill("white")
        text("Got Infected!!",player.x,player.y-30)
        if(infected2 === true){
          immunity = immunity-Math.round(random(10,20));
        }  
    }

    if(ic3.isTouching(player) && infected3 === false){
        infected3 = true
        fill("white")
        text("Got Infected!!",player.x,player.y-30)
        if(infected3 === true){
          immunity = immunity-Math.round(random(10,20));
        }  
    }

    if(ic4.isTouching(player) && infected4 === false){
        infected4 = true
        fill("white")
        text("Got Infected!!",player.x,player.y-30)
        if(infected4 === true){
          immunity = immunity-Math.round(random(10,20));
        }  
    }

    if(ic5.isTouching(player) && infected5 === false){
        infected5 = true
        fill("white")
        text("Got Infected!!",player.x,player.y-30)
        if(infected5 === true){
          immunity = immunity-Math.round(random(10,20));
        }  
    }

    if(ic6.isTouching(player) && infected6 === false){
        infected6 = true
        fill("white")
        text("Got Infected!!",player.x,player.y-30)
        if(infected6 === true){
          immunity = immunity-Math.round(random(10,20));
        }  
    }

    if(ic7.isTouching(player) && infected7 === false){
        infected7 = true
        fill("white")
        text("Got Infected!!",player.x,player.y-30)
        if(infected7 === true){
          immunity = immunity-Math.round(random(10,20));
        }  
    }

    if(ic8.isTouching(player) && infected8 === false){
        infected8 = true
        fill("white")
        text("Got Infected!!",player.x,player.y-30)
        if(infected8 === true){
          immunity = immunity-Math.round(random(10,20));
        }  
    }

    if(ic9.isTouching(player) && infected9 === false){
        infected9 = true
        fill("white")
        text("Got Infected!!",player.x,player.y-30)
        if(infected9 === true){
          immunity = immunity-Math.round(random(10,20));
        } 
    }

    if(immunity <= 0 && gameState === "play"){
        gameState = "end"
    }


    console.log("x: "+mouseX);
    console.log("y: "+mouseY);

    drawSprites();
}




