<?php 

class About extends Controller {
	public function index(){

		$data['judul'] = 'About Us';
		$this->view('templates/header', $data);
		$this->view('about/index');
		$this->view('about/map');
		$this->view('templates/footer');
	}

	public function kontak(){

		$data['judul'] = 'Contact';
		$this->view('templates/header', $data);
		$this->view('about/kontak');
		$this->view('templates/footer');
	}

	public function map(){

		$data['judul'] = 'Map';
		$this->view('templates/header', $data);
		$this->view('templates/footer');
	}
}