//your JS code here. If required.
document.getElementById("btn").addEventListener("click", ()=> {
	let input = document.getElementById("ip").value;
	let output = document.getElementById("output");
	let number = parseInt(input);

	function promise1() {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve(number);
			}, 2000)
		})
	}

	function promise2(number) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				number = number*2;
				resolve(number)
			}, 2000)
		})
	}

	function promise3(number) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				number = number - 3;
				resolve(number);
			}, 1000)
		})
	}

	function promise4(number) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				number = number / 2;;
				resolve(number);
			}, 1000)
		})
	}
	
	function promise5(number) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				number = number+10;
				resolve(number);
			}, 1000)
		})
	}
	

	promise1().then(number => {
		output.textContent = `Result: ${number}`;
		return promise2(number)
	}).then(doubleNumber => {
		output.textContent = `Result: ${doubleNumber}`;
		return promise3(doubleNumber)
	}).then(substractedNum => {
		output.textContent = `Result: ${substractedNum}`;
		return promise4(substractedNum);
	}).then(divideNum => {
		output.textContent = `Result: ${divideNum}`;
		return promise5(divideNum);
	}).then(addedNum => {
		output.textContent = `Result: ${addedNum}`;
		return addedNum;
	}).then(finalNum => {
		output.textContent = `Final Result: ${finalNum}`
	})
	
})
