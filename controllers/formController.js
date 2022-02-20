const insertFormData = (req, res) => {
    console.log(req.body)
    //res.send (req.body);
    //Aqui va mi función para insertar a la base de datos
    return res.redirect('/api/v1/thankyou');
};

const goToThankYou = (req, res) => {
    res.send({message: "Thank you"})
};

module.exports = {
    insertFormData,
    goToThankYou
}