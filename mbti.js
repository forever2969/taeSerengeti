let num = 1;

const q = {
    1:{"title":"문제 1번","type":"EI","A":"E","B":"I"},
    2:{"title":"문제 2번","type":"SN","A":"S","B":"N"},
    3:{"title":"문제 3번","type":"TF","A":"T","B":"F"},
    4:{"title":"문제 4번","type":"JP","A":"J","B":"P"},
    5:{"title":"문제 5번","type":"EI","A":"E","B":"I"},
    6:{"title":"문제 6번","type":"SN","A":"S","B":"N"},
    7:{"title":"문제 7번","type":"TF","A":"T","B":"F"},
    8:{"title":"문제 8번","type":"JP","A":"J","B":"P"},
    9:{"title":"문제 9번","type":"EI","A":"E","B":"I"},
    10:{"title":"문제 10번","type":"SN","A":"S","B":"N"},
    11:{"title":"문제 11번","type":"TF","A":"T","B":"F"},
    12:{"title":"문제 12번","type":"JP","A":"J","B":"P"},
};

const result = {
    "ISTJ" : {"animal": "하마","explain":"하마설명","img":"./image/lion.jpg"},
    "ENFP" : {"animal": "사자","explain":"사자설명","img":"./image/lion.jpg"},
    "ENTJ" : {"animal": "기린","explain":"기린설명","img":"./image/lion.jpg"},
    "INFJ" : {"animal": "토끼","explain":"토끼설명","img":"./image/lion.jpg"},
}

const answerValueA = document.querySelector('#A');
const answerValueB = document.querySelector('#B');

function start(){
    next();
    const startBlock = document.querySelector('.start');
    const questionBlock = document.querySelector('.question');
    startBlock.style.display = "none";
    questionBlock.style.display="flex";
}

answerValueA.addEventListener("click",()=>{
    const type = document.querySelector('#type');
    const typeVal = type.value;
    const typeId = document.querySelector('#'+typeVal);
    let typeIdVal = parseInt(typeId.value);

    typeIdVal = typeIdVal +1;
    typeId.value = typeIdVal;;
    next();
})
answerValueB.addEventListener("click",()=>{
    next();
})

function next(){
    if(num===13){
        const resultBlock = document.querySelector('.result');
        const questionBlock = document.querySelector('.question');
        resultBlock.style.display = 'block';
        questionBlock.style.display = 'none';

        let mbti = "";
        const EIinput = document.querySelector('#EI');
        const EIvalue = EIinput.value;
        const SNinput = document.querySelector('#SN');
        const SNvalue = SNinput.value;
        const TFinput = document.querySelector('#TF');
        const TFvalue = TFinput.value;
        const JPinput = document.querySelector('#JP');
        const JPvalue = JPinput.value;
        (EIvalue<2) ? mbti+="I" : mbti+="E";
        (SNvalue<2) ? mbti+="N" : mbti+="S";
        (TFvalue<2) ? mbti+="F" : mbti+="T";
        (JPvalue<2) ? mbti+="P" : mbti+="J";

        const resultImg = document.querySelector('#img');
        resultImg.style.src = result[mbti]["img"];
        const resultAnimal = document.querySelector('#animal');
        resultAnimal.innerHTML = result[mbti]["animal"];
        const resultExplain = document.querySelector('#explain');
        resultExplain.innerHTML = result[mbti]["explain"];
        console.log()
        return;
    }
    const progressId = document.querySelector('.progress-bar');
    const titleId = document.querySelector('#title');
    const type = document.querySelector('#type');

    progressId.style.width = (100/12)*(num)+"%";
    titleId.innerHTML = q[num]["title"];
    type.value = q[num]["type"];
    answerValueA.innerHTML = q[num]["A"];
    answerValueB.innerHTML = q[num]["B"];
    num = num+1;
}