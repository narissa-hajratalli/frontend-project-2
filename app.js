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

console.log(getProvider)

///////////////////////////////////////////////////////////////////////////////////////

//READ - Getting provider info and their comments to show on the screen when you click the "Find Provider" button
$('#find-button').click(async function(){
    // alert( "Handler for .click() called." );
    //API call
    const response = await fetch(`${URL}/providers`); //Setting response to the provider route
    const data = await response.json(); //grabbing the JSON data

    //Populate the div with provider information
    data.forEach((provider) => {
        const $info = $('<li>').text(`${provider.firstName} ${provider.lastName}, ${provider.providerType}`);
        $providerShow.append($info);
    })
})


// IF $option is equal to $info







////////////////////////////////
// Main Application Logic
////////////////////////////////
getProvider() //showing providers in the dropdown menu
//showProvider() //showing provider info and their comments
//cre