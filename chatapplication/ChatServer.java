package chatapplication;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class ChatServer {
	public void startServer()
	{
		try {
			ServerSocket ss = new ServerSocket(5000);
			while(true)
			{
				Socket s = ss.accept();
				new Thread(new Service(s)).start();
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
