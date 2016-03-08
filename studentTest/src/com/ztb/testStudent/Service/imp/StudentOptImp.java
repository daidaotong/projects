package com.ztb.testStudent.Service.imp;
import java.util.List;
import java.util.Map;
import org.springside.core.dao.Page;

import com.ztb.studentTest.model.Grade;
import com.ztb.studentTest.model.Student;
import com.ztb.testStudent.dao.persistence.StudentOptDao;

/**
 *@author zhouhong
 *@Email zhou__hong2006@126.com
 *@since Mar 16, 2009 2:58:47 PM 
 *@fileName StudentOptImp.java
 */
public class StudentOptImp implements StudentOpt{
private StudentOptDao studentDao;

	public StudentOptDao getStudentDao() {
	return studentDao;
}

public void setStudentDao(StudentOptDao studentDao) {
	this.studentDao = studentDao;
}

	public void add(Student stu) {
		studentDao.saveOrUpdate(stu);
	}
	public Grade addClass(Grade grade)
	{
		 studentDao.save(grade);
		 return grade;
	}
	
	

	public void del(Long studentId) {
		studentDao.removeById(studentId);
		
	}

	public List showStudents() {
		String hql="from Student";
		  return studentDao.find(hql);
		  }

	public void update(Student stu) {
		studentDao.update(stu);
	}
	public Page pagedQuery(String hql, int startIndex, int pageSize) {
		   String hqlstu="select a from Student as s";
		   return studentDao.pagedQuery(hqlstu,startIndex,pageSize);
	}
	public Student getStudentById(Long studentId) {
		return (Student) studentDao.get(studentId);
	}

}
