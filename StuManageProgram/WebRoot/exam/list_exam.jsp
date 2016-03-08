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

		<title>My JSP 'showexam.jsp' starting page</title>

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
				考试管理
				<a href="exam/add_exam.jsp">添加考试</a>
				<a href="student/list_stu.jsp">学生管理</a>
			</h2>
			<form>
				<table border="1">
					<tr>
						<td align="center" >
							考试编号
						</td>
						<td align="center">
							考试科目
						</td>
						<td align="center">
							考试时间
						</td>
						<td align="center">
							操作
						</td>
						<c:if test="${list==null}">
							<c:redirect url="../exam_findAllExam.action?examId=${exam.examId}"></c:redirect>
						</c:if>
						<c:forEach items="${list}" var="exam">
					</tr>
					<tr>
						<td align="center">
							${exam.examId }
						</td>
						<td align="center">
							<a href="stu_findAllStudent.action?examId=${exam.examId}">${exam.examName}</a>
						</td>
						<td align="center">
							${exam.addTime }
						</td>
						<td align="center">
							<a href="exam_deleteExam.action?examId=${exam.examId}">删除</a>
							<a href="exam_updatexam.action?examId=${exam.examId}">修改</a>
						</td>
					</tr>
					</c:forEach>
				</table>
			</form>

		</center>
	</body>
</html>
