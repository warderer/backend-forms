const insertFormData = (req, res) => {
    console.log(req.body)
    //res.send (req.body);
    //Aqui va mi función para insertar a la base de datos

    // Redirijo a una página de agradecimiento y envio el nombre de la persona
    res.redirect(`/thankyou?nombre=${req.body.nombre}`);
};

const goToThankYou = (req, res) => {
    //Renderizo la vista de Agradecimiento y envio el nombre a la plantilla ejs
    return res.render('thankyou',{
        nombre: req.query.nombre
    });
};

const home = (req, res) => {
    res.render('index');
}

module.exports = {
    insertFormData,
    goToThankYou,
    home
}