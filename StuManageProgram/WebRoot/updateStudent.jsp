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
		<font color="red">${message }</font>
		<form action="updateStudent.action" method="post">
			姓名:<input type="text" name="student.sname"
				value="${request.stu.sname }" /><br /> 年&nbsp; 龄:<input type="text"
				name="student.sage" value="${request.stu.sage }" /><br /> 性&nbsp; 别:<input
				type="radio" name="student.ssex" value="1">男 <input
				type="radio" name="student.ssex" value="0" checked>女<br />
			身份证号:<input type="text" name="student.sid" value="${request.stu.sid }" /><br />
			学院号:<input type="text" name="student.xyid"
				value="${request.stu.xyid }" /><br /> 专业号:<input type="text"
				name="student.zyid" value="${request.stu.zyid }" /><br /> 地址:<input
				type="text" name="student.address" value="${request.stu.address }" /><br />
			所在地:<input type="text" name="student.splace"
				value="${request.stu.splace }" /><br /> 入学时间:<input type="text"
				name="student.etime" value="${request.stu.etime }" /><br /> 政治面貌:<input
				type="text" name="student.party" value="${request.stu.party }" /><br />
			学籍状态:<input type="text" name="student.state"
				value="${request.stu.state }" /><br /> 其他:<input type="text"
				name="student.etwas" value="${request.stu.etwas }" /><br /> <input
				type="submit" value="保存修改" />
		</form>
	</h2>
	<img
		src="http://pic.baike.soso.com/p/20111002/20111002064702-1680593531.jpg">
</body>
</html>
