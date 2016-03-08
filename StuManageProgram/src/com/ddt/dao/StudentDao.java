package com.ddt.dao;

import java.util.Date;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;


import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.ddt.bean.Student;
import com.ddt.daoInter.StuDaoInter;


public class StudentDao extends HibernateDaoSupport implements StuDaoInter{

	public boolean addStudent(Student stu) {
		System.out.println("add stu");


		Session session = this.getSession();
		session.beginTransaction();
		//Query query = session.createQuery("from Users user where user.uname = ?");
		// List list = query.list();
		//if (list.size() != 0)
			//return false;
		// this.getHibernateTemplate().save(user);
		session.save(stu);
		session.getTransaction().commit();
		// session.close();
		return true;
	}

	public void deleteStudent(Student stu) {
		System.out.println("in deleteStudent: id = " + stu.getSid());
		this.getHibernateTemplate().delete(stu);
	}

	public List findAllStudent() {
		return this.getHibernateTemplate().find("from Student ");
	}

	

	public void updateStudent(Student stu) {
		this.getHibernateTemplate().update(stu);
	}

	public Student findStudentById(Integer id) {
		// TODO Auto-generated method stub
		return (Student) this.getHibernateTemplate().get(Student.class, id);
	}

}
