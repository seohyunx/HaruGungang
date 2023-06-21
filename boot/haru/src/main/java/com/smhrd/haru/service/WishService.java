package com.smhrd.haru.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.CompareDTO;
import com.smhrd.haru.domain.TblNutriFaq;
import com.smhrd.haru.domain.TblOutputWishlist;
import com.smhrd.haru.domain.WishDTO;
import com.smhrd.haru.mapper.WishMapper;

@Service
public class WishService {

	@Autowired
	private WishMapper mapper;
	
	public int addWishList(WishDTO dto) {
		String user_id = dto.getUserId();
		String product_id = dto.getProductIdMain();
		int cnt = mapper.addWishList(user_id, product_id);
		return cnt;
	}
	
	public JSONArray wishlist(String user_id) {
		List<TblOutputWishlist> arr = mapper.wishlist(user_id);
		JSONArray jarr = new JSONArray();
		for(TblOutputWishlist owl : arr) {
			JSONObject obj = new JSONObject();
			obj.put("wishlist", owl);
			jarr.add(obj);
		}
		return jarr;
		
	}
	
	public void compareList(CompareDTO dto) {
		
        Map<String, String> variables = new HashMap<>();

        int index = 1;
        for (String item : dto.getProduct_id()) {
            String variableName = "variable" + index;
            variables.put(variableName, item);
            index++;
        }
        
        for (Map.Entry<String, String> entry : variables.entrySet()) {
            String variableName = entry.getKey();
            String variableValue = entry.getValue();
            System.out.println(variableName + ": " + variableValue);
        }
        
        
        
	}
}
