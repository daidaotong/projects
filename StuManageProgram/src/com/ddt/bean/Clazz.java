package com.ddt.bean;

import java.util.HashSet;
import java.util.Set;

/**
 * Clazz entity. @author MyEclipse Persistence Tools
 */

public class Clazz implements java.io.Serializable {

	// Fields

	private Integer sclass;
	private Integer xyid;
	private Integer zyid;
	private Integer num;
	private Set students = new HashSet(0);

	// Constructors

	/** default constructor */
	public Clazz() {
	}

	/** minimal constructor */
	public Clazz(Integer sclass, Integer xyid, Integer zyid, Integer num) {
		this.sclass = sclass;
		this.xyid = xyid;
		this.zyid = zyid;
		this.num = num;
	}

	/** full constructor */
	public Clazz(Integer sclass, Integer xyid, Integer zyid, Integer num,
			Set students) {
		this.sclass = sclass;
		this.xyid = xyid;
		this.zyid = zyid;
		this.num = num;
		this.students = students;
	}

	// Property accessors

	public Integer getSclass() {
		return this.sclass;
	}

	public void setSclass(Integer sclass) {
//		int temp = Integer.parseInt(sclass);
		this.sclass = sclass;
	}

	public Integer getXyid() {
		return this.xyid;
	}

	public void setXyid(Integer xyid) {
		this.xyid = xyid;
	}

	public Integer getZyid() {
		return this.zyid;
	}

	public void setZyid(Integer zyid) {
		this.zyid = zyid;
	}

	public Integer getNum() {
		return this.num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	public Set getStudents() {
		return this.students;
	}

	public void setStudents(Set students) {
		this.students = students;
	}

}