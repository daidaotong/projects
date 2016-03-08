package com.ddt.dao;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.ddt.bean.Score;
import com.ddt.bean.Student;
import com.ddt.daoInter.ScoreDaoInter;


public class ScoreDao extends HibernateDaoSupport implements ScoreDaoInter{
	// 增加成绩信息
	public void addScore(Score score){
		this.getHibernateTemplate().save(score);
	}
	// 查找全部成绩信息
	public List findAllScore(){
		return this.getHibernateTemplate().find("from Score");
	}
	//按条件id查找部分成绩信息
	public  Score findScoreById(Score score){
		return (Score)this.getHibernateTemplate().load(Score.class,score.getScid());
	}
	//修改成绩信息
	public void updateScore(Score score){
		
	}
	//删除成绩信息
	public void deleteScore(Score score){
		this.getHibernateTemplate().delete(score);
	}

}
