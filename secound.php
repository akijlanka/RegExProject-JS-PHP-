<?php
/**
 * Created by IntelliJ IDEA.
 * User: Aki
 * Date: 6/14/2019
 * Time: 10:39 AM
 */?>

<?php

//$fname=$_POST['cid'];
//$lname=$_POST['lname'];


$customer=new CustomerDTO($_POST['cid'],$_POST['name']);

echo $fname;
echo "<br>";
//echo $lname;


class CustomerDTO{

    private $cid;
    private $name;

    /**
     * CustomerDTO constructor.
     * @param $cid
     * @param $name
     */
    public function __construct($cid, $name)
    {
        $this->cid = $cid;
        $this->name = $name;
    }


    /**
     * @return mixed
     */
    public function getCid()
    {
        return $this->cid;
    }

    /**
     * @param mixed $cid
     */
    public function setCid($cid)
    {
        $this->cid = $cid;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }


}



?>
