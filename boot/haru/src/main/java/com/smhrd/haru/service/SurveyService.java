package com.smhrd.haru.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.TblUserSurvey;
import com.smhrd.haru.mapper.SurveyMapper;

@Service
public class SurveyService {
	
	@Autowired
	private SurveyMapper mapper;
	
	public int addSurvey(TblUserSurvey survey) {
		return mapper.addSurvey(survey);
	}

}
