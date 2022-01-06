export default class Display {
  constructor(text) {
    this.text = text;
    this.displayText(this.text);
  }

  displayText(text) {
    // Create a new empty div
    var newDiv = document.createElement("div");
    // Create new content
    var newContent = document.createTextNode(text);
    // Link content to div
    newDiv.appendChild(newContent);
    // Insert new div above target element of DOM
    var currentDiv = document.getElementById('last_div');
    document.body.insertBefore(newDiv, currentDiv);
  }
}
    
export class DisplayButtons {
  constructor(arrayButtons){
    arrayButtons.forEach(objectButton => {
      this.createButton(objectButton); 
    });
  }

  createButton(objectButton){
    let btn = document.createElement("button");
    btn.innerHTML = objectButton.text;
    var currentDiv = document.getElementById('last_div');
    document.body.insertBefore(btn, currentDiv);
    btn.setAttribute("id", objectButton.text);

    //create event listener
    btn.addEventListener('click', e => {
      objectButton.action();
    })
  }

  resetId(){
  }
}


