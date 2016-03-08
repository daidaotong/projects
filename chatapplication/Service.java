package chatapplication;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;

public class Service implements Runnable
{
	private Socket s = null;
	
	public Service(Socket s)
	{
		this.s = s;
	}

	public void run() {
		try {
			InputStream is = s.getInputStream();
			BufferedReader br = new BufferedReader(new InputStreamReader(is));
			//while(true)
			//{
				String receiveContent = br.readLine();
				ChatGUI.text.append(s.getInetAddress().getHostAddress()+":\n");
				ChatGUI.text.append("   "+receiveContent+"\n");
			//}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
