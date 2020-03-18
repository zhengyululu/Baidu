var username=document.getElementById('username');
var phonenum=document.getElementById('phonenum');
var password=document.getElementById('password');
var checknum=document.getElementById('checknum');
var usernamec=document.getElementById('usernamec');
var phonec=document.getElementById('phonec');
var passwordc=document.getElementById('passwordc');
var checknumc=document.getElementById('checknumc')
var register=document.getElementById('register')
// 字段校验
username.onblur=function(){
    checkname(username,usernamec);
}
password.onblur=function(){
    checkpwd(password,passwordc);
}
phonenum.onblur=function(){
    checkspace(phonenum,phonec)
    checkphone(phonenum,phonec);
}
checknum.onblur=function(){ 
   checkspace(checknum,checknumc);
}
//表单验证
// 用户名验证
function checkname(field,msg){
    var regMobile=/^[A-Za-z0-9_-]*[A-Za-z_-][A-Za-z0-9_-]*$/;
    var regMobile1=/^(?!\d+$)[a-zA-Z0-9-_]+$/;
    var name=field.value;
    if(regMobile.test(name)&&regMobile1.test(name)){
        msg.innerHTML="";
        return true;
    }
    else{
        msg.innerHTML="<p style='font-size:5px;color: red;margin-left:70px;'>"+"用户名仅支持中英文、数字和下划线，且不能为纯数字"+"</p>";
        return false;
    } 
}
// 密码验证
function checkpwd(field,msg){
    if(field.value.length<=6){
        msg.innerHTML="<p style='font-size:5px;color: red;margin-left:70px;'>"+"密码必须大于6位"+"</p>";
        return false;
    }
    else{
        msg.innerHTML="";
        return true;
    }
}
// 手机号验证
function checkphone(field,msg){
    var regMobile=/^1[3,5,8]\d{9}$/;
    var tel=field.value;
    if(regMobile.test(tel)){
        msg.innerHTML="";
        return true;
    }else{
        msg.innerHTML="<p style='font-size:5px;color: red;margin-left:70px;'>"+"手机号不合法"+"</p>";
        return false;
    }    
}
//非空验证
function checkspace(field,msg){
    if(field.value==""){
        msg.innerHTML="<p style='font-size:5px;color: red;margin-left:70px;'>"+"不能为空"+"</p>";
        console.log('namec')
        return false;
    }
    else{
        msg.innerHTML="";
        return true;
    }
}
//注册按钮
register.onclick=function(){
    if( checkname(username,usernamec) &&
    checkspace(username,usernamec)&&
    checkpwd(password,passwordc)&&
    checkspace(password,passwordc)&&  
    checkphone(phonenum,phonec)&&
    checkspace(phonenum,phonec)&&
    checkspace(checknum,checknumc)){
        alert('注册成功')
    }
    else{
        checkname(username,usernamec);
        checkpwd(password,passwordc);
        checkphone(phonenum,phonec);
        alert('表单填写不正确，请检查')
    }
}


// 发送验证码
var getcheck = document.getElementById ('getcheck');
getcheck.onclick =function(){
    var time=30;
    if (time>0){
        this.disabled = "true";
        this.style.backgroundColor = 'rgb(196, 197, 197)';
        this.value = "重新发送 (" + time-- + ")";
        var interval = setInterval (function (){
            if (time == 0){
                clearInterval (interval);
                time = 30;
                getcheck.removeAttribute ('disabled');
                getcheck.value = "获取验证码";
                getcheck.style.backgroundColor = 'white';
                return false;
            }
            getcheck.value = "重新发送 (" + time-- + ")";
        }, 1000);
    }
}
                    