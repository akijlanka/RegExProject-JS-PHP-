<?php
/**
 * Created by IntelliJ IDEA.
 * User: Aki
 * Date: 6/14/2019
 * Time: 7:16 AM
 */
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RegEx-Project(JS)</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>

<div class="container-fluid">

    <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
            <h3 style="margin: 0px">Customer Form</h3>
            <form action="" style="padding-top: 20px" id="myForm" onsubmit="return Validation();">
                <div class="form-group">
                    <label for="exampleInputEmail1">CID</label>
                    <input type="text" class="form-control" id="inputCID" placeholder="C000">
                    <small id="cidv"></small>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Customer Name</label>
                    <input type="text" class="form-control" id="inputName" placeholder="xxxxxxxx">
                    <small id="cnamev"></small>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Salary</label>
                    <input type="number" class="form-control" id="inputSalary" placeholder="000000.00">
                    <small id="salaryv"></small>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Telephone</label>
                    <input type="text" class="form-control" id="inputTel" placeholder="xxx-xxxxxxx">
                    <small id="telv"></small>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input type="number" class="form-control" id="inputAge" placeholder="00">
                    <small id="agev"></small>
                </div>


                <button type="submit" id="submmit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div class="col-2"></div>
    </div>


</div>

<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/myjs.js"></script>
</body>
</html>
