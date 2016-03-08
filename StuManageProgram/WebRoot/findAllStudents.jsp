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
    
    <title>查看所有学生信息</title>
    
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
   					<td>学号</td>
   					<td>姓名</td>
   					<td>性别</td>
   					<td>年龄</td>
   					<td>身份证号</td>
   					<td>地址</td>
   					<td>所在地</td>
   					<td>学院号</td>
   					<td>专业号</td>
   					<td>政治面貌</td>
   					<td>入学时间</td>
   					<td>学籍状态</td>
   					<td>其他</td>
   					<td>修改</td>
   					<td>删除</td>
   				</tr>
   				<s:iterator value="#request.list" id="student">
   				<tr>
   					<td> <s:property value="#student.sid"/></td>
   					<td> <s:property value="#student.sname"/></td>
   					<td> <s:if test="#student.ssex = 1">男
   						<s:else>女</s:else>
   					</s:if></td>
   					<td> <s:property value="#student.sage"/></td>
   					<td> <s:property value="#student.id"/></td>
   					<td> <s:property value="#student.address"/></td>
   					<td> <s:property value="#student.splace"/></td>
   					<td> <s:property value="#student.xyid"/></td>
   					<td> <s:property value="#student.zyid"/></td>
   					<td> <s:property value="#student.party"/></td>
   					<td> <s:property value="#student.etime"/></td>
   					<td> <s:property value="#student.state"/></td>
   					<td> <s:property value="#student.etwas"/></td>
   					<td><a href="skipToUpdate.action?update_sid=<s:property value="#student.sid"/>">修改</a></td>
   					<td><a href="deleteStudent.action?delete_sid=<s:property value="#student.sid"/>">删除</a></td>
   				</tr>
   				</s:iterator>
   			</table>
</html>
