function isBetween(val,lo,hi){
if ((val < lo) || (val > hi)) {return(false);}
else {return(true);}
}
<!---------------------------------------------------------> 

<!---isDate------------------------------------------------------>
function isDate(theStr){
    var the1st=theStr.indexOf('-');
    var the2nd=theStr.lastIndexOf('-');
    if (the1st==the2nd) {return(false);}
    else {
      var y=theStr.substring(0,the1st);
      var m=theStr.substring(the1st+1,the2nd);
      var d=theStr.substring(the2nd+1,theStr.length);
      var maxDays=31;
   if (isInt(m)==false || isInt(d)==false || isInt(y)==false){
      return(false);}
   else if (y.length < 4) {return (false);}
   else if (!isBetween(m,1,12)) {return(false);}
   else if (m==4 || m==6 ||m==9 || m==11) maxDays=30;
   else if (m==2) {
        if (y % 4> 0) maxDays = 28;
        else  if (y % 100 == 0 && y % 400 >0) maxDays = 28;
        else maxDays =29;
   }
   if (isBetween(d,1,maxDays) == false) {return(false);}
   else {return(true);}
     
    }
}    
function isDate2(theStr){
    var the1st=theStr.indexOf('-');
    var the2nd=theStr.lastIndexOf('-');
    if ((theStr == null) || (theStr.length == 0)){return(true);}
    else{
	    if (the1st==the2nd) {return(false);}
	    else {
	      var y=theStr.substring(0,the1st);
	      var m=theStr.substring(the1st+1,the2nd);
	      var d=theStr.substring(the2nd+1,theStr.length);
	      var maxDays=31;
	   if (isInt(m)==false || isInt(d)==false || isInt(y)==false){
	      return(false);}
	   else if (y.length < 4) {return (false);}
	   else if (!isBetween(m,1,12)) {return(false);}
	   else if (m==4 || m==6 ||m==9 || m==11) maxDays=30;
	   else if (m==2) {
	        if (y % 4> 0) maxDays = 28;
	        else  if (y % 100 == 0 && y % 400 >0) maxDays = 28;
	        else maxDays =29;
	   }
	   if (isBetween(d,1,maxDays) == false) {return(false);}
	   else {return(true);}
	     
	    }
	  }
}    
   
<!--------------------------------------------------------------->
   

<!----�ж��������ڵĴ�С--------------------��������ڱ�ǰ������ڴ��򷵻���---------------->
function compareDate(string1,string2){
	  var the1st=string1.indexOf('-');
    var the2nd=string1.lastIndexOf('-');
    var the3st=string2.indexOf('-');
    var the4nd=string2.lastIndexOf('-');
		var year1=string1.substring(0,the1st);
		var month1=string1.substring(the1st+1,the2nd);
		if (month1.length==1) month1=0+month1;
		var date1=string1.substring(the2nd+1,string1.length);
		if (date1.length==1) date1=0+date1;
		var year2=string2.substring(0,the3st);
		var month2=string2.substring(the3st+1,the4nd);
		if (month2.length==1) month2=0+month2;
		var date2=string2.substring(the4nd+1,string2.length);
		if (date2.length==1) date2=0+date2;
	  if (parseInt(year1+month1+date1)<=parseInt(year2+month2+date2)){return(true);}
		else{return(false);}
}
<!--------------------------------------------------------------->
<!----isTime------------------------------------------------------>
function isTime(theStr){
     var colonDex = theStr.indexOf(':');
     if ((colonDex< 1) || (colonDex>2)) {return(false);}
     else {
        var hh =theStr.substring(0,colonDex);
        var ss =theStr.substring(colonDex+1,theStr.length);
        if ((hh.length < 1) || (hh.length>2) || (!isInt(hh))) {return (false);}
        else if ((ss.length < 1) || (ss.length>2) || (!isInt(ss))) {return(false);}
        else if ((!isBetween(hh,0,23)) || (!isBetween(ss,0,59))) {return(false);}
        else {return(true);}
     }
}


<!-------�ж��Ƿ�����------------------------------------->
function isDigit(theNum) {
      var theMask ='-0123456789.';
      var temp;
      var flag;
      flag=true;
      if (isEmpty(theNum)) return (false);
      else  
      {
       for (var i=0;i<theNum.length;i++){
				temp=theNum.substring(i,i+1);
				if (theMask.indexOf(temp) == -1)
			  {
			  		flag=false;
			  		break;
			  }		
			 }
			 return(flag);		
			}
             
}
function isDigit2(theNum) {
      var theMask ='-0123456789';
      var temp;
      var flag;
      flag=true;
      if (isEmpty(theNum)) return (false);
      else  
      {
       for (var i=0;i<theNum.length;i++){
				temp=theNum.substring(i,i+1);
				if (theMask.indexOf(temp) == -1)
			  {
			  		
			  		flag=false;
			  		break;
			  		
			  }		
			 }
			 return(flag);		
			}
             
}

<!-------�ж��Ƿ�Ӣ���ַ�------------------------------------->
function isEn(theEn) {
      var theMask ='_zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP';
      var temp;
      var flag;
      flag=true;
      if (isEmpty(theEn)) return (false);
      else  
      {
       for (var i=0;i<theEn.length;i++){
				temp=theEn.substring(i,i+1);
				if (theMask.indexOf(temp) == -1)
			  {
			  		flag=false;
			  		break;
			  }		
			 }
			 return(flag);		
			}
             
}



<!------�ж��Ƿ�Ϊ�����ʼ���ַ----------------------------------------------------------->
function isEmail (theStr)
{
  var atIndex = theStr.indexOf('@');
  var dotIndex =theStr.indexOf('.',atIndex);
  var flag =true;
  theSub =theStr.substring(0,dotIndex +1);
  if  ((atIndex != theStr.lastIndexOf('@')) || (atIndex < 1) || (dotIndex < atIndex + 2) || (theStr.length <= theSub.length))
  { flag = false; }
  else { flag =true;}
  return (flag);
}

<!-----�ж��Ƿ�Ϊ��-------------------------------------------------------------------------------->
function isEmpty (str) 
{
  if ((str == null) || (str.length == 0)) return true;
   else return (false);
 }

<!-----�ж������Ƿ�Ϊ����------------------------------------------------------>
function isInt(theStr)
{
   var flag=true;
   if (isEmpty(theStr)) { flag=false;}
   else
   {
      for (var i=0;i < theStr.length;i++) 
      {
         if (isDigit2(theStr.substring(i,i+1)) == false)
            {
               flag=false;
               break;
             
             }  

       }<!--end for------------------------------>
   
    }
   return (flag);
 
}

<!---------------------------------------------------------------------------->

function isReal(theStr,decLen)
{
     var dotlst = theStr.indexOf('.');
     var dot2nd = theStr.lastIndexOf('.');
     if (theStr.lastIndexOf('-')>0){return false;}
     var ok =true;
     if (isEmpty(theStr)) return false;
     if (dotlst ==-1)
     {
        if (!isInt(theStr)) return (false);
        else return(true);
     }
     else if (dotlst !=dot2nd) return (false);
     else if (dotlst==0) return (false);
     else {

        var intpart = theStr.substring(0,dotlst);
        var decpart = theStr.substring (dot2nd +1);
        if (decpart.length > decLen) return (false);
        else if (!isInt(intpart) || !isInt(decpart)) return (false);
        else if (isEmpty(decpart)) return (false);
        else return(true);
     }     

}

<!---�ж�checkboxѡ�и���--------------------------->
<!-----------obj��ʾcheckbox�Ķ������ƣ�status������ʾ�Ƿ�Ҫ��ѡ��0Ϊ��ѡ----------------->
function ccBox(obj,status){
		var abc=obj+"1";
		if (abc=="undefined1"){
			alert("��ǰû����Ŀ��");
			return false;
		}else{
			var a=0;
			if (obj.length>=1){
				for(var i=0;i<obj.length;i++){
		  		if (obj[i].checked==true){
		  			a=a+1;
		  		}
				}
			}else{
		  		if (obj.checked==true){
		  			a=a+1;
				}
			}
			if (a==0){
				//alert("û��ѡ����Ŀ��");
				return false;	
			}
			if (status==0&&a>1){
				//alert("ֻ��ѡ��һ����Ŀ��");
				return false;
			}
		}
		return true;
}
<!-----------������ʾ�ķ���----------------->
function ccBoxMes(obj,status,str){
		var abc=obj+"1";
		if (abc=="undefined1"){
			alert("��ǰû�пɹ�ѡ���"+str+"��");
			return false;
		}else{
			var a=0;
			if (obj.length>=1){
				for(var i=0;i<obj.length;i++){
		  		if (obj[i].checked==true){
		  			a=a+1;
		  		}
				}
			}else{
		  		if (obj.checked==true){
		  			a=a+1;
				}
			}
			if (a==0){
				alert("û��ѡ��"+str+"��");
				return false;	
			}
			if (status==0&&a>1){
				alert("ֻ��ѡ��һ��"+str+"��");
				return false;
			}
		}
		return true;
}



//ȥ��β�ո�
function trim(str)
{
	for(var i = 0 ; i<str.length && str.charAt(i)==" " ; i++ ) ;
	for(var j =str.length; j>0 && str.charAt(j-1)==" " ; j--) ;
	if(i>j) return ""; 
	return str.substring(i,j); 
}


//���ҳ����Ԫ�ص��ж�
	function checkForm(obj){
		var m=obj.elements.length;
		for (var i=0;i<m;i++){
			var member=obj.elements[i];
			if(member.disabled==true){
				continue;
			}
			var mv=member.value;
			var tt=member.tt;//��ʾ�������� ��Ҫ�������ַ�st������dt������dg, Ӣ��en
			var kk=member.kk;//��ʾ�����Ƿ��ܲ��� 0Ϊ���ɲ��1Ϊ���Բ���
			var ts=member.ts;//��ʾ���Ԫ�ص���������
			var df=member.df;//��ʾ����Ϊ��ʱ��Ĭ��ֵ
			
			if(df+"1"=="undefined1"){
				df="";
			}
			if(kk+"1"!="undefined1"&&tt+"1"!="undefined1"&&ts+"1"!="undefined1"){
				if(kk==0&&trim(member.value)==""){
					member.value=df;
				}
				mv=trim(member.value);
				tt=trim(member.tt);
				kk=trim(member.kk);
				ts=trim(member.ts);
				if(mv==""&&kk==0){
					alert("��"+ts+"��Ϊ���������ȷ��д��");
					member.focus();
					return false;
					break;
				}
				if(mv!=""&&tt=="dt"){
					if(isDate(mv)==false){
						alert("��"+ts+"��Ϊ�����ͣ��磺1990-01-01��������ȷ��д��");
						member.focus();
						return false;
						break;
					}
				}
				if(mv!=""&&tt=="en"){
					if(isEn(mv)==false){
						alert("��"+ts+"��ӦΪӢ����ĸ�������Ǻ��֣�����ȷ��д��");
						member.focus();
						return false;
						break;
					}
				}
				if(mv!=""&&tt=="dg"){
					if(isReal(mv)==false){
						alert("��"+ts+"��ӦΪ���֣�����ȷ��д��");
						member.focus();
						return false;
						break;
					}
				}
				if(mv!=""&&tt=="zs"){
					if(isInt(mv)==false){
						alert("��"+ts+"��ӦΪ����������ȷ��д��");
						member.focus();
						return false;
						break;
					}
				}
				if(mv!=""&&tt=="em"){
					if(isEmail(mv)==false){
						alert("��"+ts+"��ӦΪEmail��ַ����(��:abc@123.com)������ȷ��д��");
						member.focus();
						return false;
						break;
					}
				}
				if(mv!=""&&tt=="sj"){
					if(isTime(mv)==false){
						alert("��"+ts+"��ӦΪʱ������(��:09:25)������ȷ��д��");
						member.focus();
						return false;
						break;
					}
				}
				if(mv!=""&&tt=="sf"){
					if(!(mv.length==15 || mv.length==18)){
						alert("��"+ts+"��ӦΪ15λ��18λ�����֤���룬����ȷ��д��");
						member.focus();
						return false;
						break;
					}
				}
				if(mv!=""&&tt=="dtsj"){
					var p=mv.indexOf(" ");
					if(p<0){
						alert("��"+ts+"��ӦΪ����ʱ�����ͣ��磺2000-01-01 09:00��������ȷ��д��");
						member.focus();
						return false;
						break;
					}else{
						var dtpart = mv.substring(0,p);
						var sjpart = mv.substring(p+1,mv.length);
						if(isDate(dtpart)==false||isTime(sjpart)==false){
							alert("��"+ts+"��ӦΪ����ʱ�����ͣ��磺2000-01-01 09:00��������ȷ��д��");
							member.focus();
							return false;
							break;
						}
					}
				}

			}
		}
		view_datasending();
		return true;
	}


function view_datasending(){
	try{
		document.all.datasending.style.visibility='visible';
	}catch(e){
		//alert(e+"��ʾ���ݷ��ͽ���������");
	}
}

<!---------------------------���õ������� Start--------------------------->
function js1_callpage(htmlurl) {
  var l=window.screen.width ;
  var w= window.screen.height; 
  var al=l/2-435;
  var aw=w/2-350;
  var newwin=window.open(htmlurl,"homeWin","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=880,height=600,top="+aw+",left="+al+"");
  newwin.focus();
  return false;
}

function js2_callpage(htmlurl) {
  var l=window.screen.width ;
  var w= window.screen.height; 
  var al=l/2-250;
  var aw=w/2-225;
  var newwin=window.open(htmlurl,"homeWin","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=632,height=550,top="+aw+",left="+al+"");
  newwin.focus();
  return false;
}

function js3_callpage(htmlurl) {
  var l=window.screen.width ;
  var w= window.screen.height; 
  var al=l/2-250;
  var aw=w/2-225;
  var newwin=window.open(htmlurl,"homeWin","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=432,height=350,top="+aw+",left="+al+"");
  newwin.focus();
  return false;
}

function js4_callpage(htmlurl) {
  var l=window.screen.width ;
  var w= window.screen.height; 
  var al=l/2-250;
  var aw=w/2-225;
  var newwin=window.open(htmlurl,"sonWin","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=432,height=350,top="+aw+",left="+al+"");
  newwin.focus();
  return false;
}
function js5_callpage(htmlurl) {
  var l=window.screen.width ;
  var w= window.screen.height; 
  var al=l/2-250;
  var aw=w/2-225;
  var newwin=window.open(htmlurl,"aaaWin","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=500,height=500,top="+aw+",left="+al+"");
  newwin.focus();
  return false;
}
function js6_callpage(htmlurl) {
  var newwin=window.open(htmlurl,"aaaWin","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1,height=1,top=1000,left=0");
  //newwin.focus();
  return false;
}
function js7_callpage(htmlurl) {
  var l=window.screen.width ;
  var w= window.screen.height; 
  var al=l/2-250;
  var aw=w/2-325;
  var newwin=window.open(htmlurl,"aaaWin","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=520,height=570,top="+aw+",left="+al+"");
  newwin.focus();
  return false;
}
function js_help_callpage(htmlurl) {
  var l=window.screen.width ;
  var w= window.screen.height; 
  var al=l/2-435;
  var aw=w/2-350;
  var newwin=window.open(htmlurl,"helpWin","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=Auto,resizable=yes,width=880,height=600,top="+aw+",left="+al+"");
  newwin.focus();
  return false;
}

//�µĵ������ڷ���������Ҫ����al��aw�еļ���ֵ��ֻ��Ҫ�ı��Ⱥ͸߶ȼ���
function call1_new(htmlurl) {
  var l=window.screen.width ;
  var w= window.screen.height; 
  var win_w=500;
  var win_h=400;
  var al=(l-win_w)/2;
  var aw=(w-win_h)/2;
  var newwin=window.open(htmlurl,"call1","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,resizable=yes,width="+win_w+",height="+win_h+",top="+aw+",left="+al+"");
  newwin.focus();
  return false;
}

<!---------------------------���õ������� End--------------------------->

<!--  
String.prototype.len=function(){  
return this.replace(/[^\x00-\xff]/g,"**").length;  
}  
 
//Set maxlength for multiline TextBox  
function setMaxLength(object,length)  
{ 
     
    var result = true;  
    var controlid = document.selection.createRange().parentElement().id;  
    var controlValue = document.selection.createRange().text;  
    var tempString=object.value; 
     
    var tt="";  
    for(var i=0;i<length;i++)  
        {  
            if(tt.len()<length)  
                tt=tempString.substr(0,i+1);  
            else  
                break;  
        }  
    if(tt.len()>length) 
        tt=tt.substr(0,tt.length-1); 
    object.value=tt; 
     
     
}  
 
//Check maxlength for multiline TextBox when paste  
function limitPaste(object,length)  
{  
        var tempLength = 0;  
        if(document.selection)  
        {  
            if(document.selection.createRange().parentElement().id == object.id)  
            {  
                tempLength = document.selection.createRange().text.len();  
            }  
        }  
        var tempValue = window.clipboardData.getData("Text");  
        tempLength = object.value.len() + tempValue.len() - tempLength;  
 
        if (tempLength > length)  
        {  
            tempLength -= length;  
            var tt="";  
            for(var i=0;i<tempValue.len()-tempLength;i++)  
                {  
                    if(tt.len()<(tempValue.len()-tempLength))  
                        tt=tempValue.substr(0,i+1);  
                    else  
                        break;  
                }  
            if(tt.len()<=0) 
            {     
                window.event.returnValue=false; 
                 
            } 
            else 
            { 
                tempValue=tt;  
                window.clipboardData.setData("Text", tempValue);  
                window.event.returnValue = true;  
            } 
        }  
     
 
}  
 
function PressLength() 
{ 
     
    if(event.srcElement.type=="text" || event.srcElement.type=="textarea" ) 
    { 
        if(event.srcElement.length!=null) 
            setMaxLength(event.srcElement,event.srcElement.length); 
         
    } 
} 
 
function LimitLength() 
{ 
 
    if(event.srcElement.type=="text" || event.srcElement.type=="textarea" ) 
    { 
        if(event.srcElement.length!=null) 
            limitPaste(event.srcElement,event.srcElement.length); 
    } 
} 
 
//-->  