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
