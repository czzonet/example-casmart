import React from "react";
import styled from "styled-components";
import { map } from "ramda";

import imgCategory1 from "../../../assets/images/category-1.jpg";
import imgCategory2 from "../../../assets/images/category-2.jpg";
import imgCategory3 from "../../../assets/images/category-3.jpg";
import imgCategory4 from "../../../assets/images/category-4.jpg";
import imgCategory5 from "../../../assets/images/category-5.jpg";
import imgCategory6 from "../../../assets/images/category-6.jpg";

const Item: React.FC<{ name: string; src: string }> = ({ name, src }) => {
  return (
    <li>
      <figure>
        <img
          src={src}
          alt={name}
          loading="lazy"
          width={501}
          height={600}
          className="w-100"
        />
      </figure>

      <a href="# " className="btn btn-secondary">
        {name}
      </a>
    </li>
  );
};

const dataList: { name: string; src: string }[] = [
  { name: "Sunglass & Eye", src: imgCategory1 },
  { name: "Active & Outdoor", src: imgCategory2 },
  { name: "Winter Wear", src: imgCategory3 },
  { name: "Exclusive Footwear", src: imgCategory4 },
  { name: "Jewelry", src: imgCategory5 },
  { name: "Sports Cap", src: imgCategory6 },
];

export const PageHomeMainCategory: React.FC = () => {
  return (
    <Style className="container">
      <ul>
        {map((d) => {
          return <Item key={d.name} name={d.name} src={d.src}></Item>;
        }, dataList)}
      </ul>
    </Style>
  );
};

const Style = styled.div`
  padding-top: 0;

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;

    > li {
      width: 100%;
      position: relative;

      &:hover {
        > figure {
          > img {
            transform: scale(1.05);
          }
        }
      }

      > figure {
        background: var(--cultured);
        aspect-ratio: 2 / 2.35;
        overflow: hidden;

        > img {
          height: 100%;
          object-fit: cover;
          transition: var(--transition-2);
        }
      }

      > a {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        padding-inline: 30px;
      }
    }
  }
`;
