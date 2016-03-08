package com.ddt.serviceInter;

import java.util.List;

import com.ddt.bean.Course;


public interface CourseServiceInter {
	// 增加课程信息
	public void addCourse(Course course);
	// 查找全部课程信息
	public List findAllCourse();
	//按条件id查找部分课程
	public  Course findCourseById(Course course);
	//修改课程信息
	public void updateCourse(Course course);
	//删除课程信息
	public void deleteCourse(Course course); 

}
