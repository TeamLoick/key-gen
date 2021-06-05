<p align="center">
	<img align="center" src="https://media.discordapp.net/attachments/847157141122056263/850572010508648468/RenderedImage.png">
	<br>
	<a href="https://lockteam.es">Our Website</a>
</p>

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FGraviton-Code-Editor%2FGraviton-App%2Fbadge%3Fref%3Dmaster&style=flat)](https://actions-badge.atrox.dev/Graviton-Code-Editor/Graviton-App/goto?ref=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/LICENSE.md)
![GitHub All Releases](https://img.shields.io/github/downloads/Graviton-Code-Editor/Graviton-App/total.svg)
![Commits](https://img.shields.io/github/commit-activity/m/Graviton-Code-Editor/Graviton-App)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Graviton-Code-Editor/Graviton-App.svg)
[![GitHub contributors](https://img.shields.io/github/contributors/Graviton-Code-Editor/Graviton-App.svg)](https://GitHub.com/Graviton-Code-Editor/Graviton-App/graphs/contributors/)
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/Graviton-Code-Editor/Graviton-App/)
[![Discord Server](https://discordapp.com/api/guilds/536130219057086514/widget.png)](https://discord.gg/gg6CTYA)

A node js package that give you the oportunity to generate infinite keys/ids.

## Installation 
    npm i key.gen

## Usage


    const { gen } = require('key.gen');
    
    var decent = await gen('decent_pw')
    //FkPAgBdpQ6

    var strong = await gen('strong_pw')
    //jW-$gAkF0&p$&f(

    var ftKnox = await gen('ft_knox_pw')
    //&pO5Y"^?dl)XPY/dU:m&/ji_(=2$/t

    var ciKey = await gen('ci_key')
    //J6yjbP1DMEq4dvxVCHDTLUXtEuPJFYpY

    var wpa160 =  gen('160_wpa')
    //6lU(bc"<N583h8WK^6^n

    var wpa504 = gen('504_wpa')
    //7O#sli$-~>>=fL|F"g+UmH(0OJVX{RjTJhtpi'XKIT(Q.m&+KOYUUl4F{4:+5A?
    
    var wep64 =  gen('64_wep')
    //E8E42

    var wep128 = gen('128_wep')
    //A194AAC9D23EF
    
    var wep152 = gen('152_wep')
    //4BAD5F23EBA633A8
    
    var wep256 = gen('256_wep')
    //5272D73892D83892AB833F2E9211E
