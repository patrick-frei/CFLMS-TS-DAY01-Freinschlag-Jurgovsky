var namesList = [
    "John",
    "Hans",
    "Gerti",
    "Carina",
    "Patrick",
    "Theo",
    "Serri"
];
for (var i in namesList) {
    //for (let i in array) {} === for (let i = 0; i < array.length; i++) {}
    //`${i}<br>` === i + "<br>"
    document.write(i + "<br>");
}
for (var _i = 0, namesList_1 = namesList; _i < namesList_1.length; _i++) {
    var i = namesList_1[_i];
    document.write(i + "<br>");
}
for (var i in namesList) {
    document.write("value @ index " + i + " = \"" + namesList[i] + "\"<br>");
}
