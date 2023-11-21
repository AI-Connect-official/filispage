"use strict"

//test

const http = require("http")

const app = http.createServer((req, res) => {

        if (req.url === "/") {
            res.writeHead(200, {
                "Content-Type": "text/html"
            })
            res.write("<strong>Startseite</strong>")
            res.end()
            return
        }else if (req.url === "/home"){
            res.writeHead(200, {
            "Content-Type": "text/html"
            })
            res.write("<strong>Home</strong>")
            res.end()
            return
        }else if (req.url === "/fili"){
            res.writeHead(200, {
                "Content-Type": "text/html"
            })
                
            //Head Bereich
            res.write('<html>')
            res.write('<head><meta charset="UTF-8"></head>')
            res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">')
            res.write('<title>Fili Page</title></head>')

            //Body
            res.write('<body bgcolor="#000">')
            res.write('<h1 style="text-align: center; color: #fff; ">Fili</h1>')
            res.write('<h3 id="time" style="color: #fff"> </h3>')
            res.write('<h3 id="dmy" style="color: #fff"> </h3>')

            res.write('<script>')
            res.write('const time = document.getElementById("time");')
            res.write('const dmy = document.getElementById("dmy");')
            res.write('const jetzt = new Date();')
            res.write('const day = jetzt.getDate(); const month = jetzt.getMonth() + 1; const year = jetzt.getFullYear();')
            res.write('const formattedDMY = day < 10 ? `0${day}` : day;')
            res.write('dmy.innerHTML = "Wir haben den " + formattedDMY + "." + month + "." + year;')
            res.write('const hours = jetzt.getHours();')
            res.write('const minutes = jetzt.getMinutes();')
            res.write('const formatierteMinuten = minutes < 10 ? `0${minutes}` : minutes;')
            res.write('time.innerHTML = "Es ist: " + hours + ":" + formatierteMinuten + " Uhr.";')
            res.write('</script>')
            res.write('</body>')
            res.write('</html>')



                res.end()   
                }else{
                    res.writeHead(404, {
                        "Content-Type": "text/plain"
                    })
                    res.write("404 not found")
                    res.end()
                    return
            }


        })

app.listen(9999)