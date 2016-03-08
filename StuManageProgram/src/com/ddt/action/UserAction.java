package com.ddt.action;

import java.util.List;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ddt.bean.Score;
import com.ddt.bean.Student;
import com.ddt.bean.Userinfo;
import com.ddt.service.UserService;
import com.ddt.serviceInter.UserServiceInter;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class UserAction extends ActionSupport implements ModelDriven {
	private Userinfo user;
	static private UserServiceInter service;
	private String uname;
	private String upassword;
	private int ustate;
	private String tags;

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public int getUstate() {
		return ustate;
	}

	public void setUstate(int ustate) {
		this.ustate = ustate;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getUpassword() {
		return upassword;
	}

	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}

	public Userinfo getUser() {
		return user;
	}

	public void setUser(Userinfo user) {
		this.user = user;
	}

	public void setService(UserServiceInter service) {
		this.service = service;
	}

	// 查找全部用户信息
	public String findAllUser() {
		List list = service.findAllUser();
		ServletActionContext.getRequest().setAttribute("list", list);
		return "success";

	}

	// 增加用户信息
	public String addUser() {
		service.addUser(user);
		return "success";
	}

	// 删除用户信息
	public String deleteUser() {
		service.deleteUser(user);
		return "success";
	}

	public Object getModel() {
		return user;
	}

	// 修改用户信息
	public String updateUser() {
		service.updateUser(user);
		return "success";
	}

	public String login() {
		System.out.println("login-----------------------------------------");
		System.out.println("uname: " + uname + " upassword: " + upassword
				+ " ustate: " + ustate);
		System.out.println("service: " + service);
		if (service.login(uname, upassword, ustate) == true) {
			switch (ustate) {
			case 0:
				return "main_student";
			case 1:
				return "main_admin";
			case 2:
				return "main_teacher";
			default:
				return "error";
			}
		} else {
			tags = "用户名或密码错误，请重新登录";
			return INPUT;
		}
	}
}
