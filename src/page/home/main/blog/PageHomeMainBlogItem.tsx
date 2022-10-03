import React from "react";
import { IoFolderOutline, IoTimeOutline } from "react-icons/io5";
import styled from "styled-components";

import { BlogItem } from "./dataList";

export const PageHomeMainBlogItem: React.FC<BlogItem> = ({ name, src }) => {
  return (
    <Style>
      <figure>
        <a href="#">
          <img
            src={src}
            alt={name}
            loading="lazy"
            width={1020}
            height={700}
            className="w-100"
          />
        </a>
      </figure>

      <main>
        <article>
          <section>
            <IoFolderOutline fontSize={17} strokeWidth={30}></IoFolderOutline>
            <a href="#">Fashion</a>
          </section>
          <section>
            <IoTimeOutline fontSize={17} strokeWidth={30}></IoTimeOutline>
            <a href="#">
              <time dateTime="2021-03-31">31 Mar 2021</time>
            </a>
          </section>
        </article>

        <h3 className="h3">
          <a href="#">{name}</a>
        </h3>
      </main>
    </Style>
  );
};

const Style = styled.div`
  > figure {
    background: var(--cultured);
    aspect-ratio: 2 / 1.37;
    overflow: hidden;
    margin-bottom: 25px;

    > a {
      > img {
        height: 100%;
        object-fit: cover;
        transition: var(--transition-2);
      }
    }
  }

  > main {
    padding-inline: 20px;

    > article {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      margin-bottom: 10px;

      > section {
        display: flex;
        align-items: center;
        gap: 10px;

        > a {
          color: inherit;
          font-size: var(--fs-9);
          font-weight: var(--fw-500);
          text-transform: uppercase;

          &:is(:hover, :focus) {
            color: var(--eerie-black);
          }
        }
      }
    }

    > h3 {
      line-height: 1.4;
      text-align: center;
    }
  }

  &:hover {
    > figure {
      > a {
        > img {
          transform: scale(1.05);
        }
      }
    }
  }
`;
