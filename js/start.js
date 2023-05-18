const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = qnaList.length;
const scores = [0, 0, 0, 0, 0, 0, 0, 0];


console.log(endPoint);

/*
function calResult(){
  console.log(scores);
  var result = select.indexOf(Math.max(...select));
  return result;
}
*/

function setResult(){
  let p0 = Math.round((scores[0]/20)*100);
  let p1 = Math.round((scores[1]/20)*100);
  let p2 = Math.round((scores[2]/20)*100);
  let p3 = Math.round((scores[3]/20)*100);
  let p4 = Math.round((scores[4]/16)*100);
  let p5 = Math.round((scores[5]/16)*100);
  let p6 = Math.round((scores[6]/20)*100);
  let p7 = Math.round((scores[7]/16)*100);

  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[0].name;

  /*
  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + 0 + '.png';
  resultImg.src = imgURL;
  resultImg.alt = 0;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[0].desc;
  */

  //Put Chart Instead
  const imgDiv = document.querySelector('#resultImg');
  // Create a new canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'myChart';

  // Append the new canvas to the body (or another container element)
  imgDiv.appendChild(canvas);

  // Get the context of the newly created canvas
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
      type: 'radar',
      data: {
          labels: ['외향성', '타인에 대한 관심', '타인에 대한 공감', '예술성', '창의,상상력', '지적 호기심,정보력', '이성,논리', '복잡도'],
          datasets: [{
              label: '나',
              data: [p0, p1, p2, p3, p4, p5, p6, p7],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
              
          }]
      },
      options: {
        scales: {
            r: {
                angleLines: {
                  display: true
              },
                suggestedMax: 100,
                suggestedMin: 0,
            }
        },
        elements: {
          line: {
            borderWidth: 3
          }
        }
        
    }
  });

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = '';
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].q.type;
      var weight = qnaList[qIdx].a[idx].weight;
      for(let i = 0; i < target.length; i++){
        scores[target[i]] += weight;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q.question;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
  console.log(scores);
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
