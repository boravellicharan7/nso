//Question-1:-
var a="   ravipati";
var aa="surya  ";
var result=a.concat(" ",aa);
console.log(result.trim().toUpperCase());

//Question-2:-
var a="SAI DHARM TEJ";
var aa=a.slice(4,10);
console.log(aa.indexOf("M"));
console.log(aa.toLowerCase());

//Question-3:-
var a="a";
var aa="apple";
var result=a.concat(" ",aa);
console.log(result.toUpperCase().charAt(6));

//Question-4:-
var a="boravelli";
var aa="charan";
var result=a.charAt(0).toUpperCase()+a.slice(1,3)+aa.slice(3,5)+aa.charAt(5).toUpperCase()
console.log(result);

//Question-5:-
var a="  ocean  ";
var aa=a.trim();
var result=aa.charAt(0).toUpperCase()+aa.slice(1,4)+aa.charAt(4).toUpperCase()
var b="gayu";
var bb=result.slice(0,3);
console.log(b.concat(bb));

//Queation-6:-
var a="hello there , how are you";
var result=a.split(" ");
console.log(result.indexOf("are"));

//Question-7:-
var smartphone={
    brand:"redme",
    model:"13 series",
    price:14000
}
Object.seal(smartphone);
smartphone.price=15000;
console.log(smartphone);
console.log(Object.isSealed());

//Question-8:-
var book={
    title:"remember me",
    author:"john durairaj",
    publishedyear:2015
}
Object.freeze(book);
book.publishedyear=2016;
console.log(book);
console.log(Object.isFrozen());

//Question-9:-
var person={
    firstname:"ravipati",
    lastname:"surya",
    age:24
}
console.log(Object.values(person),Object.keys(person));

//Question-10:-
var course={
    title:"full stack",
    trainer:"vamsi sir",
    duration:"6 months"
}
console.log(Object.entries(course));
delete course.duration;
console.log(course);

//Question-11:-
var employee={
    name:"deva",
    position:"Jn manager",
    salary:50000
}
Object.seal(employee);
employee.position="Sr manager";
console.log(employee);

//Question-12:-
var a="boravelli ravipati surya";
console.log(a.slice(10,19).toUpperCase());

//Question-13:-
var b="hello";
console.log(b.toUpperCase());
console.log(b.length);

//Question-14:-
var c="ascii";
console.log(c.charAt(2));
console.log(c.toUpperCase().charCodeAt());

//Question-15:-
var d="     boravelli    "
console.log(d.trim().slice(1,4));

//Question-16:-
var e="HELLO";
var ee=" WORLD";
var eee=ee.toLowerCase();
var result=e.concat(eee);
console.log(result);

//Question-17:-
var f="   sthithapragnasakabasha";
console.log(f.trimStart().slice(1));

//Question-18:-
var g="retrograde";
console.log(g.charAt(6).toUpperCase());

//Question-19:-
var a=5;
var b=10;
var c=20;
var result=a*b+c
console.log(result==100);

//Question-20:-
var x=8;
var y=12;
console.log(x>5);
console.log(y<20);

//Question-21:-
var num_1=25;
var num_2=35;
var result=num_1==num_2?"25 is larger":"35 is larger";
console.log(result);

//Question-22:-
var m=15;
var n=10;
var a=m-n;
var result=a?"this is even":"this is odd";
console.log(result);
var b=m/n;
var result=b?"this is even":"this is odd"
console.log(result);

//Question-23:-
var a=20;
var age=18;
console.log(a==age);
console.log(a===age);
