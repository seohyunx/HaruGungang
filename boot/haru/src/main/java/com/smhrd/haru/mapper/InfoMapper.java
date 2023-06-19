package com.smhrd.haru.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.haru.domain.TblNutritionDetail;

@Mapper
public interface InfoMapper {

	public TblNutritionDetail nutriDetail(String nutri_name);
}
