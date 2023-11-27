<?php   
          
    include('connection.php');  
    if(isset($_POST['siddhant'])){
        $Email = $_POST['email'];  
        $password = $_POST['password'];  
      
        
        $Email = stripcslashes($Email);  
        $password = stripcslashes($password);  
        $Email = mysqli_real_escape_string($con, $Email);  
        $password = mysqli_real_escape_string($con, $password);  
      
        $sql = "SELECT * from connection where Email_ID = '$Email' and password = '$password'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            echo "<h1><center> Login successful </center></h1>";  
        }  
        else{  
            echo "<h1> Login failed. Invalid username or password.</h1>";  
        }  
    }   
?>