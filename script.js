function handleChangeTheme() {
    const changeMode = document.body.classList.toggle("dark");
    const icon = document.getElementById("changeTheme");
  
   if (changeMode == true) 
    {
      icon.innerHTML = "light_mode";
    }
    else {
      icon.innerHTML = "dark_mode";
    }
  } 
