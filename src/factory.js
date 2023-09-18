import { faker } from "@faker-js/faker"
import fs from "fs"
import path from "path"

const products = []

Array.from({ length: 1000 }).forEach(() => {
    const product = {
        name: faker.commerce.productName(),
        avatar: faker.image.url(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price({ min: 20, max: 200 }),
        rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
        category: faker.commerce.department()
    }
    products.push(product)
})

fs.writeFileSync(path.resolve("products.json"), JSON.stringify(products))
