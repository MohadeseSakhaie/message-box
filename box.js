// select input
const selectInput = document.querySelector("div.tag-input-container input[type='text']");
// select li, creat dom element
const liSelector = selectInput.parentNode;
// select ul dom
const ulSelector = liSelector.parentNode;


// event listener for asign  arrows event 
selectInput.addEventListener('keydown', func);
// functions
function func(e) {
    if (e.keyCode == '37') {
        // left arrow
        if (liSelector.previousElementSibling) {
            ulSelector.insertBefore(liSelector, liSelector.previousElementSibling);
        }
        console.log('left');
    }
    else if (e.keyCode == '39') {
        // right arrow 
        if (liSelector.nextElementSibling) {
            ulSelector.insertBefore(liSelector, liSelector.nextElementSibling.nextElementSibling);
        }
        console.log('right')
    }
    // cumma key movement
    else if (e.keyCode == '188') {
        if (input.value == '') {
            e.preventDefault();
        } else {
            e.preventDefault();
            // creat li
            const createLi = document.createElement('li');
            // get input value
            //my code: const newInput = document.createTextNode(selectInput.value);
            createLi.innerText = selectInput.value;
            //give class name
            //my code: createLi.className = 'email';
            createLi.classList.add('email');
            //insert before
            ulSelector.insertBefore(createLi, liSelector);
            //ulSelector.insertBefore(createLi, inputLi.nextElementSibling);
            // check trash button
            ulSelector.addEventListener('click', removeItem);
            const removeButton = document.createElement("button");
            removeButton.innerHTML = '<div><i class="fas fa-times"></i></div>';
            removeButton.classList.add("remove-element");
            createLi.appendChild(removeButton);
            input.value = null;

            function removeItem(e) {
                console.log(e.target);
                const item = e.target;
            }
        }
        
        console.log('cumma');
    }
    selectInput.focus();
}
