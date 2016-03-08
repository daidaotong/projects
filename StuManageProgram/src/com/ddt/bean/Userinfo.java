package com.ddt.bean;

/**
 * Userinfo entity. @author MyEclipse Persistence Tools
 */

public class Userinfo implements java.io.Serializable {

	// Fields
	
	private Integer uid;
	private String uname;
	private String upassword;
	/*
	 *0---学生
	 *1---管理员
	 *2--- 教师
	 **/
	private Integer ustate;

	// Constructors

	/** default constructor */
	public Userinfo() {
	}

	/** minimal constructor */
	public Userinfo(Integer uid) {
		this.uid = uid;
	}

	/** full constructor */
	public Userinfo(Integer uid, String uname, String upassword, Integer ustate) {
		this.uid = uid;
		this.uname = uname;
		this.upassword = upassword;
		this.ustate = ustate;
	}

	// Property accessors

	public Integer getUid() {
		return this.uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public String getUname() {
		return this.uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getUpassword() {
		return this.upassword;
	}

	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}

	public Integer getUstate() {
		return this.ustate;
	}

	public void setUstate(Integer ustate) {
		this.ustate = ustate;
	}

}