



let pre = document.querySelector('#pre');
let next = document.querySelector('#next');
let slider = document.querySelector('.main-slider');
var count = 0;




slider.style.backgroundImage = `url(${database[count]})`;
next.addEventListener('click', () =>{
    if(count == database.length-1){
        count=0
        slider.style.backgroundImage = `url(${database[count]})`;
        // console.log(count);
    }

    else{
        count++
        // console.log(count);
        slider.style.backgroundImage = `url(${database[count]})`;
    }
});
pre.addEventListener('click', ()=>{
    if(count == 0) {
        count =database.length
        //  console.log(count);
        slider.style.backgroundImage = `url(${database[count]})`;
    }
    if(count <= database.length) {
        count--
        // console.log(count);
        slider.style.backgroundImage = `url(${database[count]})`;
    }
});


for(let i = 0; i < database.length; i++) {

        let btn = document.createElement('button');
        btn.setAttribute('name', i)
        document.querySelector('#indicator').appendChild(btn);
        setInterval(()=>{
            for( let a =1; a<database.length; a++){
              
                if(btn.name == count) {
                    btn.style.background ="#497952";
                    
                }
                if (btn.name !=count) {
                    btn.style.background ="#ffffff";
                }
            }
        },100)
    }
   x




