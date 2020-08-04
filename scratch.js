//SET URL SO IT USES DEPLOYED API URL IF IT EXISTS, LOCALHOST IF IT DOESN'T
// const deployedURL = null;
// const URL = deployedURL ? deployedURL : "http://localhost:3000"; //this is a ternary operator, without a deployedURL we use local host


// //Global variables
// const $ul = $('ul'); //grabs the ul that I hardcoded into my html document and stores it as a variable
// const $providerSelect = $("show-select");

// //Setting up the function to get the provider data 
// const getProviders = async () => {
//     const response = await fetch('http://localhost:3000/providers');
//     const providers = await response.json();
//     console.log(provider);
//     showProviders(provider)
// }


// //MAIN APP LOGIC 
// getProviders()


//---------------------------
// let dropdown = $('#show-selected')

// dropdown.empty()

// dropdown.append('<option selected="true" disabled>Choose Provider</option>');
// dropdown.prop('selectedIndex', 0);

// const url = "http://localhost:3000/providers";
// const providers = await response.json();

// console.log(url)

// $.getJSON(url, function (data) {
//     $.each(data, function (key, entry) {
//       dropdown.append($('<option></option>').attr('value', data.lastName).text(data.lastName));
//     })
//   });


// const findClick = () => (click, () => {

//     console.log("hello")
// })


//----------------------------------
//On change dropdown menu function
//READ - Getting provider info and their comments to show on the screen when you click the "Find Provider" button
//THIS IS FOR ON CLICK

// $('#show-selected').change(async (event) => {
//     // alert( "Handler for .change() called." );
//     //API call
//     const providerIdValue = $('#show-selected').val()
//     // console.log(providerIdValue)

//     //Send value to the button
//     $('#find-button').attr("value", providerIdValue);
// })

// $('#find-button').click(async (provider) => {
//     const providerIdValue = $('#show-selected').val()
//     const response = await fetch(`${URL}/providers/${providerIdValue}`)
//     console.log(response)

//     const data = await response.json()
//     console.log(data)

//     const $firstName = $('<li>').text(data.firstName);
//     $('#provider-info-ul').empty()
//     $('#provider-info-ul').append($firstName)
//     console.log($firstName)
//     console.log(data.firstName)

//     // const $firstName = $('<li>').text($('#find-button').val(data.firstName))

// })