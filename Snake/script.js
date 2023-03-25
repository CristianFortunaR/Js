window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    snake_size = 3;

    setInterval(game, 100)

    document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            case 39:
                velX = 1;
                velY = 0;
                break;
            case 37:
                velX = -1;
                velY = 0;
                break;
            case 38:
                velX = 0;
                velY = -1;
                break;
            case 40:
                velX = 0;
                velY = 1;
                break;
        }
    });
}

function game(){
    ctx.fillStyle = "#00D765";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    positionX += velX;
    positionY += velY;

    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0;
    }

    ctx.fillStyle = "#005DFF";
    for(let i=0; i < snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1)
        if(snake[i].x == positionX && snake[i].y == positionY){
            snake_size = 3;
        }
    }

    snake.push({x: positionX, y: positionY})
    console.log(snake[0]);

    while(snake.length > snake_size){
        snake.shift();
    }

    ctx.fillStyle = "#AB2E2E"
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

    if(positionX == foodX && positionY == foodY){
        snake_size++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }
}