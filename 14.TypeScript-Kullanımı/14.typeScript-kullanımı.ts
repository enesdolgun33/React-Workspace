//! ---------------------------------1---------------------------------------
//* Temel tipler : string, number, boolean, undefined, null, object
// burdaki değişkenlere tanımlandıkları tipten başka değer girilemez

let firstName: string = "Enes";
let id: number = 22;
let result: boolean = true;
let x: undefined = undefined;
let y: null = null;

//* Any : değişkenin içine gelecek veri tipleri belirli değilse ör: age değişkenine 25 veya "25" gelebilir
let age1: any = 24; //veya "24";




//! --------------------------------2----------------------------------------
//* Union Types : belirtmiş olduğumuz değişkene birden fazla veri tipi verir


let age2: string | number = "23" // veya 23;
let enes: string | number | boolean = true;



//* Literal Type : tip tanımlaması yapmadan sadece şu değerlerden birisi gelebilir demek

let statusResult: 'pending' | 'approved' | 'rejected';

// Array

let names: string[] = ["Enes", "Arda", "İshak"];
names.forEach((name) => console.log(name))

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers)

let numbers2: Array<number> = [1, 2, 3];

let mixedArray: Array<number | string | boolean> = ["enes", "ali", 1, 2, true];

// ! ----------------------------3-------------------------------------

//* İnterface - type : kendi tipimizi oluşturmamızı sağlar

//? bu renkteki yorum satırlarım altındaki kodları etkilememesi için yorum satırı haline getirdiğim kodlarımdır !!!!!!

//? type User = {
//?   name : string,
//?   age  : number                
//? }

interface User {
  name: string,
  age: number
}

let array1 : User[] = [{name:"Ali" , age: 21}];

const object1: User = {
  name: "Enes",
  age: 22
}

//* Optional type : burda age yanına ? koydugumuzda tanımlarken değer atanmasını zorunlu kılmaz 
type optionalUser = {
  name: string,
  age? : number
}

const object2 : optionalUser ={
  name:"İshak"
  // age tanımlanmadıgı halde hata vermez.
}




//* Function !!!

function topla(a,b){
  console.log(a+b)
}
topla(5,"x") // bu şekilde bir hata yok fakat güvenilir değil


// typeScript devreye girdiğinde alttaki gibi güvenli olur

function cikar(a:number,b:number){
  console.log(a-b)
}
cikar(20,3) 

//todo cikar(5,"x") yaptığımızda hata verecektir

// ---------------------------------------------------------------
function carpma(x:number , y:number) :number | string{ // burada return ile döndürülen değerin tipi de atanır (birden fazla seçenek de verilebilir) 
  // bir sürü işlem yaptık varsayalım
  return x*y;
}
const sonuc = carpma(5,3)
console.log(sonuc)

// ------------------------------------------------------------------

// mesela bu fonksiyon bir şey geri döndürmeyeceği için şu şekilde olabilir
function write(array : Array<string>) :void {
  array.forEach((value : string )=>console.log(value))
}

let array2 : Array<string> = ["enes" , "ali" , "arda"];
write(array2)

// --------------------------------------------------------------------
interface Userr{
  name: string,
  age: number
}

function writeConsole(array:Array<Userr>):void{
  array.forEach((value:Userr)=> console.log(value))
}

const obj2 : Userr ={
  name : "Harun",
  age : 35
}

const obj1 : Userr ={
  name : "Enes",
  age : 22
}

let myArray : Array<Userr> = [obj1 , obj2 , {name:"Ahmet", age:25}];

writeConsole(myArray)

//! ----------------------------------4-----------------------------------------------------

function yazdir(array: string[]){
  console.log(array)
}

yazdir(["enes","ali","mehmet"])
//todo yazdir([1,2,3,4,5]) yaptıgımızda hata verecektır
//todo yazdir([true,false])

//* bunun yerine generic yazalım
// T harfi örnektir Typeın t si olarak kullanabiliriz
function yazdir2<T>(array : T[]) :void{
  console.log(array)
} 
yazdir2(["enes","ali","mehmet"])
yazdir2([1,2,3,4,5]) 
yazdir2([true,false])
// hata vermedi

//  T burada temsili
interface GenericType<T>{
  name: string,
  age : number,
  salary : T[]
}
// burada string geleceğini belirttik
const obj3 : GenericType<string> = {
  name: "Enes",
  age: 21,
  salary : ["5000","10000","15000"]
}
// burada da number geleceğini belirttik
const obj4 : GenericType<number> = {
  name : "Harun",
  age : 25,
  salary : [5000 , 10000 , 15000]
}

function writer<T>(array : GenericType<T>[]) : void {
  array.forEach((value :GenericType<T>) => console.log(value));
}

// burda da bir dizi tanımladık ve tipinin üstte tanımladığımız generictype olduğunu belirledik
let array3 : GenericType <string | number> [] = [obj3, obj4] ;
writer(array3) 

// ------------------------------------------------------------------------------------------------
//* Extends - Miras alma

interface OrtakAlanlar {
  id : string,
  olusturmaTarihi : string,
  olusturanKisi : string,
}

interface Musteri extends OrtakAlanlar {
  musteriNo : string
}

interface Kurum extends OrtakAlanlar{
  kurumNo : string
}

const kurum : Kurum = {
  id : "1",
  olusturmaTarihi : "10.08.2025",
  olusturanKisi: "Enes",
  kurumNo : "12345"
}
// --------------------------------------------------------------
// * Partial , Required , ReadOnly , omit

interface Uuser {
  name : string,
  age? : number,
  lastname? : string,
  tckn? : string,
  birthdate? : string
}

//*  partial (optional yapar) : üstteki tanımlamada tüm değişken isimlerinin sonuna ? konulmus gıbı davranmayı saglar
const user1 : Partial <Uuser> = {
  name : "Enes",
  age : 21,
  lastname : "Dolgun"
}
// -------------------------------------------------
//*  Required : tam tersi bu da zorunlu kılar

const user2 : Required<Uuser> ={
  name : "Enes",
  age : 22,
  lastname : "Dolgun",
  tckn : "12121212121",
  birthdate : "18.09.2004"
}
// ----------------------------------------
//* ReadOnly : sadece okunabilir yapar

const user4 :Uuser = {
  name : "enes",
}
user4.name = "ali"

const user3 : Readonly<Uuser> = {
  name : "enes",
}
//todo user3.name = "ali" hata verir

// ----------------------------------------
//*  Pick : sadece belirttiğimiz değişkeni  almak için kullanılır

const user10 : Pick<Uuser , "age">={
  age : 23
}

// ----------------------------------------
//* Omit : belirttiğimiz tipin dışındakileri hedef alır

const user22 : Omit<Uuser , "tckn"> = {
  name : "Ali",
  age : 33,
  lastname :"Osman",
  birthdate : "12.12.2000"
}