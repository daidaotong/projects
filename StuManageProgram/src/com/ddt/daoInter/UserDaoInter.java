package com.ddt.daoInter;

import java.util.List;

import com.ddt.bean.Userinfo;

//import Bean.UserInfo;

public interface UserDaoInter {
	// ����ѧ����Ϣ
	public void addUser(Userinfo user);
	// ����ȫ��ѧ����Ϣ
	public List findAllUser();
	//������id���Ҳ���ѧ��
//	public  Student findUserById(Student stu);
	//�޸�ѧ����Ϣ
	public void updateUser(Userinfo user);
	//ɾ��ѧ����Ϣ
	public void deleteUser(Userinfo user); 
	//�����û�����ȡ�û���Ϣ
	public Userinfo getUser(String username);
}
