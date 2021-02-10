Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera")

function capture() {
    Webcam.snap(function (pic) {
        document.getElementById("snapshot").innerHTML=`<img src=${pic} id="imgtag">`
    })
}

console.log(ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mWA6dEhMJ/model.json",modelloaded)

function modelloaded() {
    console.log("hi")
}
function identify() {
    img=document.getElementById("imgtag")
    classifier.classify(img,showresults)
}
function showresults(error,results) {
    if (error) {
        console.log(error)
    }    
    else {
        console.log(results)
        document.getElementById("objectresult").innerHTML=results[0].label
        document.getElementById("Acuracy").innerHTML=results[0].confidence.toFixed(3)*100+" %"; 
    }
}
