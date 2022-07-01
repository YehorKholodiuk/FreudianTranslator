function toFreud (s){
    return !s?'':s.split(' ').map(el => 'sex').join(' ')
}
console.log(toFreud('I will be back'))
