import React from "react";
import styled from "styled-components";
import imgService1 from "../../../assets/images/service-icon-1.svg";
import imgService2 from "../../../assets/images/service-icon-2.svg";
import imgService3 from "../../../assets/images/service-icon-3.svg";
import imgService4 from "../../../assets/images/service-icon-4.svg";

export const PageHomeMainService: React.FC = () => {
  return (
    <Style className="container">
      <article>
        <header>
          <img src={imgService1} alt="Service icon" />
        </header>
        <section>
          <p>Free Shipping</p>
          <footer>On All Order Over $599</footer>
        </section>
      </article>

      <article>
        <header>
          <img src={imgService2} alt="Service icon" />
        </header>
        <section>
          <p>Easy Returns</p>
          <footer>30 Day Returns Policy</footer>
        </section>
      </article>

      <article>
        <header>
          <img src={imgService3} alt="Service icon" />
        </header>
        <section>
          <p>Secure Payment</p>
          <footer>100% Secure Gaurantee</footer>
        </section>
      </article>

      <article>
        <header>
          <img src={imgService4} alt="Service icon" />
        </header>
        <section>
          <p>Special Support</p>
          <footer>24/7 Dedicated Support</footer>
        </section>
      </article>
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;

  > article {
    max-width: 235px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    > header {
      width: 45px;

      > img {
        margin-inline: auto;
      }
    }

    > section {
      > p {
        color: var(--eerie-black);
        font-size: var(--fs-7);
        font-weight: var(--fw-600);
      }
    }
  }
`;
