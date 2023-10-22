/*
 tools methods:
	minLength
	maxLength
	hasNumber
	hasUppercase
	hasLowercase
	isEmail
	isValidPass
*/

const tools = {
	minLength(str, minLength) {
		return str.length >= minLength;
	},

	maxLength(str, maxLength) {
		return str.length <= maxLength;
	},

	hasNumber(str) {
		for (let i = 0; i < str.length; ++i) {
			if (Number.isInteger(+str[i])) {
				return true;
			}
		}
	},

	isPhoneNumber(str) {
		const number = +str;
		if (Number.isInteger(number) && str.length === 8) {
			return true;
		}

		return false;
	},

	hasUppercase(str) {
		for (let i = 0; i < str.length; ++i) {
			const asciiCode = str[i].charCodeAt(0);
			if (asciiCode > 64 && asciiCode < 91) {
				return true;
			}
		}
	},

	hasLowercase(str) {
		for (let i = 0; i < str.length; ++i) {
			const asciiCode = str[i].charCodeAt(0);
			if (asciiCode > 96 && asciiCode < 123) {
				return true;
			}
		}
	},

	isEmail(str) {
		try {
			const mailParts = str.split('@');
			if (mailParts[0].length < 3) { return false; }

			const mailSecondPart = mailParts[1].split('.');
			if (mailSecondPart[0] !== 'mail' && mailSecondPart[0] !== 'gmail') { return false; }
			if (mailSecondPart[1] !== 'ru' && mailSecondPart[1] !== 'com') { return false; }
		} catch (e) {
			return false;
		}

		return true;
	},

	isValidPass(str) {
		let status = [0, 0, 0, 0];

		status[0] = this.minLength(str, 8);
		status[1] = this.hasUppercase(str);
		status[2] = this.hasLowercase(str);
		status[3] = this.hasNumber(str);

		return status;
	},

	isValidPassStatuses(arr) {
		for (let i = 0; i < arr.length; ++i) {
			if (arr[i] === 1) { return false; }
		}
		return true;
	}
};

export default tools;