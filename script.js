let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell = ""; //""
let row = [];
let data = [];


for (let i = 0; i < csv.length; i++) {
  let currentCharacter = csv[i];
  
  if (currentCharacter !== "," && currentCharacter !== "\n") {
    cell = cell + currentCharacter;
  }
  
  if ("," === currentCharacter) {
    row.push(cell);
    cell = "";
  }
    
 
  else if  (currentCharacter === "\n" || i === csv.length - 1) {
    row.push(cell);
    cell = "";
    data.push(row);
    row = [];
  }
}

// console.log(data);


let newData = []

for (let i =1;i<data.length;i++){
  let row = data[i]
console.log(row)++
  let obj = {}
  obj.id = row[0]
  obj.name= row[1]
  obj.occupation = row[2]
  obj.age = row[3]
  newData.push(obj)
}
  console.log(newData)
let newData = [
  { id: 42, name: 'Bruce', occupation: 'Knight', age: 41 },
  { id: 57, name: 'Bob', occupation: 'Fry Cook', age: 19 },
  { id: 63, name: 'Blaine', occupation: 'Quiz Master', age: 58 },
  { id: 98, name: 'Bill', occupation: 'Doctor’s Assistant', age: 26 }
];


if (newData.length > 0) {
 
  const headers = Object.keys(newData[0]);

  
  let csvString = headers.join(',') + '\n';

  
  csvString += newData.map(row =>
    headers.map(field => {
      let value = row[field] || '';
      
      if (value.includes(',') || value.includes('\n') || value.includes('"')) {
        value = `"${value.replace(/"/g, '""')}"`; 
      } else {
        value = String(value); // Convert to string if no special characters
      return value;
    }).join(',')
  ).join('\n');


  console.log(csvString);
}     



