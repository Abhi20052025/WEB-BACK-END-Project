import express from "express";
import {
  createContact,
  getAllContacts,
} from "../Controllers/ContactControllers.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Contact form APIs
 */

/**
 * @swagger
 * /api/contacts/contacts:
 *   post:
 *     summary: Submit contact form
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - companyName
 *               - jobTitle
 *               - email
 *               - phone
 *               - acceptedTerms
 *             properties:
 *               name:
 *                 type: string
 *               companyName:
 *                 type: string
 *               jobTitle:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               interest:
 *                 type: string
 *               message:
 *                 type: string
 *               acceptedTerms:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Contact saved successfully
 */
router.post("/contacts", createContact);

/**
 * @swagger
 * /api/contacts/contacts:
 *   get:
 *     summary: Get all contacts (Admin)
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of contacts
 *       401:
 *         description: Unauthorized
 */
router.get("/contacts", protect, getAllContacts);

export default router;
