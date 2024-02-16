const submitHeandler = async (values: any) => {
  const response = await fetch("/api/registration", {
    method: "POST",
    body: JSON.stringify({
      lastName: values.lastName,
      firstName: values.firstName,
      email: values.email,
      phone: values.phone,
      password: values.password,
      confirm: values.confirm
    }),
    headers: {
      "Content-Type": "aplication/json",
    },
  });
  const data = await response.json();
  console.log(data);
};

export default submitHeandler;
