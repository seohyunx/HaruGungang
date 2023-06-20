package com.smhrd.haru.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.haru.domain.WishDTO;
import com.smhrd.haru.service.WishService;

@RestController
@CrossOrigin("http://localhost:3000")
public class WishController {
	
	@Autowired
	private WishService service;
	
	//찜한 제품 정보 DB 전송
	@PostMapping("/wishlist/add")
	public void addWishList(WishDTO dto) {
		
		System.out.println("제품 찜하기 통신성공");
		
	}

}
