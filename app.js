const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers :[
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS',
    ],
    correct: 'ニンテンドーDS'
  },{
    question: '○○の好きな世界一美味しいグルメは？',
    answers :[
      'オムライス',
      'ビビンバ',
      '味噌汁',
      '小籠包',
    ],
    correct: 'オムライス'
  },{
    question: 'サッカー界で「CR7」と言えば、クリスティアーノ・ロナウド選手ですが、バスケットボール界の「CP3」とは誰を指すでしょう？',
    answers :[
      'コービーブライアント',
      'ポール・ジョージ',
      'クリス・ポール',
      'レブロン・ジェームス',
    ],
    correct: 'クリス・ポール'
  },
  
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) =>{
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0
while (handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
