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
	
	//����ѧ��
	public String addStudent() {
		// ��ȡ���ݿ����ֵ
		System.out.println("11111111111111111111111111");
		service.addStudent(student);
		tags = "���ѧ���ɹ���";
		System.out.println("add stu");
		return "success";
	}
	// ����ȫ��
	public String findAllStudent() {
		List list = service.findAllStudent();
		ServletActionContext.getRequest().setAttribute("list", list);
		return "success";
	}
	//��ѧ�Ų���
	public String findStuById(int id){
		Student stu = service.findStudentById(id);
		ServletActionContext.getRequest().setAttribute("stu",stu );
		return "success";
	}
	//�޸�ѧ����Ϣ
	public String updateStudent(){
		System.out.println("��Ҫ�޸ĵ�ѧ�������֤��Ϊ��" + student.getSid());
		System.out.println("��Ҫ�޸ĵ�ѧ��������Ϊ��" + student.getSname());
		service.updateStudent(student);
		return findAllStudent();
	}
	//��ת���޸�ѧ����Ϣ
	public String skipToUpdate(){
		String sUpdate_sid = ServletActionContext.getRequest().getParameter("update_sid");
		System.out.println("sUpdate_sid---------------" + sUpdate_sid);
		int iUpdate_sid = Integer.parseInt(sUpdate_sid);
		Student stu = service.findStudentById(iUpdate_sid);
		ServletActionContext.getRequest().setAttribute("stu",stu );
		System.out.println("Ҫ�޸ĵ�ѧ����idΪ��" + stu.getSid());
		System.out.println("Ҫ�޸ĵ�ѧ��������Ϊ��" + stu.getSname());
		return SUCCESS;
	}
	//ɾ��ѧ����Ϣ
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
