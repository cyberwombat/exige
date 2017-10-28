# Freshload

## Description
A simple module to clear require cache and reload for testing. 

## Why
There are others out there but none were capable of clearing `node-config` properly. 

## Usage

     // index.js
     const config = require('config')
     ...

    // test.js
    const freshload = require('freshload')

    test((t) => {
        const app = freshload(../index.js)
        ...
    })


## Thanks
This code was inspired by this StackOverflow [answer](https://stackoverflow.com/a/14801711/856498).
