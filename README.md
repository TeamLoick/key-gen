<a href="https://github.com/TeamLoick/key-gen/blob/main/README-SPANISH.md">> Spanish Docs?</a>
<p align="center">
	<img align="center" src="https://media.discordapp.net/attachments/847157141122056263/850572010508648468/RenderedImage.png">
	<br>
	<a href="https://www.npmjs.com/package/@teamloick/key.gen">Go to NPM</a>
</p>

A node js package that give you the oportunity to generate infinite keys/ids.
=======

## Installation 💻

   ```
   npm i @teamloick/key.gen
   ```

## Usage ⌨️
   ### Default keys
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
   ### Custom
   ```
      const { genCustom } = require('@teamloick/key.gen');
      var custom = genCustom(numberOfCharacters, useLowerCase, useUpperCase, useNumbers, useSpecial)
   ```
   **numberOfCharacters:** Here you have to put an int with the number of characters that you want.

   **useLowerCase:** Here you have to an Boolean if you want lower case use true if not use false.

   **useUpperCase:** Here you have to an Boolean if you want upper case use true if not use false.

   **useNumbers:** Here you have to an Boolean if you want numbers use true if not use false.
   
   **useSpecial:** Here you have to an Boolean if you want special characters use true if not use false.

## Links

* [Discord](https://discord.gg/ux9UKq6Wvg)

* [Github](https://github.com/TeamLoick/key-gen)

* [NPM](https://www.npmjs.com/package/@teamloick/key.gen)