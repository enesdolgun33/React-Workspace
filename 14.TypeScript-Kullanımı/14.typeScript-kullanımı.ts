//! ---------------------------------1---------------------------------------
// Temel tipler : string, number, boolean, undefined, null, object
// burdaki değişkenlere tanımlandıkları tipten başka değer girilemez

let firstName: string = "Enes";
let id: number = 22;
let result: boolean = true;
let x: undefined = undefined;
let y: null = null;

// Any : değişkenin içine gelecek veri tipleri belirli değilse ör: age değişkenine 25 veya "25" gelebilir
let age1: any = 24; //veya "24";




//! --------------------------------2----------------------------------------
// Union Types : belirtmiş olduğumuz değişkene birden fazla veri tipi verir


let age2: string | number = "23" // veya 23;
let enes: string | number | boolean = true;



// Literal Type : tip tanımlaması yapmadan sadece şu değerlerden birisi gelebilir demek

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

// Optional type : burda age yanına ? koydugumuzda tanımlarken değer atanmasını zorunlu kılmaz 
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
function carpma(x:number , y:number) :number | string{ //* burada return ile döndürülen değerin tipi de atanır (birden fazla seçenek de verilebilir) 
  // bir sürü işlem yaptık varsayalım
  return x*y;
}
const sonuc = carpma(5,3)
console.log(sonuc)

// ------------------------------------------------------------------

function write(array : Array<string>){
  array.forEach((value : string )=>console.log(value))
}

let array2 : Array<string> = ["enes" , "ali" , "arda"];
write(array2)