package com.smhrd.haru.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.haru.domain.TblUserSurvey;

@Mapper
public interface SurveyMapper {
	public int addSurvey(TblUserSurvey survey);
}
