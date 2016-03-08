<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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

		<title>My JSP 'addexam.jsp' starting page</title>

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
				添加考试
				<a href="exam/list_exam.jsp">考试管理</a>
			</h2>
			<form action="exam_addExam.action" method="post">
				<table border="1">
					<tr>
						<td align="center">
							考试科目
						</td>
						<td align="center">
							<input type="text" name="examName">
						</td>
					</tr>
					<tr>
						<td align="center" colspan="2">
							<input type="submit" value="添加">
							<input type="reset" value="重置">
						</td>

					</tr>

				</table>
			</form>
		</center>
	</body>
</html>
