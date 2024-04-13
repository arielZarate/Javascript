let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5,
};

Object.entries(perro).forEach(([key, value]) => {
    console.log(key, value);
});

/* Object.entries.perro.forEach((element) => {
    console.log(entries);
}); */