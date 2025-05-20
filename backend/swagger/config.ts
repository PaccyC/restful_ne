import swaggerAutogen from "swagger-autogen";

const doc = {
  definition: {
    openapi: "3.0.0",
    host: "http://localhost:4000",
    basePath: "/api/v1/",
    consumes:["application/json"],
    produces:["application/json"],
    info: {
      title: "Car Parking Management System",
      version: "1.0.0",
      description: "APIs for managing car parks including slots, vehicles, users, etc...",
    },
     tags: [
        {
            name: 'Auth',
            description: 'Authentication endpoints'
        },
        {
            name: 'Users',
            description: 'Users endpoints'
        },
    ],
    components: {
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
},
security: [
  {
    bearerAuth: [],
  },
],
  }
};


const outputFile = './swagger.json';

const routes=["../routes/admin.routes","../routes/auth.routes","../routes/parking-session.routes","../routes/slots.routes","../routes/user.routes","../routes/vehicle.routes"]
swaggerAutogen(outputFile,routes,doc)
