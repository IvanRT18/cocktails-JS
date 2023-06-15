const setDrink = (section) => {
  section.addEventListener("click", (e) => {
    //Prevenimos que se carge una pagina nueva al hacer click a un coctel
    // e.preventDefault();
    //Seleccionamos el padre de donde clickeamos para obtener el id del coctel
    const id = e.target.parentElement.dataset.id;
    //Guardamo el id en localstorage para usarlo despues
    localStorage.setItem("drink", id);
    console.log(id);
  });
};

export default setDrink;
