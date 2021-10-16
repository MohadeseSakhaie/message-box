// select ul dom
const ulSelector = document.querySelector('ul.list');
// select li, creat dom element
const liSelector = ulSelector.querySelectorAll("li.email");
//select input
const inputSelector = ulSelector.querySelector("input[type='text']");
//select input parent
const prentInput = inputSelector.parentElement;

// event listener for asign  arrows event 
inputSelector.addEventListener('keydown', keyFunction);
// functions 
function keyFunction(e) {
    if (e.keyCode == '37') {
        // left arrow
        if (prentInput.previousElementSibling) {
            ulSelector.insertBefore(prentInput, prentInput.previousElementSibling);
        }
        console.log('left');
    }
    else if (e.keyCode == '39') {
        // right arrow 
        if (prentInput.nextElementSibling) {
            ulSelector.insertBefore(prentInput, prentInput.nextElementSibling.nextElementSibling);
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
            createLi.innerText = inputSelector.value;
            //give class name
            createLi.classList.add('email');
            //insert before
            ulSelector.insertBefore(createLi, prentInput);
            //ulSelector.insertBefore(createLi, inputLi.nextElementSibling);
            input.value = null;
            // remove btn
            const removeButton = document.createElement("button");
            removeButton.innerHTML = '<i class="fas fa-times"></i>';
            removeButton.classList.add("delete");
            createLi.appendChild(removeButton);
            console.log(removeButton);
            // event listener
            ulSelector.addEventListener('click', removeItem);
            //function
            function removeItem(e) {
                const item = e.target.parentElement; 
                //console.log(item);
                if (item.classList.contains('delete')) {
                const parentItem = itemTarget.parentElement;
                parentItem.remove();
                    //console.log(parentItem);
                }
                // console.log('remove');
            }
        }
        // console.log('cumma');
    }
    inputSelector.focus();
}