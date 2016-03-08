package com.ddt.bean;

/**
 * Score entity. @author MyEclipse Persistence Tools
 */

public class Score implements java.io.Serializable {

	// Fields

	private Integer scid;
	private Student student;
	private Course course;
	private String ename;
	private String escore;
	private String etwas;

	// Constructors

	/** default constructor */
	public Score() {
	}

	/** minimal constructor */
	public Score(Student student, Course course) {
		this.student = student;
		this.course = course;
	}

	/** full constructor */
	public Score(Student student, Course course, String ename, String escore,
			String etwas) {
		this.student = student;
		this.course = course;
		this.ename = ename;
		this.escore = escore;
		this.etwas = etwas;
	}

	// Property accessors

	public Integer getScid() {
		return this.scid;
	}

	public void setScid(Integer scid) {
		this.scid = scid;
	}

	public Student getStudent() {
		return this.student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Course getCourse() {
		return this.course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public String getEname() {
		return this.ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getEscore() {
		return this.escore;
	}

	public void setEscore(String escore) {
		this.escore = escore;
	}

	public String getEtwas() {
		return this.etwas;
	}

	public void setEtwas(String etwas) {
		this.etwas = etwas;
	}

}