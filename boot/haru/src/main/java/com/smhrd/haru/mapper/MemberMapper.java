package com.smhrd.haru.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.smhrd.haru.domain.HaruMember;

@Mapper
public interface MemberMapper {
	
	public Integer memberCheck(HaruMember member);
	
	public int naverLogin(HaruMember member);
	
	public int kakaoLogin(HaruMember member);

}
