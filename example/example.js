const {gen, genCustom} = require('../index.js')

    var decent = gen('decent_pw')
    console.log(decent)
    //FkPAgBdpQ6

    var strong = gen('strong_pw')
    console.log(strong)
    //jW-$gAkF0&p$&f(

    var ftKnox = gen('ft_knox_pw')
    console.log(ftKnox)
    //&pO5Y"^?dl)XPY/dU:m&/ji_(=2$/t

    var ciKey = gen('ci_key')
    console.log(ciKey)
    //J6yjbP1DMEq4dvxVCHDTLUXtEuPJFYpY

    var wpa160 =  gen('160_wpa')
    console.log(wpa160)
    //6lU(bc"<N583h8WK^6^n

    var wpa504 = gen('504_wpa')
    console.log(wpa504)
    //7O#sli$-~>>=fL|F"g+UmH(0OJVX{RjTJhtpi'XKIT(Q.m&+KOYUUl4F{4:+5A?
    
    var wep64 =  gen('64_wep')
    console.log(wep64)
    //E8E42

    var wep128 = gen('128_wep')
    console.log(wep128)
    //A194AAC9D23EF
    
    var wep152 = gen('152_wep')
    console.log(wep152)
    //4BAD5F23EBA633A8
    
    var wep256 = gen('256_wep')
    console.log(wep256)
    //5272D73892D83892AB833F2E9211E
    
    var custom = genCustom(10, true, true, false, false)
    console.log(custom)
    //jOqkYqfpdt