package chatapplication;

import java.awt.FlowLayout;
import java.awt.TextArea;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class ChatGUI  extends Thread
{
	ChatClient cc = new ChatClient();
	JFrame main = new JFrame("ChatApplication");
	JPanel textP = new JPanel();
	static TextArea text = new TextArea(15,50);
	
	JPanel p = new JPanel();
	JLabel ip = new JLabel("对方IP：");
	TextField ipText = new TextField(10);
	JLabel content = new JLabel("发送内容：");
	TextField contentText = new TextField(15);
	
	JPanel bp = new JPanel();
	JButton send = new JButton("发送");
	JButton jclose = new JButton("关闭");

	public ChatGUI()
	{
		main.setSize(400,370);
		main.setLocation(400,200);
		main.setResizable(false);
		main.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		textP.add(text);
		text.setEditable(false);
		
		p.add(ip);
		p.add(ipText);
		p.add(content);
		p.add(contentText);
		
		bp.add(send);
		bp.add(jclose);
		send.addActionListener(new SendListener());
		jclose.addActionListener(new CloseListener());
		
		main.add(textP,"North");
		main.add(p,"Center");
		main.add(bp,"South");
		main.setVisible(true);
		new ChatServer().startServer();
	}
	
	public class SendListener implements ActionListener
	{

		@Override
		public void actionPerformed(ActionEvent arg0) {
			// TODO Auto-generated method stub
			String serverIP = ipText.getText();
			String sendContent = contentText.getText();
			if(serverIP.equals(""))
			{
				final JDialog notice  = new JDialog(main,"提示");
				JButton ok = new JButton("确定");
				ok.addActionListener(new ActionListener(){
					public void actionPerformed(ActionEvent e) {
						notice.dispose();			
					}
				});
				JLabel txt = new JLabel("没有填写对方IP，请重新填写！");
				notice.setSize(200,100);
				notice.setLocation(400,200);
				notice.setLayout(new FlowLayout());
				notice.add(txt);
				notice.add(ok);
				notice.setModal(true);
				notice.setVisible(true);
			}	
			else if(sendContent.equals(""))
			{
				final JDialog notice  = new JDialog(main,"提示");
				JButton ok = new JButton("确定");
				ok.addActionListener(new ActionListener(){
					public void actionPerformed(ActionEvent e) {
						notice.dispose();			
					}
				});
				JLabel txt = new JLabel("没有填写发送内容，请重新填写！");
				notice.setSize(200,100);
				notice.setLocation(400,200);
				notice.setLayout(new FlowLayout());
				notice.add(txt);
				notice.add(ok);
				notice.setModal(true);
				notice.setVisible(true);
			}
			else
			{
				System.out.print("serverIP:"+serverIP);
				cc.serverIP = serverIP;
				//cc.clientSendContent = sendContent;
				cc.startClient(sendContent);
				text.append("本机：\n"+"   "+sendContent+"\n");
				contentText.setText("");
			}
		}
		
	}
	
	public class CloseListener implements ActionListener
	{

		@Override
		public void actionPerformed(ActionEvent arg0) {
			// TODO Auto-generated method stub
			main.dispose();
			System.exit(0);
		}
		
	}
	public static void main(String[] args)
	{
		ChatGUI cg = new ChatGUI();
	}
}
