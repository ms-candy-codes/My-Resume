let screenWidth = window.innerWidth;
let softSkill = document.getElementsByClassName("s3-1")[0];
let techie = document.getElementsByClassName("s3-2")[0];
// alert(screenWidth);

if(screenWidth < 1026){
    softSkill.style.textAlign = "center";
    techie.style.textAlign = "center";
}