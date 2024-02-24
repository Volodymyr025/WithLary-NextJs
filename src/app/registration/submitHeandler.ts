const submitHeandler = async (values: any) => {
  const data = JSON.stringify({
    lastName: values.lastName,
    firstName: values.firstName,
    email: values.email,
    phone: values.phone,
    password: values.password,
    confirm: values.confirm,
  });

  const response = await fetch("/api/registration", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "aplication/json",
    },
  });
  if (!response.ok) {
    throw new Error("Field to create users input");
  }

  console.log(data);
};

export default submitHeandler;
