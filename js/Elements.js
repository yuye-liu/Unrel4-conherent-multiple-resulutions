function init()
{
    addToArray(document.getElementById("leftMenu"));
    addToArray(document.getElementById("rightMenu"));
}

var picArray = new Array();
function addToArray(pic)
{
    function picInfo(myPoint,width,height)
    {
        this.myPoint = myPoint;
        this.width = width;
        this.height = height;
    }

    console.log("w"+pic.style.width);
    console.log("h"+pic.style.height);
    console.log("h"+pic);
    var picInfo = new picInfo(pic,pic.style.width,pic.style.height);

    picArray.push(picInfo);
}