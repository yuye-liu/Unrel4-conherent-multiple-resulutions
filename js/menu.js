var designResolutionSize = new setDesignResolutionSize(1920,409);
var ContentScaleFactor = 1.0;

function setDesignResolutionSize(designResolutionSize_width,designResolutionSize_height)
{
    this.width = designResolutionSize_width;
    this.height = designResolutionSize_height;
}

function adjustObjectSize()
{
    var current_screen_width  = document.documentElement.clientWidth;
    var current_screen_height  = document.documentElement.clientHeight;

    if(current_screen_width/designResolutionSize.width<current_screen_height/designResolutionSize.height)
    {
        ContentScaleFactor = current_screen_width/designResolutionSize.width;
    }
    else
    {
        ContentScaleFactor = current_screen_height/designResolutionSize.height;
    }

    for(var i = 0, l = picArray.length; i < l; i++)
    {
        var picInfo = picArray[i];

        var pic = picInfo.myPoint;
        var origin_width = picInfo.width;
        var origin_height =  picInfo.height;

        pic.style.width =  picInfo.width * ContentScaleFactor;
        pic.style.height = picInfo.height * ContentScaleFactor;
    }
}

