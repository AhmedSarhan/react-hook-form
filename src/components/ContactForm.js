import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { defaultValues } from '../utils/helpers';
const ContactForm = () => {
	const {
		register,
		reset,
		errors,
		setError,
		handleSubmit,
		getValues,
	} = useForm({
		mode: 'onTouched',
		criteriaMode: 'firstError',
		reValidateMode: 'onBlur',
		// defaultValues: defaultValues,
	});
	const [showPass, setShowPass] = useState(false);
	const [passType, setPassType] = useState('password');

	useEffect(() => {
		if (showPass) {
			setPassType('text');
			return;
		}
		setPassType('password');
	}, [showPass]);
	const registerHandler = (data) => {
		console.log(data);
		reset();
	};
	return (
		<>
			<form onSubmit={handleSubmit(registerHandler)}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						ref={register({
							required: 'Username is required',
							minLength: {
								value: 2,
								message: "username shouldn't be less than 2 characters",
							},
							validate: {
								asyncCompareNames: (value) =>
									axios
										.get(
											'https://sarhan-food-menu.firebaseio.com/pizza-menu/-MR0RGzzOrSnojqc_etu.json'
										)
										.then((res) => {
											console.log(res?.data?.name);
											return (
												res?.data?.name === value || 'wrong Names Try gain'
											);
										})
										.catch((err) => {
											console.log(err);
										}),
							},
						})}
						className="form-control"
					/>
					{errors.username && (
						<span className="error">{errors.username?.message}</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						ref={register({
							required: 'age is required',
							min: {
								value: 13,
								message: "age shouldn't be less than 13",
							},
							valueAsNumber: true,
							// ignored as valueAsNumber omits it
							setValueAs: (value) => parseInt(value) + 1,
							// validate only runs after the validation in register
							validate: {
								positive: (value) =>
									parseInt(value) <= 25 || "age can't be greater than 25 ",
							},
						})}
						className="form-control"
					/>
					{errors.age && <span className="error">{errors.age?.message}</span>}
				</div>
				<div className="form-group">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						name="date"
						ref={register({
							required: 'date is required',
							min: {
								value: 13,
								message: "date shouldn't be less than 13",
							},
							// valueAsDate: true,
							validate: {
								futureDate: (value) =>
									new Date(value).getTime() > new Date().getTime() ||
									"Event can't be from the past",
							},
						})}
						className="form-control"
					/>
					{errors.date && <span className="error">{errors.date?.message}</span>}
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone Number</label>
					<input
						type="text"
						name="phone"
						ref={register({
							required: 'phone number is required',
							pattern: {
								value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/,
								message: 'Please enter a valid phone number',
							},
						})}
						className="form-control"
					/>
					{errors.phone && (
						<span className="error">{errors.phone?.message}</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						ref={register({
							required: 'email address is required',
							pattern: {
								value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
								message: 'Please enter a valid email address',
							},
						})}
						className="form-control"
					/>
					{errors.email && (
						<span className="error">{errors.email?.message}</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type={passType}
						name="password"
						ref={register({
							required: 'password is required',
							minLength: {
								value: 5,
								message: "passwords shouldn't be shorter than 5 characters",
							},
						})}
						className="form-control"
					/>
					{errors.password && (
						<span className="error">{errors.password?.message}</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type={passType}
						name="confirmPassword"
						ref={register({
							required: 'confirmPassword is required',
							minLength: {
								value: 5,
								message: "passwords shouldn't be shorter than 5 characters",
							},
							validate: {
								checkPasswordConfirmationHandler: (value) => {
									const { password } = getValues();
									return password === value || "Passwords don't match";
								},
							},
						})}
						className="form-control"
					/>
					{errors.confirmPassword && (
						<span className="error">{errors.confirmPassword?.message}</span>
					)}
				</div>
				<div className="form-group">
					<input
						name="passType"
						type="checkbox"
						checked={showPass}
						onChange={() => setShowPass((prev) => !prev)}
					/>
					<label htmlFor="passType">
						{showPass ? 'hide password' : 'show password'}
					</label>
				</div>
				<button type="submit">submit</button>
			</form>
		</>
	);
};

export default ContactForm;
