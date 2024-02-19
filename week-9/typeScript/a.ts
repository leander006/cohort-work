function add(a:number,b:number):number {
      console.log(a+b);
      return a+b;
}


// add(1,2)

function runAfter1S(fn:() => void) {
      setTimeout(fn, 1000);
}

// runAfter1S(()=>{
//       console.log("hello")
// })

function isLegal(user:User) {
      if(user.age > 18){
            console.log("User is 18+ op !!!");
            
      }
}

interface User{
      name:string,
      age:number,
      passion:string,
      email ?: string
}

// isLegal({
//       name:"Leander",
//       age:21,
//       passion:"Coder"
// })

function array(arr:string[]) {
      for(let i=0;i<arr.length;i++){
            console.log(arr[i],"");
      }
}

// array(["leander","leonard","D'silva"]);

enum Direction{
      Up="Up",
      Down ="Down",
      Left="Left",
      Right="Right"
}

function enums(direction:Direction) {
      if(direction === Direction.Right){
            console.log("Boss is always right");
      }
}

enums(Direction.Left)
enums(Direction.Right)

console.log(Direction.Down);
