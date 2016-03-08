<%@ page language="java" contentType="text/html; charset=gb2312"
    pageEncoding="GBK"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<link href="../css/common.css" rel="stylesheet" type="text/css"/>
         <script type="text/javascript" src="../js/jsLib.js"></script>
         <script type='text/javascript' src='../dwr/engine.js'></script>
		 <script type='text/javascript' src='../dwr/util.js'></script>
<script language="javascript">

		
	//点击具体页面触发
	function toPage(toPage){
		var lastpage=DWRUtil.getValue("lastpage");
		if(toPage==""||toPage<=0||toPage*1>lastpage*1){
			return;
		}else {
			document.pfm.toPage.value=toPage;
			document.pfm.submit();
		}
	}
	
	//跳页
	function skipPage(){
			var toPage=DWRUtil.getValue("toPage");	
			var lastpage=DWRUtil.getValue("lastpage");
			if(toPage*1>0)
			{
				if(toPage*1>lastpage*1){
					alert("跳转的页面不能超过页面总数！");
					return;
				}else {	
					document.pfm.submit();	
				}
			}
	}
	
	//重设页面pagesize
	function resetpagesize(ps){
		document.pfm.pagesize.value=ps;
		document.pfm.submit();
	}
	
	
	</script>
<title>无标题文档</title>
</head>
<body>
<span class="body"><span class="red left10">当前位置：</span>学生设置&gt;学生列表</span>

  <table width="92%" border="0" align="center" cellspacing="1">
    <tr>
      <td><strong>学生列表</strong></td>
    </tr>
    <tr>
      
    </tr>
  </table>
  <table width="92%" height="113" border="0" align="center" cellspacing="1" bordercolor="#FFFFFF" bgcolor="#999999" class="left1">
    <tr bgcolor="#FFFFFF">
      <td width="9%" align="center" bgcolor="#cccccc" class="title_tr">学生编号</td>
      <td height="27" class="title_tr"><div align="center">学生姓名</div></td>
      <td height="27" class="title_tr"><div align="center">学生年龄</div></td>
      <td class="title_tr" align="center">学生性别</td>
      <td class="title_tr" align="center">学生地址</td>
           <td class="title_tr" align="center">学生班级</td>
      <td class="title_tr" align="center"></td>
      <td class="title_tr" align="center"></td>
    </tr>
     <c:forEach items="${list}" var="student">
    <tr bgcolor="#FFFFFF">
      <td align="center">${student.studentId}</td>
      <td width="16%" height="27" align="center"><a href="post-2.htm">${student.studentName}</a></td>
      <td width="20%" height="27"><div align="center">${student.studentAge}</div></td>
      <td width="13%" height="27"><div align="center">${student.studentSex}</div></td>
      <td width="13%" height="27" align="center">${student.studentAddress}</td>
       <td width="13%" height="27" align="center">${student.grade.gradeName}</td>
      <td width="13%" height="27" align="center"><a href="delStudents.action?studentId=${student.studentId}">删除</a></td>
      <td width="13%" height="27" align="center"><a href="getStudentsById.action?studentId=${student.studentId}">修改</a></td>
    </tr>
   </c:forEach>
  </table>
  <p align="center">
    <a href="addStudentInput.action">添加学生</a>
</p>

	<c:if test="${fn:length(list)<0 || list==null}">
    	<tr>
    		<td colspan="10" width=150 align="center" bgcolor="#ffffff">目前没有学生！</td>
    	</tr>
    </c:if>
 <!-- 
<div align="center">

				<input type="hidden" name="start" value="${page.startIndex}" />
				<input type="hidden" name="pagesize" value="${page.pageSize}" />
				<input type="hidden" name="lastpage" value="${page.lastIndex}" />
				<div align="center">
					第${page.currentPage}/${page.currentPage+1}页；每页&nbsp;${page.pageSize}&nbsp;行；共&nbsp;${page.totalCount}&nbsp;条记录&nbsp;&nbsp;
					<a href="javascript:toPage('1')">首页</a>&nbsp;
					<a href="javascript:toPage('${page.currentPage-1}')">上页</a>&nbsp;
					<input class="self_input" maxlength="5" onchange="" size="5" value="1" name="toPage" />
					<a href="javascript:skipPage()">跳页</a>&nbsp;
					<a href="javascript:toPage('${page.currentPage+1}')">下页</a>&nbsp;
					<a href="javascript:toPage('${page.lastIndex}')">末页</a>&nbsp; &nbsp;
					<a href="javascript:resetpagesize('5')">5行</a>
					<a href="javascript:resetpagesize('10')">10行</a>
					<a href="javascript:resetpagesize('20')">20行</a>
					<a href="javascript:resetpagesize('50')">50行</a>
					<a href="javascript:resetpagesize('100')">100行</a>
					<a href="javascript:resetpagesize('200')">200行</a>
				</div>
</div>
-->

</body>
</html>
