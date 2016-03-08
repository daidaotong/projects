package common.ztb.test;

import java.io.IOException;

import org.apache.commons.dbcp.BasicDataSource;
import org.dbunit.database.DatabaseConnection;
import org.dbunit.dataset.DataSetException;
import org.dbunit.dataset.IDataSet;


public abstract class BaseDBUnitTest extends BaseDaoTest {

	protected DatabaseConnection connection;

	private BasicDataSource dataSource;
	
	public boolean  testmodel=false;

	public void setDataSource(BasicDataSource dataSource) {
		this.dataSource = dataSource;
	}

	protected void onSetUpBeforeTransaction() throws Exception {
		super.onSetUpBeforeTransaction();
		this.connection = new DatabaseConnection(dataSource.getConnection());
		IDataSet dataSet = this.getDataSet();
		if (dataSet != null) {
			if(testmodel){
			org.dbunit.ext.mssql.InsertIdentityOperation.CLEAN_INSERT.execute(
					this.connection, dataSet);
			}else{
				org.dbunit.ext.mssql.InsertIdentityOperation.CLEAN_INSERT.execute(
						this.connection, dataSet);
			}
		}
	}

	protected void onTearDownAfterTransaction() throws Exception {
		super.onTearDownAfterTransaction();
		IDataSet dataSet = this.getDataSet();
		if (dataSet != null) {
			if(testmodel){
			org.dbunit.ext.mssql.InsertIdentityOperation.DELETE_ALL.execute(
					connection, dataSet);
			}else{
				org.dbunit.ext.mssql.InsertIdentityOperation.NONE.execute(
						connection, dataSet);
			}
		}
		this.connection.close();
	}

	protected abstract IDataSet getDataSet() throws DataSetException,
			IOException;
}
