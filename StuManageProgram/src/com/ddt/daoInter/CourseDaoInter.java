package com.ddt.daoInter;

import java.util.List;

import com.ddt.bean.Course;


public interface CourseDaoInter {
	// ���ӿγ���Ϣ
	public void addCourse(Course course);
	// ����ȫ���γ���Ϣ
	public List findAllCourse();
	//������id���Ҳ��ֿγ�
	public  Course findCourseById(Course course);
	//�޸Ŀγ���Ϣ
	public void updateCourse(Course course);
	//ɾ���γ���Ϣ
	public void deleteCourse(Course course); 

}
