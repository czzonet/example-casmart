import { map } from "ramda";
import React from "react";
import styled from "styled-components";

import { dataList } from "./blog/dataList";

import { PageHomeMainBlogItem } from "./blog/PageHomeMainBlogItem";

export const PageHomeMainBlog: React.FC = () => {
  return (
    <Style className="container">
      <h2 className="h2 section-title">Latest fashion news</h2>

      <article>
        {map((d) => {
          return (
            <PageHomeMainBlogItem
              name={d.name}
              src={d.src}
            ></PageHomeMainBlogItem>
          );
        }, dataList)}
      </article>
    </Style>
  );
};

const Style = styled.div`
  > h2 {
    margin-bottom: 40px;
  }

  > article {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
  }
`;
