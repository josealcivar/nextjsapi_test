// import comments from './db/data';

export default async function  handler(req, res) {

  const  comments = [
        {
            id:1,
            cedula:'0926973892',
            nombre:"Jose Andre",
            apellidos: "Garcia"
        },
        {
            id:2,
            cedula:'092895673',
            nombre:"Guillermina Martita",
            apellidos: "Piguave"
        },
        
        {
            id:3,
            cedula:'0992222222',
            nombre:"Rodrigo Alberto",
            apellidos: "Perez"
        },
        {
            id:4,
            cedula:'09823388227',
            nombre:"Gabriela mercedes",
            apellidos: "honda"
        },
        ];

    const { cedula } = req.body;

    const result=comments.find((e) => e.cedula == cedula);

    res.status(201).json(result); 
 

}