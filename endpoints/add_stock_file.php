<?php 

include("../config.php");

use Box\Spout\Reader\ReaderFactory;
use Box\Spout\Common\Type;

// Include Spout library 
require_once '../endpoints/excel_api/Spout/Autoloader/autoload.php';

// check file name is not empty
if (!empty($_FILES['file']['name'])) {
     
    // Get File extension eg. 'xlsx' to check file is excel sheet
    $pathinfo = pathinfo($_FILES["file"]["name"]);
    
    // check file has extension xlsx, xls and also check 
    // file is not empty
   if (($pathinfo['extension'] == 'xlsx' || $pathinfo['extension'] == 'xls') 
           && $_FILES['file']['size'] > 0 ) {
        
        // Temporary file name
        $inputFileName = $_FILES['file']['tmp_name']; 
   
        // Read excel file by using ReadFactory object.
        $reader = ReaderFactory::create(Type::XLSX);

        // Open file
        $reader->open($inputFileName);
        $count = 1;
        $rows = array(); 
        
        // Number of sheet in excel file
        foreach ($reader->getSheetIterator() as $sheet) {
            
            // Number of Rows in Excel sheet
            foreach ($sheet->getRowIterator() as $row) {

                // It reads data after header. In the my excel sheet, 
                // header is in the first row. 
                if ($count > 1) { 

                    // Data of excel sheet
                    $data['name'] = $row[0];
                    $data['quantity'] = $row[1];
                    
                    // Push all data into array to be insert as 
                    // batch into MySql database.  
                    array_push($rows, $data);
                    
                //    $query = "INSERT INTO stock VALUES (".$data['name'].",".$data['quantity']."";
                    
                //    mysqli_query($conn,$query);
                    
                }
                $count++;
            }

            // Print All data
            //print_r($rows);

            // Now, here we can insert all data into database table.
            foreach ($rows as &$insertdata) {
            
            //$sql = "INSERT INTO excel_data(name, email,phone,city) VALUES ('".$insertdata['name']."','".$insertdata['email']."',".$insertdata['phone'].",'".$insertdata['city']."')";
            //$query = "INSERT INTO stock VALUES (".$data['name'].",".$data['quantity']."";
            
            $query = "UPDATE stock SET amount = amount + ".$data['quantity']." WHERE  name = '".$data['name']."'";
                
            $result = mysqli_query($conn,$query);
            
            if(!$result)
            {
            	die.error(mysqli_error());
            }
            
            }
	
        }

       echo "Added successfully";
        // Close excel file
        $reader->close();

    } else {

        echo "Please Select Valid Excel File";
    }

} else {

    echo "Please Select Excel File";
    
}

?>

