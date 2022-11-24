//21. class A{
// int x,y;
// A(int x, int y){
//  this->x=x;
//  this->y=y;
// }

// };
// int main(){
// A a1(2,3);
// A a2=a1;     //default copy constructor is called
// return 0;
// }

//23. class base{
// public:
//  virtual void fun(){

//  }
// };
//A pure virtual function is a function that has 
//no implementation and is declared by assigning 0. 
//It has no body.

// Example-

// class base{
// public:
//  virtual void fun()=0;
// };

//25. class base{
//  private:
//   int value;
//  public:
//   base(int x){
//    value=x;
//   }
//   virtual void fun(){
   
//   }
// }

// class derived{
//  private:
//   int a;
//  public:
//   derived(int x, int y):base(x){
//    base *b;
//    b=this;
//    b->fun();      //calls derived::fun()
//   }
//   void fun(){
//    cout<<”fun inside derived class”<<endl;
//   }
// }


//26. void *ptr; 
// char *str;
// p=str;                // no error 
// str=p;                // error because of type mismatch
// We can assign a pointer of any type to a void pointer but the reverse is not true unless you typecast it as

// str=(char*) ptr;


//27. class A{
//  private:
//   int value;
//  public:
//   void setvalue(int x){
//    this->value=x; 
//   }
// };

// int main(){
//  A a;
//  a.setvalue(5);
//  return 0;
// }


//28. int value=new int;  		//allocates memory for storing 1 integer
// delete value;          		// deallocates memory taken by value

// int *arr=new int[10];    	//allocates memory for storing 10 int
// delete []arr;              	// deallocates memory occupied by arr