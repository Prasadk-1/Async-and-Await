const msg = async (count) => {
  const ret = new Promise((resolve,reject) => {
    for(let i=count;i>=1;i--){
    if (count >= 1){
      
      setTimeout(() => {
       const heading = document.querySelector("h1");
       heading.innerText = count;
       const Para = resolve(count);
     }, 1000);
     
    
     
    }else{
      setTimeout(() => {
        reject("Happy New Year!!!");
    },1000);
    }
  }
  });
  await ret;
  --count;
};

msg(5);
