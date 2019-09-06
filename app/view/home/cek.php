<br>
<div class="container shadow rounded mb-4 p-4">
<form>
	<div class="form-goup">
		<label for="noSTT"><h2>Masukan nomor resi anda</h2></label>
		<input type="" name="" class="form-control" id="noSTT" placeholder="Input Nomor Resi / STT">
		<button type="submit" class="btn btn-danger mt-2">Submit</button>
	</div>
</form>
<br>
</div>


<?php
// URL TARGET
$url = 'http://lionparcel.com/track?q=11-19-4135203';
//end
// get / mengambil content berdasarkan url yang akan di curi datanya
$content = file_get_contents($url);
//
// STEP 1 mengambil syntax pembuka
$first_step = explode( '<div class="columns sp-tracking-result">' , $content );
//
// STEP 2 mengambil syntax penutup
$second_step = explode("<!-- END: LEFT -->" , $first_step[1] );
//
// Replace syntax </tbody> dengan </tbody></table>
$text1 = $second_step[0];
//Tampilkan 

?>

<div class="container m-4 shadow">
	<div class="row p-4">
	<?php echo $text1; ?>
	</div>
</div>
