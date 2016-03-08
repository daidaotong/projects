package com.ddt.action;

import java.util.List;

import org.apache.struts2.ServletActionContext;



import com.ddt.bean.Course;
import com.ddt.bean.Student;
import com.ddt.serviceInter.CourseServiceInter;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class CourseAction extends ActionSupport implements ModelDriven{
	private Course course;
	public CourseServiceInter service;
	private String tags;
	
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	public CourseServiceInter getService() {
		return service;
	}
	public void setService(CourseServiceInter service) {
		this.service = service;
	}
	//����ѧ��
	public String addCourse() {
		// ��ȡ���ݿ����ֵ
		service.addCourse(course);
		tags = "��ӿγ̳ɹ���";
		return SUCCESS;
	}
	// ����ȫ��
	public String findAllCourse() {
		List list = service.findAllCourse();
		ServletActionContext.getRequest().setAttribute("list", list);
		return "success";
	}
	//��ѧ�Ų���
	public String findCourseById(){
		Course cou = service.findCourseById(course);
		ServletActionContext.getRequest().setAttribute("course",cou );
		return "success";
	}
	//�޸�ѧ����Ϣ
	public String updateCourse(){
		service.updateCourse(course);
		return "success";
	}
	//ɾ��ѧ����Ϣ
	public String deleteCourse(){
		service.deleteCourse(course);
		return "delete";
	}
	public Object getModel() {
		return null;
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
