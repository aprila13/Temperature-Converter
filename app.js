      // Grabbing the elements in FtoC
      const input = document.querySelector('#ftocinput'),
      submit = document.querySelector('#ftocsubmit'), 
      celsiusDisplay = document.querySelector('#ftocDisplay'),
      message = document.querySelector('.message');
      

      // Init user temp
      let tempNum;

      //Event listener on submit, function to convert FtoC
      submit.addEventListener('click', calculateToCelsius)


      function calculateToCelsius(){
        tempNum = parseInt(input.value)
        let celsiusTemp = ((tempNum -32) * (.5556))
        celsiusDisplay.value = `${celsiusTemp.toFixed()}`

          if(input.value == '') {
          message.style.textAlign = 'center';
          message.style.color = 'red';
          message.textContent = "Please enter a fahrenheit temperature.";
        }

        else if(celsiusTemp < 10){
          message.style.textAlign = 'center';
          message.style.color = 'red';
          message.textContent = "It's cold outside, wear a jacket.";

        } 
        else {
          message.style.textAlign = 'center';
          message.style.color = 'green';
          message.textContent = "The weather is nice today.";
        }
      }

     

      
      // Grabbing the elements in CtoF
      const getCelsiusConvert = document.querySelector('#goToCtoF'),
            celsiuscontainer = document.querySelector('.CtoF'), fahrenheitcontainer = document.querySelector('.FtoC'),
            celsiusInput = document.querySelector('.celsiusInput'), fahrenheitDisplay = document.querySelector('#fahrenheitDisplay'),
            celsubmit = document.querySelector('#celsubmit'),
            celmessage = document.querySelector('.celmessage');

      // Displays celsius converter
      getCelsiusConvert.addEventListener('click', turnOnCelsius)

      function turnOnCelsius(e){
        celsiuscontainer.style.display = 'block';
        fahrenheitcontainer.style.display = 'none'
        e.preventDefault()
      }


      // Init user temp
      let celtempNum;
      celsubmit.addEventListener('click', calculateToFahrenheit);

      //Event listener on submit, function to convert CtoF
      function calculateToFahrenheit(){
        celtempNum = parseInt(celsiusInput.value);
        let celsiusTemperture = ((celtempNum * 1.8 + 32));
        fahrenheitDisplay.value = `${celsiusTemperture.toFixed()}`;
  
          if(celsiusInput.value == '') {
            celmessage.style.textAlign = 'center';
            celmessage.style.color = 'red';
            celmessage.textContent = "Please enter a celsius temperature.";
            }

          else if(celtempNum < 10){
            celmessage.style.textAlign = 'center';
            celmessage.textContent = "It's cold outside, wear a jacket."
            celmessage.style.color = 'red';
  
          } 
          else {
            celmessage.style.textAlign = 'center';
            celmessage.textContent = "The weather is nice today."
            celmessage.style.color = 'green';
          }
        }

        