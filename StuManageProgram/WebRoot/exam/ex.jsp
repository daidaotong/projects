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
				<font color="red">学生考试信息</font>

				<a href="exam/list_exam.jsp">考试管理</a>
			</h2>

			<table border="1">
				<form action="SEServlet" method="post">
					<input type="hidden" id="action" name="action" value="deleteFor">
					<input type="hidden" name="id" value="${st.id }">
				<tr>

					学生姓名： ${st.name }


				</tr>
				<tr>
					<td align="center">
						已考科目
					</td>
					<td align="center" colspan="2">
						<c:forEach items="${stu.exlist}" var="ex">
							<input type="checkbox" name="eex" value="${ex.exId }">
							${ex.exName }
							</c:forEach>
					</td>
					<td>

						<input type="submit" value="删除">


					</td>
				</tr>

				</form>
				<form action="SEServlet" method="post">
					<input type="hidden" id="action" name="action" value="addEx">
					<input type="hidden" name="id" value="${st.id }">
				<tr>
					<td align="center">
						未考科目
					</td>
					<td align="center" colspan="2">
						<c:forEach items="${list}" var="eex">
							<input type="checkbox" name="ex" value="${eex.exId }">
							${eex.exName }
							</c:forEach>

					</td>
					<td>

						<input type="submit" value="添加">
						<a href="stu/showStu.jsp">返回</a>
					</td>
				</tr>
				</form>
			</table>


		</center>
	</body>
</html>
