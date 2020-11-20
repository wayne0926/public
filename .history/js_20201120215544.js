let u1 = 'cd2239dfc5da7bf418f43205229f2bd0'// AOLIGEIGAN
let u2 = 'fe01ce2a7fbac8fafaed7c982a04e229'
let p1 = '013c51c369d7e3bb7442e5c3ef67c29f'// JJFBT0000
let p2 = 'fe01ce2a7fbac8fafaed7c982a04e229'
var us = [u1,u2]
var ps = [p1,p2]
function myFunction() {
    // var uu = document.getElementById("username").value;
    // var pp = document.getElementById("password").value;
    // var su = us.indexOf(md5(document.getElementById("username").value))
    if (us.indexOf(md5(document.getElementById("username").value)) != '-1') {
        // var sp = ps[us.indexOf(md5(document.getElementById("username").value))]
    }
    if (us.indexOf(md5(document.getElementById("username").value)) != '-1', ps[us.indexOf(md5(document.getElementById("username").value))] == md5(document.getElementById("password").value)) {
        Cookies.set('username', BASE64.encode(document.getElementById("username").value), { expires: 3 })
        Cookies.set('password', BASE64.encode(document.getElementById("password").value), { expires: 3 })
        // console.log(Cookies.get())
        // alert("登录成功");
        // window.location.href = "/user";
    }
    else {
        if (Cookies.get('username') != null) {
            Cookies.remove('username')
            if (Cookies.get('password') != null) {
                Cookies.remove('password')
            }
        }
        alert("用户名或密码错误");
    }
}
function login() {
    if (Cookies.get('username') != null) {
        // var gu = BASE64.decode(Cookies.get('username'))
        if (Cookies.get('password') != null) {
            // let gp = BASE64.decode(Cookies.get('password'))
            // let gur = us.indexOf(md5(BASE64.decode(Cookies.get('username'))))
            if (us.indexOf(md5(BASE64.decode(Cookies.get('username')))) != '-1') {
                // var gpr = ps[us.indexOf(md5(BASE64.decode(Cookies.get('username'))))]
            }
            if (us.indexOf(md5(BASE64.decode(Cookies.get('username')))) != '-1', ps[us.indexOf(md5(BASE64.decode(Cookies.get('username'))))] == md5(BASE64.decode(Cookies.get('password')))) {
                console.log('登录成功')
                window.location.href = "/user"
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

    setTimeout(login, 3000);
}
