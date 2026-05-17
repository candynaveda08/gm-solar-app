const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://gm-solar-app-1.onrender.com/api/leads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();

    alert("Quote Submitted Successfully!");

    console.log(data);

  } catch (error) {
    console.log(error);

    alert("Error submitting quote");
  }
};