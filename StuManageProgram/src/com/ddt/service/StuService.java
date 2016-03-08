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
	// ����ѧ����Ϣ
	public void addStudent(Student stu) {
		dao.addStudent(stu);
	}

	// ����ȫ��ѧ����Ϣ
	public List findAllStudent() {
		return dao.findAllStudent();

	}

	// ������id���Ҳ���ѧ��
	public Student findStudentById(Integer id) {
		return dao.findStudentById(id);
	}


	// �޸�ѧ����Ϣ
	public void updateStudent(Student stu) {
		dao.updateStudent(stu);
	}
	

	public void setDao(StuDaoInter dao) {
		this.dao = dao;
	}
	// ɾ��ѧ����Ϣ
	public void deleteStudent(Integer id) {
		// TODO Auto-generated method stub
		dao.deleteStudent(findStudentById(id));
	}
}
