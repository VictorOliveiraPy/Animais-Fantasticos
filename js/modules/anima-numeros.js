export default function initAnimaNumeros(){
  function AnimaNumeros(){ 
    const numeros = document.querySelectorAll('[  data-numero ]');

    numeros.forEach((numero) => {
      const total = + numero.innerText;
      const inscremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + inscremento;
        numero.innerText = start;
        if(start > total) {
          numero.innerText = total;
            clearInterval(timer)
       }
      },25 * Math.random())
    })
    }
 //Observador

  function handleMutation(mutation){
    if (mutation[0].target.classList.contains('ativo')){
      observer.disconnect();
      AnimaNumeros();
     }
  }
  const observerTarget = document.querySelec('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, {attributes: true});
}
