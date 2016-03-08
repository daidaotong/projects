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

		<title>My JSP 'xiuGai.jsp' starting page</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<script type="text/javascript">
	function init(){
	    var sex=document.m.sexs.value;
	    var sexs=document.m.stuSex;
	    for(var i=0;i<sexs.length;i++){
	       if(sexs[i].value==sex){
	       sexs[i].checked=true;
	       }
	    }
	    var banji=document.m.banjis.value;
	    var banjis=document.m.banji;
	    for(var i=0;i<banjis.length;i++){
	    	if(banjis[i].value==banji){
	    	banjis[i].selected=true;
	    	}
	    }
	}
	</script>

	</head>

	<body>
		<center>
			<form action="<%=basePath%>stu_updateStudent.action" method="post"
				name="m">
				<table border="2" color="red">
					<tr>
						<td>
							编号：
						</td>
						<td>
							<input type="text" name="id" value="${stu.stuId }">
						</td>
					</tr>
					<tr>
						<td>
							姓名：
						</td>
						<td>
							<input type="text" name="name" value="${stu.stuName }">
						</td>
					</tr>
					<tr>
						<td>
							性别：
						</td>
						<input type="hidden" name="sexs" value="${stu.stuSex }">
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
							<input type="text" name="stuAge" value="${stu.stuAge }">
						</td>
					</tr>
					<tr>
						<td>
							班级：
						</td>
						<input type="hidden" name="banjis" value="${stu.grade.gradeId }">
						<td>
							<select name="banji">

								<option>
									请选择
								</option>

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
						<a href="">删除</a>
						<a href="">修改</a>
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
