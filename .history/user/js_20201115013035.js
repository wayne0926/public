let u1 = 'cd2239dfc5da7bf418f43205229f2bd0'// AOLIGEIGAN
let p1 = '013c51c369d7e3bb7442e5c3ef67c29f'// JJFBT0000
let u2 = 'acef29994e92b4c9e92e98b613651b99'
let p2 = '90195ef78b13fa12f3310c3f48354b56'
let u3 = 'fe01ce2a7fbac8fafaed7c982a04e229'// demo
let p3 = 'fe01ce2a7fbac8fafaed7c982a04e229'// demo
var us = [u1, u2, u3]
var ps = [p1, p2, u3]
// function myFunction() {
//     var uu = document.getElementById("username").value;
//     var pp = document.getElementById("password").value;
//     var su = us.indexOf(md5(uu))
//     if (su != '-1') {
//         var sp = ps[su]
//     }
//     if (su != '-1', sp == md5(pp)) {
//         Cookies.set('username', BASE64.encode(uu), { expires: 3 })
//         Cookies.set('password', BASE64.encode(pp), { expires: 3 })
//         // console.log(Cookies.get())
//         // alert("登录成功");
//         // window.location.href = "/user";
//     }
//     else {
//         if (Cookies.get('username') != null) {
//             Cookies.remove('username')
//             if (Cookies.get('password') != null) {
//                 Cookies.remove('password')
//             }
//         }
//         alert("用户名或密码错误");
//     }
// }
function login() {
    if (Cookies.get('username') != null) {
        var gu = BASE64.decode(Cookies.get('username'))
        if (Cookies.get('password') != null) {
            let gp = BASE64.decode(Cookies.get('password'))
            let gur = us.indexOf(md5(gu))
            if (gur != '-1') {
                var gpr = ps[gur]
            }
            if (gur != '-1', gpr == md5(gp)) {
                document.getElementById('welcome').innerHTML = gu
            }
            else {
                if (Cookies.get('username') != null) {
                    Cookies.remove('username')
                    if (Cookies.get('password') != null) {
                        Cookies.remove('password')
                    }
                }
            }
        }
    }
    else{
        window.location.href = "../";
    }
    setTimeout(login, 20000);
}
function logout() {
    Cookies.remove('username')
    Cookies.remove('password')
    window.location.href = '../'
}
function start() {
    if (Cookies.get('username') != null) {
        var gu = BASE64.decode(Cookies.get('username'))
        if (Cookies.get('password') != null) {
            let gp = BASE64.decode(Cookies.get('password'))
            let gur = us.indexOf(md5(gu))
            if (gur != '-1') {
                var gpr = ps[gur]
            }
            if (gur != '-1', gpr == md5(gp)) {
                document.getElementById('welcome').innerHTML = gu
            }
            else {
                if (Cookies.get('username') != null) {
                    Cookies.remove('username')
                    if (Cookies.get('password') != null) {
                        Cookies.remove('password')
                    }
                }
            }
        }
    }
    else{
        window.location.href = "../";
    }
}