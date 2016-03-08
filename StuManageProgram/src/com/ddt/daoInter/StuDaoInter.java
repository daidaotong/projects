package com.ddt.daoInter;

import java.util.List;

import com.ddt.bean.Student;

public interface StuDaoInter {
	// 增加学生信息
	public boolean addStudent(Student stu);
	// 查找全部学生信息
	public List findAllStudent();
	//按条件id查找部分学生
	public  Student findStudentById(Integer id);
	//修改学生信息
	public void updateStudent(Student stu);
	//删除学生信息
	public void deleteStudent(Student stu); 
}
