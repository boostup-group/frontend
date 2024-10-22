import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { RiCloseLine } from 'react-icons/ri';
import ProductBoxAction from './ProductBox1Action';
import ProductBox1Cart from './ProductBox1Cart';
import ProductBox1Rating from './ProductBox1Rating';
import Avatar from '../../Avatar';
import { placeHolderImage } from '../../../../../Data/CommonPath';
import Btn from '@/Elements/Buttons/Btn';
import useDelete from '@/Utils/Hooks/useDelete';
import { WishlistAPI } from '@/Utils/AxiosUtils/API';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import ProductBagde from './ProductBagde';
import SettingContext from '@/Helper/SettingContext';
import { ModifyString } from '@/Utils/CustomFunctions/ModifyString';
import RadioAttribute from '@/Components/ProductDetails/Common/ProductAttribute/RadioAttribute';
import DropdownAttribute from '@/Components/ProductDetails/Common/ProductAttribute/DropdownAttribute';
import ColorAttribute from '@/Components/ProductDetails/Common/ProductAttribute/ColorAttribute';
import CartContext from '@/Helper/CartContext';
import { Button } from 'reactstrap';

const ProductBox1 = ({ imgUrl, badge, productDetail, isClose, refetch, addAction = true, classObj }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const { convertCurrency } = useContext(SettingContext);
  const { data: wishlistData, mutate, isLoading: wishlistLoader } = useDelete(WishlistAPI, `/${i18Lang}/wishlist`);
  const { cartProducts } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState(() => {
    // For products like "Disney+ Premium" or "Abonnement Shahid VIP", select the "12" value by default
    if (productDetail?.name === "Disney+ Premium" || productDetail?.name === "Abonnement Shahid VIP") {
      const attribute = productDetail?.attributes?.find(attr => attr?.attribute_values?.some(value => value?.value === "12"));
      const value = attribute?.attribute_values?.find(value => value?.value === "12");
      return value ? [{ id: value.id, attribute_id: attribute.id }] : [];
    }

    // Default selection for other products
    const firstAttribute = productDetail?.attributes[0]?.attribute_values[0]?.id;
    return firstAttribute ? [{ id: firstAttribute, attribute_id: productDetail?.attributes[0]?.id }] : [];
  });

  const [soldOutAttributesIds, setSoldOutAttributesIds] = useState([]);
  const [cartItem, setCartItem] = useState();
  const [currentPrice, setCurrentPrice] = useState(productDetail?.sale_price);

  useEffect(() => {
    if (wishlistData?.status == 200 || wishlistData?.status == 201) {
      refetch();
    }
  }, [wishlistLoader]);

  // Handle attribute selection and update the price
  const handleAttributeSelection = (value) => {
    let tempSelected = [...selectedOptions];
    const index = tempSelected.findIndex(item => item.attribute_id === value.attribute_id);
    if (index === -1) {
      tempSelected.push({ id: value.id, attribute_id: value.attribute_id });
    } else {
      tempSelected[index].id = value.id;
    }

    setSelectedOptions(tempSelected);

    const selectedVariation = productDetail?.variations?.find(
      (variation) => variation.attribute_values.every(
        (val) => tempSelected.some(sel => sel.id === val.id)
      )
    );

    if (selectedVariation) {
      setCurrentPrice(selectedVariation.price);
    } else {
      setCurrentPrice(productDetail?.sale_price);
    }
  };

  const renderAttributeValues = (attribute) => {
    // For "Disney+ Premium" or "Abonnement Shahid VIP", automatically select value "12"
    if (productDetail?.name === "Disney+ Premium" || productDetail?.name === "Abonnement Shahid VIP") {
      return attribute?.attribute_values?.filter(value => value?.value === "12").map((value, j) => (
        <li
          key={j}
          title={value.id}
          className={`select-package ${soldOutAttributesIds.includes(value.id) ? 'disabled' : ''} ${selectedOptions.some(sel => sel.id === value.id) ? 'active' : ''}`}
        >
          <button
            type="button"
            className={`w-[35px] h-[35px] rounded-full font-semibold 
              ${selectedOptions.some(option => option.id === value.id) ? 
                'bg-[#E50914] text-[#ffffff]' : 
                'bg-[#ffffff] text-[#E50914]'}`}
            onClick={() => handleAttributeSelection(value)}
            disabled={soldOutAttributesIds.includes(value.id)}
          >
            {value?.value}
          </button>
        </li>
      ));
    }

    if (productDetail?.name === "Carte Cadeau Netflix") {
      return attribute?.attribute_values?.filter(value => value?.value === "1").map((value, j) => (
        <li
          key={j}
          title={value.id}
          className={`select-package ${soldOutAttributesIds.includes(value.id) ? 'disabled' : ''} ${selectedOptions.some(sel => sel.id === value.id) ? 'active' : ''}`}
        >
          <button
            type="button"
            className={`w-[35px] h-[35px] rounded-full font-semibold
              ${selectedOptions.some(option => option.id === value.id) ? 
                'bg-transparent text-transparent' : 
                'bg-transparent text-transparent'}`}
            onClick={() => handleAttributeSelection(value)}
            disabled={true}
          >
            {value?.value}
          </button>
        </li>
      ));
    }

    // For other attributes, show all values
    return attribute?.attribute_values?.filter(value => value?.value !== "1").map((value, j) => (
      <li
        key={j}
        title={value.id}
        className={`select-package ${soldOutAttributesIds.includes(value.id) ? 'disabled' : ''} ${selectedOptions.some(sel => sel.id === value.id) ? 'active' : ''}`}
      >
        <button
          type="button"
          className={`w-[35px] h-[35px] rounded-full font-semibold 
            ${selectedOptions.some(option => option.id === value.id) ? 
              'bg-[#E50914] text-[#ffffff]' : 
              'bg-[#ffffff] text-[#E50914]'}`}
          onClick={() => handleAttributeSelection(value)}
          disabled={soldOutAttributesIds.includes(value.id)}
        >
          {value?.value}
        </button>
      </li>
    ));
  };

  return (
    <div className={`product-box ${classObj?.productBoxClass}`}>
      <ProductBagde productDetail={productDetail} />
      {isClose && (
        <div className='product-header-top' onClick={() => handelDelete(productDetail)}>
          <Btn className='wishlist-button close_button'>
            <RiCloseLine />
          </Btn>
        </div>
      )}
      <div className='product-image'>
        <Link href={`/${i18Lang}/product/${productDetail?.slug}`}>
          <Avatar data={imgUrl} placeHolder={placeHolderImage} customeClass={'img-fluid'} name={productDetail.title} height={500} width={500} />
        </Link>
      </div>
      <div className='product-detail'>
        <Link href={`/${i18Lang}/product/${productDetail?.slug}`}>
          <h6 className='name'>{productDetail.name}</h6>
          <p dangerouslySetInnerHTML={{ __html: productDetail?.short_description }} />
        </Link>
        {productDetail?.unit && <h6 className='unit mt-1'>{productDetail?.unit}</h6>}
        <h5 className='sold text-content'>
          <span className='theme-color price'>{convertCurrency(currentPrice)}</span>
          {/* <del>{convertCurrency(productDetail?.price)}</del> */}
        </h5>

        {productDetail?.attributes?.map((attribute, i) => (
          <div className="product-package" key={i}>
            {attribute?.style === 'circle' ? (
              <ul className="select-package circle flex gap-x-2"> 
                {renderAttributeValues(attribute)} 
              </ul>
            ) : (
              null
            )}
          </div>
        ))}

        <div className='product-rating mt-sm-2 mt-1'>
          <ProductBox1Rating totalRating={productDetail?.rating_count || 0} />
          <h6 className='theme-color'>Disponible</h6>
        </div>
        {addAction && <ProductBox1Cart productObj={productDetail} />}
      </div>
    </div>
  );
};

export default ProductBox1;
