<%@ page language="java" pageEncoding="gb2312"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="org.acegisecurity.ui.AbstractProcessingFilter" %>
<%@ page import="org.acegisecurity.ui.webapp.Authenticat

ionProcessingFilter" %>
<%@ page import="org.acegisecurity.AuthenticationException" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD><TITLE>后台管理系统登录界面</TITLE>
<META http-equiv=Content-Type content="text/html; charset=gb2312">
<STYLE type=text/css>.a {
	FONT-SIZE: 12px
}
.input {
	BORDER-RIGHT: #000000 1px solid; BORDER-TOP: #000000 1px solid; BORDER-LEFT: #000000 1px solid; BORDER-BOTTOM: #000000 1px solid
}
BODY {
	MARGIN-TOP: 30px; MARGIN-LEFT: 0px; MARGIN-RIGHT: 0px; BACKGROUND-COLOR: #ffffff
}
.white {
	FONT-SIZE: 12px; COLOR: #ffffff
}
</STYLE>

<META content="MSHTML 6.00.2900.2912" name=GENERATOR></HEAD>
<BODY>
<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
  <TBODY>
  <TR>
    <TD colSpan=3 height=80><IMG src="images/Logo_ztb_new.gif" width="90" height="51"></TD>
  </TR>
  <TR>
    <TD width=428 background=images/login_06.jpg>&nbsp;</TD>
    <TD background=images/login_06.jpg><IMG height=78 
      src="images/login_03.jpg" width=200></TD>
    <TD class=white vAlign=center 
      background=images/login_06.jpg>版本号: 1.0 </TD>
  </TR>
  <TR>
    <TD background=images/login_04.jpg>&nbsp;</TD>
    <TD background=images/login_04.jpg colSpan=2>
    
      <FORM name=form1 action="j_acegi_security_check" method=post>
      <TABLE cellSpacing=0 cellPadding=5 width="80%" align=center border=0>
        <TBODY>
        <TR>
          <TD class=a align=right>管理员：</TD>
          <TD><INPUT class=input size=22 name='j_username'>
	          <c:if test="${not empty param.login_error}">
	      			<font color="red" class=a>
	       				用户登录失败请重新登录
	      			</font>
	   			</c:if>
   		  </TD>
   	   </TR>
        <TR>
          <TD class=a align=right>密　码：</TD>
          <TD><INPUT class=input type=password size=22  
            name='j_password'></TD></TR>
        <TR>
          <TD align=right>&nbsp;</TD>
          <TD><A href="#" onclick="form1.submit()"><IMG 
            height=23 src="images/bt_dl.gif" width=61 border=0></A>　<A 
            href="./admin.html#"><IMG height=23 
            src="images/bt_zhmm.gif" width=83 
        border=0></A></TD></TR></TBODY></TABLE></FORM></TD></TR>
  <TR>
    <TD>&nbsp;</TD>
    <TD colSpan=2>&nbsp;</TD></TR>
  <TR align=middle>
    <TD class=a colSpan=3 height=30>&nbsp;</TD></TR>
  <TR align=middle>
    <TD class=a colSpan=3>&copy;版权所有 中投保信息技术有限公司</TD>
  </TR></TBODY></TABLE></BODY></HTML>
