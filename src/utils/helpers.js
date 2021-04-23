export const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/;
export const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const getTomorrow = () => {
	let today = new Date();
	let tomorrow = new Date(today);

	// get the next day "tomorrow"
	tomorrow.setDate(tomorrow.getDate() + 1);
	return tomorrow.toISOString().split('T')[0];
};
export const defaultValues = {
	username: 'Delux Feast',
	age: 25,
	phone: '125879678955588',
	email: 'test@test.com',
	password: '12345678',
	confirmPassword: '12345678',
	date: getTomorrow(),
};
