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

</script>

	</head>

	<body>
		<span class="red left10">��ǰλ�ã�</span>
		<span class="body">��Ա����&gt;�޸�ѧ����Ϣ(<span class="red">*</span>��ʾ������)</span>


		<form action="updateStudent.action" method="post" name="dataForm" id="dataForm">
			<table width="92%" border="0" cellpadding="0" cellspacing="0"
				class="left">
				<tr>
					<td>
						<span class="bold">�޸�ѧ����Ϣ��</span>
					</td>
				</tr>
			</table>
			<table width="90%" height="211" border="0" align="center"
				cellpadding="2" cellspacing="1" bgcolor="#cccccc" class="left">
				<tr bgcolor="#CCCCFF">
					<td height="20" class="title_tr" colspan="2">
						<strong> �޸�ѧ����Ϣ</strong>
					</td>
				</tr>
			    <tr>
	      <td height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">&#23398;&#29983;&#32534;&#21495;&#65306;</td>
	      <td bordercolor="#FFFFFF" bgcolor="#FFFFFF" >
	      <input type="text" name="student.studentId" value="${student.studentId }" maxlength="10" /><span class="red">*</span> <span class="gray">������10����ĸ������</span>&nbsp;&nbsp;<label id="userCodeLab" class="red"></label> </td>	 
	    </tr>
				<tr>
					<td width="120" height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						ѧ��������<span class="red">*</span>
					</td>
					<td width="475" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<input type="text"  name="student.studentName" 
							maxlength="20" value="${student.studentName}"/>
						
						<span class="gray" id="studentNameTip">������20������</span>
						
						&nbsp;&nbsp;
						<label id="userNameLab" class="red"></label>
					</td>
				</tr>

				<tr>
					<td height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						ѧ�����䣺
					</td>
					<td bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<input type="text" name="student.studentAge" 
							maxlength="10"  value="${student.studentAge}"/>
						<span  id="studentAgeTip"></span>
						<span class="gray"></span>&nbsp;&nbsp;
						<label id="userCodeLab" class="red"></label>
					</td>
				</tr>

				<tr>
					<td height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						�༶��
					</td>
					<td bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<input type="text" name="student.grade.gradeName" 
							maxlength="10" value="${student.grade.gradeName}"/>
						<span class="red"></span>
						<span class="gray"></span>&nbsp;&nbsp;
						<label id="userCodeLab" class="red"></label>
					</td>
				</tr>


				<tr>
					<td width="120" height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						ѧ���Ա�
					</td>
					<td width="475" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<select name="student.studentSex" id="studentSex">
							<option value="��" "<c:if test="${student.studentSex=='��'}">selected</c:if>">
								��
							</option>
							<option value="Ů" "<c:if test="${student.studentSex=='Ů'}">selected</c:if>">
								Ů
							</option>
						</select>
					</td>
				</tr>

				<tr>
					<td width="120" height="26" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						ѧ����ַ��<span class="red">*</span>
					</td>
					<td width="475" bordercolor="#FFFFFF" bgcolor="#FFFFFF">
						<input type="text" name="student.studentAddress"
							id="studentAddress" value="${student.studentAddress}" maxlength="20" />
						
						<span class="gray" id="studentAddressTip">������20������</span>&nbsp;&nbsp;
						<label id="userNameLab" class="red"></label>
					</td>
				</tr>

			</table>
			<div align="center">
				<br />
				<input type="submit" name="button" id="button" Class="buttonpop" value="����"
					onclick="save();" />
				<input name="Submit3" type="reset" class="buttonpop" value="���" />
				<input name="Submit32" type="button" class="buttonpop"
					onclick="javascript:history.back(-1)" value="����" />
			</div>
		</form>
	</body>
</html>
