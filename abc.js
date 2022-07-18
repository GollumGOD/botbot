const fs = require("fs");
const login = require("fca-unofficial");
const ps = require("prompt-sync");
const prompt = ps();

console.log("credit : Nummon")
console.log("fb : phuwanai chuchid")
console.log("yt : Nummon Hacker")
console.log("--------------------------------------")
name = prompt("ป้อนคำสั่ง: ")
nom = prompt("ป้อนคำตอบกลับ: ")
consloe.log("เพิ่มคำสั่งสำเร็จ")

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

     api.setOptions({listenEvents: true});

    var listenEmitter = api.listen((err, event) => {
        if(err) return console.error(err);

        switch (event.type) {
            case "message":
                if(event.body === ""+name+"") {
                    api.sendMessage(""+nom+"", event.threadID);
                }
                api.markAsRead(event.threadID, (err) => {
                    if(err) console.log(err);
                });
        }
    });
});