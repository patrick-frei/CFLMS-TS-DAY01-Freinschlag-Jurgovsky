var firstName = "Patrick";
var lastName = "Freinschlag";
//let list: number[];
//let list: Array<number>;
var list = new Array();
for (var i = 0; i < 10; i++) {
    console.log(i);
    list.push(i);
}
console.log(list);
document.write(firstName + " " + lastName + "<br>");
list.forEach(function () {
    document.write(firstName + "<br>");
});
// () => {} === function() {}
// => is called fat arrow
// >=, <= are operators for smaller than and greater than
setTimeout(function () {
    list.forEach(function () {
        //document.write would replace the whole html text instead of appending our text it
        document.body.innerHTML += lastName + "<br>";
    });
}, 5000);
