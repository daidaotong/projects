<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
	<HEAD>
		<TITLE>后台管理系统登录界面</TITLE>
		<META http-equiv=Content-Type content="text/html; charset=gb2312">
		<STYLE type=text/css>
.a {
	FONT-SIZE: 12px
}

.input {
	BORDER-RIGHT: #000000 1px solid;
	BORDER-TOP: #000000 1px solid;
	BORDER-LEFT: #000000 1px solid;
	BORDER-BOTTOM: #000000 1px solid
}

BODY {
	MARGIN-TOP: 30px;
	MARGIN-LEFT: 0px;
	MARGIN-RIGHT: 0px;
	BACKGROUND-COLOR: #ffffff
}

.white {
	FONT-SIZE: 12px;
	COLOR: #ffffff
}
</STYLE>

		<META content="MSHTML 6.00.2900.2912" name=GENERATOR>
	</HEAD>
	<BODY>
		<TABLE width="100%" height="398" border=0 align=center cellPadding=0
			cellSpacing=0>
			<TBODY>
				<TR>
					<TD colSpan=3 height=57>
						<form name="form2" method="post" action="">
							<label></label>
						</form>
						s<img src="../../2203949067646211179.jpg" width="1110" height="133">
					</TD>
				</TR>
				<TR>
					<TD width=219 height="31" background=images/login_06.jpg>
						&nbsp;
					</TD>
					<TD width="789" background=images/login_06.jpg>
						欢迎进入学生学籍管理系统
					</TD>
					<TD width="104" vAlign=center background=images/login_06.jpg
						class=white>
						&nbsp;
					</TD>
				</TR>
				<TR>
					<TD background=images/login_04.jpg>
						&nbsp;
					</TD>
					<TD background=images/login_04.jpg colSpan=2>
						<FORM action="login.action" method="post">
							<TABLE cellSpacing=0 cellPadding=5 width="80%" align=center
								border=0>
								<TBODY>
									<TR>
										<TD class=a align=right>
											<p>
												用户名：
											</p>
										</TD>
										<TD>
											<INPUT class=input size=22  name="uname">
										</TD>
									</TR>
									<TR>
										<TD class=a align=right>
											密 码：
										</TD>
										<TD>
											<INPUT class=input type=password size=22 
												name="upassword">
											<label>
												<br>
												<input type="radio" name="ustate" value="0" checked="true">
												学生
											</label>
											<br>
											<label>
												<input type="radio" name="ustate" value="1">
												管理员
											</label>
											<br>
											<label>
												<input type="radio" name="ustate" value="2">
												教师
											</label>
										</TD>
									</TR>
									<TR>
										<TD align=right>
											&nbsp;
										</TD>
										<TD>
											<input type="submit" value="登录"/>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<A href="#">注册</A><br/>
											${tags }
										</TD>
									</TR>
								</TBODY>
							</TABLE>
						</FORM>
					</TD>
				</TR>
				<TR>
					<TD height="47">
						&nbsp;
					</TD>
					<TD colSpan=2>
						&nbsp;
					</TD>
				</TR>
				<TR align=middle>
					<TD class=a colSpan=3 height=30>
						<form name="form3" method="post" action="">
							<p>
								<label></label>
								<br>
							</p>
						</form>
					</TD>
				</TR>
				<TR align=middle>
					<TD class=a colSpan=3>
						&nbsp;
					</TD>
				</TR>
			</TBODY>
		</TABLE>
	</BODY>
</HTML>
