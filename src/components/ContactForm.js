import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { defaultValues, phonePattern, emailPattern } from '../utils/helpers';
import { yupSchema } from '../utils/YupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
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
		defaultValues: defaultValues,
		resolver: yupResolver(yupSchema),
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
						ref={register}
						// version 7 way of registering input elements
						// {...register('username', {
						// 	required: "please Enter a username"
						// })}

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
							valueAsNumber: true,
							// ignored as valueAsNumber omits it
							setValueAs: (value) => parseInt(value) + 1,
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
							valueAsDate: true,
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
						ref={register}
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
						ref={register}
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
						ref={register}
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
						ref={register}
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
