const file = `../data/repeat.json`;
const fs = require('fs')
const {gen, genCustom} = require('../../index.js')
fs.readFile(file, function (err, data, key) {
    if (err) throw err;
    if(data.length <= 0) {
        var json = {
            key: key
        }
        let data1 = `
        [
            ${JSON.stringify(json)}
        ]
        `
          fs.writeFileSync(file, data1)
        return
    }
    let student = JSON.parse(data);
var json = {
    key: key
}
let data1 = JSON.stringify(json);
var studentArray = []
for(var i = 0; i < student.length; i++){
    var s = JSON.stringify(student[i])
    studentArray.push(s)
}
studentArray.push(data1)
console.log(studentArray)

var data = `
[
    ${studentArray}
]
`
for(var i = 0; i < student.length; i++){
    if(student[i].key === key){
        return console.log('error')
    }
}
  fs.writeFileSync(file, data)
})
  