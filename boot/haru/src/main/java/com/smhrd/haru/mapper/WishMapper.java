package com.smhrd.haru.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.json.simple.JSONArray;

@Mapper
public interface WishMapper {
	
	//찜하기 추가
	public int addWishList(String user_id, String product_id);
	
	//찜목록 조회
	public JSONArray wishlist(String user_id);

}
