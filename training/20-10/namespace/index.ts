///<reference path='language.ts'/>
///<reference path='utils.ts'/>
const utils = edu.ankush.training.utils;
const langUtil = edu.ankush.training.lanugage;
const lang = new langUtil.Language(langUtil.LangCode["ENGLISH-INDIA"]);
const result = <HTMLDivElement>document.querySelector("#result");
const btn = <HTMLButtonElement>document.querySelector("#roll");

result.innerHTML += `India :: Cheque is Called ${lang.getText('bank-note')}<br>`;
result.innerHTML += `India :: Colour is Called ${lang.getText('colour')}<br>`;
result.innerHTML += `US :: Cheque is Called ${lang.getText('bank-note', langUtil.LangCode["ENGLISH-US"])}<br>`;
result.innerHTML += `US :: Colour is Called ${lang.getText('colour', langUtil.LangCode["ENGLISH-US"])}<br>`;
btn.onclick = () => {
    const num = utils.randomNum(6) + 1;
    result.innerHTML += "</br>" +
     ( num === 6?`Dice rolled, Got 6. Go Ahead.`: `Dice rolled and stoped at ${num}`);
};