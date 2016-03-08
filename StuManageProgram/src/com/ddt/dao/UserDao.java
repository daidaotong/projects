package com.ddt.dao;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.ddt.bean.Userinfo;
import com.ddt.daoInter.UserDaoInter;


public class UserDao extends HibernateDaoSupport implements UserDaoInter{
	// ����ѧ����Ϣ
	public void addUser(Userinfo user){
		this.getHibernateTemplate().save(user);
	}
	// ����ȫ��ѧ����Ϣ
	public List findAllUser(){
		return this.getHibernateTemplate().find("from User");
		
	}
	//������id���Ҳ���ѧ��
//	public  Student findUserById(Student stu);
	//�޸�ѧ����Ϣ
	public void updateUser(Userinfo user){
		this.getHibernateTemplate().update(user);
	}
	//ɾ��ѧ����Ϣ
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
