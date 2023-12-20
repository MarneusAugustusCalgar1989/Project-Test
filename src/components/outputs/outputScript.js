export const testScript = `<script> document.querySelector('.test-header').textContent =
  testObj[2][0].nameOfTest;

document.querySelector('.main-page-image-url').src = testObj[2][0].mainPageUrl;
const itog = document.querySelector('.itog');
itog.style.display = 'none';
const tBody = document.querySelector('.test-preview-holder-beauty');

document.querySelector('.lets-play-button').onclick = e => {
  let someQuest = document.querySelector('.testQuery');
  let someAnswer = document.querySelector('.aCard');

  e.target.parentNode.classList.add('el-out');

  setTimeout(() => {
    e.target.parentNode.remove();
    

    for (el in testObj[1]) {
      
      
    
      someQuest.querySelector('.question-page-image-url').src = testObj[1][el].questionImage;
      someQuest.querySelector('.qCard').textContent = testObj[1][el].question;
      

      tBody.appendChild(someQuest.cloneNode(true));

      someQuest.classList.add('action-card');
    }

    const actionCards = document.querySelectorAll('.action-card');
    for (let i = 0; i < actionCards.length; i++) {
      actionCards[i].querySelector('.question-counter').textContent = 'Вопрос №' + parseInt(testObj[1][i].id + 1)
      
      testObj[1][i].answers.map(ans => {
        let newAns = document.createElement('div');
        newAns.classList.add('aCard');
        newAns.textContent = ans.answer;
        actionCards[i].appendChild(newAns);

        newAns.addEventListener('click', e => {
          e.target.parentNode.classList.add('el-out');
          let clickedAnswer = e.target.textContent;
          let findItem = testObj[1][i].answers.find(el => {
            return el.answer === clickedAnswer;
          });
          testObj[0].map(el => {
            if (el.resId === findItem.answerRelation) {
              el.resCount += 1;
            }
          });

          let findResult = testObj[0].find(el => {
            return el.resId === findItem.answerRelation;
          });

          setTimeout(() => {
            e.target.parentNode.remove();
            if (actionCards[i + 1]) {
              actionCards[i + 1].style.display = 'flex';
              actionCards[i + 1].classList.add('fade-in-item');
            } else {
              let sortedResults = testObj[0].sort((a, b) => {
                return b.resCount - a.resCount;
              });
              itog.querySelector('.result-image').src = sortedResults[0].resImg;
              itog.querySelector('.result-header').textContent =
                sortedResults[0].resHeader;
              itog.querySelector('.aCardresult').textContent =
                sortedResults[0].resDescr;
              itog.querySelector('.qCard').textContent =
                sortedResults[0].resHeader;
              itog.style.display = 'flex';
              itog.classList.add('fade-in-item');
              itog.querySelector('.result-image').src = testObj[0][1].resImg;
            }
          }, 400);
        });
      });
    }

    actionCards[0].style.display = 'flex';

    someQuest.classList.add('fade-in-item');
    someQuest.style.display = 'flex';
    someQuest.querySelector('.question-page-image-url').src =
      testObj[1][0].questionImage;
    someQuest.querySelector('.qCard').textContent = testObj[1][0].question;

   
  }, 500);
};
</script>`;
