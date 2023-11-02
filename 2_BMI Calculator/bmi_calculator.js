
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const finalResult = document.querySelector('#finalResult'); 

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid Weigth ${weight}`
    }else{
       const bmi = (weight / ((height*height)/10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`

        if(bmi=>18.6 && bmi<= 24.9){
            finalResult.innerHTML = `Your BMI is Normal`
        }else if(bmi>24.9){
            finalResult.innerHTML = `Your BMI is Overweigth`
        }else{
            finalResult.innerHTML = `Your BMI is UnderWeight`
        }
    }

});