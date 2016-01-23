/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */






window.onload = function(){
    var widthWin = window.innerHeight;
    var txtWidth = document.querySelector('#largura');
    var btnMenu = document.querySelector(".btn-menu-mobile");
    var btnOn = false;
    var subMenu = document.querySelector(".sub-menu-mobile");
    
    btnMenu.addEventListener("click",function(){
        btnOn = !btnOn;
        
        if(btnOn){
            subMenu.style.height = "90px";
        }else{
            subMenu.style.height = "0px";
        }
    },false);
    
    
    
    
    
            
    alert("jnjkl");        
        
    
    
    
    
    function printWidth(){
        widthWin = window.innerWidth;
        txtWidth.innerHTML = "Tamanho da janela: "+widthWin;
        
    }
    
    setInterval(printWidth, 1);
    
}

