<?php 

class Home extends Controller {
	public function index()
	{
		$data['judul'] = 'Lion Parcel Lampung';
		$this->view('templates/header' , $data);
		$this->view('home/index');
		$this->view('templates/footer');
	}

	public function promo()
	{
		$data['judul'] = 'Promo';
		$this->view('templates/header', $data);
		$this->view('home/promo');
		$this->view('templates/footer');
	}

	public function cek()
	{
		$data['judul'] = 'Cek Resi';
		$this->view('templates/header', $data);
		$this->view('home/cek');
		$this->view('templates/footer');
	}

	public function hasil()
	{
		$data['judul'] = 'Cek Resi';
		$this->view('templates/header', $data);
		$this->view('home/hasil');
		$this->view('templates/footer');
	}
}
