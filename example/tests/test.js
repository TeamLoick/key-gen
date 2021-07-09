const file = `../../data/repeat.json`;
const fs = require("fs");
const KeyGen = require("../../index.js");

async function save(key) {
  var json = fs.readFileSync(file);
var data = JSON.parse(json)
  if (data.length <= 0) {
    var json = {
      key: key,
    };
    let data1 = `
        [
            ${JSON.stringify(json)}
        ]
        `;
    fs.writeFileSync(file, data1);
    return;
  } else {
    var json1 = {
        key: key,
      };
      let data1 = JSON.stringify(json1);
      var dataArr = [];
      for (var i = 0; i < data.length; i++) {
        var d = JSON.stringify(data[i]);
        dataArr.push(d);
      }
      dataArr.push(data1)
      var upload = `
      [
          ${dataArr}
      ]`
      for(var i = 0; i < data.length; i++){
        if(data[i].key === key){
            throw Error('Key duplicate')
        }
    }
    fs.writeFileSync(file, upload)
  }

}
function gen1() {
    var custom = KeyGen.genCustom(1, false, false, true, false)
save(custom)
.catch(err => {
        console.log(err)
        var custom = KeyGen.genCustom(1, false, false, true, false)
        save(custom)
    
})
}
gen1()

