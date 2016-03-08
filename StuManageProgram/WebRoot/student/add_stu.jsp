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

		<title>My JSP 'addStu.jsp' starting page</title>

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
			<font size="3" color="black"><a
				href="<%=basePath%>student/list_stu.jsp">管理学生 </a> <a
				href="<%=basePath%>grade/add_grade.jsp">添加班级</a>
			</font>
			<form action="stu_addStudent.action" method="post">


				<table border="2" bgcolor="red">
					<tr>
						<td>
							编号：
						</td>
						<td>
							<input type="text" name="stuId">
						</td>
					</tr>
					<tr>
						<td>
							姓名：
						</td>
						<td>
							<input type="text" name="stuName">
						</td>
					</tr>
					<tr>
						<td>
							性别：
						</td>
						<td>
							<input type="radio" name="stuSex" value="男">
							男
							<input type="radio" name="stuSex" value="女">
							女
						</td>
					</tr>
					<tr>
						<td>
							年龄：
						</td>
						<td>
							<input type="text" name="stuAge">
						</td>

					</tr>
					<tr>
						<td>
							班级：
						</td>
						<td>
							<select name="grade">
								<option>
									请选择
								</option>
								<c:if test="${list==null}">
									<c:redirect
										url="../grade_findAllGrade.action?gradeId=${grade.gradeId}"></c:redirect>
								</c:if>
								<c:forEach items="${list}" var="grade">
									<option value="${grade.gradeId }">
										${grade.gradeName }
									</option>
								</c:forEach>
							</select>
						</td>
					</tr>
					<tr>
						<td>
							操作：
						</td>
						<td align="center">
							<input type="submit" value="提交">
							<input type="reset" value="重置">
						</td>
					</tr>

				</table>
			</form>
		</center>
	</body>
</html>
