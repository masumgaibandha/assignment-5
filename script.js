console.log('connected')

function getElement(id){
    const element = document.getElementById(id);
    return element; 
}

getElement('card-containder').addEventListener('click', function(e){
   // Heart count part
    if(e.target.className.includes('fa-heart')){
       const heartCount = getElement('heart-count');
       const currentTotal = parseInt(heartCount.firstChild.textContent) || 0;
       heartCount.firstChild.textContent = (currentTotal + 1) + " ";
    }

// Number copy part

if (e.target.classList.contains('fa-copy') || e.target.innerText.toLowerCase().includes('copy')) {
  const card = e.target.closest('.contact-cards');
  if (!card) return;

  const number = card.querySelector('.emergency-number').innerText.trim();

  const copyCount = getElement('copy-count');
  copyCount.innerText = (parseInt(copyCount.innerText) || 0) + 1;

  navigator.clipboard.writeText(number)
    .then(() => alert(`Number Copied: ${number}`))
    .catch(err => console.error('Copy failed:', err));
}

 
// call count
        const callBtn = e.target.closest('.call-btn');
        if(callBtn){
            const card = callBtn.closest('.contact-cards')
        if(!card) return;
        const title = card.querySelector('.card-title').textContent.trim();
        const number = card.querySelector('.emergency-number').textContent.trim();

        const coinSpan = getElement('coin-count');
        const currentCoins = parseInt(coinSpan.firstChild.textContent) || 0;
        if(currentCoins < 20){
            alert('You have not sufficient coins. For calling purpose need minimum 20 coins');
            return;
        }
        coinSpan.firstChild.textContent = (currentCoins - 20) + ' ';
        alert(`Calling ${title} ${number}`);
// HTML append
    const callContainer = getElement('call-container');
  if (callContainer) {
    const realTime = new Date().toLocaleTimeString();
    const newCallHistory = document.createElement('div');
    newCallHistory.innerHTML = `
      <div class="bg-[#fafafa] rounded flex justify-between items-center p-3 mb-4">
        <div>
          <h1 class="font-semibold text-[18px]">${title}</h1>
          <span class="text-[#5C5C5C] text-[18px]">${number}</span>
        </div>
        <div>
          <h1>${realTime}</h1>
        </div>
      </div>
    `
    callContainer.prepend(newCallHistory); 
  }

        }

})
// Clear BTN
document.getElementById('btn-clear').addEventListener('click', function () {
  const callContainer = document.getElementById('call-container');
  callContainer.innerHTML = '';
});