import express from 'express'
import cors from 'cors'

const product = [
    { id: 1, name: "HP Pavilion Laptop", price: "$700" },
    { id: 2, name: "Dell Inspiron 15", price: "$650" },
    { id: 3, name: "Lenovo ThinkPad E14", price: "$800" },
    { id: 4, name: "Apple MacBook Air", price: "$1,100" },
    { id: 5, name: "Asus VivoBook 14", price: "$620" },
    { id: 6, name: "Acer Aspire 5", price: "$580" },
    { id: 7, name: "Microsoft Surface Laptop Go", price: "$900" },
    { id: 8, name: "Samsung Galaxy Book", price: "$750" },
];

const app = express()
const port = process.env.PORT || 3000

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.get('/', (req, res) => {
    res.status(200).json({ message: "Server Running" })
})

app.get('/products', (req, res) => {
    return res.status(200).json({ message: "Product recieved", product })
})

app.post('/carts', (req, res) => {
    const { productId, quantity } = req.body;

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    const totalPrice = product.price * quantity;

    return res.json({
        productId: product.id,
        name: product.name,
        quantity,
        totalPrice,
    });
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})