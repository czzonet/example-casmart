import React from "react";
import styled from "styled-components";
import imgProduct1 from "../../../assets/images/product-1.jpg";

import {
  IoEyeOutline,
  IoHeartOutline,
  IoBagHandleOutline,
} from "react-icons/io5";

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
          <li>
            <figure>
              <img
                src={imgProduct1}
                alt=""
                loading="lazy"
                width={800}
                height={1034}
                className="w-100"
              />

              <p className="red">-25%</p>

              <section>
                <button aria-label="Quick view">
                  <IoEyeOutline fontSize={20}></IoEyeOutline>
                </button>
                <button className="cart">
                  <IoBagHandleOutline fontSize={20}></IoBagHandleOutline>
                  <p>Add to Cart</p>
                </button>
                <button aria-label="Add to Whishlist">
                  <IoHeartOutline fontSize={20}></IoHeartOutline>
                </button>
              </section>
            </figure>

            <section>
              <h3 className="h4">
                <a href="#">Varsi Leather Bag</a>
              </h3>

              <main>
                <data value="48.75">&pound;48.75</data>

                <data value="65.00">&pound;65.00</data>
              </main>
            </section>
          </li>
        </ul>
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

      > li {
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

          > section {
            display: flex;
            height: 45px;

            > button {
              border: 1px solid var(--cultured);
              width: 45px;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
              background: var(--white);
              color: var(--eerie-black);

              &:is(:hover, :focus) {
                border-color: var(--eerie-black);
              }

              &.cart {
                flex-grow: 1;
                background: var(--eerie-black);
                color: var(--white);
                border-color: var(--eerie-black);

                &:is(:hover, :focus) {
                  background: var(--white);
                  color: var(--eerie-black);
                }
              }
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
      }
    }
  }
`;
