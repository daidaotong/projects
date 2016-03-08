package com.ddt.service;

import java.util.List;

import com.ddt.bean.Course;
import com.ddt.bean.Student;
import com.ddt.daoInter.CourseDaoInter;
import com.ddt.serviceInter.CourseServiceInter;


public class CourseService implements CourseServiceInter{
	CourseDaoInter dao;
	
	
	public void setDao(CourseDaoInter dao) {
		this.dao = dao;
	}
	//����ѧ����Ϣ
	public void addCourse(Course course){
		dao.addCourse(course);
	}
	// ����ȫ��ѧ����Ϣ
	public List findAllCourse(){
		return dao.findAllCourse();
		
	}
	//������id���Ҳ���ѧ��
	public  Course findCourseById(Course course){
		return dao.findCourseById(course);
	}
	//�޸�ѧ����Ϣ
	public void updateCourse(Course course){
		dao.updateCourse(course);
	}
	//ɾ��ѧ����Ϣ
	public void deleteCourse(Course course){
		dao.deleteCourse(course);
		
	}

}
