package com.ddt.action;

import java.util.List;

import org.apache.struts2.ServletActionContext;


import com.ddt.bean.Student;
import com.ddt.service.StuService;
import com.ddt.serviceInter.StuServiceInter;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;





public class StuAction extends ActionSupport implements ModelDriven{
	private Student student;
	public  StuServiceInter service;
	private String tags;
	
	//增加学生
	public String addStudent() {
		// 获取数据库里的值
		System.out.println("11111111111111111111111111");
		service.addStudent(student);
		tags = "添加学生成功！";
		System.out.println("add stu");
		return "success";
	}
	// 查找全部
	public String findAllStudent() {
		List list = service.findAllStudent();
		ServletActionContext.getRequest().setAttribute("list", list);
		return "success";
	}
	//按学号查找
	public String findStuById(int id){
		Student stu = service.findStudentById(id);
		ServletActionContext.getRequest().setAttribute("stu",stu );
		return "success";
	}
	//修改学生信息
	public String updateStudent(){
		System.out.println("需要修改的学生的身份证号为：" + student.getSid());
		System.out.println("需要修改的学生的姓名为：" + student.getSname());
		service.updateStudent(student);
		return findAllStudent();
	}
	//跳转到修改学生信息
	public String skipToUpdate(){
		String sUpdate_sid = ServletActionContext.getRequest().getParameter("update_sid");
		System.out.println("sUpdate_sid---------------" + sUpdate_sid);
		int iUpdate_sid = Integer.parseInt(sUpdate_sid);
		Student stu = service.findStudentById(iUpdate_sid);
		ServletActionContext.getRequest().setAttribute("stu",stu );
		System.out.println("要修改的学生的id为：" + stu.getSid());
		System.out.println("要修改的学生的姓名为：" + stu.getSname());
		return SUCCESS;
	}
	//删除学生信息
	public String deleteStudent(){
		String sDelete_sid = ServletActionContext.getRequest().getParameter("delete_sid");
		System.out.println("sDelete_sid---------------" + sDelete_sid);
		int iDelete_sid = Integer.parseInt(sDelete_sid);
		service.deleteStudent(iDelete_sid);
		return findAllStudent();
	}

	public void setService(StuServiceInter service) {
		this.service = service;
	}
	public Object getModel() {

		return student;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	
	
	

}
