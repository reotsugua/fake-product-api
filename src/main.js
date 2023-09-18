import express from "express"
import cors from "cors"
import data from "../products.json" assert { type: 'json' };

const app = express()
app.use(cors())
app.use(express.json())


function paginate(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}


app.get("/products", async (req, res) => {
    let products = data
    const searchText = req.query.search?.toLocaleLowerCase()
    const resultProductSearch = data.filter(product => searchText ? product?.name?.toLowerCase().includes(searchText) : product)
    if (req.query?.pageSize || req.query?.pageNumber) {
        products = paginate(resultProductSearch, req.query?.pageSize, req.query?.pageNumber)
    }
    setTimeout(() => res.json(products), products.length * 25)
})

app.listen(3000, () => {
    console.log("Server started at port 3000")
})