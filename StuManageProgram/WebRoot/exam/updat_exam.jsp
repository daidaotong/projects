<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'update.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
		<center>
			<h2>
				
				修改考试信息
				<a href="exam/list_exam.jsp">考试管理</a>
			</h2>
			<form action="exam_updateExam.action" method="post">
			<input type="hidden" name="examId" value="${exam.examId }" >
				<table border="1">
					<tr>
						<td align="center">
							考试科目
						</td>
						<td align="center">
							<input type="text" name="examName" value="${exam.examName }">
						</td>
					</tr>
					<tr>
						<td align="center" colspan="2">
							<input type="submit" value="修改">
							<input type="reset" value="重置">
						</td>

					</tr>

				</table>
			</form>
		</center>
	</body>
</html>
