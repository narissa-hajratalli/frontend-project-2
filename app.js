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
const $submit = $('#submit')

//////////////////////////////
//FUNCTIONS
/////////////////////////////

//------DROPDOWN MENU - Getting providers from API to populate in the dropdown menu-----
const getProvider = async () => {
    //API call
    const response = await fetch(`${URL}/providers`); //Setting response to the provider route
    const data = await response.json(); //grabbing the JSON data

    //Populate each selector in the dropdown menu with retrieved data
    //Looping through all the providers in the data set
    data.forEach((provider) => {
        const $option = $('<option>').attr("value", provider._id).text(`${provider.firstName} ${provider.lastName}, ${provider.providerType}`);
        $providerSelect.append($option);
    });

    //This empties out the div containg the provider information
    $('#provider-info-ul').empty();
    
};

///////////////////////////////////////////////////////////////////////////////////////

//----READ - Getting provider info and their comments to show on the screen when you click the "Find Provider" button-----

//Function for the "Find Provider" button click
$('#find-button').click(async (providerData) => {
    //Defining variables for this function
    const providerIdValue = $('#show-selected').val();

    //Fetch request for grabbing the data at a certain endpoint
    const response = await fetch(`${URL}/providers/${providerIdValue}`);
    console.log(response);

    //Defining the data
    const data = await response.json();
    console.log(data);

    const $picture = $('<li>').text(data.picture)
    const $title = $('<li>').text(`${data.firstName} ${data.lastName}, ${data.providerType}`);
    const $specialty =  $('<li>').text(data.specialty);
    const $medicaid =  $('<li>').text(`Accepts Medicaid: ${data.acceptsMedicaid}`);

    //Empties the div so we don't have duplicate provider information on the screen
    $('#provider-info-ul').empty();
    
    //Appending items
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
///////////////////////////////////////////////////////////////////////////////////////

//------------- CREATE - ADDING A NEW PROVIDER --------------

//Function for adding a new provider when the "Submit" button is pressed
$('#submit').click(async () => {
    //This is an object mirroring the provider schema. Each key is an element in the provider schema 
    //and I'm setting it equal to the input value that will be put on the form
    const newProvider = {
        firstName : $('#first-name').val(),
        lastName : $('#last-name').val(),
        providerType : $('#provider-type').val(),
        specialty : $('#specialty').val(),
    }

    //Fetch request for grabbing the data at a certain endpoint
    const response = await fetch((`${URL}/providers`), {
        method: "post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newProvider)
    });
    console.log(response);

    const data = await response.json();
    console.log(data);

    //This runs the first function again to populate the providers in the dropdown menu
    getProvider();

    //Empty options so we don't get duplicate in the dropdown menu
    $('#show-selected').empty();

    //Clears out the form after you click submit
    $('#first-name').val("");
    $('#last-name').val("");
    $('#provider-type').val("");
    $('#specialty').val("")
    
})

///////////////////////////////////////////////////////////////////////////////////////

//---- UPDATE - Update provider information -----
$('#update').click(async (provider) => {
//Mirroring the provider schema again with the elements associated with the update modal
    const editProvider = {
        // firstName : $('#first-name-2').val(),
        // lastName : $('#last-name-2').val(),
        // providerType : $('#provider-type-2').val(),
        // specialty : $('#specialty-2').val(),
        firstName : $('#first-name').val(),
        lastName : $('#last-name').val(),
        providerType : $('#provider-type').val(),
        specialty : $('#specialty').val(),
    }

    //Repopulates the form so you can edit the existing information
    // const firstNameEdit = $('#first-name-2');
    // const lastNameEdit = $('#last-name-2');
    // const providerTypeEdit = $('#provider-type-2');
    // const specialtyEdit = $('#specialty-2')


    // firstNameEdit.val(provider.firstName);
    // lastNameEdit.val(provider.lastName);
    // providerTypeEdit.val(provider.providerType);
    // specialtyEdit.val(provider.specialty);

    console.log(editProvider);

    //Used to select each provider by their id and to put as the endpoint of the fetch request
    const providerIdValue = $('#show-selected').val();
    console.log(providerIdValue)

    //Fetch request for grabbing the data at a certain endpoint
    const response = await fetch((`${URL}/providers/${providerIdValue}`), {
        method: "put",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(editProvider)
    })
    console.log(response)

    const data = await response.json()
    console.log(data)

    //This runs the first function again to populate the providers new information in the dropdown menu
    getProvider();

    //Empty options so we don't get duplicate in the dropdown menu
    $('#show-selected').empty();

    //Clears out the form after you click submit
    $('#first-name-2').val("");
    $('#last-name-2').val("");
    $('#provider-type-2').val("");
    $('#specialty-2').val("")
})

///////////////////////////////////////////////////////////////////////////////////////

//------------- CREATE - ADDING A NEW COMMENT --------------
$('#create-comment').click(async () => {
    const newComment = {
        providerid: $('#show-selected').val(),
        comment: $('#comment').val(),
        commenterName: $('#commenter').val()
    }
    console.log(newComment) //seeing if it grabs the right provider ID

})








////////////////////////////////
// Main Application Logic
////////////////////////////////
getProvider() //showing providers in the dropdown menu


// initializes modal package
// $('.modal').modal()