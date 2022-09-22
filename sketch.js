//criar as variaveis
var cozinheiro, cozinheiro2,tp,tutorial = true;
var bancada1,bancada2,bancada3,bancada4,bancada5,bancadas = [];
var barreira1,barreira2,barreira3,barreira4,isTake = false; 
var tabua,fogao,prato,alface,tomate,carne,pao,queijo;
var pao2,carne2,queijo2,tomate2,alface2;
var pao3,carne3,queijo3,tomate3,alface3;
var livro,livroAberto,exit;
var salada;
var alimentos = {
    frito:{
        carne:false,
        pao:false,
        queijo:false,
    },
    cortado:{
        carne:false,
        alface:false,
        tomate:false,
    },
    prato:{
        alface:false,
        tomate:false,
        carne:false,
        queijo:false,
        pao:false,
    }
};
var isHolding = false,isHolding2 = false,tp1On=false,tp2On=false;

function setup(){
    
    //criar a tela
    canvas = createCanvas(400,400);   

    //cozinheiros
    cozinheiro = createSprite(220,200,20,20);
    cozinheiro.shapeColor = "purple";    

    cozinheiro2 = createSprite(180,200,20,20);
    cozinheiro2.shapeColor = "blue";

    criarBarreiras();
    criarBancadas();
    criarItens();
}
  
function draw(){
    
    //fundo
    background("#D1B551");
    
    //desenhar os sprites na tela (importante estar depois do fundo)
    drawSprites();
    
    receitas()
    atualizar();
    tocar();
    colidir();

    move(cozinheiro,7);
    movewasd(cozinheiro2,7);

    console.log(isHolding);
    console.log(isHolding2);
}
function move(sprite,how){

    if(tp1On){
        how += 2;
    }
    //mover
    if(keyIsDown(UP_ARROW)){
        sprite.position.y-=how;
    }
    if(keyIsDown(DOWN_ARROW)){
        sprite.position.y+=how;
    }
    if(keyIsDown(LEFT_ARROW)){
        sprite.position.x-=how;
    }
    if(keyIsDown(RIGHT_ARROW)){
        sprite.position.x+=how;
    }
}
function movewasd(sprite,how){
    
    if(tp2On){
        how+=2;
    }
    //mover
    if(keyDown("w")){
        sprite.y -= how;
    }
    if(keyDown("s")){
        sprite.y += how;
    }
    if(keyDown("a")){
        sprite.x -= how;
    }
    if(keyDown("d")){
        sprite.x += how;
    }
}
function atualizar(){
    pao2.x = cozinheiro.x+5;
    pao2.y = cozinheiro.y-5;

    tomate2.x = cozinheiro.x+5;
    tomate2.y = cozinheiro.y-5;
    
    carne2.x = cozinheiro.x+5;
    carne2.y = cozinheiro.y-5;
    
    alface2.x = cozinheiro.x+5;
    alface2.y = cozinheiro.y-5;
    
    queijo2.x = cozinheiro.x+5;
    queijo2.y = cozinheiro.y-5;

    pao3.x = cozinheiro2.x+5;
    pao3.y = cozinheiro2.y-5;

    tomate3.x = cozinheiro2.x+5;
    tomate3.y = cozinheiro2.y-5;
    
    carne3.x = cozinheiro2.x+5;
    carne3.y = cozinheiro2.y-5;
    
    alface3.x = cozinheiro2.x+5;
    alface3.y = cozinheiro2.y-5;
    
    queijo3.x = cozinheiro2.x+5;
    queijo3.y = cozinheiro2.y-5;

    if(cozinheiro.y<0 || cozinheiro.y>400 || cozinheiro.x<0 || cozinheiro.x > 400){
        camera.y = cozinheiro.y;
        camera.x = cozinheiro.x;
    }else if(cozinheiro2.y<0 || cozinheiro2.y>400 || cozinheiro2.x<0 || cozinheiro2.x > 400){
        camera.y = cozinheiro2.y;
        camera.x = cozinheiro2.x;
    }  
    
    if(tutorial === true){
        textSize(18);
        fill("black");
        text("jogador roxo interage com i e anda com setas",10,220);
        text("jogador azul interage com f e anda com wasd",10,180);
        setTimeout(() => {
        tutorial = false;
        },10000);
    }

    salada.x = prato.x;
    salada.y = prato.y;
}
function colidir(){
    for(var i=0;i<bancadas.length;i++){
        cozinheiro.collide(bancadas[i]);
        cozinheiro2.collide(bancadas[i]);
    }

    cozinheiro.collide(pao);
    cozinheiro.collide(alface);
    cozinheiro.collide(tomate);
    cozinheiro.collide(queijo);
    cozinheiro.collide(carne);
     
    cozinheiro2.collide(pao);
    cozinheiro2.collide(alface);
    cozinheiro2.collide(tomate);
    cozinheiro2.collide(queijo);
    cozinheiro2.collide(carne);

    cozinheiro.collide(barreira1);
    cozinheiro.collide(barreira2);
    cozinheiro.collide(barreira3);
    cozinheiro.collide(barreira3);

    cozinheiro2.collide(barreira1);
    cozinheiro2.collide(barreira2);
    cozinheiro2.collide(barreira3);
    cozinheiro2.collide(barreira3);
}
function tocar(){
    
    if(cozinheiro.isTouching(pao) && isHolding === false){
        pao2.visible = true;
        isHolding = "pao";
    }
    if(cozinheiro.isTouching(carne) && isHolding === false){
        carne2.visible = true;
        isHolding = "carne";
    }
    if(cozinheiro.isTouching(queijo) && isHolding === false){
        queijo2.visible = true;
        isHolding = "queijo";
    }
    if(cozinheiro.isTouching(tomate) && isHolding === false){
        tomate2.visible = true;
        isHolding = "tomate";
    }
    if(cozinheiro.isTouching(alface) && isHolding === false){
        alface2.visible = true;
        isHolding = "alface";
    }

    if(cozinheiro2.isTouching(pao) && isHolding2 === false){
        pao3.visible = true;
        isHolding2 = "pao";
    }
    if(cozinheiro2.isTouching(carne) && isHolding2 === false){
        carne3.visible = true;
        isHolding2 = "carne";
    }
    if(cozinheiro2.isTouching(queijo) && isHolding2 === false){
        queijo3.visible = true;
        isHolding2 = "queijo";
    }
    if(cozinheiro2.isTouching(tomate) && isHolding2=== false){
        tomate3.visible = true;
        isHolding2 = "tomate";
    }
    if(cozinheiro2.isTouching(alface) && isHolding2 === false){
        alface3.visible = true;
        isHolding2 = "alface";
    }

    if(cozinheiro.isTouching(tp)){
        tp1On = true;
        cozinheiro.x = 200;
        cozinheiro.y = 200;
        camera.x = 200;
        camera.y = 200;
    }
    if(cozinheiro2.isTouching(tp)){
        tp2On = true;
        cozinheiro2.x = 200;
        cozinheiro2.y = 200;
        camera.x = 200;
        camera.y = 200;
    }

    if(cozinheiro.isTouching(fogao) && isHolding === "queijo"){
        if(keyDown("i")){
            wait(3000,"queijo","fogao",1);
        }
    }
    if(cozinheiro.isTouching(prato) && (isHolding === "queijo" || isHolding === "queijoFrito")){
        if(keyDown("i")){
            wait(3000,"queijo","prato",1);
        }
    }
    if(cozinheiro.isTouching(tabua) && isHolding === "queijo"){
        if(keyDown("i")){
            wait(3000,"queijo","tabua",1);
        }
    }

    if(cozinheiro2.isTouching(fogao) && isHolding2 === "queijo"){
        if(keyDown("f")){
            wait(3000,"queijo","fogao",2);
        }
    }
    if(cozinheiro2.isTouching(prato) && (isHolding2 === "queijo" || isHolding2 === "queijoFrito")){
        if(keyDown("f")){
            wait(3000,"queijo","prato",2);
        }
    }
    if(cozinheiro2.isTouching(tabua) && isHolding2 === "queijo"){
        if(keyDown("f")){
            wait(3000,"queijo","tabua",2);
        }
    }


    if(cozinheiro.isTouching(fogao) && isHolding === "pao"){
        if(keyDown("i")){
            wait(3000,"pao","fogao",1);
        }
    }
    if(cozinheiro.isTouching(prato) && (isHolding === "pao" || isHolding === "paoFrito")){
        if(keyDown("i")){
            wait(3000,"pao","prato",1);
        }
    }
    if(cozinheiro.isTouching(tabua) && isHolding === "pao"){
        if(keyDown("i")){
            wait(3000,"pao","tabua",1);
        }
    }

    if(cozinheiro2.isTouching(fogao) && isHolding2 === "pao"){
        if(keyDown("f")){
            wait(3000,"pao","fogao",2);
        }
    }
    if(cozinheiro2.isTouching(prato) && (isHolding2 === "pao" || isHolding2 === "paoFrito")){
        if(keyDown("f")){
            wait(3000,"pao","prato",2);
        }
    }
    if(cozinheiro2.isTouching(tabua) && (isHolding2 === "pao")){
        if(keyDown("f")){
            wait(3000,"pao","tabua",2);
        }
    }


    if(cozinheiro.isTouching(fogao) && (isHolding === "carne" || isHolding === "carneCortada")){
        if(keyDown("i")){
            wait(3000,"carne","fogao",1);
        }
    }
    if(cozinheiro.isTouching(prato) && (isHolding === "carne" || isHolding === "carneFrita" || isHolding === "carneCortada")){
        if(keyDown("i")){
            wait(3000,"carne","prato",1);
        }
    }
    if(cozinheiro.isTouching(tabua) && (isHolding === "carne" || isHolding === "carneFrita")){
        if(keyDown("i")){
            wait(3000,"carne","tabua",1);
        }
    }

    if(cozinheiro2.isTouching(fogao) && (isHolding2 === "carne" || isHolding2 === "carneCortada")){
        if(keyDown("f")){
            wait(3000,"carne","fogao",2);
        }
    }
    if(cozinheiro2.isTouching(prato) && (isHolding2 === "carne" || isHolding2 === "carneFrita" || isHolding2 === "carneCortada")){
        if(keyDown("f")){
            wait(3000,"carne","prato",2);
        }
    }
    if(cozinheiro2.isTouching(tabua) && (isHolding2 === "carne" || isHolding2 === "carneFrita")){
        if(keyDown("f")){
            wait(3000,"carne","tabua",2);
        }
    }


    if(cozinheiro.isTouching(fogao) && (isHolding === "tomate")){
        if(keyDown("i")){
            wait(3000,"tomate","fogao",1);
        }
    }
    if(cozinheiro.isTouching(prato) && (isHolding === "tomate" || isHolding === "tomateCortado")){
        if(keyDown("i")){
            wait(3000,"tomate","prato",1);
        }
    }
    if(cozinheiro.isTouching(tabua) && (isHolding === "tomate")){
        if(keyDown("i")){
            wait(3000,"tomate","tabua",1);
        }
    }

    if(cozinheiro2.isTouching(fogao) && (isHolding2 === "tomate")){
        if(keyDown("f")){
            wait(3000,"tomate","fogao",2);
        }
    }
    if(cozinheiro2.isTouching(prato) && (isHolding2 === "tomate" || isHolding2 === "tomateCortado")){
        if(keyDown("f")){
            wait(3000,"tomate","prato",2);
        }
    }
    if(cozinheiro2.isTouching(tabua) && (isHolding2 === "tomate")){
        if(keyDown("f")){
            wait(3000,"tomate","tabua",2);
        }
    }


    if(cozinheiro.isTouching(fogao) && (isHolding === "alface")){
        if(keyDown("i")){
            wait(3000,"alface","fogao",1);
        }
    }
    if(cozinheiro.isTouching(prato) && (isHolding === "alface" || isHolding === "alfaceCortado")){
        if(keyDown("i")){
            wait(3000,"alface","prato",1);
        }
    }
    if(cozinheiro.isTouching(tabua) && (isHolding === "alface")){
        if(keyDown("i")){
            wait(3000,"alface","tabua",1);
        }
    }

    if(cozinheiro2.isTouching(fogao) && (isHolding2 === "alface")){
        if(keyDown("f")){
            wait(3000,"alface","fogao",2);
        }
    }
    if(cozinheiro2.isTouching(prato) && (isHolding2 === "alface" || isHolding2 === "alfaceCortado")){
        if(keyDown("f")){
            wait(3000,"alface","prato",2);
        }
    }
    if(cozinheiro2.isTouching(tabua) && (isHolding2 === "alface")){
        if(keyDown("f")){
            wait(3000,"alface","tabua",2);
        }
    }


    if(mousePressedOver(livro)){
        livroAberto.visible = true;
        exit.visible = true;
    }

    if(exit.visible && mousePressedOver(exit)){
        exit.visible = false;
        livroAberto.visible = false;
    }

}
function criarBancadas(){

    //bancadas
    bancada1 = createSprite(300,10,200,20);
    bancada1.shapeColor = "#7A532D";

    bancada2 = createSprite(300,390,200,20);
    bancada2.shapeColor = "#7A532D";

    bancada3 = createSprite(390,200,20,400);
    bancada3.shapeColor = "#7A532D";

    bancada4 = createSprite(200,90,20,180);
    bancada4.shapeColor = "#7A532D";

    bancada5 = createSprite(200,310,20,180);
    bancada5.shapeColor = "#7A532D";

    bancadas.push(bancada1,bancada2,bancada3,bancada4,bancada5);
}
function criarBarreiras(){
    //barreiras
    barreira1 = createSprite(200,-10,400,20);
    barreira1.visible = false;

    barreira2 = createSprite(200,410,400,20);
    barreira2.visible = false;

    barreira3 = createSprite(-10,200,20,400);
    barreira3.visible = false;

    barreira4 = createSprite(410,200,20,400);
    barreira4.visible = false;
}
function criarItens(){
    //itens
    tabua = createSprite(300,10,20,21);
    tabua.shapeColor = "#D99251";

    fogao = createSprite(300,390,20,21);
    fogao.shapeColor = "gray";
    
    prato = createSprite(390,200,21,20);
    prato.shapeColor = "#EBE8FA";
    
    //ingredientes
    pao = createSprite(50,10,20,20);
    pao.shapeColor = "#B89251";
    
    tomate = createSprite(80,10,20,20);
    tomate.shapeColor = "red";

    alface = createSprite(110,10,20,20);
    alface.shapeColor = "green";

    queijo = createSprite(140,10,20,20);
    queijo.shapeColor = "yellow";

    carne = createSprite(20,10,20,20);
    carne.shapeColor = "#CE2217";

    pao2 = createSprite(cozinheiro.x+5,cozinheiro.y-5,15,15);
    pao2.shapeColor = "#B89251";
    pao2.visible = false;

    alface2 = createSprite(cozinheiro.x+5,cozinheiro.y-5,15,15);
    alface2.shapeColor = "green";
    alface2.visible = false;

    carne2 = createSprite(cozinheiro.x+5,cozinheiro.y-5,15,15);
    carne2.shapeColor = "#CE2217";
    carne2.visible = false;

    tomate2 = createSprite(cozinheiro.x+5,cozinheiro.y-5,15,15);
    tomate2.shapeColor = "red";
    tomate2.visible = false;

    queijo2 = createSprite(cozinheiro.x+5,cozinheiro.y-5,15,15);
    queijo2.shapeColor = "yellow";
    queijo2.visible = false;

    pao3 = createSprite(cozinheiro2.x+5,cozinheiro2.y-5,15,15);
    pao3.shapeColor = "#B89251";
    pao3.visible = false;

    alface3 = createSprite(cozinheiro2.x+5,cozinheiro2.y-5,15,15);
    alface3.shapeColor = "green";
    alface3.visible = false;

    carne3 = createSprite(cozinheiro2.x+5,cozinheiro2.y-5,15,15);
    carne3.shapeColor = "#CE2217";
    carne3.visible = false;

    tomate3 = createSprite(cozinheiro2.x+5,cozinheiro2.y-5,15,15);
    tomate3.shapeColor = "red";
    tomate3.visible = false;

    queijo3 = createSprite(cozinheiro2.x+5,cozinheiro2.y-5,15,15);
    queijo3.shapeColor = "yellow";
    queijo3.visible = false;

    //tp
    tp = createSprite(600,600,1,1);
    tp.shapeColor = "red";

    //receitas
    livro = createSprite(380,380,40,40)
    livro.shapeColor = "purple";

    livroAberto = createSprite(200,200,380,380);
    livroAberto.visible = false;

    exit = createSprite(380,20,20,20);
    exit.shapeColor = "red";
    exit.visible = false;

    salada = createSprite(prato.x,prato.y,prato.height-5,prato.width-5)
    salada.shapeColor = "green";
    salada.visible = false;
}
function wait(time,alimento,lugar,cozinheiro){
    setTimeout(() => {
        switch (alimento) {
            case "queijo":
                if(lugar === "tabua"){
                    if(cozinheiro === 1){
                        queijo2.visible = false;
                        isHolding = false;
                    }
                    else if(cozinheiro === 2){
                        queijo3.visible = false;
                        isHolding2 = false;
                    }
                }
                else if(lugar === "fogao"){
                    if(cozinheiro === 1){
                        queijo2.shapeColor = "#FAAB10";
                        isHolding = "queijoFrito";
                    }
                    else if(cozinheiro === 2){
                        queijo3.shapeColor = "#FAAB10";
                        isHolding2 = "queijoFrito";
                    }
                }
                else if(lugar === "prato"){
                    if(cozinheiro === 1){
                        queijo2.visible = false;
                        alimentos.prato.queijo = true;
                        if(isHolding === "queijoFrito"){
                            alimentos.frito.queijo = true;
                            queijo2.shapeColor = "yellow";
                        }
                        isHolding = false;
                    }
                    else if(cozinheiro === 2){
                        queijo3.visible = false;
                        alimentos.prato.queijo = true;
                        if(isHolding2 === "queijoFrito"){
                            alimentos.frito.queijo = true;
                            queijo3.shapeColor = "yellow";
                        }
                        isHolding2 = false;
                    }
                }
            break;
            case "pao":
                if(lugar === "tabua"){
                    if(cozinheiro === 1){
                        pao2.visible = false;
                        isHolding =false;
                    }
                    else if(cozinheiro === 2){
                        pao3.visible = false;
                        isHolding2 = false;
                    }
                }
                else if(lugar === "fogao"){
                    if(cozinheiro === 1){
                        pao2.shapeColor = "#AB4637";
                        isHolding = "paoFrito";
                    }
                    else if(cozinheiro === 2){
                        pao3.shapeColor = "#AB4637";
                        isHolding2 = "paoFrito";
                    }
                }
                else if(lugar === "prato"){
                    if(cozinheiro === 1){
                        pao2.visible = false;
                        alimentos.prato.pao = true;
                        if(isHolding === "paoFrito"){
                            alimentos.frito.pao = true;
                        }
                        isHolding = false;
                    }
                    else if(cozinheiro === 2){
                        pao3.visible = false;
                        alimentos.prato.pao = true;
                        if(isHolding2 === "paoFrito"){
                            alimentos.frito.pao = true;
                        }
                        isHolding2 = false;
                    }
                }
            break;
            case "carne":
                if(lugar === "tabua"){
                    if(cozinheiro === 1){
                        carne2.height = 10;
                        carne2.width = 10;
                        if(isHolding === "carneFrita"){
                            isHolding = "carneCortadaFrita";
                        }
                        else if(isHolding === "carne"){
                            isHolding = "carneCortada";
                        }
                    }
                    else if(cozinheiro === 2){
                        carne3.height = 10;
                        carne3.width = 10; 
                        if(isHolding2 === "carneFrita"){
                            isHolding2 = "carneCortadaFrita";
                        }
                        else if(isHolding2 === "carne"){
                            isHolding2 = "carneCortada";                           
                        }
                    }
                }
                else if(lugar === "fogao"){
                    if(cozinheiro === 1){
                        carne2.shapeColor = "#662B22";
                        if(isHolding === "carneCortada"){
                            isHolding = "carneCortadaFrita"
                        }
                        else if(isHolding === "carne"){  
                            isHolding = "carneFrita";
                        }
                    }
                    else if(cozinheiro === 2){
                        carne3.shapeColor = "#662B22";
                        if(isHolding2 === "carneCortada"){
                            isHolding2 = "carneCortadaFrita"
                        }
                        else if(isHolding2 === "carne"){  
                            isHolding2 = "carneFrita";
                        }
                    }
                }
                else if(lugar === "prato"){
                    if(cozinheiro === 1){
                        carne2.visible = false;
                        alimentos.prato.carne = true;
                        if(isHolding === "carneCortadaFrita"){
                            alimentos.frito.carne = true;
                            alimentos.cortado.carne = true;
                        }
                        else if(isHolding === "carneCortada"){
                            alimentos.cortado.carne = true;
                        }
                        else if(isHolding === "carneFrita"){
                            alimentos.frito.carne = true;
                        }
                        isHolding = false;
                    }
                    else if(cozinheiro === 2){
                        carne3.visible = false;
                        alimentos.prato.carne = true;
                        if(isHolding2 === "carneCortadaFrita"){
                            alimentos.frito.carne = true;
                            alimentos.cortado.carne = true;
                        }
                        else if(isHolding2 === "carneCortada"){
                            alimentos.cortado.carne = true;
                        }
                        else if(isHolding2 === "carneFrita"){
                            alimentos.frito.carne = true;
                        }
                        isHolding2 = false;
                    }
                }
            break;
            case "tomate":
                if(lugar === "fogao"){
                    if(cozinheiro === 1){
                        tomate2.visible = false;
                        isHolding = false;
                    }
                    else if(cozinheiro === 2){
                        tomate3.visible = false;
                        isHolding2 = false;
                    }
                }
                else if(lugar === "tabua"){
                    if(cozinheiro === 1){
                        tomate2.height = 10;
                        tomate2.width = 10;
                        isHolding = "tomateCortado";
                    }
                    else if(cozinheiro === 2){
                        tomate3.height = 10;
                        tomate3.width = 10;
                        isHolding2 = "tomateCortado";
                    }
                }
                else if(lugar === "prato"){
                    if(cozinheiro === 1){
                        tomate2.visible = false;
                        alimentos.prato.tomate = true;
                        if(isHolding === "tomateCortado"){
                            alimentos.cortado.tomate = true;
                            tomate2.height = 15;
                            tomate2.width = 15;
                        }
                        isHolding = false;
                    }
                    else if(cozinheiro === 2){
                        tomate3.visible = false;
                        alimentos.prato.tomate = true;
                        if(isHolding2 === "tomateCortado"){
                            alimentos.cortado.tomate = true;
                            tomate3.height = 20;
                            tomate3.width = 20;
                        }
                        isHolding2 = false;
                    }
                }
            break;
            case "alface":
                if(lugar === "fogao"){
                    if(cozinheiro === 1){
                        alface2.visible = false;
                        isHolding = false;
                    }
                    else if(cozinheiro === 2){
                        alface3.visible = false;
                        isHolding2 = false;
                    }
                }
                else if(lugar === "tabua"){
                    if(cozinheiro === 1){
                        alface2.height = 10;
                        alface2.width = 10;
                        isHolding = "alfaceCortado";
                    }
                    else if(cozinheiro === 2){
                        alface3.height = 10;
                        alface3.width = 10;
                        isHolding2 = "alfaceCortado";
                    }
                }
                else if(lugar === "prato"){
                    if(cozinheiro === 1){
                        alface2.visible = false;
                        alimentos.prato.alface = true;
                        if(isHolding === "alfaceCortado"){
                            alimentos.cortado.alface = true;
                            alface2.height = 15;
                            alface2.width = 15;
                        }
                        isHolding = false;
                    }
                    else if(cozinheiro === 2){
                        alface3.visible = false;
                        alimentos.prato.alface = true;
                        if(isHolding2 === "alfaceCortado"){
                            alimentos.cortado.alface = true;
                            alface3.height = 15;
                            alface3.width = 15;
                        }
                        isHolding2 = false;
                    }
                }
            break;
        }
    },time);
}
function receitas(){
    if(alimentos.prato.alface && alimentos.prato.tomate 
       && alimentos.cortado.alface && alimentos.cortado.tomate){
        salada.visible = true;
        if(cozinheiro.isTouching(prato) && keyDown("i")){
        isTake = true;
       }
    }
    if(isTake){
        prato.x = cozinheiro.x;
        prato.y = cozinheiro.y;
    }
}