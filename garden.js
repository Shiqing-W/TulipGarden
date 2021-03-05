







function changeImg(){
    var image = document.getElementById("birdy");
    if (image.src.match("manbird")){
        image.src = "gardenimages/cutebird.png";
    } else{
        image.src = "gardenimages/manbird.png";
    }
}


function changeImg2(){
    var image = document.getElementById("birdtalk");
    if (image.src.match("birdsay1")){
        image.src = "gardenimages/birdsay2.png";
    } else{
        image.src = "gardenimages/birdsay1.png";
    }
}

function changeImg3(){
    var image = document.getElementById("mercy1");
    if (image.src.match("mercy1")){
        image.src = "gardenimages/mercy2.png";
    } else{
        image.src = "gardenimages/mercy1.png";
    }
}


console.log("garden step 1");