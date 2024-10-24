import { Fragment } from 'react';

const DropdownAttribute = ({ elem, soldOutAttributesIds, productState, setVariant, i }) => {
  return (
    <select id={`input-state-${i}`} className='form-control form-select' onChange={(e) => setVariant(productState?.product?.variations, elem?.attribute_values[e.target.value])}>
      <option selected disabled>
        Choisir {elem?.name}
      </option>
      {elem?.attribute_values?.map((value, index) => (
        <Fragment key={index}>
          {productState?.attributeValues?.includes(value?.id) ? (
            <option selected={productState?.variantIds?.includes(value.id)} value={index} disabled={soldOutAttributesIds.includes(value.id)}>
              {value?.value} {isNaN(Number(value?.value)) ? "" : "Mois"}
            </option>
          ) : null}
        </Fragment>
      ))}
    </select>
  );
};

export default DropdownAttribute;
