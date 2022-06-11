import React from "react";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";
import HomeBlogCard from "../../molecules/homeBlogCard/HomeBlogCard";

function Blog() {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container">
        <FadeIn>
          <header className="section-header">
            <h2>Blog</h2>
            <p>Useful Tips & Resources on Vehicle Security</p>
          </header>
        </FadeIn>

        <div className="row">
          <HomeBlogCard
            src={"https://kuagiresources.com/assets/img/Kuagi/IMG-4875.JPG"}
            title={
              "Yearly Analysis and statistics on the number of stolen cars in Nigeria"
            }
            date={"Fri, June 10"}
          />
          <HomeBlogCard
            src={"https://kuagiresources.com/assets/img/Kuagi/IMG-4875.JPG"}
            title={
              "Yearly Analysis and statistics on the number of stolen cars in Nigeria"
            }
            date={"Fri, June 10"}
          />

          <HomeBlogCard
            src={"https://kuagiresources.com/assets/img/Kuagi/IMG-4875.JPG"}
            title={
              "Yearly Analysis and statistics on the number of stolen cars in Nigeria"
            }
            date={"Fri, June 10"}
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
