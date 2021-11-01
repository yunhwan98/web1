      var Links = {
        setColor : function(color){
        var alist = document.querySelectorAll('a');
        var i=0;
        while(i<alist.length){
          alist[i].style.color= color;
          i++;
          }
        }
      }

      var Body = {
        setColor : function(color){
          document.querySelector('body').style.color = color;
        },
        SetBackgroundColor : function(color){
          document.querySelector('body').style.backgroundColor = color;
        }
      }

      function nightDayHandler(self){
        var target =document.querySelector('body');
        if(self.value === 'night'){
          Body.SetBackgroundColor('black');
          Body.setColor('white');
          self.value = 'day';

          Links.setColor('white');

        }

        else{
          Body.SetBackgroundColor('white');
          Body.setColor('black');
          self.value = 'night';

          Links.setColor('blue');
        }
      }
