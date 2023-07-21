

const SibApiV3Sdk = require("sib-api-v3-sdk");

const defaultClient = SibApiV3Sdk.ApiClient.instance;


const sendinblue = (sendSmtpEmail) => {
        // Configure API key authorization: api-key
        let apiKey = defaultClient.authentications["api-key"];
        apiKey.apiKey =
          "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";
    
        let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

   return apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function (data) {
        return true;
      },
      function (error) {
        console.error(error);
        return false;
      }
    );
  };

const sendmail = async(req, res)=>{
  try {


    // esta es la funcion que seeya lo tengo envia ezurita@fiec.espol.edu.ec
  

    const { emailPaciente, nombrePaciente, horaCita, fechaCita,
    imagenCode
    } = req.body;

        let sendSmtpEmail = {
      to: [{
          email: emailPaciente, //TODO: Change this on production.
          name: nombrePaciente
      }],
      // htmlContent:"<html><body><h1>This is my first transactional email {{params.NOMBRE}}</h1></body></html>",
      templateId: 1,
 
      // "attachment": [
      //   {
      //     "url":   "https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg", 
      //   }
      // ],
      params: {
     
        NOMBRE: nombrePaciente,
        HORACITA: horaCita,
        FECHACITA: fechaCita,
        imagen: 'https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg'

  },
    };


      const data1 = await sendinblue(sendSmtpEmail);

      console.log("DATA DB: ", data1);

      const error1 = null;
      res.status(200).json({ data1, error1 });

  } catch (error) {
    res.status(400);
  }
}

export default sendmail;