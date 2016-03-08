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
    
    <title>My JSP 'showBanJi.jsp' starting page</title>
    
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
    <body background="tupian/menggu.jpg">
   	<center>
   	<font><a href="<%=basePath %>grade/add_grade.jsp">添加班级</a>
   	<a href="<%=basePath %>student/add_stu.jsp">添加学生</a></font>
   		<form >
   			<table border="2" background="tupian/光影.jpg">
   				<tr>
   					<td>编号</td>
   					<td>班级</td>
   					<td>时间</td>
   					<td>操作</td>
   				</tr>
   				<c:if test="${list==null}">
   					<c:redirect url="../grade_findAllGrade.action?gradeId=${grade.gradeId}"></c:redirect>
   				</c:if>
   				<c:forEach items="${list}" var="grade">
   				<tr>
   					<td>${grade.gradeId }</td>
   					<td>${grade.gradeName }</td>
   					<td>${grade.time}</td>
   					<td><a href="grade_deleteGrade.action?gradeId=${grade.gradeId}" >删除</a>
   					<a href="grade_updateGrade.action?gradeId=${grade.gradeId}">修改</a></td>
   				</tr>
   				</c:forEach>
   			</table>
   		</form>
   	</center>
  </body>
</html>
