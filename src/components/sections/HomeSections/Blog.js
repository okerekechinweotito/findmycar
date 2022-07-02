import React from "react";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";
import HomeBlogCard from "../../molecules/blogCard/HomeBlogCard";

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
            src={
              "https://autojosh.com/wp-content/uploads/2019/12/Taiwo-Hassan-Ogogo-Toyota-venza.jpg"
            }
            title={
              "Here are 11 Most Stolen Vehicle Models In Nigeria (Photos) "
            }
            date={"Fri, June 10"}
            link={"https://autojosh.com/11-most-stolen-cars-in-nigeria/"}
          />
          <HomeBlogCard
            src={
              "https://autojosh.com/wp-content/uploads/2020/01/2005-lexus-rx-nigeria-autojosh.jpg"
            }
            title={
              "Only 5 of every 10 stolen vehicles are recovered in Nigeria"
            }
            date={"Tuesday, June 14"}
            link={
              "https://businessday.ng/uncategorized/article/5-every-10-stolen-vehicles-recovered-nigeria/"
            }
          />

          <HomeBlogCard
            src={
              "https://autojosh.com/wp-content/uploads/2020/01/2007-toyota-camry-autojosh.jpg"
            }
            title={
              "Best Tips on How to Avoid Buying a stolen car in Nigerian markets"
            }
            date={"Monday, June 20"}
            link={
              "https://www.carmart.ng/public/blog/how-to-avoid-buying-a-stolen-car-in-nigerian m/"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
