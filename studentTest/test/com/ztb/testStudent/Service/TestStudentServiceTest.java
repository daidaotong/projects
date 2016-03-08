package com.ztb.testStudent.Service;
import java.io.IOException;
import java.util.List;

import org.dbunit.dataset.DataSetException;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.xml.FlatXmlDataSet;


import com.ztb.studentTest.model.Student;
import com.ztb.testStudent.dao.persistence.TestStudentDao;

import common.ztb.test.BaseDBUnitTest;


public class TestStudentServiceTest extends BaseDBUnitTest{
	private TestStudentService testStudentService;
	private TestStudentDao testStudentDao;

	@SuppressWarnings("static-access")
	public void testAddTestStudent() {
	//	testStudentService.addTestStudent(new Student(null,"aa",1,"11","11"));
	//	this.assertEquals(testStudentService.getAllTestStudent().size(),5);
		
		this.assertEquals(testStudentService.getAllTestStudent().size(),4);
		Student student = new Student();
		student.setStudentName("����");
		student.setStudentAge(20);
		student.setStudentSex("��");
		student.setStudentAddress("�人");
		testStudentService.addTestStudent(student);
	
	this.assertEquals(testStudentService.getAllTestStudent().size(),5);
	}


	public void testGetAllTestStudent() {
		
		testStudentService.getAllTestStudent();
	//	this.assertEquals(testStudentService.getAllTestStudent().size(),5);
	}


	public void testGetStudent() {
		Student student=testStudentService.getStudent(new Long(1002));
		this.assertEquals(student.getStudentName(), "����");
	}

	public void testdelStudent() {
		this.assertEquals(testStudentService.getAllTestStudent().size(),4);
		testStudentService.delTestStudent(new Long(1001));
		this.assertEquals(testStudentService.getAllTestStudent().size(),3);
		
	}

	public void testUpdatStudent() {
//		Student student=new Student();
//		student.setStudentName("����");
//		student.setStudentAge(20);
//		student.setStudentSex("��");
//		student.setStudentAddress("����");
//		testStudentService.updateTestStudent(student);
//		List list=testStudentService.getAllTestStudent();
//		Student ss=testStudentService.getStudent("����");
//		this.assertEquals(ss.getStudentAddress(),"����");
	
		Student student = testStudentService.getStudent(new Long(1001));
		student.setStudentName("����");
		testStudentService.updateTestStudent(student);
		student=testStudentService.getStudent(student.getStudentId());
		this.assertEquals(student.getStudentName() ,"����");
	}
	@Override
	protected IDataSet getDataSet() throws DataSetException, IOException {
		
		return new FlatXmlDataSet(this.getClass().getResourceAsStream("student.xml"));
	}

	public TestStudentService getTestStudentService() {
		return testStudentService;
	}

	public void setTestStudentService(TestStudentService testStudentService) {
		this.testStudentService = testStudentService;
	}

}
