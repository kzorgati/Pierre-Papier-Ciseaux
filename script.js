var j;
var o;
scorej=0
scorepc=0

function choixPc(){
    o=Math.floor(Math.random()*3)
    if(o==0){
        document.getElementById('choixImgPc').src="Images/pierre.png"
    }
    else{
        if(o==1){
            document.getElementById('choixImgPc').src="Images/ciseaux.png"
        }
        else{
            document.getElementById('choixImgPc').src="Images/papier.png"
        }
    }
    
}
/*---------------------------*/
function resultat(){
    if (j==o){
        document.getElementById('resultat').innerHTML="Egalité !! "
    }
    else{
        if( (j==0 && o==1 ) || (j==1 && o==2) || (j==2 && o==0) ) {
            document.getElementById('resultat').innerHTML="Gagné !! ";
            scorej++;
            document.getElementById('scoreJ').innerHTML=scorej
            document.getElementById('scorePc').innerHTML=scorepc

        }
        else{
            document.getElementById('resultat').innerHTML="Perdu !!";
            scorepc++;
            document.getElementById('scorePc').innerHTML=scorepc
            document.getElementById('scoreJ').innerHTML=scorej
        }
    }

}
/*------------------------*/
function pierre(){
    j=0;
    document.getElementById('choixImg').src="Images/pierre.png";
    choixPc()
    resultat()
   
}
function ciseaux(){
    j=1;
    document.getElementById('choixImg').src="Images/ciseaux.png"
    choixPc()
    resultat()
}
function papier(){
    j=2;
    document.getElementById('choixImg').src="Images/papier.png"
    choixPc()
    resultat()
}