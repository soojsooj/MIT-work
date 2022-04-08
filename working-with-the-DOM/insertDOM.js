function addItem() {
    // TODO: add 'item' to the list of TODOs
    
    //Step 1: identify the value of the myInput element. 
    const input = document.getElementById('myInput').value;
    //Step 2: Create a text node containing that value
    const text = document.createTextNode(input);
    //Step 3: Create a new li element and append the text node to it
    const list = document.createElement('li');
    list.append(text);
    //Step 4: Append the li element to the existing myTODOs element. 
    document.getElementById('myTODOs').append(list);
    
  }
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = addItem;
  }
  