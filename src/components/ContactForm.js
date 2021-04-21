import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const ContactForm = () => {
	const { register, reset, errors, handleSubmit } = useForm();
	const registerHandler = (data) => {
		console.log(data);
	};
	return (
		<>
			<form onSubmit={handleSubmit(registerHandler)}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input type="text" name="username" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						ref={register}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone Number</label>
					<input
						type="text"
						name="phone"
						ref={register}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						ref={register}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						ref={register}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						ref={register}
						className="form-control"
					/>
				</div>
				<button type="submit">submit</button>
			</form>
		</>
	);
};

export default ContactForm;
