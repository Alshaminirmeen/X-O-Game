// window.alert("hello from elzero web school");
// window.alert("hello from JS File");

// document.writeln("<h1> Hello <span>Page</span></h1>");
// console.log("hello my friend");

// const persons =[
//     { name: { first: "John", last: "Doe"}, age: 30, city:"New York" },
//     { name: { first: "Jane", last: "Doe"}, age: 25, city:"Los Angeles" },
//     { name: { first: "Jim", last: "Beam"}, age: 40, city:"Chicago" },
//     { name: { first: "Jill", last: "Baker"}, age: 35, city:"Houston" },
//     { name: { first: "Yahya", last: "Khan"}, age: 28, city:"San Francisco" }

// ]

// const [person1] = persons;

// console.log(person1);

// const { name : nameobject } = person1;

// //name.first = "rbegnjkhl"
// nameobject.first="fdcghjk"

// console.log(persons);
// console.log(name);

// const title= document.getElementById("title");

// // console.log(title); //<h1 id="title">hello world</h1>
// console.log(title.innerHTML);// hello world
// title.innerHTML = " Hello World 2 ";

// window.document.getElementById("title").innerHTML = " Hello World 3 ";
// document.getElementById("title").innerHTML = " Hello World 3 ";

// const width= window.innerWidth;

// console.log(width);

// alert("Hello World");

//const titleelement = document.querySelector(".mytitle");
// const titleelement = document.querySelector("#title");

//console.log(titleelement.innerHTML);

let title = document.querySelector('.title');
let turn = "X";
let squares = [];
function end (num1, num2, num3){
    title.innerHTML = `${squares[num1]} winner`;
        document.getElementById('item' + num1).style.background= '#000';
        document.getElementById('item' + num2).style.background= '#000';
        document.getElementById('item' + num3).style.background= '#000';

        setInterval(function(){title.innerHTML += '.'; },1000);
        setTimeout(function(){location.reload()},4000)
}
function winner(){
    for(let i = 1; i<10; i++){
        squares[i] = document.getElementById('item' + i).innerHTML;
    };
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1] != ''){
        console.log('done');
        end(1,2,3);
    } else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4] != ''){
        console.log('done');
        end(4,5,6);
    } else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7] != ''){
        console.log('done');
        end(7,8,9);
    } else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1] != ''){
        console.log('done');
        end(1,4,7);
    } else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2] != ''){
        console.log('done');
        end(2,5,8);
    } else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3] != ''){
        console.log('done');
        end(3,6,9);
    } else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1] != ''){
        console.log('done');
        end(1,5,9);
    } else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3] != ''){
        console.log('done');
        end(3,5,7);
    }
}

function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML=='' ){
        element.innerHTML='X'
        turn = 'O'
        title.innerHTML= 'O'
    }
    else if(turn === 'O' && element.innerHTML=='' ){
        element.innerHTML='O'
        turn = 'X'
        title.innerHTML= 'X'
    }
    winner();
};
