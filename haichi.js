
const haichi = (num) => {
  const map = ['水', '木', '木', '火', '火', '土', '土', '金', '金', '水' ];
  return map[num % 10];
}

module.exports = haichi;
