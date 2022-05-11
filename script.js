// query the DOM for the form element

const formElement = document.querySelector('form');
console.log(formElement);

// add a submit event listener on the form
formElement.addEventListener('submit', function (e) {
    
    // stop the page from refreshing when the form is submitted 
    e.preventDefault();
    // log out the event object which is generated when the form is submitted:
    console.log(e);
    
    alert (`You've Sumitted this form!`);

    // query the DOM for the input element and check whether it's empty 
    const inputElement = document.getElementById('toDoItem');
    console.log(inputElement);

    // only if the user has eneterd an actual tasks (AKA input is not empty):

    if (inputElement.value) {
        // grab the user's to do item from the form input
        console.log(inputElement.value);

        //create an li:
        const liElement = document.createElement("li")
        console.log(liElement);


        //display to do on the page within an li element
            // include a checkbox icon within the li
        liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
        
        // create an element that represents the text we have to add to our TO DO List 
        const toDoContent = document.createTextNode(inputElement.value);
        console.log(toDoContent);
        // adn then append that text element to the li
        liElement.appendChild(toDoContent);

        // add the li element to the ul
        document.querySelector("ul").appendChild(liElement);

        //clear the input
        inputElement.value = "";

    } else {
        alert("Please do not leave input empty before submitting the form.")
    }

});



// clicking on a task allows you to toggle between checked/unchecked (AKA done vs not done)
const listElements = document.querySelector('li');

// listElements.addEventListener('click', function () {
//     console.log('To Do has been checked!');
// });

// in order to attach a click event listener to the lis whcih do not exist on the page yet, we can use :
//EVENT PROPAGATION to DELEGATE the click event to the ul!


// Bonus Level
// add a "Reset" button which clears all of the TO DOs
// add an "Edit Task"
// add a "Remove Task" button to each task
// adda congratulations alert when all fo the existing TO DOs are checked off
// add a "Take a break" message if 5 or more tasks are completed