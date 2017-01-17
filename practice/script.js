;'use stirct';

/* In this example, you set the background color of the page according to how many colors the user’s 
screen supports. This is termed "screen color depth". If the user has a display that supports just two colors 
(black and white), there’s no point in you setting the background color to bright red. You accommodate 
different depths by using JavaScript to set a color the user can actually see.*/

switch (window.screen.colorDepth)
{
    case 1:
    case 4:
        document.bgColor = "white";
        break;
    case 8:
    case 15:
    case 16:
        document.bgColor = "blue";
        break;
    case 24:
    case 32:
        document.bgColor = "skyblue";
        break;
    default:
        document.bgColor = "white";
}
document.write("Your screen supports " + window.screen.colorDepth + 
                  "bit color");

alert('What the Hell World');