export default function equilateral(x:number) {
      console.log("print a equilateral triangle with rows " + x);
      for (let i:number = 1; i <= x; i++) {
          let  a:string = "";
            for (let j:number= i; j <= x; j++) {
                  a += " ";
            }
            for (let z:number = i; z > 0; z--) {
                  a += "* ";
            }
            console.log(a);
      }
}
//   equilateral(10)
