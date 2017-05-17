/**
 * Created by maxim on 15.05.17.
 */

function cl(val) {
    console.log(val);
}

var button = document.querySelector("button");
var colorList = document.querySelector(".color-list");

// cl(colorList);

// =========== Classes ========

function InputColor(node) {
    var inputNode = document.querySelector(node);
    var inputValue,
        borderColor,
        bodyColor;

    this.setInputValue = function () {
        inputValue = inputNode.value;
        // cl(inputValue);
    }


// ------------------------


     var hexValidate = function(value) {
         var hex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;

         if (hex.test(value)) return true;
         else return false;
     }

// ---------------------------

    this.changeColor = function () {
        if(hexValidate(inputValue)) {
            inputNode.style.borderColor = "green";
            document.body.style.backgroundColor = "#" + inputValue;

            var listElement = document.createElement('li');
            var color = "#" + inputValue;

            colorList.appendChild(listElement);
            listElement.style.backgroundColor = color;
        } else {
            inputNode.style.borderColor = "red";
            document.body.style.backgroundColor = "";
        }
    }

// ---------------------------

    this.changeColorFromList = function(target) {
        document.body.style.backgroundColor = target.style.backgroundColor;
    }
}
// =======================

var color = new InputColor("input");

button.onclick = function () {
    color.setInputValue();
    color.changeColor();
}

colorList.addEventListener("click", function (event) {
    color.changeColorFromList(event.target);
});

