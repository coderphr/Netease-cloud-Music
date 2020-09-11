export default function parseLyric(lyric) {
  let lines = lyric.split(/\n/);
  let arr = [];
  lines.forEach(item => {
    let str = item.split(']')
    arr.push(str[1])
  })
  // var lines = lyric.split(/\n/); //使用/n换行，将数据切成一个数组
  // var getLtricTime = /\[\d{2}:\d{2}.\d{2}\]/g;
  // var arr = [];
  // while (!getLtricTime.test(lines[0])) {
  //   lines = lines.splice(1);
  // }


  // if (lines[lines.length - 1].length == 0) {
  //   lines.pop();
  // }


  // lines.forEach(item => {
  //   var index = item.indexOf("]");
  //   var time = item.substr(1, index - 1);
  //   var timeArr = time.split(":");
  //   var geci = item.substr(index + 1);
  //   arr.push([timeArr[0] * 60 + parseFloat(timeArr[1]), geci]);
  // });
  // console.log(arr);
  // arr.sort(function(a, b) {
  //   return a[0] - b[0];
  // });
  return arr;
}