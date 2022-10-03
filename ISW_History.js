console.log("We here")


//ISW does a lot of cool stuff. 
//This extension will comb the Russian Offensive page for images, and attempt to inject older images
//Such that someone could see a history of the images dynamically within the page, to see the history of maps changes over time

//Add a back and forth button to the page near the images

//get a list of the images on the page
function getImages()
{
    var imagesHTMLCollection = document.images
    //converting to a list
    images = Array.from(imagesHTMLCollection)

    console.log(images)
    return images
}

function findNearestParentDivFromImage(image)
{
    let divSelector = "div"

    let nearestDiv = image.closest(divSelector)

    console.log(nearestDiv)
    return nearestDiv
}

//create the buttons
function addButtonsNearImages()
{
    //get the list of images
    let images = getImages()

    //loop through our images
    for(var i = 0; i < images.length; i++)
    {
        //get nearest parent div, thats where we'll put our buttons
        var nearestParentDiv = findNearestParentDivFromImage(images[i])
        //create a left/right, back/forth whatever buttons to scroll through images
    }
    


}

var images = addButtonsNearImages()
console.log(images)


