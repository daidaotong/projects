package com.ddt.service;

import java.util.List;

import com.ddt.bean.Userinfo;
import com.ddt.daoInter.UserDaoInter;
import com.ddt.serviceInter.UserServiceInter;

public class UserService implements UserServiceInter {
	UserDaoInter dao;

	public UserService() {
		System.out.println("UserService construction!!!!!!!!!!!!!!!!!!!!!!!!!");
	}

	public void setDao(UserDaoInter dao) {
		this.dao = dao;
	}

	// 增加用户信息
	public void addUser(Userinfo user) {
		dao.addUser(user);
	}

	// 查找全部用户信息
	public List findAllUser() {
		return dao.findAllUser();
	}

	// 按条件id查找部分学生
	// public Student findUserById(Student stu){

	// 修改用户信息
	public void updateUser(Userinfo user) {
		dao.updateUser(user);
	}

	// 删除用户信息
	public void deleteUser(Userinfo user) {
		dao.deleteUser(user);
	}

	public boolean login(String username, String password, int identify) {
		// TODO Auto-generated method stub
		Userinfo user = dao.getUser(username);
		if (user == null) {
			return false;
		}
		System.out.println("get from db: username" + user.getUname()
				+ " password:" + user.getUpassword() + " identify:"
				+ user.getUstate());
		
		if (user.getUpassword().equals(password)
				&& user.getUstate() == identify) {
			return true;
		}
		return false;
	}

}
