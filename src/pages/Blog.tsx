import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { blogPosts } from "@/data/blog-posts";

const Blog = () => (
  <>
    <SEOHead
      title="Blog | Digital Marketing Insights Sri Lanka"
      description="Expert digital marketing tips, strategies, and insights for businesses in Sri Lanka. Learn about social media, SEO, Google Ads, and more."
      canonical="https://cypherdigital.lk/blog"
    />
    <PageBreadcrumb items={[{ label: "Blog" }]} />
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <img src={mascotGlasses} alt="Cypher Digital mascot" className="w-16 h-16 rounded-2xl object-cover mx-auto mb-5 shadow-card" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Blog</p>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Digital Marketing Insights</h1>
          <p className="text-muted-foreground">Expert strategies and tips for growing your business online in Sri Lanka.</p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {[...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card transition-all group"
            >
              <time className="text-xs text-muted-foreground">{post.date}</time>
              <h2 className="font-heading text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <span className="text-xs font-semibold text-primary mt-3 inline-block">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Blog;
