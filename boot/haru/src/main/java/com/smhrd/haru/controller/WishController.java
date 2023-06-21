package com.smhrd.haru.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.smhrd.haru.domain.CompareDTO;
import com.smhrd.haru.domain.WishDTO;
import com.smhrd.haru.service.WishService;

import ch.qos.logback.core.model.Model;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("http://localhost:3000")
public class WishController {
	
	@Autowired
	private WishService service;
	
	//찜한 제품 DB에 저장
	@PostMapping("/addwishlist")
	public int addWishList(@RequestBody WishDTO dto) {
		
		System.out.println("제품 찜하기 통신성공");
		int cnt = service.addWishList(dto);
		return cnt;
	}
	
	//userid 별 찜리스트 가져오기
	@GetMapping("/wishlist/{userId}")
	public JSONArray wishlist(@PathVariable("userId") String user_id ) {
		System.out.println("위시리스트 통신성공" + user_id);
		JSONArray arr = service.wishlist(user_id);
		return arr;
	}
	
	//동일 영양성분 제품 비교하기 
	@PostMapping("/compare")
	public void compareList(@RequestBody CompareDTO comparelist) {
		System.out.println("비교 통신성공" + comparelist.getProduct_id());
	

//        JSONArray arr = service.compareList(comparelist);

	}
}
