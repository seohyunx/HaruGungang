<%@page import="com.smhrd.haru.domain.HaruMember"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		HaruMember member = (HaruMember)session.getAttribute("member");
	
		if(member != null) {
			response.sendRedirect("http://localhost:3000");
		}	
	%>
	
	
	로그인 성공..?

</body>
</html>