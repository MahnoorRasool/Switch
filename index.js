var fruits = prompt("Enter your fruit name");
var result = document.getElementById('result');

switch(fruits) {
    case "apple":
        alert("It's apple field");
        console.log("It's apple field");
        result.innerHTML = "It's apple field";
        break;
    case "bottle":
        alert("It's bottle field");
        console.log("It's bottle field");
        result.innerHTML = "It's bottle field";
        break;
    case "glasses":
        alert("It's glasses base");
        console.log("It's glasses base");
        result.innerHTML = "It's glasses base";
        break;
    default:
        alert("Invalid entry");
        result.innerHTML = `Invalid entry: ${fruits}`;
        break;
}