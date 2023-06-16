package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TblUserSurvey {

	private int user_seq;
	private char survey_gender;
	private int survey_birthyear;
	private int survey_result_seq;
	
	public TblUserSurvey(char survey_gender, int survey_birthyear, int survey_result_seq) {
		this.survey_gender = survey_gender;
		this.survey_birthyear = survey_birthyear;
		this.survey_result_seq = survey_result_seq;
	}
	
}
