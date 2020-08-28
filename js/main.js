const box = document.getElementById('box');
let move = 0;
let result = '';
let result_x = (sessionStorage.getItem('result_x')===null) ? 0: sessionStorage.getItem('result_x');
let result_o = (sessionStorage.getItem('result_o')===null) ? 0: sessionStorage.getItem('result_o');
const contentWrapper = document.getElementsByClassName('modal_logo')[0];
const modalResult = document.getElementById('modal-result');
const btnClose = document.getElementById('btn_close');
const btnContinue = document.getElementById('btn_continue');

const pannel_x = document.querySelector('#pannel_x')
const pannel_o = document.querySelector('#pannel_o')


document.querySelector('#total_x').innerHTML = result_x;
document.querySelector('#total_o').innerHTML = result_o;


box.addEventListener('click', e => {
	if(e.target.className = 'cell'){
		if (move % 2 === 0){
			e.target.innerHTML = 'X';
			pannel_x.classList.remove('active');
			pannel_o.classList.add('active');
			
		} else {
			e.target.innerHTML = 'O';
			pannel_o.classList.remove('active');
			pannel_x.classList.add('active');
		}
	    
	    move++;
	    check();
  }
});

const check = () =>{
	const boxes = document.getElementsByClassName('cell');
	const arr = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]]

	for (var i = 0; i < arr.length; i++) {
		if( boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'){
			result = 'X';
			prepareResult(result);
			win_i(result);
		}else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'){
			result = 'O';
			prepareResult(result);
			win_i(result);
		}
	}
}

const prepareResult = wineer =>{
	contentWrapper.innerHTML = wineer;
	modalResult.style.display = 'block';

	}

const closeModal = () =>{
	modalResult.style.display = 'none';
	sessionStorage.setItem('result_x', result_x);
	sessionStorage.setItem('result_o', result_o);
	location.reload();

}

const gameContinue = () =>{
	modalResult.style.display = 'none';
	sessionStorage.setItem('result_x', 0);
	sessionStorage.setItem('result_o', 0);
	location.reload();
}

const win_i = wineer =>{
	if (wineer === 'X') {
		result_x++;
		
	}
	if (wineer === 'O') {
		result_o++;
		
	}
}

console.log('X :',result_x, 'O :',result_o);


btnContinue.addEventListener('click', closeModal);
btnClose.addEventListener('click', gameContinue);
