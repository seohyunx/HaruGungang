package com.smhrd.haru.controller;

import java.io.IOException;
import java.util.UUID;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.smhrd.haru.domain.HaruMember;
import com.smhrd.haru.domain.kakao.KakaoProfile;
import com.smhrd.haru.domain.kakao.OAuthToken;
import com.smhrd.haru.domain.naver.NaverProfile;
import com.smhrd.haru.service.MemberService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
public class MemberController {

	@Autowired
	MemberService service;

	@GetMapping("/auth/kakao/callback")
	public void kakaoCallback(String code, HttpSession session, HttpServletResponse res) {

		RestTemplate rt = new RestTemplate();

		// HttpHeader 오브젝트 생성
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		// HttpBody 오브젝트 생성
		MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
		params.add("grant_type", "authorization_code");
		params.add("client_id", "RestAPI키");
		params.add("redirect_uri", "http://localhost:8081/auth/kakao/callback");
		params.add("code", code);

		// HttpHeader와 HttpBody를 하나의 오브젝트에 담기
		HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(params, headers);

		// Http 요청하기 : POST 방식으로, 그리고 response 변수의 응답 받음
		ResponseEntity<String> response = rt.exchange("https://kauth.kakao.com/oauth/token", HttpMethod.POST,
				kakaoTokenRequest, String.class);

		ObjectMapper objectMapper = new ObjectMapper();

		OAuthToken oauthToken = null;

		try {
			oauthToken = objectMapper.readValue(response.getBody(), OAuthToken.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

		System.out.println("카카오 엑세스 토큰 : " + oauthToken.getAccess_token());

		RestTemplate rt2 = new RestTemplate();

		// HttpHeader 오브젝트 생성
		HttpHeaders headers2 = new HttpHeaders();
		headers2.add("Authorization", "Bearer " + oauthToken.getAccess_token());
		headers2.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		// HttpHeader와 HttpBody를 하나의 오브젝트에 담기
		HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest2 = new HttpEntity<>(headers2);

		// Http 요청하기 : POST 방식으로, 그리고 response 변수의 응답 받음
		ResponseEntity<String> response2 = rt2.exchange("https://kapi.kakao.com/v2/user/me", HttpMethod.POST,
				kakaoProfileRequest2, String.class);

		ObjectMapper objectMapper2 = new ObjectMapper();

		KakaoProfile kakaoProfile = null;

		try {
			kakaoProfile = objectMapper2.readValue(response2.getBody(), KakaoProfile.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

		System.out.println("카카오 아이디(번호) : " + kakaoProfile.getId());
		System.out.println("카카오 이메일 : " + kakaoProfile.getKakao_account().getEmail());
		System.out.println("성별 : " + kakaoProfile.getKakao_account().getGender());

		System.out.println("블로그 서버 유저네임 : " + kakaoProfile.getKakao_account().getEmail() + "_" + kakaoProfile.getId());
		System.out.println("블로그 서버 이메일 : " + kakaoProfile.getKakao_account().getEmail());
		UUID tempPassword = UUID.randomUUID();
		System.out.println("블로그 서버 패스워드 : " + tempPassword);
		System.out.println("닉네임 : " + kakaoProfile.getProperties().getNickname());
		
		String type = "K";
		String id = "" + kakaoProfile.getId();
		String email = kakaoProfile.getKakao_account().getEmail();
		String nickname = kakaoProfile.getProperties().getNickname();
		
		
		HaruMember member = new HaruMember(type, id, nickname, email);
		
		service.kakaoLogin(member, session, res);
	}

	@GetMapping("/auth/naver/callback")
	public void naverCallback(String code, String state, HttpSession session, HttpServletResponse res) {

		RestTemplate rt = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
		params.add("grant_type", "authorization_code");
		params.add("client_id", "id");
		params.add("client_secret", "secret");
		params.add("code", code);
		params.add("state", state);

		HttpEntity<MultiValueMap<String, String>> naverTokenRequest = new HttpEntity<>(params, headers);

		ResponseEntity<String> response = rt.exchange("https://nid.naver.com/oauth2.0/token", HttpMethod.POST,
				naverTokenRequest, String.class);

		ObjectMapper objectMapper = new ObjectMapper();

		OAuthToken oauthToken = null;

		try {
			oauthToken = objectMapper.readValue(response.getBody(), OAuthToken.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

		System.out.println("네이버 엑세스 토큰 : " + oauthToken.getAccess_token());

		RestTemplate rt2 = new RestTemplate();

		// HttpHeader 오브젝트 생성
		HttpHeaders headers2 = new HttpHeaders();
		headers2.add("Authorization", "Bearer " + oauthToken.getAccess_token());
		headers2.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		// HttpHeader와 HttpBody를 하나의 오브젝트에 담기
		HttpEntity<MultiValueMap<String, String>> naverProfileRequest2 = new HttpEntity<>(headers2);

		// Http 요청하기 : POST 방식으로, 그리고 response 변수의 응답 받음
		ResponseEntity<String> response2 = rt2.exchange("https://openapi.naver.com/v1/nid/me", HttpMethod.POST,
				naverProfileRequest2, String.class);

		ObjectMapper objectMapper2 = new ObjectMapper();

		NaverProfile naverProfile = null;

		try {
			naverProfile = objectMapper2.readValue(response2.getBody(), NaverProfile.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

		String type = "N";
		String name = naverProfile.getResponse().getName();
		String email = naverProfile.getResponse().getEmail();
		String age = naverProfile.getResponse().getAge();
		String gender = naverProfile.getResponse().getGender();
		String id = naverProfile.getResponse().getId();

		System.out.println(type);
		System.out.println(name);
		System.out.println(email);
		System.out.println(age);
		System.out.println(gender);
		System.out.println(id);

		HaruMember member = new HaruMember(type, id, name, email, age, gender);

		service.naverLogin(member, session, res);
	}

}
