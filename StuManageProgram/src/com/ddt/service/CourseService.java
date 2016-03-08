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
	//增加学生信息
	public void addCourse(Course course){
		dao.addCourse(course);
	}
	// 查找全部学生信息
	public List findAllCourse(){
		return dao.findAllCourse();
		
	}
	//按条件id查找部分学生
	public  Course findCourseById(Course course){
		return dao.findCourseById(course);
	}
	//修改学生信息
	public void updateCourse(Course course){
		dao.updateCourse(course);
	}
	//删除学生信息
	public void deleteCourse(Course course){
		dao.deleteCourse(course);
		
	}

}
