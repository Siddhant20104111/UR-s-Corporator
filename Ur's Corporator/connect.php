<?php



    $servername = "localhost";
    $username = "root";
    $passwd = "";
    $database_name = "connectivity";

    $conn = new mysqli($servername,$username,$passwd,$database_name);
if(isset($_POST['kalpesh'])){
    $full_name = $_POST['fullname'];
    $dateofbirth = $_POST['dob'];
    $email = $_POST['emal'];
    $mobilenumber = $_POST['mobno'];
    $gender = $_POST['gen'];
    $password = $_POST['pwd'];
    $address = $_POST['add'];
    $street = $_POST['stret'];
    $pincode = $_POST['pinco'];
    $state = $_POST['stat'];
    $district = $_POST['dist'];
    $wardnumber = $_POST['wardno'];

    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno().')'.mysqli_connect_error());
    }else{
        $SELECT = "SELECT Email_ID From connection Where Email_ID = ? Limit 1";
        $INSERT = "INSERT Into connection (FullName,Birth_Date,Email_ID,mobile_no,gender,password,Address,Street,pincode,State,District,Ward_No)
        values(?,?,?,?,?,?,?,?,?,?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum==0){
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sssisssssssi",$full_name,$dateofbirth,$email,$mobilenumber,$gender,$password,$address,$street,$pincode,$state,$district,$wardnumber);
            $stmt->execute();
            echo "New record inserted successfully";
        }
        else{
            echo "Someone already register using this email";
        }
        $stmt->close();
        $conn->close();
    }
}
   


?>