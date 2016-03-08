<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<?xml version="1.0" encoding="gb2312"?>
<HTML>
	<HEAD>
		<TITLE>无标题页</TITLE>
		<META http-equiv=Content-Type content="text/html; charset=utf-8">
			<STYLE type=text/css>
{
FONT-SIZE
:
 
12
px


}
#menuTree A {
	COLOR: #566984;
	TEXT-DECORATION: none
}
</STYLE>
			<SCRIPT src="Left.files/TreeNode.js" type=text/javascript></SCRIPT>
			<SCRIPT src="Left.files/Tree.js" type=text/javascript></SCRIPT>
			<META content="MSHTML 6.00.2900.5848" name=GENERATOR>
	</HEAD>
	<BODY
		style="BACKGROUND-POSITION-Y: -120px; BACKGROUND-IMAGE: url(../images/bg.gif); BACKGROUND-REPEAT: repeat-x">
		<TABLE height="100%" cellSpacing=0 cellPadding=0 width="100%">
			<TBODY>
				<TR>
					<TD width=10 height=29>
						<IMG src="Left.files/bg_left_tl.gif">
					</TD>
					<TD
						style="FONT-SIZE: 18px; BACKGROUND-IMAGE: url(../images/bg_left_tc.gif); COLOR: white; FONT-FAMILY: system">
						Main Menu
					</TD>
					<TD width=10>
						<IMG src="Left.files/bg_left_tr.gif">
					</TD>
				</TR>
				<TR>
					<TD style="BACKGROUND-IMAGE: url(../images/bg_left_ls.gif)"></TD>
					<TD id=menuTree
						style="PADDING-RIGHT: 10px; PADDING-LEFT: 10px; PADDING-BOTTOM: 10px; PADDING-TOP: 10px; HEIGHT: 100%; BACKGROUND-COLOR: white"
						vAlign=top></TD>
					<TD style="BACKGROUND-IMAGE: url(../images/bg_left_rs.gif)"></TD>
				</TR>
				<TR>
					<TD width=10>
						<IMG src="Left.files/bg_left_bl.gif">
					</TD>
					<TD style="BACKGROUND-IMAGE: url(../images/bg_left_bc.gif)"></TD>
					<TD width=10>
						<IMG src="Left.files/bg_left_br.gif">
					</TD>
				</TR>
			</TBODY>
		</TABLE>
		<SCRIPT type=text/javascript>
	var tree = null;
	var root = new TreeNode('系统菜单');
	var fun1 = new TreeNode('学生基本信息管理');
	var fun2 = new TreeNode('增加学生信息', 'BranchMgr.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun1.add(fun2);
	var fun3 = new TreeNode('查询所有学生信息', 'inter.jsp', 'tree_node.gif',
			null, 'tree_node.gif', null);
	fun1.add(fun3);
	var fun4 = new TreeNode('按学号查寻学生信息', 'EmployeeMgr.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun1.add(fun4);
	root.add(fun1);
	var fun5 = new TreeNode('学生成绩管理');
	var fun6 = new TreeNode('增加学生成绩信息', 'MySchedule.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun5.add(fun6);
	var fun7 = new TreeNode('查询所有学生信息', 'DeptSchedule.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun5.add(fun7);
	var fun8 = new TreeNode('按学号查询学生信息', 'MyNote.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun5.add(fun8);
	root.add(fun5);
	var fun9 = new TreeNode('学生学籍管理');
	var fun10 = new TreeNode('增加学籍', 'DocumentMgr.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun9.add(fun10);
	var fun11 = new TreeNode('查询所有学籍信息', 'Recycler.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun9.add(fun11);
	var fun12 = new TreeNode('按学号查询学籍信息', 'FileSearch.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun9.add(fun12);
	root.add(fun9);
	var fun13 = new TreeNode('安全管理');
	var fun14 = new TreeNode('系统测试', 'MessageMgr.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun13.add(fun14);
	var fun15 = new TreeNode('身份管理', 'MailBox.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun13.add(fun15);
	root.add(fun13);
	var fun16 = new TreeNode('系统管理');
	var fun17 = new TreeNode('修改密码', 'RoleMgr.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun16.add(fun17);
	var fun18 = new TreeNode('数据备份', 'LoginLog.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun16.add(fun18);
	var fun19 = new TreeNode('数据清空', 'OperationLog.aspx', 'tree_node.gif',
			null, 'tree_node.gif', null);
	fun16.add(fun19);
	var fun20 = new TreeNode('数据修改', 'MenuSort.aspx', 'tree_node.gif', null,
			'tree_node.gif', null);
	fun16.add(fun20);
	root.add(fun16);
	tree = new Tree(root);
	tree.show('menuTree')
</SCRIPT>
	</BODY>
</HTML>