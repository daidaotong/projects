package com.ztb.testStudent.Service.imp;

import java.util.List;
import java.util.Map;

import org.springside.core.dao.Page;

import com.ztb.studentTest.model.Grade;
import com.ztb.studentTest.model.Student;
public interface StudentOpt {
	public void add(Student stu);
	public void del(Long studentId);
	@SuppressWarnings("unchecked")
	public List showStudents();
	public void update(Student stu);
	public Page pagedQuery(String hql, int startIndex, int pageSize);
	public Student getStudentById(Long studentId);
//	public Map getClass();
	public Grade addClass(Grade grade);
}
