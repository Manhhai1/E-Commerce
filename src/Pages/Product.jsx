import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {
    const { all_product } = useContext(ShopContext)
    const productID = useParams()
    console.log(all_product)
    const product = all_product.find((item) => item.id == productID.productId)

    return (
        <div>
            <Breadcrum product={product}></Breadcrum>
            <ProductDisplay product={product}></ProductDisplay>
            <DescriptionBox></DescriptionBox>
            <RelatedProducts></RelatedProducts>
        </div>
    )
}
