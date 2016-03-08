<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML><HEAD><TITLE>学籍管理系统</TITLE>
<META http-equiv=Content-Type content="text/html; charset=utf-8">
<META content="MSHTML 6.00.2900.5848" name=GENERATOR></HEAD><FRAMESET id=index 
border=0 frameSpacing=0 rows=120,* frameBorder=no><FRAME id=topFrame 
name=topFrame src="head.jsp" noResize scrolling=no><FRAMESET 
border=0 frameSpacing=0 frameBorder=no cols=20%,*><FRAME id=leftFrame 
name=leftFrame src="left.jsp" noResize scrolling=no><FRAME 
id=mainFrame name=mainFrame src="addstudent.jsp" noResize 
scrolling=no></FRAMESET></FRAMESET><noframes></noframes></HTML>
