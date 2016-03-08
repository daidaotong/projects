package com.ddt.bean;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Student entity. @author MyEclipse Persistence Tools
 */

public class Student implements java.io.Serializable {

	// Fields

	private Integer sid;
	private Clazz clazz;
	private String sname;
	private Integer ssex;
	private Integer sage;
	private Integer id;
	private String address;
	private String splace;
	private Integer xyid;
	private Integer zyid;
	private String party;
	private Date etime;
	private Integer state;
	private String etwas;
	private Set scores = new HashSet(0);

	// Constructors

	/** default constructor */
	public Student() {
	}

	/** minimal constructor */
	public Student(Integer zyid) {
		this.zyid = zyid;
	}

	/** full constructor */
	public Student(Clazz clazz, String sname, Integer ssex, Integer sage,
			Integer id, String address, String splace, Integer xyid,
			Integer zyid, String party, Date etime, Integer state,
			String etwas, Set scores) {
		this.clazz = clazz;
		this.sname = sname;
		this.ssex = ssex;
		this.sage = sage;
		this.id = id;
		this.address = address;
		this.splace = splace;
		this.xyid = xyid;
		this.zyid = zyid;
		this.party = party;
		this.etime = etime;
		this.state = state;
		this.etwas = etwas;
		this.scores = scores;
	}

	// Property accessors

	public Integer getSid() {
		return this.sid;
	}

	public void setSid(Integer sid) {
		this.sid = sid;
	}

	public Clazz getClazz() {
		return this.clazz;
	}

	public void setClazz(Clazz clazz) {
		this.clazz = clazz;
	}

	public String getSname() {
		return this.sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public Integer getSsex() {
		return this.ssex;
	}

	public void setSsex(Integer ssex) {
		this.ssex = ssex;
	}

	public Integer getSage() {
		return this.sage;
	}

	public void setSage(Integer sage) {
		this.sage = sage;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSplace() {
		return this.splace;
	}

	public void setSplace(String splace) {
		this.splace = splace;
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

	public String getParty() {
		return this.party;
	}

	public void setParty(String party) {
		this.party = party;
	}

	public Date getEtime() {
		return this.etime;
	}

	public void setEtime(Date etime) {
		this.etime = etime;
	}

	public Integer getState() {
		return this.state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

	public String getEtwas() {
		return this.etwas;
	}

	public void setEtwas(String etwas) {
		this.etwas = etwas;
	}

	public Set getScores() {
		return this.scores;
	}

	public void setScores(Set scores) {
		this.scores = scores;
	}

}