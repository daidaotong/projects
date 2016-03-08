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
</head>
<%--
  <%=path %>
    班级:<input type="text" name="student.clazz" id="student.clazz"/><br/> 
  --%>
<body>
	<h2>
		<font color="red">${tags}</font>
		<form action="addCourse.action" method="post">
			课程id:<input type="text" name="course.eid" /><br />
			课程名:<input type="text" name="course.ename" /><br /> 
			任课教师:<input type="text" name="course.tname" /><br /> 
			专业号:<input type="text" name="course.zyid" /><br /> 
			备注:<input type="text" 	name="course.etwas"/><br /> 
			<input type="submit" value="增加课程" />
		</form>
	</h2>
	<img
		src="http://pic.baike.soso.com/p/20111002/20111002064702-1680593531.jpg">
</body>
</html>
