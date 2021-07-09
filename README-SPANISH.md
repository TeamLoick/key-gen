<a href="https://github.com/TeamLoick/key-gen/blob/main/README.md">> English Docs?</a>
<p align="center">
	<img align="center" src="https://media.discordapp.net/attachments/847157141122056263/850572010508648468/RenderedImage.png">
	<br>
	<a href="https://www.npmjs.com/package/@teamloick/key.gen">Ir a NPM</a>
</p>

Un paquete de node js que le da la oportunidad de generar claves / ids infinitos.
=======

## Instalación 💻

   ```
   npm i @teamloick/key.gen
   ```

## Uso ⌨️
   ### Claves predeterminadas
   ```
    const { gen } = require('@teamloick/key.gen');
    
    var decent = gen('decent_pw')
    //FkPAgBdpQ6

    var strong = gen('strong_pw')
    //jW-$gAkF0&p$&f(

    var ftKnox = gen('ft_knox_pw')
    //&pO5Y"^?dl)XPY/dU:m&/ji_(=2$/t

    var ciKey = gen('ci_key')
    //J6yjbP1DMEq4dvxVCHDTLUXtEuPJFYpY

    var wpa160 = gen('160_wpa')
    //6lU(bc"<N583h8WK^6^n

    var wpa504 = gen('504_wpa')
    //7O#sli$-~>>=fL|F"g+UmH(0OJVX{RjTJhtpi'XKIT(Q.m&+KOYUUl4F{4:+5A?
    
    var wep64 = gen('64_wep')
    //E8E42

    var wep128 = gen('128_wep')
    //A194AAC9D23EF
    
    var wep152 = gen('152_wep')
    //4BAD5F23EBA633A8
    
    var wep256 = gen('256_wep')
    //5272D73892D83892AB833F2E9211E
   ```
   ### Claves Personalizadadas
   ```
      const { genCustom } = require('@teamloick/key.gen');
      var custom = genCustom(numberOfCharacters, useLowerCase, useUpperCase, useNumbers, useSpecial)
   ```
   **numberOfCharacters:** Aquí tienes que poner un int con el número de caracteres que quieras.

   **useLowerCase:** Aquí tienes un booleano si quieres minúsculas, usa verdadero si no usa falso.

   **useUpperCase:** Aquí tienes un booleano si quieres mayúsculas, usa verdadero si no usa falso.

   **useNumbers:** Aquí tienes un booleano si quieres números usa verdadero si no usa falso.
   
   **useSpecial:** Aquí tienes un booleano si quieres caracteres especiales usa verdadero si no usa falso.
   
   ### Encriptación
   ```
   const KeyGen = require('@teamloick/key.gen')

   var encrypt = KeyGen.beta.encrypt('clave')
   var decrypt = KeyGen.beta.decrypt(encrypt)
   ```
## Links

* [Discord](https://discord.gg/ux9UKq6Wvg)

* [Github](https://github.com/TeamLoick/key-gen)

* [NPM](https://www.npmjs.com/package/@teamloick/key.gen)