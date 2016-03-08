package com.ddt.service;

import java.util.List;

import com.ddt.bean.Student;
import com.ddt.daoInter.StuDaoInter;
import com.ddt.serviceInter.StuServiceInter;



public class StuService implements StuServiceInter {
	StuDaoInter dao;
	public StuService(){
		System.out.println("StuService construction!!!!!!!!!!!!!!!!!!!!!!!!!");
	}
	// 增加学生信息
	public void addStudent(Student stu) {
		dao.addStudent(stu);
	}

	// 查找全部学生信息
	public List findAllStudent() {
		return dao.findAllStudent();

	}

	// 按条件id查找部分学生
	public Student findStudentById(Integer id) {
		return dao.findStudentById(id);
	}


	// 修改学生信息
	public void updateStudent(Student stu) {
		dao.updateStudent(stu);
	}
	

	public void setDao(StuDaoInter dao) {
		this.dao = dao;
	}
	// 删除学生信息
	public void deleteStudent(Integer id) {
		// TODO Auto-generated method stub
		dao.deleteStudent(findStudentById(id));
	}
}
