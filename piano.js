// document.querySelector(".keys-checkbox input").addEventListener("click", function()
// {
//     keyboard.forEach(key => key.classList.toggle("hide"))
// });
var noOfKeys=document.querySelectorAll(".key").length;

// mouse click
for(var i=0;i<noOfKeys;i++)
{
    document.querySelectorAll(".key")[i].addEventListener("click",function()
    {
        var keyInnerHTML=this.innerHTML;
        makeSound(keyInnerHTML);
         buttonAnimation(keyInnerHTML);
    });
}

// keyboard
document.addEventListener("keydown",function(event){
     makeSound(event.key);
     buttonAnimation(event.key);
 });
 
 
//make sound
function makeSound(key)
{
    switch(key)
    {
        case "A":
        var A_A4=new Audio("../../Tune/A4.aac");
        A_A4.play();
        break;
        case "W":
        var W_A4_hash =new Audio("../../Tune/A4hash.aac");
        W_A4_hash.play();
        break;  
        case "S":
        var S_C5=new Audio("../../Tune/C5.aac");
        S_C5.play();
        break;
        case "E":
        var S_C5_hash=new Audio("../../Tune/C5hash.aac");
        S_C5_hash.play();
        break;
        case "D":
        var D_D5=new Audio("../../Tune/D5.aac");
        D_D5.play();
        break;
        case "F":
        var F_D4=new Audio("../../Tune/D4.aac");
        F_D4.play();
        break;
        case "T":
        var T_D4_hash=new Audio("../../Tune/D4hash.aac");
        T_D4_hash.play();
        break;
        case "G":
        var G_F4=new Audio("../../Tune/F4.aac");
        G_F4.play();
        break;
        case "Y":
        var Y_F4_hash=new Audio("../../Tune/F4hash.aac");
        Y_F4_hash.play();
        break;
        case "H":
        var H_F5=new Audio("../../Tune/F5.aac");
        H_F5.play();
        break;
        case "U":
        var U_F5_hash=new Audio("../../Tune/F5hash.aac");
        U_F5_hash.play();
        break;
        case "J":
        var J_B4=new Audio("../../Tune/B4.aac");
        J_B4.play();
        break;
        case "K":
        var K_G5=new Audio("../../Tune/G5.aac");
        K_G5.play();
        break;
        case "O":
        var O_G5hash=new Audio("../../Tune/G5hash.aac");
        O_G5hash.play();
        break;
        case "L":
        var L_G4=new Audio("../../Tune/G4.aac");
        L_G4.play();
        break;
        case "P":
        var P_G4hash=new Audio("../../Tune/G4hash.aac");
        P_G4hash.play();
        break;
        case "V":
        var V_E5=new Audio("../../Tune/E5.aac");
        V_E5.play();
        break;
        case "N":
        var N_A5=new Audio("../../Tune/A5.aac");
        N_A5.play();
        break;
    }
}

//animation
function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+ currentKey) ;
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

//keys visibility
const show_keys=document.querySelector(".keys-checkbox input");
show_keys.addEventListener("click", function()
{
   var show= document.querySelectorAll(".keyboard .key")[0].innerHTML;
     console.log(show);
    show.classList.toggle("hide");
    alert("h");
   // style.display = "none";
});

// key.classList.toggle("hide")
// style.display = "none";