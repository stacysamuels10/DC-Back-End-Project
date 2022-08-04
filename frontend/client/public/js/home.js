const runPostRoute = async (id) => {
  const dataWeAreSending = await fetch(
    `http://localhost:3000/saved_recipe/add_savedrecipe/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const status = dataWeAreSending.status;
  if (status === 200) {
    alert("Your recipe has been saved");
  }
  if (status === 500) {
    alert("You have already saved this recipe");
  }
  if (status === 400) {
    alert("Recipe not able to be added. Please try again later");
  }
};
