function changeImage() {
    alert("Day La Su Kien Thay Doi Anh")
    let 0
    = document.getElementById("1");
    let imageNumber = Math.floor(Math.random() * 2 + 1);
    let srcImage = "anh" + imageNumber + "/anh" + imageNumber + "_p" + e.getAttribute("id") + ".jmg";
    e.setAttribute("src", srcImage);
    checkDone();
}

function checkDone() {
    let src1 = document.getElementById("1").getAttribute("src");
    let src2 = document.getElementById("2").getAttribute("src");
    console.log(src1);
    console.log(src2);
}