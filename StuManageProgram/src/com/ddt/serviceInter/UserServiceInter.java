package com.ddt.serviceInter;

import java.util.List;

import com.ddt.bean.Userinfo;
//import Bean.UserInfo;

public interface UserServiceInter {
	// 增加用户信息
	public void addUser(Userinfo user);
	// 查找全部用户信息
	public List findAllUser();
	//按条件id查找部分学生
//	public  Student findUserById(Student stu);
	//修改用户信息
	public void updateUser(Userinfo user);
	//删除用户信息
	public void deleteUser(Userinfo user); 
	//验证用户登陆信息
	public boolean login(String username, String password, int identify);

}
