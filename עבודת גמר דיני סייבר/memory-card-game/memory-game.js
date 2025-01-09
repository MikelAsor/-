alert("ברוכים הבאים למשחק הזיכרון!");
let arr=[];
let firstTime=null;
let count=0;
let uncount=0;
function a(num){
    if (arr.includes(num)){
        alert("כבר בחרת את התמונה הזו");
        firstTime=null;
    }
    else if (firstTime==null){
        alert("בחר את התמונה השניה");
        firstTime=num;
    }
    else if (num===firstTime+1  || num===firstTime-1)
        {
            alert("מעולה")
            count=count+12.5;
            alert(" + "+count+" נקודות ");
            arr.push(num);
            if (count==100){
                alert("כל הכבוד! סיימת את המשחק עם 100 נקודות!");
                alert("כמות ההחטאות שלך: "+uncount);
            }
        }
        else{
            alert("נסה שוב");
            uncount+=1;
        firstTime=null;
    }
}

     function restart(){
        count=0;
        uncount=0;
        firstTime=null;
        arr=[]; // איפוס המערך
        alert("המשחק התחל מחדש!"); // הודעה למשתמש שהמשחק התחדש
     }
     
     function r() {
         alert("איזה יופי! יש לך בינתיים " + count + " נקודות"); // מציג את כמות הנקודות שנצברו
     }
     
    