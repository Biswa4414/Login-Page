

const form=document.getElementById('input');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    // const formData = new FormData(form) creates a new FormData object from the form. This object captures the input values.

    const formData = new FormData(form);

    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

//     formData.entries(): This line retrieves an iterator for the formData object. The iterator allows us to loop over all the form fields and their corresponding values.

// for (let pair of formData.entries()): This is a for...of loop that iterates over each pair of form field and its value. In each iteration, the variable pair represents the current pair of key and value.

// console.log(pair[0] + ': ' + pair[1]);: This line logs the key-value pair to the console. pair[0] represents the key (field name), and pair[1] represents the value entered by the user.

 form.reset();
 
});