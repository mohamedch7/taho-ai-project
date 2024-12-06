import express from 'express';
import { getAllProducts, getProductById } from '../../../controllers/products/products.controller';

const router = express.Router();

router.get('/',
   getAllProducts
)

router.get('/:id', getProductById
)


// API documentation

// write swagger docs for get all products
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
*/


/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by id
 *     tags: [Products]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *     responses:
 *       200:
 *         description: Product returned successfuly
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 * 
 *     security:
 *      - bearerAuth: []
 */

export default router;
