const u1 = 'fe01ce2a7fbac8fafaed7c982a04e229'
const p1 = 'fe01ce2a7fbac8fafaed7c982a04e229'
const us = {
    '0' : 'fe01ce2a7fbac8fafaed7c982a04e229'
    }
// [u1,]
const ps = {
    '0' : 'fe01ce2a7fbac8fafaed7c982a04e229'
    }
// [p1,]
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
        $("#tishi").click(); 
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
