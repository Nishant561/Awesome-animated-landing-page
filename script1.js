let main1 = document.querySelector(".main1");
let main = document.querySelector(".main");

main1.addEventListener("mousemove",(dets)=>{
    main.style.left = dets.clientX + "px";
    main.style.top = dets.clientY + "px";
})