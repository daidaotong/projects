package chatapplication;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;
import java.net.UnknownHostException;

public class ChatClient {
	String serverIP;
	//String clientSendContent;
	public void startClient(String clientSendContent)
	{
		try {
			InetAddress ina = InetAddress.getByName(serverIP);
			System.out.print(ina);
			Socket cs = new Socket(ina,5000);
			OutputStream cos = cs.getOutputStream();
			/*InputStream cis = cs.getInputStream();
			byte[] buff = new byte[100];
			int len = cis.read(buff);
			clientReceiveContent = new String(buff,len);*/
			cos.write(clientSendContent.getBytes());
			cos.close();
			//cis.close();
			cs.close();
			System.out.println(clientSendContent);
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
