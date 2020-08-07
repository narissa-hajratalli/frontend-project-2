# Project Proposal - Frontend Development

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Incomplete

## Project Description
The purpose of this project is to create a full CRUD application to review different healthcare providers. The user will have the opportunity to report acts of discrimination they've experienced from providers through comments and those comments will be stored in a database and mapped to each provider. The inspiration for this appliaction is that People of Color are, statistically, overlooked by providers and experience discrimination in the healthcare industry.

For the frontend application, I plan to have a list of facts relating to discrimination in the healthcare industry. I also plan to have a dropdown menu containing provider's names and a "Submit a Complaint" button that allows the user to create a new comment. I will also have an button so that the user can only edit the entered provider's information (not their previous comment). Finally, there will be an option to delete a comment. The providers and their respective comments will appear in a list format. 

## Wireframes
- [Desktop](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1596213047/Project%202%20-%20CRUD%20Application/Desktop_rdzv6l.png)
- [iPad](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1596213047/Project%202%20-%20CRUD%20Application/iPad_tagpy3.png)
- [Mobile](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1596213047/Project%202%20-%20CRUD%20Application/Mobile_tyb7wj.png)

## Time/Priority Matrix 
- [Graphic](https://res.cloudinary.com/ds7vqqwb8/image/upload/v1596211308/Project%202%20-%20CRUD%20Application/IMG_1037_xcl0mo.jpg)

|Deliverable	| Status	| Time Spent |
| --- | :---: |  :---: | 
| Day 1: Thurs, July 30th | Project Proposal | Complete | 8hr |
| Day 2: Fri, July 31st, 2020 | Research & Development	| Incomplete	| 2 hrs |
| Day 3: Sat, August 1st, 2020 | Backend: Build server & create Mongoose models | Complete | 5 hrs |
| Day 4: Sun, August 2nd, 2020 | Backend: Complete backend, deployment, and test with Postman | Complete | 8 hrs |
| Day 5: Mon, August 3rd, 2020 | Backend: Basic frontend build & have frontend consume API | Complete | 10 hrs |
| Day 6: Tues, August 4th, 2020 | Frontend: Frontend build (mobile first) | Incomplete | |
| Day 7: Wed, August 5th, 2020 | Frontend: Hamburger menu and deploy | Incomplete | |
| Day 8: Tues, August 6th, 2020 | Frontend: Cross-browser testing and final touches  | Incomplete | |
| Day 9: Tues, August 7th, 2020 | Presentation | Incomplete | |

## MVP/Post MVP

#### MVP
- Create frontend with HTML, CSS, and jQuery 
- Use jQuery and leverage the backend API
- Cross-browser responsiveness
- Hamburger menu 
- Dropdown menu containing list of providers (read)
- Button to add provider information and submit a comment (create)
- Button to update provider information, but not a previous comment (update)
- Button to delete your previous comment, but keeps provider information in the database (delete)
- Add list of health disparity facts to the homepage 
- Deployment
- Debugging
- Learn Bootstrap


#### Post MVP
- Empty page to render provider name, specialty, degree, location, and if they accept Medicaid (render in another page, not the homepage)
- Softscroll on the webpage
- Have comments section have a timestamp so users know what date a comment was submitted
- Have a "last edited" section for each provider's profile so users know if information is up to date
- Include mental health resources and resources to report biases

## Functional Components

#### MVP
| Component | Estimated Time | Priority | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create frontend with HTML, CSS, and jQuery  | 6 hrs | H | 9 hrs  | 9 hrs |
| Add list of health disparity facts to the homepage  | 2 hrs | H | 2 hrs  | 2 hrs |
| Use jQuery and leverage the backend API  | 6 hrs | H | 10 hrs  | 10 hrs |
| Learn Bootstrap and use for CSS build  | 6 hrs | H | 3 hrs | 3 hrs |
| Cross-browser responsiveness | 6 hrs | H | 2 hrs  | 2 hrs |
| Hamburger | 2 hrs | H | 30 min  | 30 min |
| Button to add a comment (create) | 1.5 hrs | H | 2 hrs | 2 hrs |
| Button to add provider information (create) | 1.5 hrs | H | 4 hrs  | 4 hrs |
| Dropdown menu containing list of providers (read) | 3 hrs | H | 6 hrs  | 6 hrs |
| Button to update provider information, but not a previous comment (update) | 3 hrs | H | 5 hrs  | 5 hrs |
| Button to delete your previous comment, but keeps provider information in the database (delete) | 1.5 hrs | H | 3 hrs  | 3 hrs |
| Deployment | 30 mins | H | 2 hrs  | 2 hrs |
| Total | - | 37.5 hrs | 48 hrs | 48 hrs |


#### Post MVP
| Component | Estimated Time | Priority | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Empty page to render provider information | 3 hrs | M | -hr | -hr |
| Softscroll on the webpage | 1.5 hrs | M | 25 mins | -hr |
| Have comments section have a timestamp so users know what date a comment was submitted | 2 hrs | M | -hr | -hr |
| Have a "last edited" section for each provider's profile so users know if information is up to date | 1.5 hrs | L | -hr | -hr |
| Include mental health resources and resources to report biases | 1.5 hrs | L | 1 hr | -hr |
| Total | - | 9.5 hr | 1.25 hr | 1.25 hrs |

## Additional Libraries
 - jQuery: Used to connect the backend database with the frontend HTML and CSS. 
 
 - Bootstrap: Used for the hamburger menu, navigation bar, and overall website styling
 
 - Google Fonts: Used to add different font families to the application to make it more aesthetically pleasing.
 

## Code Snippets


#### Creating the function that populates the dropdown menu with all the providers 
I used a forEach loop to append different options to the dropdown menu containing the provider's name and provider type. This step was crucial for my project because I also set the value of each provider in the dropdown menu equal to their ID in the database. This made it possible to associate each provider with different on click events for my different CRUD operations. 

```
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
```


## Issues and Resolutions
 
 
#### 
Issue: The delete buttons were not working to delete comments.

Resolution: I added the delete function directly into the read function and called the function immediately after the function. This was difficult because the logic was hard to follow and I received a lot of help from my team lead. 

```
//----READ - Getting provider info and their comments to show on the screen when you click the "Find Provider" button-----

//Function for the "Find Provider" button click
const findButton = async () => {
    //Defining variables for this function
    const providerIdValue = $('#show-selected').val();

    //Fetch request for grabbing the data at a certain endpoint
    const response = await fetch(`${URL}/providers/${providerIdValue}`);

    //Defining the data
    const data = await response.json();

    const $picture = $('<li>').text(data.picture)
    const $title = $('<li>').text(`${data.firstName} ${data.lastName}, ${data.providerType}`);
    const $specialty =  $('<li>').text(data.specialty);
    // const $medicaid =  $('<li>').text(`Accepts Medicaid: ${data.acceptsMedicaid}`); <- Post MVP

    //Empties the div so we don't have duplicate provider information on the screen
    $('#provider-info-ul').empty();
    
    //Appending items
    $('#provider-info-ul').append($picture);
    $('#provider-info-ul').append($title);
    $('#provider-info-ul').append($specialty);
    // $('#provider-info-ul').append($medicaid); <- Post MVP
    
    //Looping over the keys in the 'comments' object
    data.comments.forEach((comment, i) => {
        const $comment = $('<li>').text(`${comment.comment} -${comment.commenterName}`).attr('value', comment._id);
        $('#provider-info-ul').append($comment)

        $comment.addClass('comment-to-delete')

    ///////////////////////////////////////////////////////////////////////////////////////
    //------------- DELETE - Removing a comment --------------

        const $deleteButton = $("<button>").text('Delete').addClass("btn btn-danger delete-button").attr('type','button').attr('value', comment._id)
        $deleteButton.click( async () => {
            const deleteButtonValue = $deleteButton.val();
        
            const response = await fetch(`${URL}/comments/${deleteButtonValue}`, {
              method: "delete"
            })

            findButton()
        })

        $(".comment-to-delete").eq(i).append($deleteButton)
    })
}

$('#find-button').click(findButton)

```
