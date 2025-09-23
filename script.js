console.log('connected')

function getElement(id){
    const element = document.getElementById(id);
    return element; 
}

getElement('card-containder').addEventListener('click', function(e){
    if(e.target.className.includes('fa-heart')){
        // Heart increase part
       const heartCount = getElement('heart-count');
       const currentTotal = parseInt(heartCount.firstChild.textContent) || 0;
       heartCount.firstChild.textContent = (currentTotal + 1) + " ";
    }
    

// Number copy part
  const copyIcon = e.target.closest('.fa-copy');      
  const copyBtn  = e.target.closest('button');         

  const isCopyClick =
    !!copyIcon || (copyBtn && copyBtn.textContent.trim().toLowerCase().startsWith('copy'));

  if (isCopyClick) {
    const card  = (copyIcon || copyBtn).closest('.contact-cards');
    if (!card) return;

    const numEl = card.querySelector('.emergency-number');
    if (!numEl) return;

    const number = numEl.textContent.trim();
    // copy count
     const copyCount = getElement('copy-count');
        if(copyCount){
         const currentCopy = parseInt(copyCount.firstChild.textContent) || 0;
        copyCount.firstChild.textContent = (currentCopy + 1) + " ";
        }


    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(number)
        .then(() => alert('Number Copied: ' + number))
        .catch(err => console.error('Clipboard failed:', err));
    } else {
      const ta = document.createElement('textarea');
      ta.value = number;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        alert('Copied: ' + number);
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
      document.body.removeChild(ta);
    }
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
        }

})