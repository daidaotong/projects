package com.ddt.dao;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.ddt.bean.Score;
import com.ddt.bean.Student;
import com.ddt.daoInter.ScoreDaoInter;


public class ScoreDao extends HibernateDaoSupport implements ScoreDaoInter{
	// ���ӳɼ���Ϣ
	public void addScore(Score score){
		this.getHibernateTemplate().save(score);
	}
	// ����ȫ���ɼ���Ϣ
	public List findAllScore(){
		return this.getHibernateTemplate().find("from Score");
	}
	//������id���Ҳ��ֳɼ���Ϣ
	public  Score findScoreById(Score score){
		return (Score)this.getHibernateTemplate().load(Score.class,score.getScid());
	}
	//�޸ĳɼ���Ϣ
	public void updateScore(Score score){
		
	}
	//ɾ���ɼ���Ϣ
	public void deleteScore(Score score){
		this.getHibernateTemplate().delete(score);
	}

}
