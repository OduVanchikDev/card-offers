

export function formatMoney ( number ) {
  const [base, remains] = number.toFixed(2).split('.');
  const arr = [];

  for (let i = base.length; i > 0; i -= 3){
     arr.unshift(base.slice(Math.max(0, i-3), i));
  }
  return arr.join(' ') + (remains === '00' ? '' : `.${remains}`) + ' ₽';

}
