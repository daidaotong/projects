<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'addBanJi.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body background="tupian/menggu.jpg">
   	<center>
   	<font><a href="<%=basePath %>grade/add_grade.jsp">管理班级</a>
   	<a href="<%=basePath %>student/add_stu.jsp">添加学生</a></font>
   		<form action="<%=basePath %>grade_addGrade.action" method="post">
   			<table border="2" background="tupian/光影.jpg">
   			<tr>
   				<td>编号：</td>
   				<td><input type="text" name="gradeId"></td>
   			</tr>
   				<tr>
   					<td>班级名称</td>
   					<td><input type="text" name="gradeName"></td>
   				</tr>
   				<tr>
   					<td>操作</td>
   					<td>
   						<a href="">删除</a>
   						<a href="">修改</a>
   					</td>
   					<td align="center"><input type="submit" value="提交">
   					<input type="reset" value="重置">
   					</td>
   				</tr>
   			</table>
   		</form>
   	</center>
  </body>
</html>
