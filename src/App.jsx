// import Navbar from "./component/Home/Navbar"
import CarouselFadeExample from "./component/Home/Carousel"
import "./App.css"
import Cards from "./component/Cards"
import itemProducts from "./component/Data"
import Partners from "./component/Partners"
import Header from "./component/Home/Header"
// import { useState } from "react"
// import { useState } from "react"

// eslint-disable-next-line react-hooks/rules-of-hooks, react-refresh/only-export-components
// export const [count, setCount] = useState(0)


// function creatCards(itemProducts) {
//   return (
//     <Card
//     key={itemProducts.id}
//     image={itemProducts.image}
//     itemName={itemProducts.itemName}
//     itemDiscountPrice={itemProducts.itemDiscountPrice}
//     itemPrice={itemProducts.itemPrice}
//     location={itemProducts.location}
            

//     />
//   )

// }

export default function App() {
  // const [productClicked, setProductClicked] = useState(null)

  // console.log(productClicked);

  console.log('hi');

  return (
    <>
      {/* <Navbar product={productClicked}/> */}
      <CarouselFadeExample />
      <Header />
      {/* <Body /> */}
      {/* <div className="body">
      <Body setProduct={setProductClicked}
        
      />
      </div> */}
      {itemProducts.map(itemProduct => <Cards key={itemProduct.id} {...itemProduct} />)}
      <Partners />
      
    </>


  )
}

