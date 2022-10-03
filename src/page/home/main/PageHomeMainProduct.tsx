import React from "react";
import styled from "styled-components";
import { map } from "ramda";

import { dataList } from "./product/dataList";

import { PageHomeMainProductItem } from "./product/PageHomeMainProductItem";

export const PageHomeMainProduct: React.FC = () => {
  return (
    <Style>
      <h2 className="h2">Products of the week</h2>

      <header>
        <ul aria-label="filter">
          <li>
            <button className="active">Best Seller</button>
          </li>
          <li>
            <button>Hot Collection</button>
          </li>
          <li>
            <button>Trendy</button>
          </li>
          <li>
            <button>New Arrival</button>
          </li>
        </ul>
      </header>

      <article>
        <ul>
          {map((d) => {
            return (
              <PageHomeMainProductItem
                badge={d.badge}
                isBadgeNew={d.isBadgeNew}
                src={d.src}
                name={d.name}
                price={d.price}
                priceOff={d.priceOff}
              ></PageHomeMainProductItem>
            );
          }, dataList)}
        </ul>

        <button className="btn btn-outline">View All Products</button>
      </article>
    </Style>
  );
};

const Style = styled.div`
  > header {
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 10px 20px;
      margin-bottom: 50px;
      > li {
        > button {
          color: inherit;
          font-size: var(--fs-7);
          font-weight: var(--fw-500);

          &.active {
            color: var(--eerie-black);
          }
        }
      }
    }
  }
  > article {
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px 25px;
      margin-bottom: 60px;
    }
  }
`;
