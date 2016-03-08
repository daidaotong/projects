package com.ddt.daoInter;

import java.util.List;

import com.ddt.bean.Userinfo;

//import Bean.UserInfo;

public interface UserDaoInter {
	// 增加学生信息
	public void addUser(Userinfo user);
	// 查找全部学生信息
	public List findAllUser();
	//按条件id查找部分学生
//	public  Student findUserById(Student stu);
	//修改学生信息
	public void updateUser(Userinfo user);
	//删除学生信息
	public void deleteUser(Userinfo user); 
	//根据用户名获取用户信息
	public Userinfo getUser(String username);
}
