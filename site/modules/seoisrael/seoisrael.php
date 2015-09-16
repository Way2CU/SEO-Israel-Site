<?php

/**
 * Seo Israel CRM Sumbmission Module
 *
 * Copyright © 2015 Way2CU. All Rights Reserved.
 * Author: Mladen Mijatov, Eyal Gershon
 */
use Core\Module;
use Core\Events;


class seoisrael extends Module {
	private static $_instance;

	/**
	 * Constructor
	 */
	protected function __construct() {
		parent::__construct(__FILE__);

		Events::connect('contact_form', 'email-sent', 'handleEmailSent', $this);
	}

	/**
	 * Public function that creates a single instance
	 */
	public static function getInstance() {
		if (!isset(self::$_instance))
			self::$_instance = new self();

		return self::$_instance;
	}

	/**
	 * Transfers control to module functions
	 *
	 * @param array $params
	 * @param array $children
	 */
	public function transferControl($params = array(), $children = array()) {
	}

	/**
	 * Event triggered upon module initialization
	 */
	public function onInit() {
	}

	/**
	 * Event triggered upon module deinitialization
	 */
	public function onDisable() {
	}

	/**
	 * Handle `email-sent` event from contact form.
	 *
	 * @param string $mailer
	 * @param string $recipient
	 * @param string $subject
	 * @param array $data
	 */
	public function handleEmailSent($mailer, $recipient, $subject, $data) {
		$base_url = 'http://seoisrael.co.il/%D7%93%D7%A3_%D7%AA%D7%95%D7%93%D7%94/';
		$url = $data['url'];
		$site_url = str_replace('http://', '', $url);
		$params = array(
				'type'		=> 'ppc',
				'external'	=> 'true',
				'islead'	=> 'true',
				'posted'	=> 'true',
				'lead_id'	=>	'4',
				'question_1'	=> $data['name'],
				'question_2'	=> $data['email'],
				'question_3'	=> $data['phone'],
				'question_4'	=> $site_url,
				'bot'		=> 'ooeess'
			);
		$url = $base_url.'?'.http_build_query($params);

		// post data
		$response = file_get_contents($url);
	}
}
