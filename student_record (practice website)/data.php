<?php

    $server = 'localhost';
    $user = 'root';
    $pass  = '';
    $db = 'record';
        
    $con = mysqli_connect($server,$user,$pass,$db);
    
    if($_REQUEST['add_rec']!='')
    {
        if($_REQUEST['add_rec']=='del_rec')
        {
            $del_id = $_REQUEST['del_id'];
            $del_sql = "delete from student_record where id ='$del_id'";
            $run = mysqli_query($con,$del_sql);      
        }
     else if($_REQUEST['add_rec'] == 'new_rec')
        {
            $student_name = $_REQUEST['sname'];
            $student_subject = $_REQUEST['sub'];
            $student_marks = $_REQUEST['marks'];           
            if($student_name == '' || $student_subject =='' || $student_marks=='')
            {
                echo "Enter All Details";
                }
             else
             {
                $insert = "insert into student_record(sname,sub,marks) values('$student_name','$student_subject','$student_marks')";

                mysqli_query($con,$insert);
            }
        }
    }
        
    $sql = "select * from student_record";
    $result  = mysqli_query($con,$sql);
    while($final = mysqli_fetch_array($result))
    {?>
<tr>
    <td><?php echo $final['id']; ?></td>
    <td><?php echo $final['sname']; ?></td>
    <td><?php echo $final['sub']; ?></td>
    <td><?php echo $final['marks']; ?></td>
    <td>
        <div class="row">
            <div>
                <a href="#"><button class="btn btn-primary" onclick="ajax('del_rec', <?php echo $final['id'];?>)">Delete</button></a>
            </div>
        </div>

    </td>
</tr>

<?php
    }
?>
