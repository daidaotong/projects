package com.ddt.daoInter;

import java.util.List;

import com.ddt.bean.Score;

public interface ScoreDaoInter {
	// ���ӳɼ���Ϣ
	public void addScore(Score score);
	// ����ȫ���ɼ���Ϣ
	public List findAllScore();
	//������id���Ҳ��ֳɼ���Ϣ
	public  Score findScoreById(Score score);
	//�޸ĳɼ���Ϣ
	public void updateScore(Score score);
	//ɾ���ɼ���Ϣ
	public void deleteScore(Score score); 
}
