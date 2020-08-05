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
$('#find-button').click(async () => {
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
    data.comments.forEach((comment, i) => {
        const $comment = $('<li>').text(`${comment.comment} -${comment.commenterName}`).attr('value', comment._id);

        $comment.addClass('comment-to-delete')

        console.log(data)

        $('#delete-button').attr("value", data.comments._id)
        // console.log(data._id)
        const $deleteButton = $("<button>").text('Delete').addClass("btn btn-danger").attr('type','button').attr('id','delete-button').attr('value', commen._id)
        $(".comment-to-delete").eq(i).append($deleteButton)
        
        console.log(comment)
        $('#provider-info-ul').append($comment)
    })

     //Adding delete buttons next to each comment
    //  $(".comment-to-delete")
    

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

//On change event to change the update button's value to match the selected provider's ID
$('#show-selected').change(async () => {
    const providerIdValue = $('#show-selected').val();
    $('#update').attr('value', providerIdValue);
    console.log($('#update').val())
})

//Function to click the submit button
$('#update').click(async () => {

//Mirroring the provider schema again with the elements associated with the update modal
    const editProvider = {
        firstName : $('#first-name-2').val(),
        lastName : $('#last-name-2').val(),
        providerType : $('#provider-type-2').val(),
        specialty : $('#specialty-2').val(),
    }
    console.log(editProvider);


    const updateButtonValue = $('#update').val();


    //Fetch request for grabbing the data at a certain endpoint
    const response = await fetch((`${URL}/providers/${updateButtonValue}`), {
        method: "put",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(editProvider)
    })
    console.log(response)

    const data = await response.json()
    console.log(data)

    //Empty options so we don't get duplicate in the dropdown menu
    $('#show-selected').empty();

    //This runs the first function again to populate the providers new information in the dropdown menu
    getProvider();

    //Clears out the form after you click submit
    $('#first-name-2').val("");
    $('#last-name-2').val("");
    $('#provider-type-2').val("");
    $('#specialty-2').val("")
})

///////////////////////////////////////////////////////////////////////////////////////

//------------- CREATE - ADDING A NEW COMMENT --------------
$('#create-comment').click(async () => {
    //Matching the comments schema. It will be connected to the provider by it's id in the dropdown menu. 
    const newComment = {
        providerid: $('#show-selected').val(),
        comment: $('#comment').val(),
        commenterName: $('#commenter').val()
    }
    console.log(newComment); //seeing if it grabs the right provider ID

    //Fetch request for grabbing the data at comments endpoint
    const responseComment = await fetch((`${URL}/comments`), {
        method: "post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newComment)
    });
    console.log(responseComment); //seeing if it grabs the right url

    const dataComment = await responseComment.json();
    console.log(dataComment); //grabs the right data

    console.log(newComment.providerid)


    //Fetch request for grabbing the data at providers endpoint
    const providerIdValue = $('#show-selected').val();
    const responseProvider = await fetch((`${URL}/providers/${providerIdValue}`), {
        method: "put",
        headers: {
            "Content-Type" : "application/json"
        }
    });
    console.log(responseProvider); //seeing if it grabs the right url

    const dataProvider = await responseProvider.json();
    console.log(dataProvider);

    //Push the new comment and their name into the comment array
    dataComment.comment.forEach((comment) => {
        dataProvider.comments.push(comment);
    })

    $('#comment').val("");
    $('#commenter').val("");
})

///////////////////////////////////////////////////////////////////////////////////////

//------------- DELETE - ADDING A NEW COMMENT --------------

//API call to get the comment ids to populate with each comment
// const getComment = async () => {
//     //API call
//     const response = await fetch(`${URL}/comments`); //Setting response to the provider route
//     const data = await response.json(); //grabbing the JSON data

//     //Looping through all the comments in the data set
//     data.forEach((comment) => {
//         $('.comment-to-delete').attr("value", comment._id)
//     });

//     //This empties out the div containg the provider information
//     // $('#provider-info-ul').empty();
    
// };


//On change event to change the delete button's value to match the comment's id
// $('#show-selected').change(async () => {
//     const providerIdValue = $('#show-selected').val();
//     $('#delete-button').attr('value', providerIdValue);
//     console.log($('#delete-button').val())
// })

//Function to delete the comment
$('#delete-button').click( async () => {
    console.log('hi')
    const deleteButtonValue = $('#delete-button').val($('#show-selected'));
    console.log(deleteButtonValue)

    const response = await fetch(`${URL}/rat/${deleteButtonValue}`, {
      method: "delete"
    })
    
    getProvider() 
})
  


////////////////////////////////
// Main Application Logic
////////////////////////////////
getProvider() //showing providers in the dropdown menu

// initializes modal package
// $('.modal').modal()