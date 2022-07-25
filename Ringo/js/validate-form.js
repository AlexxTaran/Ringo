

class Valid{
   checkField({item, conditionName, compareField=false}){
   	var message='';
    let rv_name=/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:.,[\]]{2,25}$/u;
	let rv_email = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,})*[0-9A-Za-z]{1})@([0-9A-Za-z]{1}[-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,4})$/u;
	let rv_number = /^\d{1,}$/;
	let rv_password =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,100}$/;
	var blockCountries=['us', 'ca','jp','tr','be','pk','iq','ir','kp','cn','ps','af','sy','so','bw','bs','et','gh','lk','rs','tn','tt','um','ye','es','pt'];
	var response=[];
	var condition;
	switch (conditionName) {
		case 'name':
			condition=rv_name.test(item.value);
			message=item.value.length<2||item.value.length>25?'First name must be between 2 and 25 characters':condition?'':'Digits are not allowed';
			break;
		case 'mail':
			condition=item.value !== '' && rv_email.test(item.value);
			message=condition?'':'Please enter valid email address';
			break;
		case 'password':
			condition=rv_password.test(item.value);
			message=rv_password.test(item.value)?'':'Password must be at least one uppercase letter, lowercase letter, digit, a special character with no spaces and minimum 8 length';
			break;
		case 'passwordconfirm':	
			condition=compareField.value == item.value;
			message=condition?'':'Please make sure your password match';
			break;
		case 'country':	
			condition=blockCountries.indexOf(item.value)==-1 && item.value !== '';
			message=item.value === ''?'Choose country':blockCountries.indexOf(item.value)==-1?'':'Registration blocked for your country';
			break;
		case 'country2':	
			condition=item.value !== '';
			message=condition?'':'Choose country';
			break;
		case 'phone':	
			condition=item.value !== '';
			message=condition?'':'Please enter a valid phone number';
			break;
		default:
			condition=item.value !== '';
			message=condition?'':'The '+fieldName+' is required';
			break;
	}
	var errorField=item.parentNode.querySelector('.error-field-message');
	
	if(condition){
		if(errorField){
			item.parentNode.removeChild(errorField);
		}
		item.parentNode.classList.remove('form-field_incorrect');
		document.querySelector('#userName').classList.remove('userName_active');
		document.querySelector('#userNumber').classList.remove('userNumber_active');
		response['bool']=true;
		response['message']=message;
		return response;
	}
	else{
			if(errorField){
				errorField.textContent=message;
			}
			else{
				item.insertAdjacentHTML('afterend', '<span class="error-field-message">'+message+'</span>');
			}
		item.parentNode.classList.add('form-field_incorrect');
		document.querySelector('#userName').classList.add('userName_active');
		document.querySelector('#userNumber').classList.add('userNumber_active');
		response['bool']=false;
		response['message']=message;
		return response;
	}
  }

   validateWhenSend(arr){
   	var message=[];
    var boll=true;
    var message=[];
    var response=[];

    arr.forEach((item)=>{
    	var checking=this.checkField({...item});
        boll&=checking['bool'];
    });
    return boll;
  }
  validateWhenBlur(arr){
   	var message=[];
    var boll=true;
    var message=[];
    var response=[];

    arr.forEach((item)=>{
    	item.item.addEventListener("blur", ( event ) =>{
		  var checking=this.checkField({...item});
		  		boll&=checking;console.log(boll);
		}, true);
    	
    });
  }
}




