package com.ddt.dao;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.ddt.bean.Userinfo;
import com.ddt.daoInter.UserDaoInter;


public class UserDao extends HibernateDaoSupport implements UserDaoInter{
	// 增加学生信息
	public void addUser(Userinfo user){
		this.getHibernateTemplate().save(user);
	}
	// 查找全部学生信息
	public List findAllUser(){
		return this.getHibernateTemplate().find("from User");
		
	}
	//按条件id查找部分学生
//	public  Student findUserById(Student stu);
	//修改学生信息
	public void updateUser(Userinfo user){
		this.getHibernateTemplate().update(user);
	}
	//删除学生信息
	public void deleteUser(Userinfo user){
		this.getHibernateTemplate().delete(user);
	}
	public Userinfo getUser(String username) {
		// TODO Auto-generated method stub
		List list = this.getHibernateTemplate().find("from Userinfo as u where u.uname = '" + username + "'");
		if(list == null || list.size() == 0){
			return null;
		}else{
			return (Userinfo)list.get(0);
		}
	}
	
}
