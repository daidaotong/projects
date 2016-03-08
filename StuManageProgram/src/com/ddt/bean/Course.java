package com.ddt.bean;

import java.util.HashSet;
import java.util.Set;

/**
 * Course entity. @author MyEclipse Persistence Tools
 */

public class Course implements java.io.Serializable {

	// Fields

	private Integer eid;
	private String ename;
	private String tname;
	private Integer zyid;
	private Set scores = new HashSet(0);

	// Constructors

	/** default constructor */
	public Course() {
	}

	/** minimal constructor */
	public Course(Integer eid, Integer zyid) {
		this.eid = eid;
		this.zyid = zyid;
	}

	/** full constructor */
	public Course(Integer eid, String ename, String tname, Integer zyid,
			Set scores) {
		this.eid = eid;
		this.ename = ename;
		this.tname = tname;
		this.zyid = zyid;
		this.scores = scores;
	}

	// Property accessors

	public Integer getEid() {
		return this.eid;
	}

	public void setEid(Integer eid) {
		this.eid = eid;
	}

	public String getEname() {
		return this.ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getTname() {
		return this.tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public Integer getZyid() {
		return this.zyid;
	}

	public void setZyid(Integer zyid) {
		this.zyid = zyid;
	}

	public Set getScores() {
		return this.scores;
	}

	public void setScores(Set scores) {
		this.scores = scores;
	}

}