package common.ztb.test;

import org.springframework.test.AbstractTransactionalDataSourceSpringContextTests;

/**
 * DaoTest基类. 默认载入/applicationContext*.xml<br>
 * 子类属�?�只须声明setter函数,就会自动进行注入<br>
 * 将OpenSessionInTest,并默认在每个测试方法结束时进行回�?<br>
 * �?,因为setup()函数包含了session管理流程，用户如果需要进行初始化设置�?<br>
 * 请重载{@link #onSetUpBeforeTransaction()}
 * 
 * @author Schweigen
 */
public class BaseDaoTest extends
		AbstractTransactionalDataSourceSpringContextTests {

	public BaseDaoTest() {
		// 默认为Rollback，如果希望默认提交测试结果，取消下句的注�?.
		 setDefaultRollback(false);
	}
	/**
	 * applicaitonContext配置文件 默认为applicationContext*.xml<br>
	 * 如果子函数需要限定载入的applicatonContext.xml,重载此函�?<br>
	 * 
	 * @see org.springframework.test.AbstractTransactionalDataSourceSpringContextTests#getConfigLocations()
	 */
	public String[] getConfigLocations() {
		this.setAutowireMode(AUTOWIRE_BY_NAME);
		
		return new String[] { "classpath*:resource/*.xml"};
	}
	protected void onSetUpBeforeTransaction() throws Exception {
	}
}
