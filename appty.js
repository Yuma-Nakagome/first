document.addEventListener('DOMContentLoaded', function() {
    const quiz = [
      { //ここからクイズの問題と選択肢、回答を記述 }
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
      {
        question: 'TypeScript でのオブジェクトとは何を意味する？',
        answers: [
          'プリミティブ型の一つ',
          'キーと値のペアを格納する複合データ型',
          'HTML 要素を表す',
          '関数を定義するためのキーワード',
        ],
        correct: 'キーと値のペアを格納する複合データ型',
        explanation:
          'オブジェクトは、関連するデータをひとまとめにして管理するための仕組みです。 JavaScript と同様に、TypeScript でもオブジェクトは「キー」と「値」のペアで構成されます。例えば、`{ name: "太郎", age: 30 }` のように、名前と年齢をまとめて表現できます。',
      },
      {
        question: 'TypeScript でのインターフェースとは何を意味する？',
        answers: [
          'HTML のレイアウトを定義するもの',
          'JavaScript の機能を拡張するもの',
          'オブジェクトの型を定義するもの',
          '変数を宣言するためのキーワード',
        ],
        correct: 'オブジェクトの型を定義するもの',
        explanation:
          'インターフェースは、オブジェクトがどのような「形」をしているかを定義する設計図のようなものです。オブジェクトが持つべきプロパティの名前と型を記述することで、コードの安全性を高めます。例えば、`interface Person { name: string; age: number; }` のように定義すると、`Person` 型のオブジェクトは必ず `name` (文字列型) と `age` (数値型) のプロパティを持つ必要があります。',
      },
      {
        question: 'TypeScript で string 型とは何を意味する？',
        answers: [
          '数値を表す型',
          '真偽値を表す型',
          '文字列を表す型',
          '日付を表す型',
        ],
        correct: '文字列を表す型',
        explanation:
          'TypeScript では、変数の型を明示的に指定することで、コードの安全性を高めることができます。 `string` 型は、`"こんにちは"` や `"Hello World"` のように、文字の並びを表すために使用されます。',
      },
      {
        question: 'TypeScript で関数とは何を意味する？',
        answers: [
          '値を格納する変数',
          '特定の処理を行うコードのまとまり',
          'HTML 要素を操作するもの',
          'CSS スタイルを定義するもの',
        ],
        correct: '特定の処理を行うコードのまとまり',
        explanation:
          '関数は、特定のタスクを実行するためのコードのブロックです。関数は、`function` キーワードを使って定義され、必要に応じて引数を受け取り、値を返すことができます。処理をまとめて再利用できるため、コードの可読性と保守性を高めるのに役立ちます。',
      },
      {
        question: 'TypeScript で return とは何を意味する？',
        answers: [
          '関数を定義する',
          'ループを繰り返す',
          '関数から値を返す',
          '変数を宣言する',
        ],
        correct: '関数から値を返す',
        explanation:
          '`return` は、関数が処理を終えた後に、呼び出し元に値を返すために使用されるキーワードです。 `return` 文が実行されると、関数の実行はそこで終了し、指定された値が返されます。',
      },
      {
        question:
          'TypeScript で `displayText` が変数である場合、それは何を表す可能性が高いですか？',
        answers: [
          '数値を計算する関数',
          'HTML 要素を操作する',
          '表示するテキスト',
          '真偽値を格納する変数',
        ],
        correct: '表示するテキスト',
        explanation:
          '変数の名前は、その変数の役割や目的を表すことが推奨されます。 `displayText` という名前から、この変数が画面に表示するためのテキストを格納するために使用される可能性が高いことがわかります。',
      },
      {
        question:
          'TypeScript で `formatAge` が関数である場合、それは何を行う可能性が高いですか？',
        answers: [
          '年齢を計算する',
          '年齢を文字列として整形する',
          '年齢が特定の値を超えているか確認する',
          '年齢を数値として保存する',
        ],
        correct: '年齢を文字列として整形する',
        explanation:
          '関数の名前も、その関数が行う処理を表すことが推奨されます。 `formatAge` という名前から、この関数が年齢を特定の形式 (例えば `"30歳"`) の文字列に変換するために使用される可能性が高いことがわかります。',
      },
      {
        question: 'TypeScript で `console.log` とは何を意味する？',
        answers: [
          'エラーメッセージを表示する',
          'HTML 要素の内容を変更する',
          'コンソールにメッセージを出力する',
          '変数の型を定義する',
        ],
        correct: 'コンソールにメッセージを出力する',
        explanation:
          '`console.log` は、JavaScript および TypeScript で、デバッグや情報の確認のためにコンソールにメッセージを出力するために使用される関数です。',
      },
      {
        question: 'TypeScript で `forEach` とは何を意味する？',
        answers: [
          '特定の条件が満たされるまでコードを繰り返す',
          '配列の各要素に対して処理を行う',
          '変数の値を更新する',
          '関数から値を返す',
        ],
        correct: '配列の各要素に対して処理を行う',
        explanation:
          '`forEach` は、配列の各要素に対して順番に処理を行うためのメソッドです。配列の要素を一つずつ取り出して、指定された関数を実行します。',
      },
      {
        question:
          'TypeScript で `!ngList` (ngList が配列の場合) とは何を意味する可能性が高いですか？',
        answers: [
          'ngList が空でないことを確認する',
          'ngList が未定義であることを確認する',
          'ngList の最初の要素を取得する',
          'ngList の長さを取得する',
        ],
        correct: 'ngList が空でないことを確認する',
        explanation:
          '`!` は JavaScript および TypeScript で論理否定演算子として使用されます。 `!ngList` は、「ngList が真でない」という意味になります。配列の場合、空の配列 (長さが 0 の配列) は `false` と評価されるため、`!ngList` は「ngList が空でない」ことを確認するのに使用されます。',
      },
      {
        question: 'TypeScript で `includes` とは何を意味する？',
        answers: [
          '配列に特定の要素が含まれているか確認する',
          '文字列が別の文字列を含んでいるか確認する',
          'オブジェクトに特定のプロパティが含まれているか確認する',
          '上記全て',
        ],
        correct: '上記全て',
        explanation:
          '`includes` は、配列や文字列などのコレクションに、特定の要素が含まれているかどうかを確認するために使用されるメソッドです。',
      },
      {
        question:
          'TypeScript で `calculateAge` が関数である場合、それは何を行う可能性が高いですか？',
        answers: [
          '生年月日から年齢を計算する',
          '年齢を特定の値に設定する',
          '年齢を文字列としてフォーマットする',
          '年齢が成人かどうかを判定する',
        ],
        correct: '生年月日から年齢を計算する',
        explanation:
          '関数の名前は、その関数が行う処理を表すことが推奨されます。 `calculateAge` という名前から、この関数が生年月日のような情報から年齢を計算するために使用される可能性が高いことがわかります。',
      },
      {
        question:
          'TypeScript で `!hasBirthdayPassed` が真である場合、それは何を意味する可能性が高いですか？',
        answers: [
          '誕生日がまだ来ていない',
          '誕生日がすでに過ぎている',
          '今日が誕生日である',
          '誕生日は不明である',
        ],
        correct: '誕生日がまだ来ていない',
        explanation:
          '`hasBirthdayPassed` が真偽値を返す変数 (または関数) である場合、`!hasBirthdayPassed` はその値の否定を表します。 つまり、`hasBirthdayPassed` が `true` (誕生日が過ぎている) であれば、`!hasBirthdayPassed` は `false` (誕生日が過ぎていない) となります。',
      },
      {
        question: 'TypeScript で `age--` とは何を意味する？',
        answers: [
          '年齢を1増やす',
          '年齢を1減らす',
          '年齢を0にする',
          '年齢を特定の値に設定する',
        ],
        correct: '年齢を1減らす',
        explanation:
          '`age--` は、`age` 変数の値を 1 減らすための JavaScript および TypeScript の短縮記法です。 これは `age = age - 1` と同じ意味です。',
      },
    ];
  
    const quizLength = quiz.length;
    let quizIndex = 0;
    let score = 0;
  
    const $button = document.getElementsByTagName('button');
    const buttonLength = $button.length;
  
    // クイズの問題文、選択肢を定義
    const setupQuiz = () => {
      document.getElementById('js-question').textContent = quiz[quizIndex].question;
      let buttonIndex = 0;
      while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
      }
    };
  
    setupQuiz();
  
    const clickHandler = (e) => {
      const selectedAnswer = e.target.textContent;
      const currentQuestion = quiz[quizIndex]; // 現在の質問オブジェクトを取得
  
      if (currentQuestion.correct === selectedAnswer) {
        window.alert('正解！' + currentQuestion.explanation);
        score++;
      } else {
        window.alert('不正解！' + currentQuestion.explanation);
      }
  
      quizIndex++;
  
      if (quizIndex < quizLength) {
        // 問題数がまだあればこちらを実行
        setupQuiz();
      } else {
        // 問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
      }
    };
  
    // ボタンをクリックしたら正誤判定
    let handleIndex = 0;
    while (handleIndex < buttonLength) {
      $button[handleIndex].addEventListener('click', clickHandler);
      handleIndex++;
    }
  });


// const quizLength = quiz.length;
// let quizIndex = 0;
// let score = 0;

// const $button = document.getElementsByTagName('button');
// const buttonLength = $button.length;

// //クイズの問題文、選択肢を定義
// const setupQuiz = () =>{
//   document.getElementById('js-question').textContent = quiz[quizIndex].question;
//   let buttonIndex = 0;
//   while(buttonIndex < buttonLength){
//     $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
//     buttonIndex++;
//   }
// }
// setupQuiz();

// const clickHandler = (e) =>{
//   if (quiz[quizIndex].correct === e.target.textContent){
//     window.alert('正解！' + explanation );
//     score++;
//   } else {
//     window.alert('不正解！' + explanation );
//   }


//   quizIndex++;

//   if(quizIndex < quizLength){
//     //問題数がまだあればこちらを実行
//     setupQuiz();
//   } else {
//     //問題数がもうなければこちらを実行
//     window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！');
//   }
// };

// //ボタンをクリックしたら正誤判定
// let handleIndex = 0
// while (handleIndex < buttonLength){
//   $button[handleIndex].addEventListener('click', (e) => {
//     clickHandler(e);
//   });
//   handleIndex++;
// }
