//Main functionalities--
    //create comment
    //create a provider
    //read all providers and their comments
    //update provider info
    //delete comments

///////////////////////
//SET URL SO IT USES DEPLOYED API URL IF IT EXISTS, LOCALHOST IF IT DOESN'T
const deployedURL = null;
const URL = deployedURL ? deployedURL : "http://localhost:3000"; //this is a ternary operator, without a deployedURL we use local host

///////////////////////
//GLOBAL VARIABLES
//////////////////////
const $providerInput = $('#show-provider-dropdown');
const $providerSelect = $('#show-selected');
const $providerShow = $('.provider-info')
const providers = document.querySelector('.gifs')

//////////////////////////////
//FUNCTIONS
/////////////////////////////

//DROPDOWN MENU - Getting providers from API to populate in the dropdown menu
const getProvider = async () => {
    //API call
    const response = await fetch(`${URL}/providers`); //Setting response to the provider route
    const data = await response.json(); //grabbing the JSON data

    //Populate each selector in the dropdown menu with retrieved data
    //Looping through all the providers in the data set
    data.forEach((provider) => {
        const $option = $('<option>').attr("value", provider._id).text(`${provider.firstName} ${provider.lastName}, ${provider.providerType}`);
        $providerSelect.append($option);
        return $option
    });
    
};

///////////////////////////////////////////////////////////////////////////////////////

//READ - Getting provider info and their comments to show on the screen when you click the "Find Provider" button
//This is for the button click for the 

$('#find-button').click(async (provider) => {
    const providerIdValue = $('#show-selected').val();
    const response = await fetch(`${URL}/providers/${providerIdValue}`);
    console.log(response);

    const data = await response.json();
    console.log(data);

    const $picture = $('<li>').text(data.picture)
    const $title = $('<li>').text(`${data.firstName} ${data.lastName}, ${data.providerType}`);
    const $specialty =  $('<li>').text(data.specialty);
    const $medicaid =  $('<li>').text(`Accepts Medicaid: ${data.acceptsMedicaid}`);

    $('#provider-info-ul').empty();
    
    //Empty old items, append new items
    $('#provider-info-ul').append($picture);
    $('#provider-info-ul').append($title);
    $('#provider-info-ul').append($specialty);
    $('#provider-info-ul').append($medicaid);
    
    //Looping over the keys in the 'comments' object
    data.comments.forEach((comment) => {
        const $comment = $('<li>').text(`${comment.comment} -${comment.commenterName}`);
        console.log(comment)
        $('#provider-info-ul').append($comment)
    })


    // console.log($firstName)
    // console.log(data.firstName)
})


////////////////////////////////
// Main Application Logic
////////////////////////////////
getProvider() //showing providers in the dropdown menu