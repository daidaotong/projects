package com.ztb.student.web.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springside.core.dao.Page;

import com.opensymphony.xwork2.ActionSupport;
import com.ztb.studentTest.model.Grade;
import com.ztb.studentTest.model.Student;
import com.ztb.testStudent.Service.imp.StudentOpt;
import com.ztb.testStudent.Service.imp.StudentOptImp;

/**
 *@author zhouhong
 *@Email zhou__hong2006@126.com
 *@since Mar 16, 2009 3:20:55 PM 
 *@fileName StudentAction.java
 */
public class StudentAction  extends ActionSupport{
	private Student student;
	private Long studentId;
	private Grade grade;
	private StudentOpt studentOpt;
	private Page page;
	private int pageSize = 10;// 分页-每页容量
	private int startIndex = 0;// 分页-起始索引值
	@SuppressWarnings("unchecked")
	private List list;

	public String getStudents() {
		list= studentOpt.showStudents();
			return SUCCESS;
		}
	public String addStudent(){
		grade = studentOpt.addClass(grade);
		
		if(student!=null){	
			student.setGrade(grade);
			studentOpt.add(student);
		}else{
			return INPUT;
		}
		return SUCCESS;
	}
	public String delStudents()
	{
		HttpServletRequest request = ServletActionContext.getRequest(); 
		String studentId = request.getParameter("studentId");
		studentOpt.del(Long.valueOf(studentId));
		return SUCCESS;
	}
	public String updateStudent(){
		studentOpt.update(student);
		return SUCCESS;
	}
	public String addStudentInput()
	{
		return SUCCESS;
	}
	public String getStudentsById(){
	HttpServletRequest request = ServletActionContext.getRequest(); 
	String studentId = request.getParameter("studentId");
	this.student = studentOpt.getStudentById(Long.valueOf(studentId));
	return SUCCESS;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getPageSize() {
		return pageSize;
	}
	public int getStartIndex() {
		return startIndex;
	}

	public void setStartIndex(int startIndex) {
		this.startIndex = startIndex;
	}



	public StudentOpt getStudentOpt() {
		return studentOpt;
	}

	public void setStudentOpt(StudentOpt studentOpt) {
		this.studentOpt = studentOpt;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Grade getGrade() {
		return grade;
	}

	public void setGrade(Grade grade) {
		this.grade = grade;
	}

	public Page getPage() {
		return page;
	}

	public void setPage(Page page) {
		this.page = page;
	}
	public List getList() {
		return list;
	}
	public void setList(List list) {
		this.list = list;
	}
	public Long getStudentId() {
		return studentId;
	}
	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}

}
