import * as yup from 'yup';
import { emailPattern, getTomorrow, phonePattern } from './helpers';

export const yupSchema = yup.object().shape({
	username: yup
		.string()
		.required('Please Enter your name')
		.max(20, 'username should be less than 20 characters')
		.min(2, 'username should be longer than 2 characters')
		// .length(10, '${path} should be ${length} characters')
		.test('checkAPIUsername', 'Wrong username', (value, context) => {
			return fetch('https://jsonplaceholder.cypress.io/users/1')
				.then((response) => response.json())
				.then((json) => {
					console.log(json?.name);
					return json?.name === value;
				})
				.catch((err) => {
					console.log(err);
				});
		}),
	age: yup
		.number()
		.required('please Enter your age')
		.min(13, 'User should be older than 13 years old')
		.test(
			'retirementAgeChecking',
			'This user is eligible for retirement',
			(value, context) => value < 60
		),
	date: yup.date().min(getTomorrow(), "Event can't be from the past"),
	phone: yup
		.string()
		.required('please Enter your phone number')
		.matches(phonePattern, {
			message: 'Invalid phone number',
			excludeEmptyString: true,
		}),
	email: yup
		.string()
		.required('please Enter your email')
		.email('please enter a valid ${path} '),
	password: yup
		.string()
		.required('Please Enter your password')
		.min(6, 'passwords should be longer than 6 characters')
		.oneOf([yup.ref('confirmPassword')], "Passwords don't match"),
	confirmPassword: yup
		.string()
		.required('Please Enter your password')
		.min(6, 'passwords should be longer than 6 characters')
		.oneOf([yup.ref('password')], "Passwords don't match"),
});
