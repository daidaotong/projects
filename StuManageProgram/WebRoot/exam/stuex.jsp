<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">

		<title>My JSP 'ex.jsp' starting page</title>

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
				参加
				<font color="red">${ex.exName }</font>考试的学生情况表
				<br>
				<a href="stu/showStu.jsp">学生管理</a>

			</h2>

			<table border="1">
				<form action="SEServlet" method="post">
					<input type="hidden" id="action" name="action" value="deleteStu">
					<input type="hidden" name="id" value="${ex.exId }">
				<tr>

					考试科目：${ex.exName }


				</tr>
				<tr>
					<td align="center">
						已考学生
					</td>
					<td align="center" colspan="2">
						<c:forEach items="${exam.stulist}" var="stu">
							<input type="checkbox" name="Stu" value="${stu.id}">
							${stu.name}
						</c:forEach>

					</td>
					<td>

						<input type="submit" value="删除">


					</td>
				</tr>

				</form>
				<form action="SEServlet" method="post">
					<input type="hidden" id="action" name="action" value="addStu">
					<input type="hidden" name="id" value="${ex.exId }">
				<tr>
					<td align="center">
						未考学生
					</td>
					<td align="center" colspan="2">
						<c:forEach items="${list}" var="student">
							<input type="checkbox" name="stu" value="${student.id }">
							${student.name }
</c:forEach>
					</td>
					<td>

						<input type="submit" value="添加">
						<a href="exam/showexam.jsp">返回</a>

					</td>
				</tr>
				</form>
			</table>

		</center>
	</body>
</html>
