package com.ddt.serviceInter;

import java.util.List;

import com.ddt.bean.Userinfo;
//import Bean.UserInfo;

public interface UserServiceInter {
	// �����û���Ϣ
	public void addUser(Userinfo user);
	// ����ȫ���û���Ϣ
	public List findAllUser();
	//������id���Ҳ���ѧ��
//	public  Student findUserById(Student stu);
	//�޸��û���Ϣ
	public void updateUser(Userinfo user);
	//ɾ���û���Ϣ
	public void deleteUser(Userinfo user); 
	//��֤�û���½��Ϣ
	public boolean login(String username, String password, int identify);

}
