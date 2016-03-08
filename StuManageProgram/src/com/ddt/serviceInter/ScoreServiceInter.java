package com.ddt.serviceInter;

import java.util.List;

import com.ddt.bean.Score;


public interface ScoreServiceInter {
	// 增加成绩信息
	public void addScore(Score score);
	// 查找全部成绩信息
	public List findAllScore();
	//按条件id查找部分成绩信息
	public  Score findScoreById(Score score);
	//修改成绩信息
	public void updateScore(Score score);
	//删除成绩信息
	public void deleteScore(Score score); 
}
