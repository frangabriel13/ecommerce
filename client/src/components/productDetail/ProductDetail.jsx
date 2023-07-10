import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../actions/productActions';
import s from './ProductDetail.module.css';

const ProductDetail = ({ productId }) => {
  const [loading, setLoading] = useState(true);
  const product = useSelector(state => state.products.productById);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    dispatch(getProductById(productId))
      .then(() => setLoading(false));
  }, [dispatch, productId]);

  if (loading) return <p>Cargando...</p>
  
  return (
    <div className={s.divGlobal}>
      <div className={s.divPhotos}>
        <div className={s.gallery}>
          {product.images &&
            product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`${s.galleryImage} ${
                  selectedImage === image ? s.selected : ''
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
        </div>
        <div className={s.divImage} ref={imagesRef}>
          {selectedImage ? (
            <div className={s.productoDetailImages}>
              <img
                src={selectedImage}
                alt="Selected Image"
                className={s.productoDetailImage}
              />
            </div>
          ) : (
            <div
              className={s.productoDetailImages}
              style={{ scrollSnapType: 'y mandatory', scrollPadding: '200px 0' }}
            >
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={s.productoDetailImage}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={s.productoDetail}>
        <h1>hola</h1>
        <h2 className={s.productoDetailName}>{product && product.name}</h2>
        <p className={s.productoDetailDescription}>
          Description: {product.description}
        </p>
        <p className={s.productoDetailPrice}>Price: ${product.price}</p>
        {product.discount && (
          <p className={s.productoDetailDiscount}>
            Discount: {product.discount}%
          </p>
        )}
        <p className={s.productoDetailCategory}>
          Category: {product.category}
        </p>
        <p className={s.productoDetailStock}>Stock: {product.stock}</p>
        {product.isVariable && (
          <p className={s.productoDetailVariations}>
            This product has variations
          </p>
        )} 
      </div>
    </div>
  ) 
}

export default ProductDetail;






// import React, { useRef, useEffect, useState } from 'react';
// import s from './ProductDetail.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProductById } from '../../actions/productActions';

//  const ProductDetail = ({ id}) => {
//   if (!product) return null;
//   const [selectedImage, setSelectedImage] = useState(null);
//   const imagesRef = useRef(null);

//const ProductDetail = ({ productId }) => {
  // console.log({ productId })
//   const product = useSelector(state => state.products.productById.data);



//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProductById(productId));
//   }, [dispatch, productId]);

//   console.log(product)

  
//   return (
//     <div>
//       <h1>hola</h1>
      
     
//       {
//         product && <h2>{product.name}</h2> 
//       }
    
      
    
//     </div> 
//   )


// }



// export default ProductDetail;




























  // if (!product) {
  //   return <div>Loading...</div>;
  // }


//   useEffect(() => {
//     if (selectedImage) {
//       const imagesList = imagesRef.current.querySelectorAll('img');
//       const selectedImageIndex = Array.from(imagesList).findIndex(
//         imgElement => imgElement.src === selectedImage
//       );
//       if (selectedImageIndex >= 0) {
//         const selectedImageElement = imagesList[selectedImageIndex];
//         const imagesListElement = imagesRef.current;
//         imagesListElement.scrollTo({
//           top: selectedImageElement.offsetTop,
//           behavior: 'smooth'
//         });
//       }
//     }
//   }, [selectedImage]);

  // return (
         
    // <div className={s.divGlobal}>
    //   <div className={s.divPhotos}>
    //     <div className={s.gallery}>
    //       {product.images &&
    //         product.images.map((image, index) => (
    //           <img
    //             key={index}
    //             src={image}
    //             alt={`Image ${index + 1}`}
    //             className={`${s.galleryImage} ${
    //               selectedImage === image ? s.selected : ''
    //             }`}
    //             onClick={() => setSelectedImage(image)}
    //           />
    //         ))}
    //     </div>
    //     <div className={s.divImage} ref={imagesRef}>
    //       {selectedImage ? (
    //         <div className={s.productoDetailImages}>
    //           <img
    //             src={selectedImage}
    //             alt="Selected Image"
    //             className={s.productoDetailImage}
    //           />
    //         </div>
    //       ) : (
    //         <div
    //           className={s.productoDetailImages}
    //           style={{ scrollSnapType: 'y mandatory', scrollPadding: '200px 0' }}
    //         >
    //           {product.images.map((image, index) => (
    //             <img
    //               key={index}
    //               src={image}
    //               alt={`Image ${index + 1}`}
    //               className={s.productoDetailImage}
    //               onClick={() => setSelectedImage(image)}
    //             />
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   <div className={s.productoDetail}>
    //     <h1>hola</h1>
    //     <h2 className={s.productoDetailName}>{product && product.name}</h2>
    //     <p className={s.productoDetailDescription}>
    //       Description: {product.description}
    //     </p>
    //     <p className={s.productoDetailPrice}>Price: ${product.price}</p>
    //     {product.discount && (
    //       <p className={s.productoDetailDiscount}>
    //         Discount: {product.discount}%
    //       </p>
    //     )}
    //     <p className={s.productoDetailCategory}>
    //       Category: {product.category}
    //     </p>
    //     <p className={s.productoDetailStock}>Stock: {product.stock}</p>
    //     {product.isVariable && (
    //       <p className={s.productoDetailVariations}>
    //         This product has variations
    //       </p>
    //     )} 
    //   </div>
    // </div>
  // );
// )};


  

