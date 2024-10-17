


function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
//location.reload();	
/* document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];
 */
 location.reload();
//document.getElementById('0.3fr').style.display = "none";



}

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];

//////////////////////



function system(){

            document.getElementById('tfbody').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var M = document.getElementById('M1').value;			
			var m = document.getElementById('m1').value;
			var b = document.getElementById('bc').value;
            var l = document.getElementById('l1').value;
			var I = document.getElementById('I1').value;
						
	        //var T = document.getElementById('Ts').value;
						
			var g=9.8;
			
			var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
		    var a22=math.divide(math.round(math.multiply(math.divide(-math.multiply(math.add(I,math.multiply(m,l,l)),b),den),1000)),1000);
			
			var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b2=math.divide(math.round(math.multiply(math.divide(math.add(I,math.multiply(m,l,l)),den),1000)),1000);;
			
			var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			var a11=a13=a14=a21=a24=a31=a32=a33=a41=a44=b1=b3=c12=c13=c14=c21=c22=c24=d11=d21=0;
			var a12=a34=c11=c23=1;
			
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);
			var mC = math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			var mD = math.matrix([[d11], [d21]]);
			
			
			
			document.getElementById('matA').innerHTML = ' A =['+ a11+',\t'+a12+',\t'+a13+',\t'+a14+';\t\t'+a21+','+a22+',\t'+a23+',\t'+a24+';\t\t'+a31+',\t'+a32+',\t'+a33+',\t'+a34+';\t\t'+a41+',\t'+a42+',\t'+a43+',\t'+a44+']';
			document.getElementById('matB').innerHTML = ' B =['+ b1+';\t\t'+b2+';\t\t'+b3+';\t'+b4+']';
			document.getElementById('matC').innerHTML = ' C =['+ c11+',\t'+c12+',\t'+c13+',\t'+c14+';\t\t'+c21+','+c22+',\t'+c23+',\t'+c24+']';
			document.getElementById('matD').innerHTML = ' D =['+ d11+';\t\t'+d21+']';
			
			//outputText1=" G(s)= ["+b0+"s\u00B2+("+b1+")s+("+b2+ ")] / [" +a0+"s<sup>2</sup>+("+a1+")s+("+a2+ ")]";
			
			//matA = "A = ["+a11+","+a12+"
			
			console.log(den);
			
			console.log(a22);
			console.log(a23);
			console.log(b2);
			
			console.log(a42);
			console.log(a43);
			console.log(b4);
			
			document.getElementById('a_22').value = a22;
	        document.getElementById('a_23').value = a23;
	        document.getElementById('b_2').value = b2;
			
			document.getElementById('a_42').value = a42;
	        document.getElementById('a_43').value = a43;
	        document.getElementById('b_4').value = b4;
			
			var EVs=math.eigs(mA);
			console.log(EVs);
			var EV=EVs.values;
			console.log(EV);
			var EV1=math.divide(math.round(math.multiply(EVs.values._data[0],1000)),1000);
			var EV2=math.divide(math.round(math.multiply(EVs.values._data[1],1000)),1000);
			var EV3=math.divide(math.round(math.multiply(EVs.values._data[2],1000)),1000);
			var EV4=math.divide(math.round(math.multiply(EVs.values._data[3],1000)),1000);
			
			console.log(EV);
			console.log(EV1);
			console.log(EV2);
			console.log(EV3);
			console.log(EV4);
			
			
			
			E1="Eigen Value-1 = " +EV1+ "";
			E2="Eigen Value-2 = " +EV2+ "";
			E3="Eigen Value-3 = " +EV3+ "";
			E4="Eigen Value-4 = " +EV4+ "";
			
			/*document.getElementById("Eigen_Value1").innerHTML=E1;
			document.getElementById("Eigen_Value2").innerHTML=E2;
			document.getElementById("Eigen_Value3").innerHTML=E3;
			document.getElementById("Eigen_Value4").innerHTML=E4;*/
			
			document.getElementById('EigenValues').innerHTML = ' Eigen Values =['+ EV1+',\t'+EV2+',\t'+EV3+',\t'+EV4+']';
			
			document.getElementById("run1").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			
			
			
			
			/*
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
            var mC = math.matrix([[120, 90, 60], [80, 70, 40], [60, 40, 20]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);

            // Matrix Multiplication
            var AA = math.multiply(mA, mA);
			var AAA = math.multiply(mA, mA, mA);
			var AB = math.multiply(mA, mB);
			var AAB = math.multiply(AA, mB);
			var AAAB = math.multiply(AAA, mB);
			
			var Qc = math.matrix([mB, AB, AAB, AAAB]);
			
			

            // Result [800, 630, 380]
	        console.log(AA);
			console.log(AAA);
			console.log(AB);
			console.log(AAB);
			console.log(AAAB);
			console.log(Qc);
			console.log(mB[0]);
			*/
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			//outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			//outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			}

function EP(){
	document.getElementById('tfbody11').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var P1 = document.getElementById('np1').value;			
			var P2 = document.getElementById('np2').value;
			var P3 = document.getElementById('np3').value;
            var P4 = document.getElementById('np4').value;
			
			DP1="Desired Pole 1 = " +P1+ "";
			DP2="Desired Pole 2 = " +P2+ "";
			DP3="Desired Pole 3 = " +P3+ "";
			DP4="Desired Pole 4 = " +P4+ "";
			
			//document.getElementById("run2").style.display="block";			
			document.getElementById('db1').style.display="block";
			
			/*document.getElementById("Pole_Value1").innerHTML=DP1;
			document.getElementById("Pole_Value2").innerHTML=DP2;
			document.getElementById("Pole_Value3").innerHTML=DP3;
			document.getElementById("Pole_Value4").innerHTML=DP4;*/
			
			
			
			
}

////////////////////
    var Cntrl_Test1;
	var Cntrl_Test2;
	var Cntrl_Test3;
function CNTR(){

	
	
	
	 document.getElementById('tfbody3').style.display = "block"; 
	 
	 
	 
            var M = document.getElementById('M1').value;			
			var m = document.getElementById('m1').value;
			var b = document.getElementById('bc').value;
            var l = document.getElementById('l1').value;
			var I = document.getElementById('I1').value;
			
			var P1 = document.getElementById('np1').value;			
			var P2 = document.getElementById('np2').value;
			var P3 = document.getElementById('np3').value;
            var P4 = document.getElementById('np4').value;
			
			var p1=-P1;
			var p2=-P2;
			var p3=-P3;
			var p4=-P4;
						
	        //var T = document.getElementById('Ts').value;
						
			var g=9.8;
			
			var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
		    var a22=math.divide(math.round(math.multiply(math.divide(-math.multiply(math.add(I,math.multiply(m,l,l)),b),den),1000)),1000);
			
			var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);
			var b2=math.divide(math.round(math.multiply(math.divide(math.add(I,math.multiply(m,l,l)),den),1000)),1000);
			
			var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);
			var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);
			var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);
			
			var a11=a13=a14=a21=a24=a31=a32=a33=a41=a44=b1=b3=c12=c13=c14=c21=c22=c24=0;
			var a12=a34=c11=c23=1;
			
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);
			var mC= math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			
			var aa11= a11*a11+a12*a21+a13*a31+a14*a41;
			var aa12= a11*a12+a12*a22+a13*a32+a14*a42;
			var aa13= a11*a13+a12*a23+a13*a33+a14*a43;
			var aa14= a11*a14+a12*a24+a13*a34+a14*a44;
		
			var aa21= a21*a11 +a22*a21 +a23*a31 +a24*a41;
			var aa22= a21*a12 +a22*a22 +a23*a32 +a24*a42;
			var aa23= a21*a13 +a22*a23 +a23*a33 +a24*a43;
			var aa24= a21*a14 +a22*a24 +a23*a34 +a24*a44;
			
			var aa31= a31*a11 +a32*a21 +a33*a31 +a34*a41;
			var aa32= a31*a12 +a32*a22 +a33*a32 +a34*a42;
			var aa33= a31*a13 +a32*a23 +a33*a33 +a34*a43;
			var aa34= a31*a14 +a32*a24 +a33*a34 +a34*a44;
			
			var aa41= a41*a11 +a42*a21 +a43*a31 +a44*a41;
			var aa42= a41*a12 +a42*a22 +a43*a32 +a44*a42;
			var aa43= a41*a13 +a42*a23 +a43*a33 +a44*a43;
			var aa44= a41*a14 +a42*a24 +a43*a34 +a44*a44;
			
			///////////////////////////////////////////
			
			var aaa11= a11*aa11+a12*aa21+a13*aa31+a14*aa41;
			var aaa12= a11*aa12+a12*aa22+a13*aa32+a14*aa42;
			var aaa13= a11*aa13+a12*aa23+a13*aa33+a14*aa43;
			var aaa14= a11*aa14+a12*aa24+a13*aa34+a14*aa44;
		
			var aaa21= a21*aa11 +a22*aa21 +a23*aa31 +a24*aa41;
			var aaa22= a21*aa12 +a22*aa22 +a23*aa32 +a24*aa42;
			var aaa23= a21*aa13 +a22*aa23 +a23*aa33 +a24*aa43;
			var aaa24= a21*aa14 +a22*aa24 +a23*aa34 +a24*aa44;
			
			var aaa31= a31*aa11 +a32*aa21 +a33*aa31 +a34*aa41;
			var aaa32= a31*aa12 +a32*aa22 +a33*aa32 +a34*aa42;
			var aaa33= a31*aa13 +a32*aa23 +a33*aa33 +a34*aa43;
			var aaa34= a31*aa14 +a32*aa24 +a33*aa34 +a34*aa44;
			
			var aaa41= a41*aa11 +a42*aa21 +a43*aa31 +a44*aa41;
			var aaa42= a41*aa12 +a42*aa22 +a43*aa32 +a44*aa42;
			var aaa43= a41*aa13 +a42*aa23 +a43*aa33 +a44*aa43;
			var aaa44= a41*aa14 +a42*aa24 +a43*aa34 +a44*aa44;
			
			//////////////////////////////////////////////
			
			var ab1= math.divide(math.round(math.multiply(b1*a11 +b2*a12 +b3*a13 +b4*a14,1000)),1000);
			var ab2= math.divide(math.round(math.multiply(b1*a21 +b2*a22 +b3*a23 +b4*a24,1000)),1000);
			var ab3= math.divide(math.round(math.multiply(b1*a31 +b2*a32 +b3*a33 +b4*a34,1000)),1000);
			var ab4= math.divide(math.round(math.multiply(b1*a41 +b2*a42 +b3*a43 +b4*a44,1000)),1000);
			
			////////////////////////////////////////////////
			
			var aab1= math.divide(math.round(math.multiply(b1*aa11 +b2*aa12 +b3*aa13 +b4*aa14,1000)),1000);
			var aab2= math.divide(math.round(math.multiply(b1*aa21 +b2*aa22 +b3*aa23 +b4*aa24,1000)),1000);
			var aab3= math.divide(math.round(math.multiply(b1*aa31 +b2*aa32 +b3*aa33 +b4*aa34,1000)),1000);
			var aab4= math.divide(math.round(math.multiply(b1*aa41 +b2*aa42 +b3*aa43 +b4*aa44,1000)),1000);
			
			/////////////////////////////////////////////
			
			var aaab1= math.divide(math.round(math.multiply(b1*aaa11 +b2*aaa12 +b3*aaa13 +b4*aaa14,1000)),1000);
			var aaab2= math.divide(math.round(math.multiply(b1*aaa21 +b2*aaa22 +b3*aaa23 +b4*aaa24,1000)),1000);
			var aaab3= math.divide(math.round(math.multiply(b1*aaa31 +b2*aaa32 +b3*aaa33 +b4*aaa34,1000)),1000);
			var aaab4= math.divide(math.round(math.multiply(b1*aaa41 +b2*aaa42 +b3*aaa43 +b4*aaa44,1000)),1000);
			
			//////////////////////////////////////////////
			var B= math.matrix([b1, b2, b3, b4]);
			var AB= math.matrix([ab1,ab2, ab3, ab4]);
			var AAB= math.matrix([aab1, aab2, aab3, aab4]);
			var AAAB= math.matrix([aaab1, aaab2, aaab3, aaab4]);
			
			document.getElementById('matQcB').innerHTML = 'B ='+ B;
			document.getElementById('matQcAB').innerHTML = ' AB ='+ AB;
			document.getElementById('matQcAAB').innerHTML = ' A<sup>2</sup>B ='+ AAB;
			document.getElementById('matQcAAAB').innerHTML = ' A<sup>3</sup>B ='+ AAAB;
			
			//var Qc1= math.matrix([[0, 1.818, -0.331, 12.209], [1.818, -0.331, 12.209, -4.433], [0, 4.545, -0.827, 141.873], [4.545, -0.827, 141.873, -31.349]]);
			//var DQc1=math.det(Qc1);
			//console.log(DQc1);
			
			var Qc= math.matrix([[b1, ab1, aab1, aaab1],[b2, ab2, aab2, aaab2],[b3, ab3, aab3, aaab3],[b4, ab4, aab4, aaab4]]);
			
			document.getElementById('matQc').innerHTML = ' Q<sub>c</sub> =['+ b1+',\t'+ab1+',\t'+aab1+',\t'+aaab1+';\t\t'+b2+','+ab2+',\t'+aab2+',\t'+aaab2+';\t\t'+b3+',\t'+ab3+',\t'+aab3+',\t'+aaab3+';\t\t'+b4+',\t'+ab4+',\t'+aab4+',\t'+aaab4+']'
			
			var DQc= math.divide(math.round(math.multiply(math.det(Qc),1000)),1000);
			console.log(DQc);
			//document.getElementById('RQc').value = 4;
			//DQc=0;
			
			if (DQc!=0)
			{  Cntrl_Test1=" Rank of Q<sub>c</sub> = Order of A = n = 4";			   
			   Cntrl_Test2="Determinent of Q<sub>c</sub> = " +DQc+ "";				    
			   Cntrl_Test3=" System is completely controllable";
			   document.getElementById("Cntrl_Test1").innerHTML=Cntrl_Test1;
			   document.getElementById("Cntrl_Test2").innerHTML=Cntrl_Test2;
			   document.getElementById("Cntrl_Test3").innerHTML=Cntrl_Test3;
			   
			   var p1p2p3p4 = math.multiply(p1,p2,p3,p4);
			   var a23b4 = math.multiply(a23,b4);
			   var a43b2 = math.multiply(a43,b2);
			   
			   //var k1 = math.divide(p1p2p3p4, math.add(a23b4,-a43b2));
			   
			   var k1=math.divide(math.round(math.multiply(math.divide(p1p2p3p4, math.add(a23b4,-a43b2)),1000)),1000);
			   
			   var k2 = math.divide(math.round(math.multiply(math.divide(math.add(p1,p2,p3,p4,a22),b2),1000)),1000);
			   
			   var p123 = math.multiply(p1,p2,p3);
			   var p124 = math.multiply(p1,p2,p4);
			   var p234 = math.multiply(p2,p3,p4);
			   var p134 = math.multiply(p1,p3,p4);
			   
			   var a42a23 = math.multiply(a42,a23);
			   var a43b2k2 = math.multiply(a43,b2,k2);
			   var a22a43 = math.multiply(a22,a43);
			   var a23b4k2 = math.multiply(a23,b4,k2);
			   
			   var num3 = math.add(p123,p124,p234,p134,a42a23,a43b2k2,-a22a43,-a23b4k2);
			   
			   var a42b2 = math.multiply(a42,b2);
			   var b2b4k2 = math.multiply(b2,b4,k2);
			   var a22b4 = math.multiply(a22,b4);
			   
			   var den3 = math.add(a42b2,b2b4k2,-a22b4,b2b4k2);
		   
			   var k3 = math.divide(math.round(math.multiply(math.divide(num3,den3),1000)),1000);
			   
			   var p12 = math.multiply(p1,p2);
			   var p13 = math.multiply(p1,p3);
			   var p14 = math.multiply(p1,p4);
			   var p23 = math.multiply(p2,p3);
			   var p24 = math.multiply(p2,p4);
			   var p34 = math.multiply(p3,p4);
			   
			   var b4k2 = math.multiply(b4,k2);
			   var b2k1 = math.multiply(b2,k1);
			   
			   var num4 = math.add(p12,p13,p14,p23,p24,p34,a43,-b4k2,-b2k1);
			   var den4 = math.add(a42b2,-b2b4k2);
			   
			   var k4 = math.divide(math.round(math.multiply(math.divide(num4,den4),1000)),1000);
			   
			   
			   console.log(k1);
			   console.log(k2);
			   console.log(k3);
			   console.log(k4);
			   
			  /* K1="Feedback gain k1 = " +k1+ "";
			   
			   document.getElementById("Feedback_gain_Value1").innerHTML=K1;
			   
			   K2="Feedback gain k2 = " +k2+ "";
			   
			   document.getElementById("Feedback_gain_Value2").innerHTML=K2;
			   
			   K3="Feedback gain k3 = " +k3+ "";
			   
			   document.getElementById("Feedback_gain_Value3").innerHTML=K3;
			   
			   
			   K4="Feedback gain k4 = " +k4+ "";
			   
			   document.getElementById("Feedback_gain_Value4").innerHTML=K4; */
			   
			   var K = math.matrix([[ k1, k2, k3, k4]]);
			   
			   console.log(K);
			   
			   
			   
			  // Kfb="Feedback gain K = " +K+ "";
			   
			   //document.getElementById("Feedback_gain_Value_K").innerHTML=Kfb;
			   
			   document.getElementById('Feedback_gain_Value_K').innerHTML = ' Feedback Gain Values K =['+ k1+',\t'+k2+',\t'+k3+',\t'+k4+']';
			   
			   
			   
			}
			   else 
			   {   Cntrl_Test1=" Rank of Q<sub>c</sub> < Order of A = n = 4";
		           Cntrl_Test2="Determinent of Q<sub>c</sub> = " +DQc+ "";		
			       Cntrl_Test3=" System is not controllable";
			       document.getElementById("Cntrl_Test1").innerHTML=Cntrl_Test1;
				   document.getElementById("Cntrl_Test2").innerHTML=Cntrl_Test2;
				   document.getElementById("Cntrl_Test3").innerHTML=Cntrl_Test3;
			   }
		
}
function showRank(){
document.getElementById("Cntrl_Test1").style.display="block";	
}

function showDetQc(){
document.getElementById("Cntrl_Test2").style.display="block";	
}

function showinfo(){
document.getElementById("Cntrl_Test3").style.display="block";
}

function GVc(){
document.getElementById("Feedback_gain_Value_K").style.display="block";

}

var Obsrl_Test5;
var Obsrl_Test6;
var Obsrl_Test7;

function OBSR(){
	/*var Obsrl_Test1;
	var Obsrl_Test2;
	var Obsrl_Test3;
	var Obsrl_Test4;
	var Obsrl_Test5;
	var Obsrl_Test6;*/
	
	 document.getElementById('tfbody4').style.display = "block";
	
	        var M = document.getElementById('M1').value;			
			var m = document.getElementById('m1').value;
			var b = document.getElementById('bc').value;
            var l = document.getElementById('l1').value;
			var I = document.getElementById('I1').value;
						
			var P1 = document.getElementById('np1').value;			
			var P2 = document.getElementById('np2').value;
			var P3 = document.getElementById('np3').value;
            var P4 = document.getElementById('np4').value;
			
			var p1=-P1;
			var p2=-P2;
			var p3=-P3;
			var p4=-P4;
			
	        //var T = document.getElementById('Ts').value;
						
			var g=9.8;
			
			var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
		    var a22=math.divide(math.round(math.multiply(math.divide(-math.multiply(math.add(I,math.multiply(m,l,l)),b),den),1000)),1000);
			
			var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b2=math.divide(math.round(math.multiply(math.divide(math.add(I,math.multiply(m,l,l)),den),1000)),1000);;
			
			var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			var a11=a13=a14=a21=a24=a31=a32=a33=a41=a44=b1=b3=c12=c13=c14=c21=c22=c24=0;
			var a12=a34=c11=c23=1;
			
			
			var aa11= a11*a11+a12*a21+a13*a31+a14*a41;
			var aa12= a11*a12+a12*a22+a13*a32+a14*a42;
			var aa13= a11*a13+a12*a23+a13*a33+a14*a43;
			var aa14= a11*a14+a12*a24+a13*a34+a14*a44;
		
			var aa21= a21*a11 +a22*a21 +a23*a31 +a24*a41;
			var aa22= a21*a12 +a22*a22 +a23*a32 +a24*a42;
			var aa23= a21*a13 +a22*a23 +a23*a33 +a24*a43;
			var aa24= a21*a14 +a22*a24 +a23*a34 +a24*a44;
			
			var aa31= a31*a11 +a32*a21 +a33*a31 +a34*a41;
			var aa32= a31*a12 +a32*a22 +a33*a32 +a34*a42;
			var aa33= a31*a13 +a32*a23 +a33*a33 +a34*a43;
			var aa34= a31*a14 +a32*a24 +a33*a34 +a34*a44;
			
			var aa41= a41*a11 +a42*a21 +a43*a31 +a44*a41;
			var aa42= a41*a12 +a42*a22 +a43*a32 +a44*a42;
			var aa43= a41*a13 +a42*a23 +a43*a33 +a44*a43;
			var aa44= a41*a14 +a42*a24 +a43*a34 +a44*a44;
			
			///////////////////////////////////////////
			
			var aaa11= a11*aa11+a12*aa21+a13*aa31+a14*aa41;
			var aaa12= a11*aa12+a12*aa22+a13*aa32+a14*aa42;
			var aaa13= a11*aa13+a12*aa23+a13*aa33+a14*aa43;
			var aaa14= a11*aa14+a12*aa24+a13*aa34+a14*aa44;
		
			var aaa21= a21*aa11 +a22*aa21 +a23*aa31 +a24*aa41;
			var aaa22= a21*aa12 +a22*aa22 +a23*aa32 +a24*aa42;
			var aaa23= a21*aa13 +a22*aa23 +a23*aa33 +a24*aa43;
			var aaa24= a21*aa14 +a22*aa24 +a23*aa34 +a24*aa44;
			
			var aaa31= a31*aa11 +a32*aa21 +a33*aa31 +a34*aa41;
			var aaa32= a31*aa12 +a32*aa22 +a33*aa32 +a34*aa42;
			var aaa33= a31*aa13 +a32*aa23 +a33*aa33 +a34*aa43;
			var aaa34= a31*aa14 +a32*aa24 +a33*aa34 +a34*aa44;
			
			var aaa41= a41*aa11 +a42*aa21 +a43*aa31 +a44*aa41;
			var aaa42= a41*aa12 +a42*aa22 +a43*aa32 +a44*aa42;
			var aaa43= a41*aa13 +a42*aa23 +a43*aa33 +a44*aa43;
			var aaa44= a41*aa14 +a42*aa24 +a43*aa34 +a44*aa44;
			
			//////////////////////////////////////////////
			
			var ca11= math.divide(math.round(math.multiply(c11*a11 +c12*a21 +c13*a31 +c14*a41,1000)),1000);
			var ca12= math.divide(math.round(math.multiply(c11*a12 +c12*a22 +c13*a32 +c14*a42,1000)),1000);
			var ca13= math.divide(math.round(math.multiply(c11*a13 +c12*a23 +c13*a33 +c14*a43,1000)),1000);
			var ca14= math.divide(math.round(math.multiply(c11*a14 +c12*a24 +c13*a34 +c14*a44,1000)),1000);
			
			var ca21= math.divide(math.round(math.multiply(c21*a11 +c22*a21 +c23*a31 +c24*a41,1000)),1000);
			var ca22= math.divide(math.round(math.multiply(c21*a12 +c22*a22 +c23*a32 +c24*a42,1000)),1000);
			var ca23= math.divide(math.round(math.multiply(c21*a13 +c22*a23 +c23*a33 +c24*a43,1000)),1000);
			var ca24= math.divide(math.round(math.multiply(c21*a14 +c22*a24 +c23*a34 +c24*a44,1000)),1000);
			
			////////////////////////////////////////////////
			
			var caa11= math.divide(math.round(math.multiply(c11*aa11 +c12*aa21 +c13*aa31 +c14*aa41,1000)),1000);
			var caa12= math.divide(math.round(math.multiply(c11*aa12 +c12*aa22 +c13*aa32 +c14*aa42,1000)),1000);
			var caa13= math.divide(math.round(math.multiply(c11*aa13 +c12*aa23 +c13*aa33 +c14*aa43,1000)),1000);
			var caa14= math.divide(math.round(math.multiply(c11*aa14 +c12*aa24 +c13*aa34 +c14*aa44,1000)),1000);
			
			var caa21= math.divide(math.round(math.multiply(c21*aa11 +c22*aa21 +c23*aa31 +c24*aa41,1000)),1000);
			var caa22= math.divide(math.round(math.multiply(c21*aa12 +c22*aa22 +c23*aa32 +c24*aa42,1000)),1000);
			var caa23= math.divide(math.round(math.multiply(c21*aa13 +c22*aa23 +c23*aa33 +c24*aa43,1000)),1000);
			var caa24= math.divide(math.round(math.multiply(c21*aa14 +c22*aa24 +c23*aa34 +c24*aa44,1000)),1000);
			
			/////////////////////////////////////////////
			
			var caaa11= math.divide(math.round(math.multiply(c11*aaa11 +c12*aaa21 +c13*aaa31 +c14*aaa41,1000)),1000);
			var caaa12= math.divide(math.round(math.multiply(c11*aaa12 +c12*aaa22 +c13*aaa32 +c14*aaa42,1000)),1000);
			var caaa13= math.divide(math.round(math.multiply(c11*aaa13 +c12*aaa23 +c13*aaa33 +c14*aaa43,1000)),1000);
			var caaa14= math.divide(math.round(math.multiply(c11*aaa14 +c12*aaa24 +c13*aaa34 +c14*aaa44,1000)),1000);
			
			var caaa21= math.divide(math.round(math.multiply(c21*aaa11 +c22*aaa21 +c23*aaa31 +c24*aaa41,1000)),1000);
			var caaa22= math.divide(math.round(math.multiply(c21*aaa12 +c22*aaa22 +c23*aaa32 +c24*aaa42,1000)),1000);
			var caaa23= math.divide(math.round(math.multiply(c21*aaa13 +c22*aaa23 +c23*aaa33 +c24*aaa43,1000)),1000);
			var caaa24= math.divide(math.round(math.multiply(c21*aaa14 +c22*aaa24 +c23*aaa34 +c24*aaa44,1000)),1000);
			
			//////////////////////////////////////////////
			var C= math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			var CA= math.matrix([[ca11, ca12, ca13, ca14],[ca21, ca22, ca23, ca24]]);
			var CAA= math.matrix([[caa11, caa12, caa13, caa14],[caa21, caa22, caa23, caa24]]);
			var CAAA= math.matrix([[caaa11, caaa12, caaa13, caaa14],[caaa21, caaa22, caaa23, caaa24]]);
			
			
			
			//var Qc1= math.matrix([[0, 1.818, -0.331, 12.209], [1.818, -0.331, 12.209, -4.433], [0, 4.545, -0.827, 141.873], [4.545, -0.827, 141.873, -31.349]]);
			//var DQc1=math.det(Qc1);
			//console.log(DQc1);
			
			var Qoo= math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24],[ca11, ca12, ca13, ca14],[ca21, ca22, ca23, ca24]]);
			
			document.getElementById('matQo').innerHTML = 'Q<sub>o</sub> =['+ c11+',\t'+c12+',\t'+c13+',\t'+c14+';\t\t'+c21+','+c22+',\t'+c23+',\t'+c24+';\t'+ ca11+',\t'+ca12+',\t'+ca13+',\t'+ca14+';\t\t'+ca21+','+ca22+',\t'+ca23+',\t'+ca24+']'
			
			var DQoo= math.divide(math.round(math.multiply(math.det(Qoo),1000)),1000);
			console.log(DQoo);
			
			//document.getElementById('Qoo').value = DQoo;
			
			
			var Qo1= math.matrix([[c11, c12, c13, c14],[ca11, ca12, ca13, ca14],[caa11, caa12, caa13, caa14],[caaa11, caaa12, caaa13, caaa14]]);
			var DQo1=math.det(Qo1);
			console.log(DQo1);
			
			//document.getElementById('Qo1').value = DQo1;
			
			
			var Qo2= math.matrix([[c21, c22, c23, c24],[ca21, ca22, ca23, ca24],[caa21, caa22, caa23, caa24],[caaa21, caaa22, caaa23, caaa24]]);
			var DQo2=math.det(Qo2);
			console.log(DQo2);
			
			//document.getElementById('Qo2').value = DQo2;
			
			//document.getElementById('Qo3').value = DQo2;
			
			console.log(Qoo);
			console.log(Qo1);
			console.log(Qo2);
			
			var Qo3= math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24],[ca11, ca12, ca13, ca14],[ca21, ca22, ca23, ca24], [caa11, caa12, caa13, caa14],[caa21, caa22, caa23, caa24],[caa11, caa12, caa13, caa14],[caaa11, caaa12, caaa13, caaa14]]);
			
			console.log(Qo3);
			
			document.getElementById('matQoC').innerHTML = ' C =['+ c11+',\t'+c12+',\t'+c13+',\t'+c14+';\t\t'+c21+','+c22+',\t'+c23+',\t'+c24+']'
			document.getElementById('matQoCA').innerHTML = ' CA =['+ ca11+',\t'+ca12+',\t'+ca13+',\t'+ca14+';\t\t'+ca21+','+ca22+',\t'+ca23+',\t'+ca24+']'
			document.getElementById('matQoCAA').innerHTML = ' CA<sup>2</sup> =['+ caa11+',\t'+caa12+',\t'+caa13+',\t'+caa14+';\t\t'+caa21+','+caa22+',\t'+caa23+',\t'+caa24+']'
			document.getElementById('matQoCAAA').innerHTML = ' CA<sup>3</sup> =['+ caaa11+',\t'+caaa12+',\t'+caaa13+',\t'+caaa14+';\t\t'+caaa21+','+caaa22+',\t'+caaa23+',\t'+caaa24+']'
			
		/*	if (DQo1!=0)
			{  Obsrl_Test1=" Rank of Q<sub>o1</sub> = Order of A = n = 4";
			   Obsrl_Test2=" System is Observable with only out-put 1";
			   document.getElementById("Obsrl_Test1").innerHTML=Obsrl_Test1;
			   document.getElementById("Obsrl_Test2").innerHTML=Obsrl_Test2;
			}
			   else 
			   {   Cntrl_Test1=" Rank of Q<sub>o1</sub> < Order of A = n = 4";
			       Cntrl_Test2=" System is not Observable with only out-put 1";
			       document.getElementById("Obsrl_Test1").innerHTML=Obsrl_Test1;
				   document.getElementById("Obsrl_Test2").innerHTML=Obsrl_Test2;
			   }
			   
			   if (DQo2!=0)
			{  Obsrl_Test3=" Rank of Q<sub>o2</sub> = Order of A = n = 4";
			   Obsrl_Test4=" System is Observable with only out-put 2";
			   document.getElementById("Obsrl_Test3").innerHTML=Obsrl_Test3;
			   document.getElementById("Obsrl_Test4").innerHTML=Obsrl_Test4;
			}
			   else 
			   {   Obsrl_Test3=" Rank of Q<sub>o2</sub> < Order of A = n = 4";
			       Obsrl_Test4=" System is not Observable with only out-put 2";
			       document.getElementById("Obsrl_Test3").innerHTML=Obsrl_Test3;
				   document.getElementById("Obsrl_Test4").innerHTML=Obsrl_Test4;
			   }
			   */
			   if (DQoo!=0)
			{  Obsrl_Test5=" Rank of Q<sub>o</sub> = Order of A = n = 4";
			   Obsrl_Test6="Determinent of Q<sub>o</sub> = " +DQoo+ "";	
			   Obsrl_Test7=" System is completely observable";
			   document.getElementById("Obsrl_Test5").innerHTML=Obsrl_Test5;
			   document.getElementById("Obsrl_Test6").innerHTML=Obsrl_Test6;
			   document.getElementById("Obsrl_Test7").innerHTML=Obsrl_Test7;
			   
			   var ko11 = math.add(p1,p2,p3,p4,a22);
			   
			   console.log(ko11);
			   
			   var p12 = math.multiply(p1,p2);
			   var p13 = math.multiply(p1,p3);
			   var p14 = math.multiply(p1,p4);
			   var p23 = math.multiply(p2,p3);
			   var p24 = math.multiply(p2,p4);
			   var p34 = math.multiply(p3,p4);
			   
			   var ko12 = math.divide(math.round(math.multiply(math.add(-p12,-p13,-p14,-p23,-p24,-p34,-a43,-math.multiply(a22,ko11)),1000)),1000);
			   
			   console.log(ko12);
			   
			   var p123 = math.multiply(p1,p2,p3);
			   var p124 = math.multiply(p1,p2,p4);
			   var p234 = math.multiply(p2,p3,p4);
			   var p134 = math.multiply(p1,p3,p4);
			   
			   var a22a43 = math.multiply(a22,a43);
			   var a43ko11 = math.multiply(a43,ko11);
			   var a23a42 = math.multiply(a23,a42);
			   
			   var num13o = math.add(a22a43,-a43ko11,-a23a42,-p123,-p124,-p234,-p134);
			   
			   var ko13 = math.divide(math.round(math.multiply(math.divide(num13o,a22),1000)),1000);
			   
			   console.log(ko13);
			   
			   var p1p2p3p4 = math.multiply(p1,p2,p3,p4);
			   
			   var a22a43ko11 = math.multiply(a22,a43,ko11);
			   var a23a42ko11 = math.multiply(a23,a42,ko11);
			   var a43ko12 = math.multiply(a43,ko12);
			   
			   var num14o = math.add(a22a43ko11,-a23a42ko11,-a43ko12,-p1p2p3p4);
			   
			   var ko14 = math.divide(math.round(math.multiply(math.divide(num14o,a23),1000)),1000);
			   
			   
			   console.log(ko14);
			   
			   var ko21 = 0;
			   console.log(ko21);
			   
			   var ko23 = math.divide(math.round(math.multiply(math.add(p1,p2,p3,p4,a22),1000)),1000);
			   
			   console.log(ko23);
			   
			   var ko24 = math.divide(math.round(math.multiply( math.add(p12,p13,p14,p23,p24,p34,a43,math.multiply(a22,ko23)),1000)),1000);
			   
			   console.log(ko24);
			   
			   var a22ko24 = math.multiply(a22,ko24);
			   var a23a42 = math.multiply(a23,a42);
			   var num22o = math.add(p123,p124,p234,p134,a22ko24,a23a42,-a22a43);
			   
			   var ko22 = math.divide(math.round(math.multiply( math.divide(num22o,a42),1000)),1000);
			   
			   console.log(ko22);
			   
			   Lobs = math.matrix([[ko11,ko21],[ko12,ko22],[ko13,ko23],[ko14,ko24]]);
			   
			   /*L11=" K<sub>e</sub><sub>11</sub> = " +ko11+ "";
			   L12=" K<sub>e</sub><sub>12</sub> = " +ko12+ "";
			   L13=" K<sub>e</sub><sub>13</sub> = " +ko13+ "";
			   L14=" K<sub>e</sub><sub>14</sub> = " +ko14+ "";
			   
			   L21=" K<sub>e</sub><sub>21</sub> = " +ko21+ "";
			   L22=" K<sub>e</sub><sub>22</sub> = " +ko22+ "";
			   L23=" K<sub>e</sub><sub>23</sub> = " +ko23+ "";
			   L24=" K<sub>e</sub><sub>24</sub> = " +ko24+ "";
			   
			   document.getElementById("Observer_gain_Value_L11").innerHTML=L11;
			   document.getElementById("Observer_gain_Value_L12").innerHTML=L12;
			   document.getElementById("Observer_gain_Value_L13").innerHTML=L13;
			   document.getElementById("Observer_gain_Value_L14").innerHTML=L14;
			   
			   document.getElementById("Observer_gain_Value_L21").innerHTML=L21;
			   document.getElementById("Observer_gain_Value_L22").innerHTML=L22;
			   document.getElementById("Observer_gain_Value_L23").innerHTML=L23;
			   document.getElementById("Observer_gain_Value_L24").innerHTML=L24;*/
			   
			   document.getElementById('Observer_gain_Value_Ke').innerHTML = ' Observer Gain Values Ke =['+ ko11+',\t'+ko12+',\t'+ko13+',\t'+ko14+';\t'+ko21+',\t'+ko22+',\t'+ko23+',\t'+ko24+']'
			   
			}
			   else 
			   {   Obsrl_Test5=" Rank of Q<sub>o</sub> < Order of A = n = 4";
		           Obsrl_Test6="Determinent of Q<sub>o</sub> = " +DQoo+ "";	
			       Obsrl_Test7=" System is not observable";
			       document.getElementById("Obsrl_Test5").innerHTML=Obsrl_Test5;
				   document.getElementById("Obsrl_Test6").innerHTML=Obsrl_Test6;
				   document.getElementById("Obsrl_Test7").innerHTML=Obsrl_Test7;
			   }
			
	        	
}

function showRankQo(){
document.getElementById("Obsrl_Test5").style.display="block";	
}

function showDetQo(){
document.getElementById("Obsrl_Test6").style.display="block";	
}

function showinfoQo(){
document.getElementById("Obsrl_Test7").style.display="block";
}

function GVo(){
document.getElementById("Observer_gain_Value_Ke").style.display="block";

}

function test1(){
	document.getElementById('dropdownMenuButton1').innerHTML='State Feedback Controller';
	document.getElementById('chktest').value=0;
	document.getElementById('Trun').style.display="block";
}
function test2(){
	document.getElementById('dropdownMenuButton1').innerHTML='Observer';
	document.getElementById('chktest').value=1;
	document.getElementById('Trun').style.display="block";
}



function str(){
	if(document.getElementById('chktest').value==0){
		CNTR();
	}
	if(document.getElementById('chktest').value==1){
		OBSR();
	}
	
}



