"use strict";
{
  // ランダムで数値をとってくる関数
  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(
        Math.floor(Math.random() * source.length),
        1
      )[0];
    }
    return column;
  }

  // 数値の取得
  function createColumns() {
    const columns = [];
    for(let i = 0; i < 5; i++){
      columns[i] = createColumn(i);
    }
    columns[2][2] = "FREE";
    // console.table(columns);
    return (columns);
  }

  
  // 表の作成
  function renderBingo(bingo) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = bingo[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }
  
  const columns = createColumns();
  renderBingo(columns);
}



// 必要ないrenderBingoで転置を行う
// 行と列の転置
// function createBingo(columns) {
//   const bingo = [];
//   for (let row = 0; row < 5; row++) {
//     bingo[row] = [];
//     for (let col = 0; col < 5; col++) {
//       bingo[row][col] = columns[col][row];
//     }
//   }
  // console.table(bingo);
//   return bingo;
// }



// 整理する前のJS
// "use strict";
// {
//  // ランダムで数値をとってくる関数
//  function createColumn(col) {
//    const source = [];
//    for (let i = 0; i < 15; i++) {
//      source[i] = i + 1 + 15 * col;
//    }
//    const column = [];
//    for (let i = 0; i < 5; i++) {
//      column[i] = source.splice(
//        Math.floor(Math.random() * source.length),
//        1
//      )[0];
//    }
//    return column;
//  }

//  // 数値の取得
//  const columns = [];
//  columns[0] = createColumn(0);
//  columns[1] = createColumn(1);
//  columns[2] = createColumn(2);
//  columns[3] = createColumn(3);
//  columns[4] = createColumn(4);
//  columns[2][2] = "FREE";
//  console.table(columns);

//  // 行と列の転置
//  const bingo = [];
//  for (let row = 0; row < 5; row++) {
//    bingo[row] = [];
//    for (let col = 0; col < 5; col++) {
//      bingo[row][col] = columns[col][row];
//    }
//  }
//  console.table(bingo);

//  // 表の作成
//  for (let row = 0; row < 5; row++) {
//    const tr = document.createElement('tr');
//    for (let col = 0; col < 5; col++) {
//      const td = document.createElement('td');
//      td.textContent = bingo[row][col];
//      tr.appendChild(td);
//    }
//    document.querySelector('tbody').appendChild(tr);
//  }
// }
