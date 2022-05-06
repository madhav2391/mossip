/*
<i class="fab fa-freebsd"></i>
<i class="fab fa-free-code-camp"></i>
<i class="fas fa-socks"></i>
<i class="fas fa-tree"></i>
<i class="fas fa-ambulance"></i>
<i class="fab fa-amazon"></i>
<i class="fab fa-apple"></i>
<i class="fas fa-angry"></i>
*/
$(function(){


    $('#final-display').hide();
    function rating(moves,minute,second){
    // $( "#main_card" ).prop( "disabled", true );
                  if(moves>=8 && moves<=13) return 5;
                  else if(moves>=14 && moves<=17) return 4;
                  else if(moves>=18 && moves<=23) return 3;
                  else if(moves>=24 && moves<=29) return 2;
                  else if(moves>=30 && moves<=40) return 1;
                  else return 0;
    }
   
    function star_rating(rate)
    {
        if(rate==1)
        {
            $('#star-1').addClass('checked');
        }
        else if(rate==2)
        {
           $('#star-1').addClass('checked');
           $('#star-2').addClass('checked'); 
        }
        else if(rate==3)
        {
           $('#star-1').addClass('checked');
           $('#star-2').addClass('checked');
           $('#star-3').addClass('checked');
        }
        else if(rate==4)
        {
           $('#star-1').addClass('checked');
           $('#star-2').addClass('checked');
           $('#star-3').addClass('checked');
           $('#star-4').addClass('checked');
        }
   
        else
        {
           $('#star-1').addClass('checked');
           $('#star-2').addClass('checked');
           $('#star-3').addClass('checked');
           $('#star-4').addClass('checked');
           $('#star-5').addClass('checked');
        }
    }
   
    function congratulations_card(rate,minu,sec,moves){
   
          setTimeout(()=>{
              $('#final-time').text(`Time: ${minu} mins ${sec} seconds`)
              $('#final-moves').text(`Moves: ${moves}`)
               star_rating(rate)
              $('#final-display').show();
   
          },700)
             
    }

let items=[]
let i
let ct=0
let moves=0;
let audio=$('#pop')
audio[0].play();

let second = 0, minute = 0;
let minutes = $('#minutes')
let seconds=$('#seconds')
  let interval;
  let mi,sec;
function startTimer(){
       interval=setInterval(function(){
           if(minute<=9) mi="0"+minute
           else mi=minute
           if(second<=9) sec="0"+second
           else sec=second
        minutes.text(mi);
        seconds.text(sec);
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            minute = 0;
        }
    },1000);
}

  function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }


   
    for(i=1;i<=2;i++)
    {
      for(let j=1;j<=8;j++)
      {
          items.push(j);
      }
    }

    
        items=shuffle(items)
        items=shuffle(items)
    
 let shuffeled=items
  
 let group_card=$('.group_card')
      group_card.empty()

   for(i=0;i<shuffeled.length;i++)
   {
     let str=(i+1).toString()
      
      if(shuffeled[i]==1)
      {
       group_card.append(`<div class="flip-card" id=${str}>
       <div class="flip-card-inner">
         <div class="flip-card-front bg-secondary">
             
         </div>
         <div class="flip-card-back">
           <div class="adj text-info"> <i class="fab fa-free-code-camp"></i> </div>
         </div>
       </div>
     </div>`)
      }
      else if(shuffeled[i]==2)
      {
         group_card.append(`<div class="flip-card" id=${str}>
         <div class="flip-card-inner">
           <div class="flip-card-front bg-secondary">
               
           </div>
           
           <div class="flip-card-back">
             <div class="adj text-warning">   <i class="fab fa-freebsd"></i> </div>
           </div>
         </div>
       </div>`)
      }
      else if(shuffeled[i]==3)
      {
        group_card.append(`<div class="flip-card" id=${str}>
        <div class="flip-card-inner">
          <div class="flip-card-front bg-secondary">
              
          </div>
          <div class="flip-card-back">
            <div class="adj text-secondary"><i class="fas fa-socks"></i></div>
          </div>
        </div>
      </div>`)
      }
       else if(shuffeled[i]==4)
       {
          group_card.append(`<div class="flip-card" id=${str}>
          <div class="flip-card-inner">
            <div class="flip-card-front bg-secondary">
                
            </div>
            <div class="flip-card-back">
              <div class="adj text-success"><i class="fas fa-tree"></i></div>
            </div>
          </div>
        </div>`)
       }
       else if(shuffeled[i]==5)
         {
            group_card.append(`<div class="flip-card" id=${str}>
            <div class="flip-card-inner">
              <div class="flip-card-front bg-secondary">
                  
              </div>
              <div class="flip-card-back">
              <div class="adj text-success"><i class="fas fa-ambulance"></i></div>
              </div>
            </div>
          </div>`)

         }
         else if(shuffeled[i]==6)
         {
            group_card.append(`<div class="flip-card" id=${str}>
            <div class="flip-card-inner">
              <div class="flip-card-front bg-secondary">
                  
              </div>
              <div class="flip-card-back">
              <div class="adj text-primary"><i class="fab fa-amazon"></i></div>
              </div>
            </div>
          </div>`)   
         }
         else if(shuffeled[i]==7)
         {
            group_card.append(`<div class="flip-card" id=${str}>
            <div class="flip-card-inner">
              <div class="flip-card-front bg-secondary">
                  
              </div>
              <div class="flip-card-back">
              <div class="adj text-danger"><i class="fab fa-apple"></i></div>
              </div>
            </div>
          </div>`) 

         }
         else{
            group_card.append(`<div class="flip-card" id=${str}>
            <div class="flip-card-inner">
              <div class="flip-card-front bg-secondary">
                  
              </div>
              <div class="flip-card-back">
              <div class="adj text-danger"><i class="fas fa-angry"></i></div>
              </div>
            </div>
          </div>`) 

         }

  }


  let value=[]
  let card=$('#main_card .flip-card')
  let eq=[]

  function comp(arr)
  {
     let val1=$('#'+arr[0]+' .adj').html() 
     let val2=$('#'+arr[1]+' .adj').html() 
       console.log(arr[0]);
       console.log(arr[1])
       console.log(1)
       if(val1===val2)
       {
        setTimeout(()=>{
          let inner=$('#volume').html()
          let match_audio=$('#match-audio');
            if(inner==='<i class="fas fa-volume-up"></i>')
            {
              match_audio[0].play() 
            }
            else
            {
             match_audio[0].pause()
             match_audio[0].currentTime = 0
            }

        },400)
      
         eq.push(arr[0])
         eq.push(arr[1])
       console.log("equal")
       ct+=2;
       }
       else{
            console.log("not equal")
             let val3='#'+arr[1]+' .flip-card-inner'
             let val4='#'+arr[0]+' .flip-card-inner'
            console.log(arr[0])
            console.log(arr[1])
         // $(val4).removeClass('toggle')
          setTimeout(() => {
            let inner=$('#volume').html()
        let unmatch_audio=$('#unmatch-audio');
          if(inner==='<i class="fas fa-volume-up"></i>')
          {
            unmatch_audio[0].play() 
          }
          else
          {
           unmatch_audio[0].pause()
           unmatch_audio[0].currentTime = 0
          }
            $(val4).removeClass('toggle')
            $(val3).removeClass('toggle')
          }, 700);
        
  
       }
  }


  $('#moves').text(moves)
  let temporary=1;
  card.click((event)=>{
    let inner=$('#volume').html()
  let flip_audio=$('#flip-audio');
    if(inner==='<i class="fas fa-volume-up"></i>')
    {
      flip_audio[0].play() 
    }
    else
    {
     flip_audio[0].pause()
     $('#flip-audio')[0].currentTime = 0
    }
      
        if(temporary===1)startTimer();

          temporary=0;
    
        // moves++;
       
       let id=event.currentTarget.id
    //console.log(id);
    $('#'+id+' .flip-card-inner').addClass('toggle')

     console.log($('#'+id+' .adj').html())
      if(jQuery.inArray(id,value)===-1 && jQuery.inArray(id,eq)===-1)
       {
         value.push(id);
         //console.log(id);
       }
      
     
       if(value.length===2)
       {
         moves++;
         $('#moves').text(moves)
        comp(value);
         //console.log(2);
        value.splice(0, value.length)
       } 
       if(ct==16)
       {
         clearInterval(interval)
         let rate=rating(moves,mi,sec)
         congratulations_card(rate,mi,sec,moves)
      }
      
   })

   
   $('#volume').click(()=>{
      let inner=$('#volume').html()
         //console.log(audio)
      if(inner==='<i class="fas fa-volume-up"></i>')
        {
          $('#volume').html('<i class="fas fa-volume-mute"></i>') 
           
          audio[0].pause() 
          $('audio#pop')[0].currentTime = 0
        }
        else
        {
          $('#volume').html('<i class="fas fa-volume-up"></i>')
          audio[0].play()
        }
      
   })

      
   $('#final-button').click(function(){
    console.log('!clicked')
      //alert('play again')
      location.reload();
    })

    $('#icon').click(()=>{
      $('#final-display').remove();
    })
  
    $("#reset").click(function () {
        location.reload();
        //alert('Reseting Page');
    })
});


        