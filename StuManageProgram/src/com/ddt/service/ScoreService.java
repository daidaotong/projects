package com.ddt.service;

import java.util.List;

import com.ddt.bean.Score;
import com.ddt.daoInter.ScoreDaoInter;
import com.ddt.serviceInter.ScoreServiceInter;


public class ScoreService implements ScoreServiceInter {
	ScoreDaoInter dao;
	// ���ӳɼ���Ϣ
	public void addScore(Score score){
		dao.addScore(score);
	}
	// ����ȫ���ɼ���Ϣ
	public List findAllScore(){
		return dao.findAllScore();
	}
	//������id���Ҳ��ֳɼ���Ϣ
	public  Score findScoreById(Score score){
		return dao.findScoreById(score);
	}
	//�޸ĳɼ���Ϣ
	public void updateScore(Score score){
		dao.updateScore(score);
	}
	//ɾ���ɼ���Ϣ
	public void deleteScore(Score score){
		dao.deleteScore(score);
	}
	
}
