//#region 計程車車資
function taxiFare()
{
    let milage = document.getElementById('milage').value;
    let fare = 0;
    console.log('里程數', milage, '公尺');
    if(milage > 1500)
    {
        fare += ((milage - 1500) / 500) * 5 + 70;
        console.log('車資', fare, '元');
    }
    else
    {
        fare += 70;
        console.log('車資', fare, '元');
    }
    document.getElementById('fare').innerHTML = fare + '元';
}
//#endregion

//#region 身分證
    // 參考網址
    // https://hackmd.io/@CynthiaChuang/CheckUID#%E3%80%90%E8%87%BA%E7%81%A3ID%E9%A9%97%E8%AD%89%E7%B3%BB%E5%88%97%E3%80%91-%E8%BA%AB%E5%88%86%E8%AD%89%E5%AD%97%E8%99%9F%E9%A9%97%E8%AD%89
function verifyID()
{
    let id = document.getElementById('ID').value;
    console.log('身分證：', id);
    
    let message = '';
    let c = 0;

    if(id.length != 10)
    {
        message += '長度錯誤 ';
        c++;
    }

    let letter = id.charCodeAt(0);
    if(letter < 65 || id.charCodeAt(0) > 90)
    {
        message += '地區字母錯誤 ';
        c++;
    }

    let gender = id.charCodeAt(1);
    if (gender != 49 && gender != 50) {
        message += '性別代碼錯誤 ';
        c++;
    }

    let serial = id.slice(2);
    for (let i in serial)
    {
        let n = serial.charCodeAt(i);
        if (n < 48 || n > 57) {
            message += '數字部分出現非數字字元 ';
            c++;
            break;
        }
    }



    if(c == 0){
        // message = '驗證成功';
        // let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        //             'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        //             'U', 'V', 'W', 'X', 'Y', 'Z'];
        // let Num = [10, 11, 12, 13, 14, 15, 16, 17, 34, 18,
        //             19, 20, 21, 22, 35, 23, 24, 25, 26, 27,
        //             28, 29,32, 30, 31, 33];
        // let num;
        // for(let i in letters)
        // {
        //     if(id == letters[i])
        //     {
        //         num = Num[i];
        //     }
        // }
        let conver = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
        let weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
        id = String(conver.indexOf(id[0]) + 10) + id.slice(1);
        checkSum = 0
        for (let i = 0; i < id.length; i++)
        {
            c = parseInt(id[i])
            w = weights[i]
            checkSum += c * w
        }        
        if (checkSum % 10 == 0)
        {
            console.log("Real");
            message = 'Real';
        }
        else
        {
            console.log("Fake");
            message = 'Fake';
        }
    }
    console.log('訊息：', message);
    document.getElementById('verifyResult').innerHTML = message;    
}
//#endregion

//#region 身分證地區碼對照
function toNum(){
    let letter = document.getElementById('letter').value;
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z'];
    let Num = [10, 11, 12, 13, 14, 15, 16, 17, 34, 18,
                19, 20, 21, 22, 35, 23, 24, 25, 26, 27,
                28, 29,32, 30, 31, 33];
    let num;
    for(let i in letters)
    {
        if(letter == letters[i])
        {
            num = Num[i];
        }
    }
    console.log(letter, '→', num);
    document.getElementById('toNum').innerHTML = num;
}
//#endregion

//#region 印出星星
function star()
{    
    //#region star1
    var star = '';
    for(let i = 1; i < 6; i++)
    {
        star += '* * * * *<br>';
    }
    console.log(star);
    document.getElementById('star1').innerHTML = star;
    //#endregion

    //#region star2
    var star = '';
    for(let i = 1; i < 6; i++)
    {
        if(i == 1 || i == 5)
        {
            star += '* * * * *<br>';
        }
        else
        {
            star += '*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>';
        }
    }
    console.log(star);
    document.getElementById('star2').innerHTML = star;
    //#endregion

    //#region star3
    var star = '';
    for(let i = 1; i < 6; i++)
    {
        for(let j = 1; j < i + 1; j++)
        {
            star += '* ';
        }
        star += '<br>';
    }
    console.log(star);
    document.getElementById('star3').innerHTML = star;
    //#endregion

    //#region star4
    var star = '';
    for(let i = 1; i < 5; i++)
    {
        for(let j = 1; j < i + 1; j++)
        {
            if(j == 1 || j == i)
            {
                star += '* ';
            }
            else
            {
                star += '&nbsp&nbsp&nbsp';
            }
        }
        star += '<br>';
    }
    star += '* * * * *';
    console.log(star);
    document.getElementById('star4').innerHTML = star;
    //#endregion

    //#region star5
    var star = '';
    // var space = '';
    for(let i = 1; i < 6; i++)
    {
        for(let j = 5 - i; j > 0; j--)
        {
            star += '&nbsp';
        }
        for(let k = 1; k < i + 1; k++)
        {
            star += '*&nbsp';
        }
        star += '<br>';
    }
    console.log(star);
    document.getElementById('star5').innerHTML = star;
    //#endregion
}
//#endregion

//#region 摩斯電碼
function morseCode()
{
    let morse = document.getElementById('morse').value;
    // let sentence = morse.split(/\n/);    
    // console.log(sentence);
    let word = morse.split(' ');
    console.log(word);
    let morseCode = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---',
                     '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-',
                     '..-', '...-', '.--', '-..-', '-.--', '--..']
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z'];
    let trans = "";
    let n;
    word.forEach(element => {
        n = $.inArray(element, morseCode); // 要加上jquery引入檔，才能用$.inArray
        trans += letters[n];
    });
    console.log(morse, '→', trans);
    document.getElementById('toEn').innerHTML = trans;
}
//#endregion

//#region 陣列基礎操作
function MaxMin()
{
    let num = document.getElementById('array').value;
    let numArr = num.split(',');
    console.log(numArr);
    // 最大值
    let max = Math.max(...numArr);
    console.log('Max → ', max);
    document.getElementById('max').innerHTML = '最大值：' + max;
    // 最小值
    let min = Math.min(...numArr);
    console.log('Min → ', min);
    document.getElementById('min').innerHTML = '最小值：' + min;
}
function AscDesc()
{
    let num = document.getElementById('array').value;
    let numArr = num.split(',');
    console.log(numArr);
    // 遞增
    let asc = numArr
    asc.sort(function(a, b){
                return a - b;
            });
    console.log('ASC → ', asc);
    document.getElementById('ASC').innerHTML = '遞增：[' + asc + ']';
    // 遞減
    let desc = asc.reverse();
    console.log('DESC → ', desc);
    document.getElementById('DESC').innerHTML = '遞減：[' + desc + ']';
}

//#endregion