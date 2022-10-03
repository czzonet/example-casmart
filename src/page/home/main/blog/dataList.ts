import imgBlog1 from "../../../../assets/images/blog-1.jpg";
import imgBlog2 from "../../../../assets/images/blog-2.jpg";
import imgBlog3 from "../../../../assets/images/blog-3.jpg";

export interface BlogItem {
  name: string;
  src: string;
}

export const dataList: BlogItem[] = [
  {
    name: "Worthy Cyber Monday Fashion From Casmart",
    src: imgBlog1,
  },
  {
    name: "Holiday Home Decoration I’ve Recently Ordered",
    src: imgBlog2,
  },
  {
    name: "Unique Ideas for Fashion You Haven’t heard yet",
    src: imgBlog3,
  },
];
