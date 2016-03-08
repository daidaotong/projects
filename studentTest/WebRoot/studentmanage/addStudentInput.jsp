<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
		<link href="../css/BG/common.css" rel="stylesheet" type="text/css" />
		<title>user</title>
		<script src="../js/jquery_last.js" type="text/javascript"></script>
		<link type="text/css" rel="stylesheet" href="../css/validator.css"></link>
		<script src="../js/formValidator.js" type="text/javascript"
			charset="UTF-8"></script>
		<script src="../js/formValidatorRegex.js" type="text/javascript"
			charset="UTF-8"></script>
		<script language="javascript" src="../js/DateTimeMask.js"
			type="text/javascript"></script>
		<script type="text/javascript">
			function save(){
	if(document.dataForm.studentName.value.length>20)
	{
	alert("不能超过20个汉字！");
	dataForm.studentName.focus();
	return false;
	}
	else
	document.dataForm.submit();
	}
</script>

	</head>

	<body>
		<span class="red left10">dig当前位置：</span>
		<span class="body">人员设置&gt;添加学生信息(<span class="red">*</span>表示必填项)</span>


		<form action="addStudent.action" method="post" name="dataForm" id="dataForm" onsubmit="return(save());">
			<table width="92%" border="0" cellpadding="0" cellspacing="0"
				class="left">
				<tr>
					<td>
						<span class="bold">添加学生信息：</span>
					</td>
				</tr>
			</table>
			<table width="90%" height="211" border="0" align="center"
				cellpadding="2" cellspacing="1" bgcolor="#cccccc" class="left">
				<tr bgcolor="#CCCCFF">
					<td height="20" class="title_tr" colspan="2">
						<strong>添加学生信息</strong>
					</td>
				</tr>

				<tr>
					<td width="120" height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						学生姓名：<span class="red">*</span>
					</td>
					<td width="475" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<input type="text"  name="student.studentName" id="studentName"
							maxlength="20" />
						
						<span class="gray" id="studentNameTip">不超过20个汉字</span>
						
						&nbsp;&nbsp;
						<label id="userNameLab" class="red"></label>
					</td>
				</tr>

				<tr>
					<td height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						学生年龄：
					</td>
					<td bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<input type="text" name="student.studentAge" 
							maxlength="10" />
						<span  id="studentAgeTip"></span>
						<span class="gray"></span>&nbsp;&nbsp;
						<label id="userCodeLab" class="red"></label>
					</td>
				</tr>

				<tr>
					<td height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						班级：
					</td>
					<td bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<input type="text" name="grade.gradeName" id="gradeName"
							maxlength="10" />
						<span class="red"></span>
						<span class="gray"></span>&nbsp;&nbsp;
						<label id="userCodeLab" class="red"></label>
					</td>
				</tr>


				<tr>
					<td width="120" height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						学生性别：
					</td>
					<td width="475" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<select name="student.studentSex" id="studentSex">
							<option value="男">
								男
							</option>
							<option value="女">
								女
							</option>
						</select>
					</td>
				</tr>

				<tr>
					<td width="120" height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						学生地址：<span class="red">*</span>
					</td>
					<td width="475" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<input type="text" name="student.studentAddress"
							id="studentAddress" maxlength="20" />
						
						<span class="gray" id="studentAddressTip">不超过20个汉字</span>&nbsp;&nbsp;
						<label id="userNameLab" class="red"></label>
					</td>
				</tr>

			</table>
			<div align="center">
				<br />
				<input type="submit" name="submit" id="button" Class="buttonpop" value="保存"
					onclick="save();"/>
				<input name="Submit3" type="reset" class="buttonpop" value="清空" />
				<input name="Submit32" type="button" class="buttonpop"
					onclick="javascript:history.back(-1)" value="返回" />
			</div>
		</form>
	</body>
</html>
