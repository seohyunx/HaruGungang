package com.smhrd.haru.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.mapper.WishMapper;

@Service
public class WishService {

	@Autowired
	private WishMapper mapper;
}
