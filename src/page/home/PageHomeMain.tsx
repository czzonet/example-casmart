import React from "react";
import styled from "styled-components";

import imgHero from "../../assets/images/hero-banner.jpg";
import { PageHomeMainService } from "./main/PageHomeMainService";

export const PageHomeMain: React.FC = () => {
  return (
    <Style>
      <article>
        <section style={{ backgroundImage: `url(${imgHero})` }}>
          <p>Fashion Everyday</p>
          <h2 className="h1">Unrivalled Fashion House</h2>
          <button className="btn btn-primary">Shop Now</button>
        </section>
      </article>

      <PageHomeMainService></PageHomeMainService>
    </Style>
  );
};

const Style = styled.div`
  > article {
    > section {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left;
      width: 100%;
      min-height: 80vh;
      padding-block: var(--section-padding);
      display: flex;
      align-items: center;
    }
  }
`;
