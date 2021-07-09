const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const special = '`~!@#$%^&*()-=_+[]{}|;\':",./<>?';
const hex = '123456789ABCDEF';
const file = `${__dirname}/data/crypt.json`;
const fs = require('fs')

function keyGen(
  length,
  useLowerCase = true,
  useUpperCase = true,
  useNumbers = true,
  useSpecial = true,
  useHex = false
) {
  let chars = '';
  let key = '';

  if (useLowerCase) chars += lowerCase;
  if (useUpperCase) chars += upperCase;
  if (useNumbers) chars += numbers;
  if (useSpecial) chars += special;
  if (useHex) chars += hex;

  for (let i = 0; i < length; i++) {
    key += chars[Math.floor(Math.random() * chars.length)];
  }

  return key;
}
function encrypt(key) {
  var a0 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var n0 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var a1 = []
  var g0 = ['α', 'β', 'ε', 'η', 'θ', 'ι', 'κ', 'μ', 'ρ', 'τ', 'υ', 'χ', 'ω']
  var n1 = []
  var listGreek = 0
  for (var i = 0; i <a0.length; i++) {
      function regen() {
          rnd =  Math.floor(Math.random() * a0.length) + 0;
          check(rnd)
        } 
        regen()
    function check(rnd) {
        if(a1.length <=0) {
          a1.push(a0[rnd])
          return 
        }
      var find = a1.find(element => element == a0[rnd]);
      if(!find) {
          var replace = a0[rnd]
          if(a0[rnd] == 'A'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[0]
                      listGreek++
                  }
              }
              if(random == 2) {
                  replace = '4'
              }
          }
          if(a0[rnd] == 'B'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[1]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'E'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[2]
                      listGreek++
                  }
              }
              if(random == 2) {
                  replace = '3'
              }
          }
          if(a0[rnd] == 'H'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[3]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'O'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[4]
                      listGreek++
                  }
              }
              if(random == 2) {
                  replace = '0'
              }
          }
          if(a0[rnd] == 'I'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[5]
                      listGreek++
                  }
              }
              if(random == 2) {
                  replace = '1'
              }
          }
          if(a0[rnd] == 'K'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[6]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'M'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[7]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'P'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[8]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'T'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[9]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'Y'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[10]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'X'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[11]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'W'){
              var random = Math.floor(Math.random() * 3) + 0;
              if(listGreek < 9) {
                  if(random == 1) {
                      replace = g0[12]
                      listGreek++
                  }
              }
          }
          if(a0[rnd] == 'S'){
              var random = Math.floor(Math.random() * 3) + 0;
                  if(random == 1) {
                      replace = '5'
                  }
          }
          a1.push(replace)
      } else {
          regen()
      }

      }

      
  }
  for (var i = 0; i <n0.length; i++) {
      function regen() {
          rnd =  Math.floor(Math.random() * n0.length) + 0;
          check(rnd)
        } 
        regen()
    function check(rnd) {
        if(a1.length <=0) {
          n1.push(n0[rnd])
          return 
        }
      var find = n1.find(element => element == n0[rnd]);
      if(!find) {
          n1.push(n0[rnd])
      } else {
          regen()
      }

      }

      
  }
  var keyarr = key
  .split("");
  var newkey = []
  for(var i = 0; i < keyarr.length; i++) {
      var postion = a0.indexOf(keyarr[i].toUpperCase())
      if(a1[postion] === undefined) {
          if(Number.isInteger(parseInt(keyarr[i]))){
              var postion1 = n0.indexOf(keyarr[i].toUpperCase())
              newkey.push(n1[postion1])
          } else {
              newkey.push(keyarr[i].toUpperCase())
          }
      } else {
          newkey.push(a1[postion])

      }
   
  }
  var key1 = newkey.join('')
  fs.readFile(file,  function(err, data){
      write(err, data, key1, a1,n1)
  })
  function write(err, data, key1, a1, n1) {
      var key = key1
      var letters = a1
      var numbers = n1
      if (err) throw err;
      if(data.length <= 0) {
          var json = {
              key: key,
              letters: letters,
              numbers: numbers
          }
          let data1 = `
          [
              ${JSON.stringify(json)}
          ]
          `
            fs.writeFileSync(file, data1)
          return
      }
      let datos = JSON.parse(data);
  var json = {
      key: key,
      letters: letters,
      numbers: numbers
  }
  let data1 = JSON.stringify(json);
  var datosArray = []
  for(var i = 0; i < datos.length; i++){
      var s = JSON.stringify(datos[i])
      datosArray.push(s)
  }
  datosArray.push(data1)
  
  var data = `
  [
      ${datosArray}
  ]
  `
    fs.writeFileSync(file, data)
  }
  return newkey.join('')
}
function decrypt(key) {
  var a0 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var n0 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var n1 = []
  var a1= []
  var data = fs.readFileSync(file)
  var datos1 = JSON.parse(data)
  function json2array(json){
      var result = [];
      var keys = Object.keys(json);
      keys.forEach(function(key){
          result.push(json[key]);
      });
      return result;
  }
  var datos = json2array(datos1)
  var i = 0
  while(i<datos.length){
      if(datos[i].key == key){
          a1 = datos[i].letters
          n1 = datos[i].numbers
          i++
      }
      i++
  }
  var keyarr = key
  .split("");
  var newkey = []
  for(var i = 0; i < keyarr.length; i++) {
      var keya = keyarr[i].toUpperCase()
      var postion = a1.indexOf(keya)
      if(a0[postion] === undefined) {
          if(Number.isInteger(parseInt(keyarr[i]))){
              var postion1 = n1.indexOf(keyarr[i].toUpperCase())
              newkey.push(n0[postion1])
          } else {
          var postion1 = a1.indexOf(keyarr[i])
      if(postion1 === undefined) {
          newkey.push(keyarr[i].toUpperCase())
      } else {
          newkey.push(a0[postion1])    
      }
          }
      } else {
          newkey.push(a0[postion])

      }
   
  }
  return newkey.join('')
}
function genCustom(length, useLowerCase, useUpperCase, useNumbers, useSpecial) {
  if(length <= 0) {
    throw Error(`You can't generate a key with less than one character`);
  }
  if(useLowerCase == false && useUpperCase == false && useNumbers == false && useSpecial == false) {
    throw Error(`You can't generate a key wihtout putting the characters that I have to use`);
  }
  return keyGen(length, useLowerCase, useUpperCase, useNumbers, useSpecial, false)
}
function gen(strength) {
  switch (strength) {
  case 'decent_pw':
    return keyGen(10, true, true, true, false, false);
  case 'strong_pw':
    return keyGen(15, true, true, true, true, false);
  case 'ft_knox_pw':
    return keyGen(30, true, true, true, true, false);
  case 'ci_key':
    return keyGen(32, true, true, true, false, false);
  case '160_wpa':
    return keyGen(20, true, true, true, true, false);
  case '504_wpa':
    return keyGen(63, true, true, true, true, false);
  case '64_wep':
    return keyGen(5, false, false, false, false, true);
  case '128_wep':
    return keyGen(13, false, false, false, false, true);
  case '152_wep':
    return keyGen(16, false, false, false, false, true);
  case '256_wep':
    return keyGen(29, false, false, false, false, true);
  default:
    throw Error(`No such strength "${strength}"`);
  }
}
module.exports = {
    gen,
    genCustom,
  beta: {
    encrypt,
    decrypt,
  }
}