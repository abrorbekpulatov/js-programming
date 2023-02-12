
function useIphone(isUser) {
  return isUser ? "I like Iphone" : "I don't like use Iphone";
}
console.log(useIphone(true));
// javob: I like Iphone

console.log(useIphone(false));
// javob: I don't like use Iphone


const par = (par1, par2) => {
  return par1 === par2
}

console.log(par('10', 10))
