function updateColor() {
    var red = document.getElementById("red").value || 0;
    var green = document.getElementById("green").value || 0;
    var blue = document.getElementById("blue").value || 0;

    red = validateInput(red);
    green = validateInput(green);
    blue = validateInput(blue);

    var colorDisplay = document.getElementById("color-display");
    colorDisplay.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function validateInput(value) {
    if (isNaN(value)) {
        return 0;
    }
    return Math.max(0, Math.min(value, 255));
}

function generateBlock() {
    var colorDisplay = document.getElementById("color-display");
    var color = window.getComputedStyle(colorDisplay).backgroundColor;

    if (!color || color === "rgba(0, 0, 0, 0)") {
        alert("Введите значения цветов и нажмите 'Сгенерировать' перед добавлением блока.");
        return;
    }

    var colorBlocksContainer = document.getElementById("color-blocks-container");

    var colorBlock = document.createElement("div");
    colorBlock.classList.add("color-block");
    colorBlock.style.backgroundColor = color;

    colorBlocksContainer.prepend(colorBlock);

    saveColorToLocal(color);
}

function saveColorToLocal(color) {
    var savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    savedColors.unshift(color);
    if (savedColors.length > 15) {
        savedColors.pop();
    }
    localStorage.setItem("savedColors", JSON.stringify(savedColors));

    var scrollLeft = document.getElementById("scroll-left");
    var scrollRight = document.getElementById("scroll-right");
    if (savedColors.length <= 0) {
        scrollLeft.style.display = "none";
        scrollRight.style.display = "none";
    } else {
        scrollLeft.style.display = "block";
        scrollRight.style.display = "block";
    }

    var container = document.getElementById("color-blocks-container");
    container.scrollLeft = 0;
}

function applySavedColors() {
    var savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    var colorBlocksContainer = document.getElementById("color-blocks-container");

    savedColors.forEach(function (color) {
        var colorBlock = document.createElement("div");
        colorBlock.classList.add("color-block");
        colorBlock.style.backgroundColor = color;

        colorBlock.addEventListener("click", function () {
            changeBodyBackgroundColor(color);
        });

        colorBlocksContainer.appendChild(colorBlock);
    });
}

function scrollColors(direction) {
    var container = document.getElementById("color-blocks-container");
    var scrollAmount = direction * 50;
    container.scrollLeft += scrollAmount;
}

function changeBodyBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

applySavedColors();
