module.exports = {
    taskFinisher:async(req,res)=>{
        const rows = 3;
        const coloumns = 3;
        const myArray = [];
        let k = 0;
        let rank1 = 1;
        let rank2 = 1;
        let rank3 = 1;
        
        let country1 = "";
        let country2 = "";
        let country3 = "";
        
        function randomGenerator() {
          const indexSelector = Math.floor(Math.random() * 4);
          const givenArray = ["India", "Nepal", "Finland", "Germany"];
          const pass = givenArray[indexSelector];
          return pass;
        }
        
        for (let i = 0; i < rows; i++) {
          myArray[i] = [];
          for (let j = 0; j < coloumns; j++) {
            myArray[i][j] = randomGenerator();
          }
        }
        
        console.log("myArray", myArray);
        
        function f1() {
          if (myArray[0][0] === myArray[0][1]) {
        
            rank1 = rank1 + 1;
            country1 = myArray[0][0];
            if (myArray[0][0] === myArray[0][2]) {
              rank1 = rank1 + 1;
            }
            if (rank1 > 1) {
                k = 1;
              console.log(`Ranks: ${country1} : ${rank1} `);
            }
          } else {
            return false;
          }
        }
        
        function f2() {
          if (myArray[1][0] === myArray[1][1]) {
        
            rank2 = rank2 + 1;
            country2 = myArray[1][0];
            if (myArray[1][0] === myArray[1][2]) {
              rank2 = rank2 + 1;
            }
            if (rank2 > 1) {
                k = 1;
              console.log(`Ranks: ${country2} : ${rank2} `);
            }
          } else {
            return false;
          }
        }
        
        function f3() {
          if (myArray[2][0] === myArray[2][1]) {
        
            rank3 = rank3 + 1;
            country3 = myArray[2][0];
            if (myArray[2][0] === myArray[2][2]) {
              rank3 = rank3 + 1;
            }
            if (rank3 > 1) {
                k = 1;
              console.log(`Ranks: ${country3} : ${rank3}`);
            }
          } else {
            return false;
          }
        }
        
        f1();
        f2();
        f3();
        
        if(k === 0){
             console.log("Ranks:");
        }

const bdata = {
    country1:country1,
    country2:country2,
    country3:country3,
    rank1:rank1,
    rank2:rank2,
    rank3:rank3,
    k:k,
    myArray:myArray
  }
res.status(200).json({bdata})
    }
}