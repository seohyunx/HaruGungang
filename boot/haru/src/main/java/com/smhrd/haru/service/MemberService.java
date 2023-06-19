package com.smhrd.haru.service;

import java.io.IOException;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.HaruMember;
import com.smhrd.haru.mapper.MemberMapper;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Service
public class MemberService {

	@Autowired
	MemberMapper mapper;

	public void kakaoLogin(HaruMember member, HttpSession session, HttpServletResponse response) {

//		System.out.println(member.getSns_user_id());

		// 회원 정보 조회해서 이미 가입한 회원인지 체크
		Integer memberCheck = mapper.memberCheck(member);

		System.out.println("memberCheck 값 : " + memberCheck);

		int cnt = 0;

		if (memberCheck != null) { // 이미 가입한 회원, 회원 정보 session에 바로 저장
			session.setAttribute("member", member);
			System.out.println("세션 성공!");
			try {
				response.sendRedirect("http://localhost:3000");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else { // 처음 방문 회원, 회원 가입 진행 후 session에 저장
			// 회원정보 DB에 저장
			cnt = mapper.kakaoLogin(member);
			System.out.println("DB 저장 성공!");

			if (cnt > 0) { // 회원정보 DB에 저장 완료
				session.setAttribute("member", member);
				System.out.println("세션 성공!");
				try {
					response.sendRedirect("http://localhost:3000");
				} catch (IOException e) {
					e.printStackTrace();
				}
			} else { // 실패
				System.out.println("SNS 로그인 실패");
				try {
					response.sendRedirect("http://localhost:3000");
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

	}

	public void naverLogin(HaruMember member, HttpSession session, HttpServletResponse response) {

//		System.out.println(member.getSns_user_id());

		// 회원 정보 조회해서 이미 가입한 회원인지 체크
		Integer memberCheck = mapper.memberCheck(member);

		System.out.println("memberCheck 값 : " + memberCheck);

		int cnt = 0;

		if (memberCheck != null) { // 이미 가입한 회원, 회원 정보 session에 바로 저장
			session.setAttribute("member", member);
			System.out.println("세션 성공!");
			try {
				response.sendRedirect("http://localhost:3000");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else { // 처음 방문 회원, 회원 가입 진행 후 session에 저장
			// 회원정보 DB에 저장
			cnt = mapper.naverLogin(member);
			System.out.println("DB 저장 성공!");

			if (cnt > 0) { // 회원정보 DB에 저장 완료
				session.setAttribute("member", member);
				System.out.println("세션 성공!");
				try {
					response.sendRedirect("http://localhost:3000");
				} catch (IOException e) {
					e.printStackTrace();
				}
			} else { // 실패
				System.out.println("SNS 로그인 실패");
				try {
					response.sendRedirect("http://localhost:3000");
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

	}

}
