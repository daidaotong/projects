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
		student.setStudentName("陈明");
		student.setStudentAge(20);
		student.setStudentSex("男");
		student.setStudentAddress("武汉");
		testStudentService.addTestStudent(student);
	
	this.assertEquals(testStudentService.getAllTestStudent().size(),5);
	}


	public void testGetAllTestStudent() {
		
		testStudentService.getAllTestStudent();
	//	this.assertEquals(testStudentService.getAllTestStudent().size(),5);
	}


	public void testGetStudent() {
		Student student=testStudentService.getStudent(new Long(1002));
		this.assertEquals(student.getStudentName(), "李四");
	}

	public void testdelStudent() {
		this.assertEquals(testStudentService.getAllTestStudent().size(),4);
		testStudentService.delTestStudent(new Long(1001));
		this.assertEquals(testStudentService.getAllTestStudent().size(),3);
		
	}

	public void testUpdatStudent() {
//		Student student=new Student();
//		student.setStudentName("张猛");
//		student.setStudentAge(20);
//		student.setStudentSex("男");
//		student.setStudentAddress("西安");
//		testStudentService.updateTestStudent(student);
//		List list=testStudentService.getAllTestStudent();
//		Student ss=testStudentService.getStudent("张猛");
//		this.assertEquals(ss.getStudentAddress(),"西安");
	
		Student student = testStudentService.getStudent(new Long(1001));
		student.setStudentName("王浩");
		testStudentService.updateTestStudent(student);
		student=testStudentService.getStudent(student.getStudentId());
		this.assertEquals(student.getStudentName() ,"王浩");
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
