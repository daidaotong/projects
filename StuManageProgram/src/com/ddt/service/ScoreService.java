package com.ddt.service;

import java.util.List;

import com.ddt.bean.Score;
import com.ddt.daoInter.ScoreDaoInter;
import com.ddt.serviceInter.ScoreServiceInter;


public class ScoreService implements ScoreServiceInter {
	ScoreDaoInter dao;
	// 增加成绩信息
	public void addScore(Score score){
		dao.addScore(score);
	}
	// 查找全部成绩信息
	public List findAllScore(){
		return dao.findAllScore();
	}
	//按条件id查找部分成绩信息
	public  Score findScoreById(Score score){
		return dao.findScoreById(score);
	}
	//修改成绩信息
	public void updateScore(Score score){
		dao.updateScore(score);
	}
	//删除成绩信息
	public void deleteScore(Score score){
		dao.deleteScore(score);
	}
	
}
