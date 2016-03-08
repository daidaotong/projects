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

	// �����û���Ϣ
	public void addUser(Userinfo user) {
		dao.addUser(user);
	}

	// ����ȫ���û���Ϣ
	public List findAllUser() {
		return dao.findAllUser();
	}

	// ������id���Ҳ���ѧ��
	// public Student findUserById(Student stu){

	// �޸��û���Ϣ
	public void updateUser(Userinfo user) {
		dao.updateUser(user);
	}

	// ɾ���û���Ϣ
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
