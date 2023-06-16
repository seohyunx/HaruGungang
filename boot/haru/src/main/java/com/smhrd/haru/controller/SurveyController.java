package com.smhrd.haru.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.smhrd.haru.domain.TblUserSurvey;
import com.smhrd.haru.service.SurveyService;

@Controller
@CrossOrigin("http://localhost:3000")
public class SurveyController {
	
	@Autowired
	private SurveyService service;

	//1. survey 정보 불러오기
	@PostMapping("/survey")
	public void survey(@RequestParam("gender") char gender, @RequestParam("birthYear") int birthyear, @RequestParam("interest") int interest) {
		
		TblUserSurvey survey =  new TblUserSurvey(gender, birthyear, interest);
		int cnt = service.addSurvey(survey);
		
		System.out.println(cnt);
	}

}
