const DELAY = 200;

const SNAKE_SIZE = 20;
const SNAKE_COLOR = "green";
let snake;
const CENTER_X = getWidth()/2;
const CENTER_Y = getHeight()/2;
let dx = SNAKE_SIZE;
let dy = 0;

function main(){
    snake = initSnake(SNAKE_SIZE , SNAKE_SIZE , SNAKE_COLOR , CENTER_X - SNAKE_SIZE/2, CENTER_Y-SNAKE_SIZE/2);
    setTimer(run , DELAY);
    keyDownMethod(changeDir);
}

function initSnake(width ,height , color , x , y){
    let rect = new Rectangle(SNAKE_SIZE , SNAKE_SIZE);
    rect.setColor(color);
    rect.setPosition(x,y);
    add(rect);
    
    return rect;
    
}

function run(){
    snake.move(dx , dy);
   
}

function changeDir(e){
    if(e.key == "ArrowLeft"){
        dx = -SNAKE_SIZE;
        dy = 0;
    
    } else if(e.key == "ArrowUp"){
        dx = 0;
        dy = -SNAKE_SIZE;
    } else if (e.key== "ArrowDown"){
        dx = 0;
        dy = SNAKE_SIZE;
    }else if (e.key == "ArrowRight"){
        dx = SNAKE_SIZE;
        dy = 0;
    }
}

main();
