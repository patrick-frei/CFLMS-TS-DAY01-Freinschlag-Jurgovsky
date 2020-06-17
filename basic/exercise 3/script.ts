let namesList: string[] = [
  "John",
  "Hans",
  "Gerti",
  "Carina",
  "Patrick",
  "Theo",
  "Serri"
];

for (let i in namesList) {
  //for (let i in array) {} === for (let i = 0; i < array.length; i++) {}
  //`${i}<br>` === i + "<br>"
  document.write(`${i}<br>`)
}

for (let i of namesList) {
  document.write(`${i}<br>`)
}

for (let i in namesList) {
  document.write(`value @ index ${i} = "${namesList[i]}"<br>`)
}