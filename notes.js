function defaultbgFunction() {
        document.getElementById("area").style.background = "white";
        }
function defaultfontFunction() {
        document.getElementById("area").style.color = "black";
        }
function bgFunction(){
            var x;
            x = document.getElementById("selectBox").value;
            if (x==1){
                document.getElementById('area').style.background = "red";
            }
            if (x==2){
                 document.getElementById("area").style.background= "orange";
            }
            if (x==3){
                    document.getElementById("area").style.background="yellow";
            }
            if (x==4){
                    document.getElementById("area").style.background="green";
            }
            if (x==5){
                    document.getElementById("area").style.background="blue";
            }
            if (x==6){
                    document.getElementById("area").style.background="purple";
            }
            if (x==7){
                    document.getElementById("area").style.background="pink";
            }
            if (x==8){
                    document.getElementById("area").style.background="white";
            }
            if (x==9){
                    document.getElementById("area").style.background="black";
            }
}
function fontFunction(){
    var x;
            x = document.getElementById("selectBox2").value;
            if (x==1){
                document.getElementById('area').style.color = "red";
            }
            if (x==2){
                document.getElementById('area').style.color = "orange";
            }
            if (x==3){
                document.getElementById('area').style.color = "yellow";
            }
            if (x==4){
                document.getElementById('area').style.color = "green";
            }
            if (x==5){
                document.getElementById('area').style.color = "blue";
            }
            if (x==6){
                document.getElementById('area').style.color = "purple";
            }
            if (x==7){
                document.getElementById('area').style.color = "pink";
            }
            if (x==8){
                document.getElementById('area').style.color = "white";
            }
            if (x==9){
                document.getElementById('area').style.color = "black";
            }
}

function countFunction(){
    x = document.getElementById("area");
    text = x.value;
    totalcharacters = text.length;
    spacesFunction();
    charactersFunction();
    nospaceFunction();
    function spacesFunction(){
    spaces = text.split(' ').length;
    document.getElementById('counter').innerHTML = spaces;
    }
    function charactersFunction(){
    document.getElementById('counter2').innerHTML = totalcharacters;
    }
    function nospaceFunction(){
    document.getElementById('counter3').innerHTML = (totalcharacters - spaces) + 1;
    }
}