class AppStr
{
public static void main(String args[])
{
//String x="StringLiteral TestApp!!..";
//String x1=new String("StringLiteral TestApp!!..");

int x=20;
		int y=30;
		
		
		System.out.println("\n Before swap x "+x);
		System.out.println("\n Before swap y "+y);
	int t=x;
	
		x=y;
		y=t;
		
		
		System.out.println("\n After swap x "+x);
		System.out.println("\n After swap y "+y);
		System.out.println("\n Numbe of cores : "+Runtime.getRuntime().availableProcessors());
		
}
}
