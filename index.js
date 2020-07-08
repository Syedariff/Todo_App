(function() {
    "use strict";

    let formBox = document.querySelector('#form');
    let listContainer = document.querySelector('.main__list');
    let add = document.querySelector('input[type="submit"]');
    let input = document.getElementById('additem');
    let err = document.getElementById('err');
    let empty = document.querySelector('.empty');
   	

    // Delete button 
    listContainer.addEventListener('click', function(del) {    	
		del.target.classList.contains('btn');
		let list = del.target.parentElement;
		listContainer.removeChild(list);       	
    });	   
    	
    // Add list-item when submit button clicked.    
	formBox.addEventListener('submit', addItem);		
	function addItem(e) {
		e.preventDefault();  

		if (input.value === "") {
			err.style.visibility = 'visible';
            return
		} else {
			err.style.visibility = 'hidden';
            
		}   

        // create a new list-item
        let newList = document.createElement('li'),
        listText = document.createTextNode(input.value);   
        //Add text to list-item
        
        newList.appendChild(listText);   

       

        //Create button for list-item
        let button = document.createElement('button');
        button.className = 'btn';
        let buttonText = document.createTextNode(" x Clear");
        button.appendChild(buttonText);

        //Add button to list-item
        newList.appendChild(button);

        // Add list-item to existing ul
        listContainer.appendChild(newList);
        
   }

    // No task
    

    
})();