function msg(msg,pro,colour) {
    document.getElementById(pro).innerHTML=msg;
    document.getElementById(pro).style.color=colour;
}

var r1=/^C\d{3}$/;
var r2=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var r3=/^[1-9]\d*$/;
var r4=/^\d{3}-\d{7}$/;
var r5=/^[1-9]\d*$/;

var cid=$("#inputCID");
var inpname=$("#inputName");
var salary=$("#inputSalary");
var tel=$("#inputTel");
var age=$("#inputAge");
var myform=$("#myForm");

cid.on('keyup',function (e) {
    var txt=cid.val();
    var l=txt.length;
    var res=r1.test(txt);
    if (l<5) {
        if (l == 4) {
            if (res) {
                if (e.which == 13)
                    inpname.focus();
                msg("(required)", "cidv", "green");

            }else {
                msg("Invalid Customer ID format ex: C-001 (required)", "cidv", "red");
                cid.val("");
            }
        }
    }else {
        alert("only 4 chars allowed");
        cid.val("");
    }
});

inpname.on('keypress',function (e) {
    var txt=inpname.val();
    var res=r2.test(txt);
    if (e.keyCode == 13 && txt!=null) {
        if (res) {
            salary.focus();
            msg("(required)", "cnamev", "green");

        }else {
            msg("Invalid Customer Name format ex: only a-z max15", "cnamev", "red");
            inpname.val("");
        }
    }
});
salary.on('keypress',function (e) {
    var txt=salary.val();
    var res=r3.test(txt);
    if (e.keyCode == 13 && txt!=null) {
        if (res) {
            tel.focus();
            msg("(required)", "salaryv", "green");
        }else {
            msg("Invalid Customer Salary format", "salaryv", "red");
            salary.val("");
        }
    }
});
tel.on('keypress',function (e) {
    var txt=tel.val();
    var res=r4.test(txt);
    if (e.keyCode == 13 && txt!=null) {
        if (res) {
            age.focus();
            msg("(required)", "telv", "green");
        }else {
            msg("Invalid Customer Telephone Number  format ex:011-2283516", "telv", "red");
            tel.val("");
        }
    }
});
age.on('keypress',function (e) {
    var txt=age.val();
    var res=r5.test(txt);
    if (e.keyCode == 13 && txt!=null) {
        if (res) {
            $("#submmit").click();
            msg("(required)", "agev", "green");

        }else {
            msg("Invalid Customer Age format", "agev", "red");
            age.val("");
        }
    }
});

$(myform).keypress(function (e) {
    if (e.which == 13)
        return false;
});


function Validation() {
    var rslt1=r1.test(cid.val()),
        rslt2=r2.test(inpname.val()),
        rslt3=r3.test(salary.val()),
        rslt4=r4.test(tel.val()),
        rslt5=r5.test(age.val());
    var xArray=[
        cid.val(),
        inpname.val(),
        salary.val(),
        tel.val(),
        age.val()
    ];
    var bool=true;
    for (var i = 0; i < xArray.length; i++) {
        if (xArray[i] == "") {
            bool = false;
            alert("all feilds are required");
            return false;
        }
    }
    if (rslt1 && rslt2 && rslt3 && rslt4 && rslt5 && bool){
        return true;
    }else {
        alert("invalid Inputs");
        cid.val("");
        inpname.val("");
        salary.val("");
        tel.val("");
        age.val("");
        return false;
    }
}