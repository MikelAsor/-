const arr=[
  ["1","עריית ירושלים","בית החולים הצרפתי","בנק לאומי","בית העלמין המוסלמי","כיכר צהל",1],
  ["2","בית הפנתרים השחורים","מגרש הרוסים","אסירי המחתרות","בית משפט השלום","הרכבת הקלה",3],
  ["3","זלמן שזר","בית אורי צבי","בן יהודה","זלדה","נתן אלתרמן",2],
  ["4","הרב הנזיר","אוהל יצחק","בית הכנסת נחלת יעקב","בית טיכו","בית הרב קוק",5],
  ["5","בית החייל","החוט המשולש","יש חסד","ביקור חולים","כיכר ציון",4],
  ["7","כיכר המוזיקה","מלון העיר","רחבת המשביר הישן","כיכר ציון","שח-מט",3],
  ["8","בית פרומין","מועדון סנוקר","חניון הסובלנות","כיכר החתולות","קולנוע אוריון",1],
  ["9","כיכר צרפת","משרד התפוצות","מכון כרם","גן הסוס","היכל שלמה",5],
];

const questions = [ 
  { 
  question: 'חידה 1:', 
  text: ' ליד הצרפתי, מתנשא על גנרל בריטי אך במהלך השני הפך להיות קשור לגוף צבאי מקומית ובשונה מצה"ל מנוהל פוליטית' }, 
  {
     question: 'חידה 2:', 
     text: ' "בשש עשרה ליוני ארבעים ושש בטרם הוא הלך לגשר והריח אש"' 
    }, 
    { 
      question: 'חידה 3:', 
      text: ' מעל דוכן הנקניקיות ההודי היה משורר,היום ביתו שבקומה הראשונה אומנות יוצר ועל אצג מספר' 
    }, 
    { question: 'חידה 4:', 
      text: ' "אחר התפילה, מיהרתי לבשר במכתב כי יותר מאשר פיללתי מצאתי. מצאתי לי רב" ' 
    }, 
    { 
      question: 'חידה 5:', 
      text: ' "בן גילו נוטל אחת משישים "' 
    }, 
    { question: 'חידה 6:', 
      text: ' "ויוסף הוא השליט על כל ארץ מצריים הוא המשביר לכל הארץ' 
    }, 
    { question: 'חידה 7:', 
      text: ' הרחובות הסמוכים נקראים הלל ושמאי ולא בכדי עומד שם הבניין שבו מתכנסים כדי לחלוק (או שאולי לרמז שמחלוקת לשם שמים סופה להתקיים?)' 
    }, 
    { question: 'חידה 8:', 
      text: ' אם פתרתם נכון תגיעו לזה: החידה הראשונה + החידה השניה = X \n X + החידה השלישית = Y \n החידה החמישית + החידה הרביעית = Z \n (X+Y-Z) +5 = ? \n אם תפתרו נכון תגיעו לכתובת הפיזית של:' 
    } 
  ]; 
let num=0;
let correct;
let count=0;
function Question()   
{
   if(num<8)
   {
    document.getElementById("question").innerHTML = questions[num].question + "<br>" + questions[num].text;
   
    document.getElementById("Ans1").innerHTML=arr[num][1];
    document.getElementById("Ans2").innerHTML=arr[num][2];
    document.getElementById("Ans3").innerHTML=arr[num][3];
    document.getElementById("Ans4").innerHTML=arr[num][4];
    document.getElementById("Ans5").innerHTML=arr[num][5];
    correct=arr[num][6];
    num++;
   }
   else
   {
      alert("סיימתם את המשחק");
      alert("עניתם נכון על : " + count+"/8 חידות");
   }
} 
function Myanswer()
{
  if(document.getElementById(correct).checked) {count++;}
}

function checkAnswer(input) {
   let selectedAnswer = input.nextElementSibling.innerText;
    alert("בחרת: " + selectedAnswer); 
  
    if (selectedAnswer === arr[num-1][correct]) {
        alert("תשובה נכונה!");
        count++;
    }
    else {
        alert("תשובה לא נכונה!");
    }
    Question();
}
