let arr = [[],[],[]];
let row0 = document.querySelectorAll(".row0 button");
let row1 = document.querySelectorAll(".row1 button");
let row2 = document.querySelectorAll(".row2 button");
arr[0] = row0;
arr[1] = row1;
arr[2] = row2;

let vis = [[0,0,0],[0,0,0],[0,0,0]];
let turnX = true;
let finished = false;
let cnt=0;

for(let i = 0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        arr[i][j].addEventListener("click", function (){
            if(vis[i][j]!=0 && finished==false){
                alert("This box is already filled! \n Kindly fill another box");
            }
            else{
                cnt++;
                if(turnX && finished==false){
                    arr[i][j].classList.add("addX");
                    turnX = false;
                    vis[i][j] = 1;
                    if(check(vis,i,j,vis[i][j])){
                        document.getElementById("winner").innerHTML = 
                        "<h3>Player1 is winner. </h3>"+
                        "<h3>Press RESET to start new Game!</h3>";
                        document.getElementById("winner").classList.add();
                        // alert("Press Reset to start new Game!");
                        finished = true;
                    }
                }
                else if(finished==false){
                    arr[i][j].classList.add("add0");
                    turnX = true;
                    vis[i][j] = 2;
                    if(check(vis,i,j,vis[i][j])){
                        document.getElementById("winner").innerHTML = 
                        "<h3>Player2 is winner. </h3>"+
                        "<h3>Press RESET to start new Game!</h3>";
                        finished = true;
                    }
                }
            }
            if(cnt==9){
                document.getElementById("winner").innerHTML = 
                "<h3>It's a DRAW!</h3>"+
                "<h3>Press RESET to start new Game!</h3>";
                finished = true;
            }
        });
    }
}

function check(vis, x, y, val){
    // horizontal
    let cnt=0;
    for(let i=0; i<3; i++){
        // vis[x][i]
        if(vis[x][i]==val){
            cnt++;
        }
    }

    if(cnt==3) {
        return true;
    }

    cnt=0;
    // vertical
    for(let j=0; j<3; j++){
        if(vis[j][y]==val){
            cnt++;
        }
    }
    if(cnt==3){
        return true;
    }

    cnt=0;
    if((x==0 && y==0) || (x==2 && y==2)){
        cnt=0;
        for(let i=0; i<3; i++){
            if(vis[i][i]==val){
                cnt++;
            }
        }
        if(cnt==3) {
            return true;
        }
    }
    cnt=0;
    if((x==0 && y==2) || (x==2 && y==0)){
        cnt=0;
        for(let i=0; i<3; i++){
            if(vis[i][2-i]==val){
                cnt++;
            }
        }
        if(cnt==3) {
            return true;
        }
    }

    cnt=0;
    if(x==1 && y==1){
        cnt=0;
        for(let i=0; i<3; i++){
            if(vis[i][i]==val){
                cnt++;
            }
        }
        if(cnt==3) {
            return true;
        }

        cnt=0;
        for(let i=0; i<3; i++){
            if(vis[i][2-i]==val){
                cnt++;
            }
        }
        if(cnt==3) {
            return true;
        }
    }

    return false;

}

document.getElementById("reset").addEventListener("click", function (){
    for(let i=0; i<3 ;i++){
        for(let j=0; j<3; j++){
            if(vis[i][j]==1){
                arr[i][j].classList.remove("addX");
            }
            else if(vis[i][j]==2){
                arr[i][j].classList.remove("add0");
            }
            vis[i][j] = 0;
        }
    }
    turnX = true;
    vis = [[0,0,0],[0,0,0],[0,0,0]];
    finished = false;
    cnt = 0;
    document.getElementById("winner").innerHTML = "";
});