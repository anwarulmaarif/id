<br>
<div class="container shadow rounded mb-4 p-4" id="forminput">
<form action="cek" method="post" target="">
	<div class="form-goup">
		<label for="noSTT"><h2>Masukan nomor resi anda</h2></label>
		<input type="" name="noSTT" class="form-control" id="noSTT" placeholder="Input Nomor Resi / STT" style="width: 40%;">
		<button type="submit" class="btn btn-danger mt-2">Submit</button>
	</div>
</form>
<br>
</div>

<div class="container shadow rounded mb-4 p-4" name="hasil" id="hasil">
	<h2>Status pengiriman anda sekarang</h2>
<?php 

 

$grab =file_get_contents('http://lionparcel.com/track?q=' . $_POST["noSTT"]) ;  
  
$start = '<section class="accordions font-regular">';  
$end   = '<!-- END: LEFT -->';  
  
$startPosisition = strpos($grab, $start);  
$endPosisition   = strpos($grab, $end);   
  
$longText = $endPosisition - $startPosisition;  
  
$result = substr($grab, $startPosisition, $longText);  
   
$result = $result;  
  
echo $result;  

?>

</div>



