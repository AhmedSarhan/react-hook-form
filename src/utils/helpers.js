export const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/;
export const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// validate: {
//   matchesPreviousPassword: (value) => {
//     const { password } = getValues();
//     return password === value || "Passwords don't match!";
//   },
// },
