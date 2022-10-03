import React from "react";
import styled from "styled-components";

import { ProductItem } from "./dataList";

import { PageHomeMainProductItemAction } from "./item/PageHomeMainProductItemAction";

export const PageHomeMainProductItem: React.FC<ProductItem> = ({
  badge,
  isBadgeNew,
  src,
  name,
  price,
  priceOff,
}) => {
  return (
    <Style>
      <figure>
        <img
          src={src}
          alt=""
          loading="lazy"
          width={800}
          height={1034}
          className="w-100"
        />

        {badge ? <p className="green">{badge}</p> : null}
        {isBadgeNew ? <p className="red">New</p> : null}

        <PageHomeMainProductItemAction></PageHomeMainProductItemAction>
      </figure>

      <section>
        <h3 className="h4">
          <a href="#">{name}</a>
        </h3>

        <main>
          <data value={price}>&pound;{price}</data>

          {priceOff ? <data value={priceOff}>&pound;{priceOff}</data> : null}
        </main>
      </section>
    </Style>
  );
};

const Style = styled.div`
  > figure {
    position: relative;
    margin-bottom: 20px;

    > p {
      background: var(--eerie-black);
      color: var(--white);
      position: absolute;
      top: 0;
      left: 0;
      font-size: var(--fs-9);
      font-weight: var(--fw-500);
      padding: 3px 10px;

      &.red {
        background: var(--candy-pink);
      }

      &.green {
        background: var(--ocean-green);
      }
    }
  }

  > section {
    > h3 {
      margin-bottom: 5px;
    }

    > main {
      color: var(--eerie-black);
      font-size: var(--fs-8);
      font-weight: var(--fw-500);

      > data:not(:first-child) {
        color: var(--sonic-silver);
        margin-left: 5px;
        text-decoration: line-through;
      }
    }
  }
`;
