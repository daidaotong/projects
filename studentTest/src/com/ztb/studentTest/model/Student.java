package com.ztb.studentTest.model;



/**
 * Student generated by MyEclipse - Hibernate Tools
 */

public class Student  implements java.io.Serializable {


    // Fields    

     private Long studentId;
     private String studentName;
     private Integer studentAge;
     private String studentSex;
     private String studentAddress;
     private Grade grade;


    // Constructors

  

	/** default constructor */
    public Student() {
    }

	/** minimal constructor */
    public Student(String studentSex) {
        this.studentSex = studentSex;
    }
    
    /** full constructor */
    public Student(String studentName, Integer studentAge, String studentSex, String studentAddress) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentSex = studentSex;
        this.studentAddress = studentAddress;
    }

   
    // Property accessors

    public Long getStudentId() {
        return this.studentId;
    }
    
    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return this.studentName;
    }
    
    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Integer getStudentAge() {
        return this.studentAge;
    }
    
    public void setStudentAge(Integer studentAge) {
        this.studentAge = studentAge;
    }

    public String getStudentSex() {
        return this.studentSex;
    }
    
    public void setStudentSex(String studentSex) {
        this.studentSex = studentSex;
    }

    public String getStudentAddress() {
        return this.studentAddress;
    }
    
    public void setStudentAddress(String studentAddress) {
        this.studentAddress = studentAddress;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }
   








}