const ChoicesRed = {zero:[4],one:[4,5],two:[5,6],three:[6,7],
    four:[8,9],five:[9,10],six:[10,11],seven:[11],
    eight:[12],nine:[12,13],ten:[13,14],eleven:[14,15],
    twelve:[16,17],thirteen:[17,18],fourteen:[18,19],fifteen:[19],
    sixteen:[20],seventeen:[20,21],eighteen:[21,22],nineteen:[22,23],
    twenty:[24,25],twentyOne:[25,26],twentyTwo:[26,27],twentyThree:[27],
    twentyFour:[28],twentyFive:[28,29],twentySix:[29,30],twentySeven:[30,31]};

const ChoicesGreen = {
    four:[0,1],five:[1,2],six:[2,3],seven:[3],
    eight:[4],nine:[4,5],ten:[5,6],eleven:[6,7],
    twelve:[8,9],thirteen:[9,10],fourteen:[10,11],fifteen:[11],
    sixteen:[12],seventeen:[12,13],eighteen:[13,14],nineteen:[14,15],
    twenty:[16,17],twentyOne:[17,18],twentyTwo:[18,19],twentyThree:[19],
    twentyFour:[20],twentyFive:[20,21],twentySix:[21,22],twentySeven:[22,23],
    twentyEight:[24,25],twentyNine:[25,26],thirty:[26,27],thirtyOne:[27],
        };
const choicesOfKing = {
    zero:[4,9,13,18,22,27,31],one:[4,8,5,10,14,19,23],two:[5,9,12,16,6,11,15],three:[6,10,13,17,20,24,7],four:[0,1,8,9,13,18,22,27,31],
    five:[1,2,9,12,16,10,14,19,23],six:[2,3,10,13,17,20,24,11,15],seven:[3,11,14,18,21,25,28],eight:[4,1,12,17,21,26,30],
    nine:[4,0,5,2,12,16,13,18,22,27,31],ten:[5,1,6,3,13,17,20,24,14,19,23],eleven:[6,2,7,14,18,21,25,28,15],twelve:[8,9,5,2,16,17,21,26,30],
    thirteen:[9,4,0,10,6,3,17,20,24,18,22,27,31],fourteen:[10,5,1,11,7,18,21,25,28,19,23],fifteen:[11,6,2,19,22,26,29],sixteen:[12,9,5,2,20,25,29],
    seventeen:[12,8,13,10,6,3,20,24,21,26,30],eighteen:[13,9,4,0,14,11,7,21,25,28,22,27,31],nineteen:[14,10,5,1,15,22,26,29,23],
    twenty:[16,17,13,10,6,3,24,25,29],twentyOne:[17,12,8,18,14,11,7,25,28,26,30],twentyTwo:[18,13,9,4,0,19,15,26,29,27,31],
    twentyThree:[19,14,10,5,1,27,30],twentyFour:[20,17,13,10,6,3,28],twentyFive:[20,16,21,18,14,11,7,29],twentySix:[21,17,12,8,22,19,15,30],
    twentySeven:[22,18,13,9,4,0,23,30,31],twentyEight:[24,25,21,18,14,11,7],twentyNine:[25,20,16,26,22,19,15],thirty:[26,21,17,12,8,27,23],
    thirtyOne:[27,22,18,13,9,4,0]
};

    let eatWhite = new Array("1w","2w","3w","4w","5w","6w","7w","8w","9w","10w","11w","12w");
    let eatBlack = new Array("1b","2b","3b","4b","5b","6b","7b","8b","9b","10b","11b","12b");
    // let arrayRed = new Array("1r","2r","3r","4r","5r","6r","7r","8r","9r","10r","11r","12r");
    // let arrayGreen = new Array("1g","2g","3g","4g","5g","6g","7g","8g","9g","10g","11g","12g");
    let arrayRedLastValue = new Array();
    
    let nameOfNumberRed = new Array("zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven",
                                 "twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen",
                                 "twenty","twentyOne","twentyTwo","twentyThree","twentyFour","twentyFive","twentySix","twentySeven");
                                 
    let nameOfNumberGreen = new Array("zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen",
                                        "sixteen","seventeen","eighteen","nineteen","twenty","twentyOne","twentyTwo","twentyThree",
                                        "twentyFour","twentyFive","twentySix","twentySeven","twentyEight","twentyNine","thirty","thirtyOne"
    
    );
caseOne = 0;
caseTwo = 0;
idchild = 0;
knowChild = 0;
j = 0;
test=-1;
var turn = "black";
idOfRed = 4;
var idGet = [];

scoreRed = 0;
scoreGreen = 0;

plus = 0;
sizeOfTable = 0;
let sortir = false;
var scoreOne = 0;
var scoreTwo = 0;



function movePiecesTwo(idOfGreen){



    let idOfPiece = document.getElementById(idOfGreen);
    idchild = parseInt(idOfPiece.parentElement.id);
    if(idOfPiece.className == "border rounded-circle p-3 m-2 bg-light"){
        if(idchild==31 || idchild==7 || idchild==8 || idchild==15 || idchild==16 || idchild==23 || idchild==24){
            caseOne = ChoicesGreen[nameOfNumberGreen[idchild]][0];
            caseTwo;
        }
        else{
            caseOne = ChoicesGreen[nameOfNumberGreen[idchild]][0];
            caseTwo = ChoicesGreen[nameOfNumberGreen[idchild]][1];
        }
        let peiceRedMoveOne = document.getElementById(caseOne);
        let peiceRedMoveTwo = document.getElementById(caseTwo);
        
    if(caseTwo == null){
        if(peiceRedMoveOne.hasChildNodes()){
            let test = document.getElementById(peiceRedMoveOne.firstChild.id);
            if(test.className == "border rounded-circle p-3 m-2 bg-dark"){
                sizeOfTable = ChoicesGreen[nameOfNumberGreen[caseOne]].length;
                if(sizeOfTable == 1){
                    alert("u have one place to move");
                }
                else{
                    switch(idchild){
                        case 31:
                        case 7:
                        case 15:
                        case 23:
                            caseOne = ChoicesGreen[nameOfNumberGreen[caseOne]][0];
                            break;
                        case 8:
                        case 16:
                        case 24:
                            caseOne = ChoicesGreen[nameOfNumberGreen[caseOne]][1];
                    }
                
                    peiceRedMoveOne = document.getElementById(caseOne);
                    if(!peiceRedMoveOne.hasChildNodes()){
                        peiceRedMoveOne.style.backgroundColor = "gray";
                        peiceRedMoveOne.onclick = function() {moveTwoT()}
                        function moveTwoT(){
                            turn = "white";
                            turnBlack();
                            peiceRedMoveOne.onclick = null;

                            idOfPiece.remove();
                            switch(parseInt(peiceRedMoveOne.id)){
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                    break;
                                default:
                                    peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                            }
                            
                            test.remove();
                            for(i=0;i<eatWhite.length;i++){
                                testMe = document.getElementById(eatWhite[i]);
                                if(!testMe.hasChildNodes()){
                                    scoreOne++;
                                    document.getElementById("scoreWhite").innerHTML = scoreOne;
                                    // document.getElementById("scoreWhite").innerHTML = scoreOne;
                                    // alert("score now "+scorOne);
                                    break;
                                }
                            }
                            testMe.innerHTML = "<P id='" + test.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                            
                            
                        }
                    }
                    else{
                    alert("can't eat 2");
                    }
                }
            }   
            else{
            alert("the piece has no choices to move");}
            }
        else{
            peiceRedMoveOne.style.backgroundColor = "gray";
            peiceRedMoveOne.onclick = function() { moveOneo()}
            
function moveOneo(){
    turn = "white";
    turnBlack();
    peiceRedMoveOne.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveOne.id)){
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                    break;
                                default:
                                    peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                            }   
                            // turn = "black";       
}
}
}
    else if(peiceRedMoveOne.hasChildNodes() || peiceRedMoveTwo.hasChildNodes()){
        if(!peiceRedMoveOne.hasChildNodes() && peiceRedMoveTwo.hasChildNodes()){
            let test = document.getElementById(peiceRedMoveTwo.firstChild.id);
            //we still here 
            // alert("we're here!! : "+test.id+" and caseTwo : "+nameOfNumberGreen[caseTwo]);
            peiceRedMoveOne.style.backgroundColor = "gray";
                peiceRedMoveOne.onclick = function() { moveOne()}
                
                function moveOne(){
                    turn = "white";
                    turnBlack();
            
            idOfPiece.remove();
            switch(parseInt(peiceRedMoveOne.id)){
                case 0:
                case 1:
                case 2:
                case 3:
                    peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                    break;
                default:
                    peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
            }
            peiceRedMoveOne.onclick = null;
                }
                if(caseTwo == "1" || caseTwo == "2" || caseTwo == "3" || caseTwo == "4"){
                    alert("u'r going to be king");
                }
                else{
                    if(caseTwo != 0){
                if(test.className == "border rounded-circle p-3 m-2 bg-dark" && ChoicesGreen[nameOfNumberGreen[caseTwo]].length == 2 || test.className == "border rounded-circle p-3 m-2 bg-secondary"){
                    caseTwo = ChoicesGreen[nameOfNumberGreen[caseTwo]][1];
                    peiceRedMoveTwo = document.getElementById(caseTwo);
                    if(!peiceRedMoveTwo.hasChildNodes()){
                        // alert("we're here 1!!");
                        peiceRedMoveTwo.style.backgroundColor = "gray";
                        peiceRedMoveTwo.onclick = function(){ moveTwo()}
                        function moveTwo(){
                            // alert("bob");
                            turn = "white";
                            turnBlack();
                            peiceRedMoveTwo.onclick = null;
                            idOfPiece.remove();
                            switch(parseInt(peiceRedMoveTwo.id)){
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                    break;
                                default:
                                    peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                            }
                            test.remove();
                            for(i=0;i<eatWhite.length;i++){
                                testMe = document.getElementById(eatWhite[i]);
                                if(!testMe.hasChildNodes()){
                                    scoreOne++;
                                    document.getElementById("scoreWhite").innerHTML = scoreOne;
                                    // document.getElementById('scoreOne').innerHTML += scoreOne;
                                    // alert("score now & : ");
                                    break;
                                }
                            }
                            testMe.innerHTML = "<P id='" + test.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                            
                            
                        }
                    }
                    else{
                        alert("u can't eat");
                    }
                }
                else{
                    peiceRedMoveOne.style.backgroundColor = "gray";
                peiceRedMoveOne.onclick = function() { moveOne()}
                
                function moveOne(){
                    turn = "white";
                    turnBlack();
            
            idOfPiece.remove();
            switch(parseInt(peiceRedMoveOne.id)){
                case 0:
                case 1:
                case 2:
                case 3:
                    peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                    break;
                default:
                    peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
            }
            peiceRedMoveOne.onclick = null;
                }
                }
                    }
                    else{
                        // alert("error solved");
                    }
                }
            }
        
        else if(!peiceRedMoveTwo.hasChildNodes() && peiceRedMoveOne.hasChildNodes()){
            let test = document.getElementById(peiceRedMoveOne.firstChild.id);
            
if(test.parentElement.id > 4){
if(test.className == "border rounded-circle p-3 m-2 bg-dark" || test.className == "border rounded-circle p-3 m-2 bg-secondary"){

    sizeOfTable = ChoicesGreen[nameOfNumberGreen[caseOne]].length;
    if(sizeOfTable == 1){
        alert("u have one place to move");
    }
    else{
        caseOne = ChoicesGreen[nameOfNumberGreen[caseOne]][0];
        peiceRedMoveOne = document.getElementById(caseOne);
        if(!peiceRedMoveOne.hasChildNodes()){
            // alert("we're here two 2!!");
            peiceRedMoveOne.style.backgroundColor = "gray";
            peiceRedMoveOne.onclick = function() { moveTwoT()}
            function moveTwoT(){
                turn = "white";
                turnBlack();
                peiceRedMoveOne.onclick = null;
                peiceRedMoveTwo.onclick = null;
                idOfPiece.remove();
                switch(parseInt(peiceRedMoveOne.id)){
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                        break;
                    default:
                        peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                }
                test.remove();
                for(i=0;i<eatWhite.length;i++){
                    testMe = document.getElementById(eatWhite[i]);
                    if(!testMe.hasChildNodes()){
                        scoreOne++;
                        document.getElementById("scoreWhite").innerHTML = scoreOne;
                        // document.getElementById('scoreOne').innerHTML += scoreOne;
                        // alert("score now "+scorOne);
                        break;
                    }
                }
                testMe.innerHTML = "<P id='" + test.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                
                // 
            }
        }
        else{
            alert("can't eat 2");
        }
    }
}
else{
    peiceRedMoveTwo.style.backgroundColor = "gray";
            peiceRedMoveTwo.onclick = function() { moveTwo()}
function moveTwo(){
    turn = "white";
    turnBlack();
    // peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;

    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 0:
        case 1:
        case 2:
        case 3:
            peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
    }
}
}
}
else{
    // alert("we're here two 3!! ");
// testThink = document.getElementById();
peiceRedMoveTwo = document.getElementById(ChoicesGreen[nameOfNumberGreen[peiceRedMoveOne.id]][0]);
// testThink.style.backgroundColor = "blue";
    peiceRedMoveTwo.style.backgroundColor = "blue";
            peiceRedMoveTwo.onclick = function() { moveTwo()}
function moveTwo(){
    turn = "white";
    turnBlack();
    peiceRedMoveTwo.onclick = null;

    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 0:
        case 1:
        case 2:
        case 3:
            peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
    }
}
}
        }
        else if(peiceRedMoveOne.hasChildNodes() && peiceRedMoveTwo.hasChildNodes()){
            const testOne = document.getElementById(peiceRedMoveOne.firstChild.id);
            const testTwo = document.getElementById(peiceRedMoveTwo.firstChild.id);
            if(testOne.className == "border rounded-circle p-3 m-2 bg-dark" && testTwo.className == "border rounded-circle p-3 m-2 bg-dark"){
                
                caseOne = ChoicesGreen[nameOfNumberGreen[caseOne]][0];
                caseTwo = ChoicesGreen[nameOfNumberGreen[caseTwo]][1];
                if(caseOne == undefined && caseTwo != undefined){
                
                peiceRedMoveTwo = document.getElementById(caseTwo);
                }
                else if(caseTwo == undefined && caseOne != undefined){
                    peiceRedMoveOne = document.getElementById(caseOne);
                }
                else{
                    peiceRedMoveTwo = document.getElementById(caseTwo);
                    peiceRedMoveOne = document.getElementById(caseOne);
                    // alert("case one : "+caseOne+" case Two : "+caseTwo);
                }

                if(!peiceRedMoveOne.hasChildNodes() && peiceRedMoveTwo.hasChildNodes()){
                    // alert("we're here two 4!!");
                    peiceRedMoveOne.style.backgroundColor = "gray";
                    peiceRedMoveOne.onclick = function() { eatOne()}
                    function eatOne(){
                        turn = "white";
                        turnBlack();
                        peiceRedMoveOne.onclick = null;

                        idOfPiece.remove();
                        switch(parseInt(peiceRedMoveOne.id)){
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                break;
                            default:
                                peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                        }
                        testOne.remove();
                        for(i=0;i<eatWhite.length;i++){
                            testMe = document.getElementById(eatWhite[i]);
                            if(!testMe.hasChildNodes()){
                                scoreOne++;
                                document.getElementById("scoreWhite").innerHTML = scoreOne;
                                // document.getElementById('scoreOne').innerHTML += scoreOne;
                                // alert("score now "+scorOne);
                                break;
                            }
                        }
                        testMe.innerHTML = "<P id='" + testOne.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                        
                    }
                }
                else if(peiceRedMoveOne.hasChildNodes() && !peiceRedMoveTwo.hasChildNodes()){
                    // alert("we're here two 5!!");
                    peiceRedMoveTwo.style.backgroundColor = "gray";
                    peiceRedMoveTwo.onclick = function() { eatTwo()}
                    function eatTwo(){
                        turn = "white";
                        turnBlack();
                        peiceRedMoveTwo.onclick = null;

                        idOfPiece.remove();
                        switch(parseInt(peiceRedMoveTwo.id)){
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                break;
                            default:
                                peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                        }
                        testTwo.remove();
                        for(i=0;i<eatWhite.length;i++){
                            testMe = document.getElementById(eatWhite[i]);
                            if(!testMe.hasChildNodes()){
                                scoreOne++;
                                document.getElementById("scoreWhite").innerHTML = scoreOne;
                                    // document.getElementById('scoreOne').innerHTML += scoreOne;
                                    // alert("score now "+scorOne);
                                break;
                            }
                        }
                        testMe.innerHTML = "<P id='" + testTwo.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                        
                    }
                }
                else if (!peiceRedMoveOne.hasChildNodes() && !peiceRedMoveTwo.hasChildNodes()){
                    // alert("we're here two 6!!");
                    peiceRedMoveOne.style.backgroundColor = "gray";
                    peiceRedMoveTwo.style.backgroundColor = "gray";
                    peiceRedMoveOne.onclick = function() {eatOne()}
                    function eatOne(){
                        
                        turn = "white";
                        turnBlack();
                        peiceRedMoveOne.onclick = null;
                        peiceRedMoveTwo.onclick = null;

                        idOfPiece.remove();
                        switch(parseInt(peiceRedMoveOne.id)){
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                break;
                            default:
                                peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                        }
                        testOne.remove();
                        for(i=0;i<eatWhite.length;i++){
                            testMe = document.getElementById(eatWhite[i]);
                            if(!testMe.hasChildNodes()){
                                scoreOne++;
                                document.getElementById("scoreWhite").innerHTML = scoreOne;
                                break;
                            }
                        }
                        testMe.innerHTML = "<P id='" + testOne.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                        
                    }
                    peiceRedMoveTwo.onclick = function() {eatTwo()}
                    function eatTwo(){
                        turn = "white";
                        turnBlack();
                        peiceRedMoveOne.onclick = null;
                        peiceRedMoveTwo.onclick = null;

                        idOfPiece.remove();
                        switch(parseInt(peiceRedMoveTwo.id)){
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                break;
                            default:
                                peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                        }
                        testTwo.remove();
                        for(i=0;i<eatWhite.length;i++){
                            testMe = document.getElementById(eatWhite[i]);
                            if(!testMe.hasChildNodes()){
                                scoreOne++;
                                document.getElementById("scoreWhite").innerHTML = scoreOne;
                                    // document.getElementById('scoreOne').innerHTML += scoreOne;
                                    // alert("score now "+scorOne);
                                break;
                            }
                        }
                        testMe.innerHTML = "<P id='" + testTwo.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                        
                    }
                }
                else{
                    alert("u can't move");
                }
            }
            else if(testOne.className == "border rounded-circle p-3 m-2 bg-dark" && testTwo.className == "border rounded-circle p-3 m-2 bg-light"){
                sizeOfTable = ChoicesGreen[nameOfNumberGreen[caseOne]].length;
                if(sizeOfTable == 1){
                    alert("size of table : 1");
                }
                else{
                caseOne = ChoicesGreen[nameOfNumberGreen[caseOne]][0];
                peiceRedMoveOne = document.getElementById(caseOne);
                // alert("we're here two 7!!");
                peiceRedMoveOne.style.backgroundColor = "gray";
                    peiceRedMoveOne.onclick = function() { eatOne()}
                    function eatOne(){
                        turn = "white";
                        turnBlack();
                        peiceRedMoveOne.onclick = null;

                        idOfPiece.remove();
                        switch(parseInt(peiceRedMoveOne.id)){
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                break;
                            default:
                                peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                        }
                        testOne.remove();
                        for(i=0;i<eatWhite.length;i++){
                            testMe = document.getElementById(eatWhite[i]);
                            if(!testMe.hasChildNodes()){
                                scoreOne++;
                                document.getElementById("scoreWhite").innerHTML = scoreOne;
                                    // document.getElementById('scoreOne').innerHTML += scoreOne;
                                    // alert("score now "+scorOne);
                                break;
                            }
                        }
                        testMe.innerHTML = "<P id='" + testOne.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                        
                    }
                }
            }
            
            else if(testOne.className == "border rounded-circle p-3 m-2 bg-light" && testTwo.className == "border rounded-circle p-3 m-2 bg-dark"){
                if(caseTwo != 0){
                sizeOfTable = ChoicesGreen[nameOfNumberGreen[caseTwo]].length;
                
                if(sizeOfTable == 1){
                    alert("size of table : 1");
                }
                else{
                caseTwo = ChoicesGreen[nameOfNumberGreen[caseTwo]][1];
                peiceRedMoveTwo = document.getElementById(caseTwo);
                // alert("we're here two 8!!");
                peiceRedMoveTwo.style.backgroundColor = "gray";
                    peiceRedMoveTwo.onclick = function() { eatTwo()}
                    function eatTwo(){
                        turn = "white";
                        turnBlack();
                        peiceRedMoveTwo.onclick = null;
                        idOfPiece.remove();
                        switch(parseInt(peiceRedMoveTwo.id)){
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
                                break;
                            default:
                                peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
                        }
                        testTwo.remove();
                        for(i=0;i<eatWhite.length;i++){
                            testMe = document.getElementById(eatWhite[i]);
                            if(!testMe.hasChildNodes()){
                                scoreOne++;
                                document.getElementById("scoreWhite").innerHTML = scoreOne;
                                // document.getElementById('scoreOne').innerHTML += scoreOne;
                                
                                
                                break;
                            }
                        }
                        testMe.innerHTML = "<P id='" + testTwo.id +"' class='border rounded-circle p-3 m-2 bg-dark'></P>";
                        
                    }
            }
        }
        else{
            alert("u can't move rn");
        }
        }
        
            else{
            alert("u can't move rn");
            }
            
        }
        
        else{
            alert("idk");
        }
        
    
    }
    else{
        test = idOfPiece;
        // alert("we're here two 9!!");
        peiceRedMoveOne.style.backgroundColor = "gray";
        peiceRedMoveTwo.style.backgroundColor = "gray";

peiceRedMoveOne.onclick = function() { moveOne()}
function moveOne(){
    turn = "white";
    turnBlack();
    
    
    peiceRedMoveTwo.onclick = null;
    peiceRedMoveOne.onclick = null;

    idOfPiece.remove();
    switch(parseInt(peiceRedMoveOne.id)){
        case 0:
        case 1:
        case 2:
        case 3:
            peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
            break;
        default:
            peiceRedMoveOne.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
    }

}
peiceRedMoveTwo.onclick = function() { moveTwo()}
function moveTwo(){
    turn = "white";
    turnBlack();
    
    peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;

    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 0:
        case 1:
        case 2:
        case 3:
            peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></p>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<p id='"+idOfGreen+"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></p>";
    }
    
}
}
idOfPiece.onmouseleave = function() {
    if(peiceRedMoveTwo.style.background == null){
peiceRedMoveOne.style.backgroundColor = "#584401";}
else{
    peiceRedMoveOne.style.backgroundColor = "#584401";
peiceRedMoveTwo.style.backgroundColor = "#584401";
}
}
// turn = "black";
    }
    else{
// alert("i wanna know ");
        let count = 0;
        
        function testNow(test){
            var couu = 1;
            if(!document.getElementById(test).hasChildNodes()){
                document.getElementById(test).style.backgroundColor = "gray";
                // alert(test);
                document.getElementById(test).onclick = function() { 
                    turn = "white";
                    turnBlack();
                    
                    keyPlace = choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test);
                    // alert("we have "+keyPlace+" and "+test+"id child : "+idchild);
                    if(!document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][keyPlace]).hasChildNodes()){
                        document.getElementById(test).onclick = null;
                idOfPiece.remove();
                document.getElementById(test).innerHTML = "<P id='" + idOfGreen +"' class='border rounded-circle p-3 m-2 bg-info' onclick='getIdGreen(this);'></P>";
                // alert("this is "+choicesOfKing[nameOfNumberGreen[idchild]][keyPlace]);
                if(choicesOfKing[nameOfNumberGreen[idchild]][keyPlace-1]<28 && choicesOfKing[nameOfNumberGreen[idchild]][keyPlace-1]>3){
                    let key = keyPlace;
                    alert(idchild+" key : "+choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test));
                    while(key >= 0){
                        
                        bb = key-couu;
                        let testM = parseInt(choicesOfKing[nameOfNumberGreen[idchild]][bb]);
                        // alert("key 1 : "+key+" bb : "+bb+" couu : "+couu);
                        // alert("jj : "+bb+" c : "+testM);
                        if(document.getElementById(testM).hasChildNodes()){
                            document.getElementById(document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][bb]).firstChild.id).remove();
                            break;
                        }
                        // key--;
                        couu++;
                    }
               
                }
                    }
                    else{
                        alert("not working");

            }
        }
        }
        else{
            if(document.getElementById(document.getElementById(test).firstChild.id).className == "border rounded-circle p-3 m-2 bg-light"){
            for(i=choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test);i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){
                document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][i]).style.background = "red";
                if(count<2){
                    // alert("count 1 : "+count);
                    if(choicesOfKing[nameOfNumberGreen[idchild]][i] < choicesOfKing[nameOfNumberGreen[idchild]][i+1]){
                        count++;
                        break;
                    }
                }
                else{
                    // alert("count 2 : "+count);
                if(choicesOfKing[nameOfNumberGreen[idchild]][i] > choicesOfKing[nameOfNumberGreen[idchild]][i+1]){
                    count++;
                    break;
                }
            }
            }
        }
        else{
            testM = parseInt(choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test))+1;
            if(document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][testM]).hasChildNodes()){
                alert("block "+choicesOfKing[nameOfNumberGreen[idchild]][testM]);
                for(i=choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test);i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){
                    alert("block "+choicesOfKing[nameOfNumberGreen[idchild]][i]);
                    document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][i]).style.background = null;
                    if(count<2){
                        if(choicesOfKing[nameOfNumberGreen[idchild]][i] < choicesOfKing[nameOfNumberGreen[idchild]][i+1]){
                            count++;
                            break;
                        }
                    }
                    else{
                    if(choicesOfKing[nameOfNumberGreen[idchild]][i] > choicesOfKing[nameOfNumberGreen[idchild]][i+1]){
                        count++;
                        break;
                    }
                }                    
                }
                
            }
            else{
                alert("continue "+choicesOfKing[nameOfNumberGreen[idchild]][testM])
            }
        }
    }
        }
            switch(idchild){
                case 31:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 30:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 29:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 28:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 27:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 26:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 25:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 24:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 23:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 22:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 21:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 20:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 19:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 18:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 17:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 16:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 15:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 14:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 13:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 12:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 11:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 10:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 9:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 8:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 7:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 6:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 5:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 4:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 3:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 2:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 1:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 0:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                default:
                    alert("oppps!! "+idOfPiece.parentElement[0]+" and ");
            }
                idOfPiece.onmouseleave = function() { 
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){
                    document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][i]).style.backgroundColor = "#584401";
                }
            }
        }



}

function movePieces(idOfRed){

    let idOfPiece = document.getElementById(idOfRed);
    idchild = parseInt(idOfPiece.parentElement.id);
    if(idOfPiece.className == "border rounded-circle p-3 m-2 bg-dark"){
        if(idchild==0 || idchild==7 || idchild==8 || idchild==15 || idchild==16 || idchild==23 || idchild==24){
            caseOne = ChoicesRed[nameOfNumberRed[idchild]][0];
            caseTwo = undefined;
        }
        else{
            caseOne = ChoicesRed[nameOfNumberRed[idchild]][0];
            caseTwo = ChoicesRed[nameOfNumberRed[idchild]][1];
        }
        let peiceRedMoveOne = document.getElementById(caseOne);
        let peiceRedMoveTwo = document.getElementById(caseTwo);
        
    if(caseTwo == null){
        if(peiceRedMoveOne.hasChildNodes()){
            let test = document.getElementById(peiceRedMoveOne.firstChild.id);
if(test.className == "border rounded-circle p-3 m-2 bg-light" || test.className == "border rounded-circle p-3 m-2 bg-info"){
    sizeOfTable = ChoicesRed[nameOfNumberRed[caseOne]].length;
    if(sizeOfTable == 1){
        alert("u have one place to move");
    }
    else{
        switch(idchild){
            case 0:
            case 8:
            case 16:
            case 24:
                caseOne = ChoicesRed[nameOfNumberRed[caseOne]][1];
                break;
            case 7:
            case 15:
            case 23:
                caseOne = ChoicesRed[nameOfNumberRed[caseOne]][0];
                break;
        }
    
    peiceRedMoveOne = document.getElementById(caseOne);
    if(!peiceRedMoveOne.hasChildNodes()){ 
        peiceRedMoveOne.style.backgroundColor = "gray";
            peiceRedMoveOne.onclick = function() { moveTwoT()}
   function moveTwoT(){
    turn = "black"
turnWhite();
    peiceRedMoveOne.onclick = null;
    

    idOfPiece.remove();
    switch(parseInt(peiceRedMoveOne.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    }
    test.remove();
    for(i=0;i<eatBlack.length;i++){
        testMe = document.getElementById(eatBlack[i]);
        if(!testMe.hasChildNodes()){
            break;
        }
    }
    testMe.innerHTML = "<P id='" + test.id +"' class='border rounded-circle p-3 m-2 bg-light'></P>";
}
    }
    else{
        // alert(" can't eat 2");
    }
}
}
else{
            alert("the piece has no choices to move");}
        }
        else{
            // alert("me "+peiceRedMoveTwo.onclick);
            peiceRedMoveOne.style.backgroundColor = "gray";
            peiceRedMoveOne.onclick = function() { moveOne()}
function moveOne(){
    turn = "black";
    turnWhite();
    peiceRedMoveOne.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveOne.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    }            
}
}
}
    else if(peiceRedMoveOne.hasChildNodes() || peiceRedMoveTwo.hasChildNodes()){
        if(!peiceRedMoveOne.hasChildNodes() && peiceRedMoveTwo.hasChildNodes()){
            let test = document.getElementById(peiceRedMoveTwo.firstChild.id);
            if(test.parentElement.id < 28){
                // peiceRedMoveOne.style.backgroundColor = "gray";
                peiceRedMoveOne.onclick = function() { moveOne()}
                function moveOne(){
                    alert("u can just eat");
                }
            if(test.className == "border rounded-circle p-3 m-2 bg-light"){
                caseTwo = ChoicesRed[nameOfNumberRed[caseTwo]][1];
                peiceRedMoveTwo = document.getElementById(caseTwo);
                if(caseTwo == undefined){

                    peiceRedMoveOne.style.backgroundColor = "gray";
                peiceRedMoveOne.onclick = function() { moveOne()}
                function moveOne(){
                    turn = "black";
                    turnWhite();
            peiceRedMoveTwo.onclick = null;

            idOfPiece.remove();
            switch(parseInt(peiceRedMoveOne.id)){
                case 28:
                case 29:
                case 30:
                case 31:
                    peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                    break;
                default:
                    peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
            }
                }
                }
                else{
                if(!peiceRedMoveTwo.hasChildNodes()){
                    
                    // alert("this is ");
                    peiceRedMoveTwo.style.backgroundColor = "gray";
                        peiceRedMoveTwo.onclick = function() { moveTwo()}
            function moveTwo(){
                turn = "black";
                turnWhite();
                
                peiceRedMoveOne.onclick = null;
                peiceRedMoveTwo.onclick = null;
                idOfPiece.remove();
                switch(parseInt(peiceRedMoveTwo.id)){
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                        peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                        break;
                    default:
                        peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
                }
                                test.remove();
                for(i=0;i<eatBlack.length;i++){
                    testMe = document.getElementById(eatBlack[i]);
                    if(!testMe.hasChildNodes()){
                        scoreTwo++;
                                document.getElementById("scoreBlack").innerHTML = scoreTwo;
                        break;
                    }
                }
                testMe.innerHTML = "<P id='" + test.id +"' class='border rounded-circle p-3 m-2 bg-light'></P>";

               
            }
                }
            else{
                peiceRedMoveOne.style.backgroundColor = "gray";
                peiceRedMoveOne.onclick = function() { moveOne()}
                function moveOne(){
                    turn = "black";
                    turnWhite();
            peiceRedMoveTwo.onclick = null;

            idOfPiece.remove();
            switch(parseInt(peiceRedMoveOne.id)){
                case 28:
                case 29:
                case 30:
                case 31:
                    peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                    break;
                default:
                    peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
            }

                }
                
            }
        } 
            }
            else{
    
                peiceRedMoveOne.style.backgroundColor = "gray";
                    peiceRedMoveOne.onclick = function() { moveTwo()}
                    function moveTwo(){
                        turn = "black";
                        turnWhite();
                    peiceRedMoveOne.onclick = null;
                peiceRedMoveOne.onclick = null;
                idOfPiece.remove();
                switch(parseInt(peiceRedMoveOne.id)){
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                        peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                        break;
                    default:
                        peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
                } 
                }
            }
        }
            else{
            peiceRedMoveOne.style.backgroundColor = "gray";
                peiceRedMoveOne.onclick = function() { moveOne()}
                function moveOne(){
                    turn = "black";
                    turnWhite();
            
            
            peiceRedMoveTwo.onclick = null;
            peiceRedMoveOne.onclick = null;
            
            idOfPiece.remove();
            switch(parseInt(peiceRedMoveOne.id)){
                case 28:
                case 29:
                case 30:
                case 31:
                    peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                    break;
                default:
                    peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
            }
                }
            }
            
                // else{
                //    alert("class name is red");
                //     }
            }
            
        
        else if(!peiceRedMoveTwo.hasChildNodes() && peiceRedMoveOne.hasChildNodes()){
            let test = document.getElementById(peiceRedMoveOne.firstChild.id);
            if(test.parentElement.id < 28){
if(test.className == "border rounded-circle p-3 m-2 bg-light"){
    
    if(ChoicesRed[nameOfNumberRed[caseOne]].length == 1){
        alert("u have one place to move 1 "+caseOne);
        peiceRedMoveTwo.style.backgroundColor = "gray";
        peiceRedMoveTwo.onclick = function() { moveTwo()}
        function moveTwo(){
            turn = "black";
            turnWhite();
        peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    } 
    }
    }
    else{
    caseOne = ChoicesRed[nameOfNumberRed[caseOne]][0];
    peiceRedMoveOne = document.getElementById(caseOne);
    if(caseOne == undefined){
        peiceRedMoveTwo.style.backgroundColor = "gray";
        peiceRedMoveTwo.onclick = function() { moveTwo()}
        function moveTwo(){
            turn = "black";
            turnWhite();
        peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    } 
    }
}
else{

    if(!peiceRedMoveOne.hasChildNodes()){ 
        

        
        peiceRedMoveOne.style.backgroundColor = "gray";
            peiceRedMoveOne.onclick = function() { moveTwoT()}
function moveTwoT(){
    turn = "black";
    turnWhite();
    peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveOne.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    } 
       test.remove();
    for(i=0;i<eatBlack.length;i++){
        testMe = document.getElementById(eatBlack[i]);
        if(!testMe.hasChildNodes()){
            break;
        }
    }
    testMe.innerHTML = "<P id='" + test.id +"' class='border rounded-circle p-3 m-2 bg-light'></P>";
}
    }
    else{
        peiceRedMoveTwo.style.backgroundColor = "gray";
        peiceRedMoveTwo.onclick = function() { moveTwo()}
        function moveTwo(){
            turn = "black";
            turnWhite();
        peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    } 
    }
    }
}
}
}
else{

    peiceRedMoveTwo.style.backgroundColor = "gray";
        peiceRedMoveTwo.onclick = function() { moveTwo()}
        function moveTwo(){
            turn = "black";
            turnWhite();
        peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    } 
    }
}
    
            }
            else{
            peiceRedMoveTwo.style.backgroundColor = "brown";
            peiceRedMoveTwo.onclick = function() { moveTwo()}
    function moveTwo(){
    
    peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    }    
}
}
// else{
    // alert("class name is red");

// }
}

     else if(peiceRedMoveOne.hasChildNodes() && peiceRedMoveTwo.hasChildNodes()){
         const testOne = document.getElementById(peiceRedMoveOne.firstChild.id);
         const testTwo = document.getElementById(peiceRedMoveTwo.firstChild.id);
         if(testOne.className == "border rounded-circle p-3 m-2 bg-light" && testTwo.className == "border rounded-circle p-3 m-2 bg-light"){
             caseOne = ChoicesRed[nameOfNumberRed[caseOne]][0];
             caseTwo = ChoicesRed[nameOfNumberRed[caseTwo]][1];
             peiceRedMoveOne = document.getElementById(caseOne);
             peiceRedMoveTwo = document.getElementById(caseTwo);
             if(!peiceRedMoveOne.hasChildNodes() && peiceRedMoveTwo.hasChildNodes()){
                 peiceRedMoveOne.style.backgroundColor = "gray";
                 peiceRedMoveOne.onclick = function() {eatOne()}
                 function eatOne(){
                    turn = "black";
                    turnWhite();
                                    peiceRedMoveOne.onclick = null;
                                    idOfPiece.remove();
                                    switch(parseInt(peiceRedMoveOne.id)){
                                        case 28:
                                        case 29:
                                        case 30:
                                        case 31:
                                            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                                            break;
                                        default:
                                            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
                                    } 
                                    testOne.remove();
                                    for(i=0;i<eatBlack.length;i++){
                                        testMe = document.getElementById(eatBlack[i]);
                                        if(!testMe.hasChildNodes()){
                                            scoreTwo++;
                                document.getElementById("scoreBlack").innerHTML = scoreTwo;
                                            break;
                                        }
                                    }
                                    testMe.innerHTML = "<P id='" + testOne.id +"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdGreen(this);'></P>";
                 }
                // }
            }
             else if(peiceRedMoveOne.hasChildNodes() && !peiceRedMoveTwo.hasChildNodes()){
                // sizeOfTable = ChoicesRed[nameOfNumberRed[caseTwo]].length;
                
                peiceRedMoveTwo.style.backgroundColor = "gray";
                peiceRedMoveTwo.onclick = function() {eatTwo()}
                function eatTwo(){
                    turn = "black";
                    turnWhite();
                    peiceRedMoveTwo.onclick = null;
                               
                                   idOfPiece.remove();
                                   switch(parseInt(peiceRedMoveTwo.id)){
                                    case 28:
                                    case 29:
                                    case 30:
                                    case 31:
                                        peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                                        break;
                                    default:
                                        peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
                                } 
                                                                   testTwo.remove();
                                   for(i=0;i<eatBlack.length;i++){
                                    testMe = document.getElementById(eatBlack[i]);
                                    if(!testMe.hasChildNodes()){
                                        scoreTwo++;
                                document.getElementById("scoreBlack").innerHTML = scoreTwo;
                                        break;
                                    }
                                }
                                testMe.innerHTML = "<P id='" + testTwo.id +"' class='border rounded-circle p-3 m-2 bg-light'></P>";
                }
            }
             else{
                 if(peiceRedMoveOne.hasChildNodes() && peiceRedMoveTwo.hasChildNodes()){
                     alert("stop "+caseOne+" and "+caseTwo);
                 }
                 else{
                    
                peiceRedMoveOne.style.backgroundColor = "gray";
                peiceRedMoveTwo.style.backgroundColor = "gray";
                peiceRedMoveOne.onclick = function() {eatOne()}
                function eatOne(){
                    turn = "black";
                    peiceRedMoveOne.onclick = null;
                    peiceRedMoveTwo.onclick = null;
                               
                    idOfPiece.remove();
                    switch(parseInt(peiceRedMoveOne.id)){
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                            break;
                        default:
                            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
                    }                    
                    testOne.remove();
                    for(i=0;i<eatBlack.length;i++){
                        testMe = document.getElementById(eatBlack[i]);
                        if(!testMe.hasChildNodes()){
                            scoreTwo++;
                                document.getElementById("scoreBlack").innerHTML = scoreTwo;
                            break;
                        }
                    }
                    testMe.innerHTML = "<P id='" + testOne.id +"' class='border rounded-circle p-3 m-2 bg-light' onclick='getIdRed(this);'></P>";
                }
                peiceRedMoveTwo.onclick = function() {eatTwo()}
                function eatTwo(){
                    turn = "black";
                    turnWhite();
                    peiceRedMoveOne.onclick = null;
                    peiceRedMoveTwo.onclick = null;

                    idOfPiece.remove();
                    switch(parseInt(peiceRedMoveTwo.id)){
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                            break;
                        default:
                            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
                    }   
                                        testTwo.remove();
                    for(i=0;i<eatBlack.length;i++){
                        testMe = document.getElementById(eatBlack[i]);
                        if(!testMe.hasChildNodes()){
                            scoreTwo++;
                                document.getElementById("scoreBlack").innerHTML = scoreTwo;
                            break;
                        }
                    }
                    testMe.innerHTML = "<P id='" + testTwo.id +"' class='border rounded-circle p-3 m-2 bg-light'></P>";
                }
            }
             }
         }
         else if(testOne.className == "border rounded-circle p-3 m-2 bg-light" && testTwo.className == "border rounded-circle p-3 m-2 bg-dark"){
            
            caseOne = ChoicesRed[nameOfNumberRed[caseOne]][0];
            peiceRedMoveOne = document.getElementById(caseOne);
            if(!peiceRedMoveOne.hasChildNodes()){ 

                peiceRedMoveOne.style.backgroundColor = "gray";
                    peiceRedMoveOne.onclick = function() { moveTwoT()}
        function moveTwoT(){
            turn = "black";
            turnWhite();
            peiceRedMoveOne.onclick = null;
            peiceRedMoveTwo.onclick = null;
            idOfPiece.remove();
            switch(parseInt(peiceRedMoveOne.id)){
                case 28:
                case 29:
                case 30:
                case 31:
                    peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                    break;
                default:
                    peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
            }
                        testOne.remove();
            for(i=0;i<eatBlack.length;i++){
                testMe = document.getElementById(eatBlack[i]);
                if(!testMe.hasChildNodes()){
                    scoreTwo++;
                                document.getElementById("scoreBlack").innerHTML = scoreTwo;
                    break;
                }
            }
            testMe.innerHTML = "<P id='" + testOne.id +"' class='border rounded-circle p-3 m-2 bg-light'></P>";
        }
            }
            else{
                alert(" can't eat 3");
            }
         }
         else if(testOne.className == "border rounded-circle p-3 m-2 bg-dark" && testTwo.className == "border rounded-circle p-3 m-2 bg-light"){
             caseTwo = ChoicesRed[nameOfNumberRed[caseTwo]][1];
             peiceRedMoveTwo = document.getElementById(caseTwo);
             if(!peiceRedMoveTwo.hasChildNodes()){
                 peiceRedMoveTwo.style.backgroundColor = "gray";
                 peiceRedMoveTwo.onclick = function() { moveOneO()}
                 function moveOneO(){
                    turn = "black";
                    turnWhite();
                     peiceRedMoveOne.onclick = null;
                     peiceRedMoveTwo.onclick = null;

                     idOfPiece.remove();
                     switch(parseInt(peiceRedMoveTwo.id)){
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                            break;
                        default:
                            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
                    }
                    testTwo.remove();
                     for(i=0;i<eatBlack.length;i++){
                        testMe = document.getElementById(eatBlack[i]);
                        if(!testMe.hasChildNodes()){
                            scoreTwo++;
                                document.getElementById("scoreBlack").innerHTML = scoreTwo;
                            break;
                        }
                    }
                    testMe.innerHTML = "<P id='" + testTwo.id +"' class='border rounded-circle p-3 m-2 bg-light'></P>";
                 }
             }
         }
          else{
            //   alert("u can't move rn");
          }
     }   

    else{
        // alert("idk");
    }
    }
    
    else{
        test = idOfPiece;
        peiceRedMoveOne.style.backgroundColor = "gray";
        peiceRedMoveTwo.style.backgroundColor = "gray";

peiceRedMoveOne.onclick = function() { moveOne()}
function moveOne(){
    
    turn = "black";
    turnWhite();
    peiceRedMoveTwo.onclick = null;
    peiceRedMoveOne.onclick = null;

    idOfPiece.remove();

    switch(parseInt(peiceRedMoveOne.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveOne.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    }
}
peiceRedMoveTwo.onclick = function() { moveTwo()}
function moveTwo(){
    
    turn = "black";
    turnWhite();
    peiceRedMoveOne.onclick = null;
    peiceRedMoveTwo.onclick = null;
    idOfPiece.remove();
    switch(parseInt(peiceRedMoveTwo.id)){
        case 28:
        case 29:
        case 30:
        case 31:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
            break;
        default:
            peiceRedMoveTwo.innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-dark' onclick='getIdRed(this);'></P>";
    }}

}
idOfPiece.onmouseleave = function() { 
    if(peiceRedMoveTwo == null){
        peiceRedMoveOne.style.backgroundColor = "#584401";}
        else{
            peiceRedMoveOne.style.backgroundColor = "#584401";
        peiceRedMoveTwo.style.backgroundColor = "#584401";
        }
    
}
    }
    else{
        let count = 0;
        
        function testNow(test){
            var couu = 1;
            if(!document.getElementById(test).hasChildNodes()){
                document.getElementById(test).style.backgroundColor = "gray";
                // alert(test);
                document.getElementById(test).onclick = function() { 
                    turn = "black";
                    turnWhite();
                    
                    keyPlace = choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test);
                    // alert("we have "+keyPlace+" and "+test);
                    if(!document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][keyPlace]).hasChildNodes()){
                        document.getElementById(test).onclick = null;
                idOfPiece.remove();
                document.getElementById(test).innerHTML = "<P id='" + idOfRed +"' class='border rounded-circle p-3 m-2 bg-secondary' onclick='getIdRed(this);'></P>";
                // alert("this is "+choicesOfKing[nameOfNumberGreen[idchild]][keyPlace-1]);
                if(choicesOfKing[nameOfNumberGreen[idchild]][keyPlace-1]<28 && choicesOfKing[nameOfNumberGreen[idchild]][keyPlace-1]>3){
                    let key = keyPlace;
                    alert(idchild+" key : "+choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test));
                    while(key >= 0){
                        
                        bb = key-couu;
                        let testM = parseInt(choicesOfKing[nameOfNumberGreen[idchild]][keyPlace-couu]);
                        alert("key 1 : "+key+" bb : "+bb+" couu : "+couu);
                        // alert("jj : "+bb+" c : "+testM);
                        if(document.getElementById(testM).hasChildNodes()){
                            document.getElementById(document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][bb]).firstChild.id).remove();
                            break;
                        }
                        // key--;
                        couu++;
                    }
               
                }
                    }
                    else{
                        alert("not working");

            }
        }
        }
        else{
            if(document.getElementById(document.getElementById(test).firstChild.id).className == "border rounded-circle p-3 m-2 bg-dark"){
            for(i=choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test);i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){
                document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][i]).style.background = "red";
                if(count<2){
                    if(choicesOfKing[nameOfNumberGreen[idchild]][i] < choicesOfKing[nameOfNumberGreen[idchild]][i+1]){
                        count++;
                        break;
                    }
                }
                else{
                if(choicesOfKing[nameOfNumberGreen[idchild]][i] > choicesOfKing[nameOfNumberGreen[idchild]][i+1]){
                    count++;
                    break;
                }
            }
            }
        }
        else{
            testM = parseInt(choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test))+1;
            if(document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][testM]).hasChildNodes()){
                alert("block "+choicesOfKing[nameOfNumberGreen[idchild]][testM]);
                for(i=choicesOfKing[nameOfNumberGreen[idchild]].indexOf(test);i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){
                    alert("block "+choicesOfKing[nameOfNumberGreen[idchild]][i]);
                    document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][i]).style.background = null;
                    if(count<2){
                        if(choicesOfKing[nameOfNumberGreen[idchild]][i] < choicesOfKing[nameOfNumberGreen[idchild]][i+1]){
                            count++;
                            break;
                        }
                    }
                    else{
                    if(choicesOfKing[nameOfNumberGreen[idchild]][i] > choicesOfKing[nameOfNumberGreen[idchild]][i+1]){
                        count++;
                        break;
                    }
                }                    
                }
                
            }
            else{
                alert("continue "+choicesOfKing[nameOfNumberGreen[idchild]][testM])
            }
        }
    }
        }
            switch(idchild){
                case 31:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 30:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 29:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 28:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 27:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 26:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 25:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 24:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 23:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 22:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 21:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 20:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 19:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 18:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 17:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 16:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 15:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 14:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 13:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 12:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 11:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 10:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 9:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 8:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 7:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 6:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 5:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 4:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 3:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 2:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 1:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                case 0:
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){   
                        testNow(choicesOfKing[nameOfNumberGreen[idchild]][i]);          
                    }
                    break;
                default:
                    alert("oppps!!");
            }
                idOfPiece.onmouseleave = function() { changeColor() }
                function changeColor(){
                    for(i=0;i<choicesOfKing[nameOfNumberGreen[idchild]].length;i++){
                    document.getElementById(choicesOfKing[nameOfNumberGreen[idchild]][i]).style.backgroundColor = "#584401";
                }
            }
        }
        // function uMustEat(){
        //     for(i=0;i<arrayRed.length;i++){
        //        arrayRedLastValue.push(document.getElementById(arrayRed[i]).onclick);
            //    alert("array has : "+arrayRedLastValue[i]);
        //        if(arrayRed[i] == idOfPiece.id){
                //    alert("this is not null "+idOfPiece.id);
        //        }
        //        else{
        //            caseCheck = document.getElementById(arrayRed[i]).parentElement.id;
   
        //            lengthOfTable = ChoicesRed[nameOfNumberRed[caseCheck]].length;
        //            if(lengthOfTable == 1){
        //            if(document.getElementById(ChoicesRed[nameOfNumberRed[caseCheck]][0]).hasChildNodes()){
        //                if(document.getElementById(document.getElementById(ChoicesRed[nameOfNumberRed[caseCheck]][0]).firstChild.id).className == "border rounded-circle p-3 m-2 bg-light"){
                    //    alert("the pace is light aa 1");
        //            }
        //                else{
                    //    alert("the pace is black aa 1");
        //                document.getElementById(arrayRed[i]).onclick = null;}
        //            }
        //            else{
                    //    alert("has no child 0 aa 1");
        //                document.getElementById(arrayRed[i]).onclick = null;
        //            }
        //        }
        //        else{
        //            if(document.getElementById(ChoicesRed[nameOfNumberRed[caseCheck]][0]).hasChildNodes() || document.getElementById(ChoicesRed[nameOfNumberRed[caseCheck]][1]).hasChildNodes()){
        //                if(document.getElementById(ChoicesRed[nameOfNumberRed[caseCheck]][0]).firstChild == null && document.getElementById(ChoicesRed[nameOfNumberRed[caseCheck]][1]).firstChild != null){
        //                    if(document.getElementById(document.getElementById(ChoicesRed[nameOfNumberRed[caseCheck]][1]).firstChild.id).className == "border rounded-circle p-3 m-2 bg-light"){
                            //    alert("the pace is light aa");
        //                 }
        //                    else{
                            //    alert("the pace is black aa");
        //                        document.getElementById(arrayRed[i]).onclick = null;
        //                }
        //            }
        //                else{
        //                    if(document.getElementById(document.getElementById(ChoicesRed[nameOfNumberRed[caseCheck]][0]).firstChild.id).className == "border rounded-circle p-3 m-2 bg-light"){
                            //    alert("the pace is light aa");
        //                 }
        //                    else{
                            //    alert("the pace is black aa");
        //                        document.getElementById(arrayRed[i]).onclick = null;
        //                }
        //            }
        //            }
                   
        //            else{
                       
        //                document.getElementById(arrayRed[i]).onclick = null;
        //            }
                   
        //        }
               
        //     }
        //        }
        //    }
    }
function turnWhite(){
            document.getElementById('turnWhite').innerHTML = "your turn";
            document.getElementById('turnBlack').innerHTML = " ";
}
function turnBlack(){
    document.getElementById('turnWhite').innerHTML = " ";
    document.getElementById('turnBlack').innerHTML = "your turn";
}


    function getIdRed(idRed){
        if(turn == "white"){
        movePieces(idRed.id);
        }
           
    }
        function getIdGreen(idGreen){
            if(turn == "black"){
            movePiecesTwo(idGreen.id);
            } 
            
        }

