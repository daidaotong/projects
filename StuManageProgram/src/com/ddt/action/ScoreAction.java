package com.ddt.action;

import java.util.List;

import org.apache.struts2.ServletActionContext;



import com.ddt.bean.Score;
import com.ddt.serviceInter.ScoreServiceInter;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class ScoreAction extends ActionSupport implements ModelDriven{
	private Score score=new Score();
	public  ScoreServiceInter service;
	public Score getScore() {
		return score;
	}
	public void setScore(Score score) {
		this.score = score;
	}
	public ScoreServiceInter getService() {
		return service;
	}
	public void setService(ScoreServiceInter service) {
		this.service = service;
	}
	//查找全部用户信息
	public String findAllScore(){
		List list=service.findAllScore();
		ServletActionContext.getRequest().setAttribute("list", list);
		return "success";
		
	}
	//增加用户信息 
	public String addScore(){
		service.addScore(score);
		return "success";
	}
	//删除用户信息
	public String deleteScore(){
		service.deleteScore(score);
		return "success";
	}
	//修改学生信息
	public String updateScore(){
		service.updateScore(score);
		return "success";
	}
	public Object getModel() {
		return null;
	}
	//按id查找
	
	public String findScoreById(){
		Score sco = service.findScoreById(score);
		ServletActionContext.getRequest().setAttribute("score",sco );
		return "success";
	}
	
	
	
	
	
	
	
	
}
