package com.ddt.dao;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.ddt.bean.Course;
import com.ddt.bean.Student;
import com.ddt.daoInter.CourseDaoInter;


public class CourseDao extends HibernateDaoSupport implements CourseDaoInter{
	// 增加课程信息
	public void addCourse(Course course){
		this.getHibernateTemplate().save(course);
	}
	// 查找全部课程信息
	public List findAllCourse(){
		return this.getHibernateTemplate().find("from Course");
	}
	//按条件Eid查找部分课程
	public  Course findCourseById(Course course){
		return (Course)this.getHibernateTemplate().load(Course.class,course.getEid());
	}
	//修改课程信息
	public void updateCourse(Course course){
		this.getHibernateTemplate().update(course);
	}
	//删除课程信息
	public void deleteCourse(Course course){
		this.getHibernateTemplate().delete(course);
	}

}
