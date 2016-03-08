package com.ddt.dao;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.ddt.bean.Course;
import com.ddt.bean.Student;
import com.ddt.daoInter.CourseDaoInter;


public class CourseDao extends HibernateDaoSupport implements CourseDaoInter{
	// ���ӿγ���Ϣ
	public void addCourse(Course course){
		this.getHibernateTemplate().save(course);
	}
	// ����ȫ���γ���Ϣ
	public List findAllCourse(){
		return this.getHibernateTemplate().find("from Course");
	}
	//������Eid���Ҳ��ֿγ�
	public  Course findCourseById(Course course){
		return (Course)this.getHibernateTemplate().load(Course.class,course.getEid());
	}
	//�޸Ŀγ���Ϣ
	public void updateCourse(Course course){
		this.getHibernateTemplate().update(course);
	}
	//ɾ���γ���Ϣ
	public void deleteCourse(Course course){
		this.getHibernateTemplate().delete(course);
	}

}
