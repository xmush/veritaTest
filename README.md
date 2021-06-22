# Verita TEST INTERVIEW 

## Introduction

> Manipulating geojson response and generate it like format are given

## Code Samples

**Because i'm not sure what really like the output, so I create 3 endpoint to generate the output**
> http://127.0.0.1:3000/out1<br>
example output : 
```javascript
{
    "geometry_locs" : [
        "-6.12690437188397, 106.968553778361",
        "-6.1283771423847, 106.968496344573",
        "-6.12836964323575, 106.968657356808",
        "-6.12836271793638, 106.968806045954",
        "..."
    ]
}
```









<br>
> http://127.0.0.1:3000/out2<br>
example output : 
```javascript
{
    "geometry_locs_#1": [...],
    "geometry_locs_#2": [...],
    "geometry_locs_#3": [
        "-6.14674780374254, 106.953971385031",
        "-6.1467098820228, 106.953663065259",
        "-6.14666618614992, 106.953667993417",
        "-6.14644164893347, 106.953693316026",
        "-6.14609163476649, 106.953732791593"
    ],
    ...
}
```
<br>
> http://127.0.0.1:3000/out3<br>
example output : 
```javascript
{
    "geometry_locs": [
        [...],
        [
            "-6.13956778585619, 106.967855724503",
            "-6.13974035532323, 106.967091932831",
            "-6.1400734806108, 106.967234700282",
            "-6.14012106930454, 106.966925370804",
            "-6.1405017835508, 106.966901576229"
        ],
        [...]
    ]
}
```
<br>

## Installation

> 1. git pull https://github.com/xmush/veritaTest.git
> 2. cd veritaTest
> 3. npm install
> 4. npm start
> 5. check connection at http://127.0.0.1:3000/
> 6. visit endpoint bellow to see the output
<br>
http://127.0.0.1:3000/out1<br>
http://127.0.0.1:3000/out2<br>
http://127.0.0.1:3000/out3<br>