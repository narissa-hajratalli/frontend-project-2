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
    const providerIdValue = $('#show-selected').val()
    const response = await fetch(`${URL}/providers/${providerIdValue}`)
    console.log(response)

    const data = await response.json()
    console.log(data)

    const $firstName = $('<li>').text(data.firstName);
    $('#provider-info-ul').empty()
    $('#provider-info-ul').append($firstName)
    
    console.log($firstName)
    console.log(data.firstName)
})


////////////////////////////////
// Main Application Logic
////////////////////////////////
getProvider() //showing providers in the dropdown menu