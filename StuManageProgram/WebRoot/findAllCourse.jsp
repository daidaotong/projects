<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>查看所有课程信息</title>
    
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
    <table border="2" background="tupian/光影.jpg">
   				<tr>
   					<td>课程名</td>
   					<td>课程id</td>
   					<td>任课教师</td>
   					<td>专业id</td>
   					<td>备注</td>
   					<td>修改</td>
   					<td>删除</td>
   				</tr>
   				<s:iterator value="#request.list" id="course">
   				<tr>
   					<td> <s:property value="#course.ename"/></td>
   					<td> <s:property value="#course.eid"/></td>
   					<td> <s:property value="#course.tname"/></td>
   					<td> <s:property value="#course.zyid"/></td>
   					<td> <s:property value="#course.etwas"/></td>
   					<td><a href="skipToUpdate.action?update_sid=<s:property value="#student.sid"/>">修改</a></td>
   					<td><a href="deleteStudent.action?delete_sid=<s:property value="#student.sid"/>">删除</a></td>
   				</tr>
   				</s:iterator>
   			</table>
</html>
