/* Introduction to typescript */

/* Introduction to typescript */




// Type Inference      when we don't give any type to variable
//  1.Understanding type inference
//  2.Type annotations


// Understanding Inference   ( it infers itself  )    
//let a = "12";   //in typescript there is no values like float or int

// Type annotations
// let a: Boolean;


/*Interfaces and Type Aliases
// 1. Defining Interfaces
// 2.Using interface to define object shapes
// 3.Extending interfaces
// 4.types aliases
// 5.intersection types*/

/*// Defining interface - we make an interface using interface for eg:
interface User{

}
*/

/*// 2.Using interface to efine object shapes  //giving types of user to object
interface user{
    name : string,
    gmail : string,
    age : number ,
    gender? : string    // ? means it is optional
}

function getUserValue(obj : user){
    obj.age = 20
}*/ 

/*// 3.Extending Interfaces    // in this other interface can use 1st interfaces properties using second extends one
interface student{
    name : string;
    No: number;
    class : string;
}

interface professor extends student{
    email: string;
    password : string;
}

function school(obj : student){      // in this only student related data will come
    obj.class
}

function section(obj : professor){       //in this all the 5 thing will come(student and professor data)
    obj.email
}

*/

/*// important   // two interfaces of same name get merged together

interface ritik{
    name: String;
}
interface ritik{
    email: string;
}
function abcd(obj : ritik){   //here i will get both name and string for [obj.] 
    obj.email
}

*/

/*//Type aliases  // creating ur own type and using it afterwards

type ritik = number;
let num: ritik;   //here we can put any number in place of ritik

type value = string | number | null; //
let a: value     //here we can use string,number or null in place of value

type arg =  string |null
function abcd(obj : arg){ } //here we can use string or null in place of arg

abcd("ritik") or abcd(null)
*/

/*// Intersection types     //'|' union

type User={
    name: string;
    email: string;
}

type Admin =  User & {
    getDetails(User : string) : void
}

function abcd(a:Admin){    //herre a will get all three data of user and admin
    a.getDetails
}
*/





// Classes and Objects
//  1.Class definition
//  2.Constructors
//  3.Access modifiers
//  4.Readonly properties
//  5.Optional Properties
//  6.Parameter properties
//  7.Getters and setters
//  8.Static members
//  9.Abstract classes and methods

/* //Classes and Objects
class Device{      //herre Device is the class
    name= "lg"
    price = 12000
    category = "android"
}

let d1 = new Device();
let d2 = new Device();
*/

// Constructor     //types to define construtctor
/*

class Music{
    constructor(public name: string, artist: string, public length: number, free: false){

    }
}
let m1 = new Music("hale dil","Ritik",1200,false);
*/
/*
class Music{
    public name;
    public artist;
    public length;
    public free;
    constructor(name: string, artist: string ,length: number,free: boolean){
        this.name = name;
        this.artist = artist;
        this.length = artist;
        this.free = free;
    }
}
*/
/*
// this keyword     //to access anything inside class we use 'this.'
/*
class abcd
{
    name = "harsh";

    /* changeName(){
    //     this.name      //"this"is used to call some variable in class
    // }*/
    /*changeSome(){
        console.log(this.name);
        this.changeMoreStuff;    //to call changeMoreStuff we have to use this otherwise it won't call it
    }
    changeMoreStuff(){
        console.log("hello");
    }*/
/*
    // class Bottlemaker{
    //     constructor(public name:string){   //
    //     }
    // }
    //let b1 = new Bottlemaker("milton")
            //OR

    class Bottlemaker{
        public name;
        constructor(name:string){      //value we give stored in 'name' variable
            this.name = name;           // this is used to use the value provided to the above 'name'
        }
    }
*/

//Access Modifiers(public,private protected)
//Public
/*class Bottlemaker{
    constructor(public name: string){
        this.name = name;
    }
        changing(){
            this.name = "Ritik";
        }
}

let b1 = new Bottlemaker("Milton");    //here bottle name will be Milton
b1.changing();                           //here bottle name will change to Ritik
*/

/*//Private
class Bottlemaker{
    constructor(private name: string){
        this.name = name;
    }
}
let b1 = new Bottlemaker("Milton");    //here bottle name will be Milton
b1.name = "Ritik"                          //here bottle name will NOT change to Ritik (it will change but it will also give error)
*/

/*//Protected     // can be used in main class and sub class using extend
class Bottlemaker{
    protected name="milton";
}

class MetalBottleMaker extends Bottlemaker{
    public material = "metal";
        changeName(){
            this.name = "some name"   //with private it will give error  with protected and public it will not give error
        }
}

let b1 = new MetalBottleMaker();
b1.name = "Some other name 2"    //in protected and private this will give error but not in public
*/


/*//Readonly properties    //prop that we cna't change throughout the program

class User{
    constructor(public readonly name:string){}   //using readonly : we cannot change it's name throughtout program
    changeName(){
        this.name ="Hello";    //when using readonly this 'name' will gove error.
    }
}

let u1 = new User('Ritik');
u1.changeName();
*/


/*//Optional properties   '?' symbol

class User{
    constructor(public name:string, public age:number,gender?:string){}

}
let b1 =new User("RItik",22,"Male");
let b2 =new User("shayda",23);   //here gender is optional
*/

 /*//Parameter properties   creating prop inside constructor

class User{
    constructor(public name:string, public age:number){}

}*/

/*//GETTERS and SETTERS 
class User{
    constructor(public _name:string,public _age:number){}

        get name(){
            return this._name;        // to get name we will use u1.name
        }
        get age(){
            return this._age;        // to get age we will use u1.age
        }

        set name(value:string){     // to set name we will use u1.name = "Ritika"
            this._name=value;
        }
        set age(value:number){    // to set age we will use u1.age = 23
            this._age=value
        }

}

let u1= new User("ritik",23);
*/

/*// Static members       //in this we don't have to create instances instead use 'static' keyword

class shery{
    version = 1.0;          //with this we have to create an instance
    static version = 1.0;       //with this we don't hav to create instance and can use it directly
}

shery.version; 
*/

/*//Abstract classes and method    //these are the basic important things like in payment (amount,acc no.) or in kitchen(gas,utensil) we don't create instances here
class Payment{      //we won't create instance for payment
    constructor(protected amount: number, protected account: number){}
        isPaymentValid(amount : number){
            return this.amount > 0;
    }
}

class PayTm extends Payment{   //for PayTm we will create an instance

}

class Gpay extends Payment{}
*/



//Functions
// Function Tpes
// Optional and default parameters  // same as above // default below
// rest parameters
// Overloads

/*//Function types

function abcd(name : string,age: number,cb: (arg : string)=> void){  //cb is callback
    cb("Ritik");     //when we run this line number 330 runs gives us baby as output
}

abcd("Ritik",25,(arg : string) => {
    console.log("babyy");     //output babyy
})

function time(name : string, age : number ,cb : (args : number) => void){
    cb(23);
}
 time("Ritik",23,(args :number) =>{
    console.log(22);        //output 22
    console.log(args);       //output 23
    
 })*/

/*// Default parameters

function abcd(name: string,age:number ,gender : string = "not to be disclosed" ){ //now if gender not given it will use default as "not to be disclosed"
    console.log(name,age,gender);
}

abcd("Ritik",23,"male") //output = Ritik,23,Male
abcd("Sahil",24)        //output = Sahil,24,not to be disclosed
*/

/*// Rest Parameters   //...rest/spread operator same as (eg kal,yesterday or tomorrow)
function sum(...arr:number[]){
    console.log(arr);
    
}
sum(1,2,3,4,5,6,7,8)

function freind(...name:string[]){
    console.log(name[0]);
    
}
freind("sahil","ritik","golu","abhay");


//spread 
var arr = [1,2,3,4,5];
var arr2 = [...arr]  //copying arr to arr2
*/

/*//Function Overloading
function abcd(a : string): void;
function abcd(a: string,b: number) : number;

function abcd(a : any , b?: any){
    if(typeof a === "string" && typeof b === undefined){
        console.log("1st function");
    }
    if(typeof a === "string" && typeof b === "number"){
        return 23;
    }
    else throw new Error("nothing");
    
}
abcd("ritik");
abcd("Ritik",23);
*/

// GENERICS
// Generic functions
// Generic interfaces
// Generic classes

/* Generic functions       // ek function bnana h jo ki accept krega koi bhi value and usse print karega

 function abcd<T>(a: T){            //here T represent any value that we assign in 399 to a
    console.log(a);
 }
 abcd<string>("Hey");
*/

/*//Generic interface
interface ABC<T>{
    name:string;
    age:number;
    Key:T;
}

function rits(obj: ABC<string>) {}

rits( {name: "RITIK",age : 23 ,Key: "maybe"});
*/

/*// Generic classes
class Bottlemaker<T>{
    constructor(public key :T){}
}
let b1 = new Bottlemaker<string>("hey");   
console.log(b1);
*/

//MODULES  mean files
//  Exporting and importing modules
//  Default exports

/*//Exporting and importing modules

import { getDetails,addPayment } from "./payment";
addPayment(12);
*/

