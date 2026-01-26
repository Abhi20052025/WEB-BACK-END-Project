import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "FortunaCysec Backend API",
      version: "1.0.0",
      description: "API documentation for Contacts, Careers & Users",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
    tags: [
      { name: "Contacts", description: "Contact form APIs" },
      { name: "Careers", description: "Career application APIs" },
      { name: "Users", description: "User authentication APIs" },
    ],
    components: {
      schemas: {
        Career: {
          type: "object",
          required: ["name", "email", "position"],
          properties: {
            name: { type: "string", example: "John Doe" },
            email: { type: "string", example: "john@example.com" },
            position: { type: "string", example: "Security Analyst" },
            message: { type: "string", example: "I am interested in this role." },
          },
        },
        User: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string", example: "Admin User" },
            email: { type: "string", example: "admin@fortunacysec.com" },
            password: { type: "string", example: "hashedpassword123" },
          },
        },
        Contact: {
          type: "object",
          required: ["name", "email", "subject", "message"],
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            subject: { type: "string" },
            message: { type: "string" },
          },
        },
      },
    },
  },
  // This points to where your routes are defined to read the @swagger comments
  apis: ["./Routes/*.js"], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}