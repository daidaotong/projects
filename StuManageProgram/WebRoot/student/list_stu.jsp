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
    
    <title>My JSP 'showStu.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body >
    <center>
    	<form > 
    		<font size="3" color="black"><a href="<%=basePath%>student/add_stu.jsp">添加学生</a>
    		<a href="<%=basePath%>grade/add_grade.jsp">添加班级</a></font>
    			<table border="2" background="阶梯.jpg">
    				<tr>
    					<td>编号</td>
    					<td>姓名</td>
    					<td>性别</td>
    					<td>年龄</td>
    					<td>班级</td>
    					<td> 查询考试</td>
    					<td>操作</td>
    				</tr>
    				
   				<c:if test="${list==null}">
   					<c:redirect url="../stu_findAllStudent.action?stuId=${stu.stuId}"></c:redirect>
   				</c:if>
   				<c:forEach items="${list}" var="stu">
   				
    				<tr>
    					<td>${stu.stuId }</td>
    					<td>${stu.stuName }</td>
    					<td>${stu.stuSex }</td>
    					<td>${stu.stuAge }</td>
    					<td>${stu.grade.gradeName }</td>
    					<td> <a href="exam_findAllExam.action?stuId=${stu.stuId }">查询考试</a></td>
    					<td><a href="stu_deleteStudent.action?stuId=${stu.stuId}"> 删除</a>
    					   <a href="stu_updateStudent.action?stuId=${stu.stuId}">修改</a></td>
    				</tr>
    				</c:forEach>
    			</table>
    	</form>	
    </center>
  </body>
</html>
