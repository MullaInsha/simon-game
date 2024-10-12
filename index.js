$("h1").text("Press Any Key To Start The Game")
function start(){
    $(document).off("keypress").on("keypress",function(){
        $("h1").text("Level 1")   
        let a;
        let arr=[];
        
    let check;

    function num(){
       a=parseInt((Math.random()*4)+1);
       arr.push(a)
     
    }    
    num()    
    function blink(){
        
        if(a==1)
            {
                $('.first').fadeOut(500).fadeIn(500);
                check=a;
            }
            else if(a==2){
                $('.second').fadeOut(500).fadeIn(500);
                check=a;
            
            }
            else if(a==3){
                $(".third").fadeOut(500).fadeIn(500);
                check=a;
            
            }
            else if(a==4){
                $(".fourth").fadeOut(500).fadeIn(500);
                check=a;
            }
    }
    blink();
    
    
    let level=1;
   
   // arr.push(check);

    function proceed(){
        let f=[];
        $(".first, .second, .third, .fourth").off("click");
    
        
            
            $(".first").on("click",function(){
               
                f.push(1);
                checkseq(f,arr)
            })
               
               
                
              
      
        
            $(".second").on("click",function(){
                f.push(2);
                checkseq(f,arr)
            })
                
        
       
            $(".third").on("click",function(){
                f.push(3);
                checkseq(f,arr)
            })
               
      
      
            $(".fourth").on("click",function(){
                f.push(4);
                checkseq(f,arr)
            })
             
        
        function checkseq(f,arr){
            let correct=0;
            for(let i=0;i<f.length;i++){
                if(arr[i]!=f[i]){
                    correct=1;
                    break;
                }
            }
            if(f.length === arr.length){
                level++;
                $("h1").text("Level "+(level));
                num();
                blink();
                proceed();
            }
            else if(correct==1){
                $("h1").text("Game over ,press any key to start again")
                start();
            }


           


           
        }
        
        
    
    }
    proceed();
    
    
    
    
    
    })
}
start()


