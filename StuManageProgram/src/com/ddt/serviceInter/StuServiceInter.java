package com.ddt.serviceInter;

import java.util.List;

import com.ddt.bean.Student;


public interface StuServiceInter {
	public void addStudent(Student stu);
	// ����ȫ��ѧ����Ϣ
	public List findAllStudent();
	//������id���Ҳ���ѧ��
	public  Student findStudentById(Integer id);
	//�޸�ѧ����Ϣ
	public void updateStudent(Student stu);
	//ɾ��ѧ����Ϣ
	public void deleteStudent(Integer id); 
}
