import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

interface RelatedPostsProps {
  /** Keyword tags to match against blog post `keyword` field. Order = priority. */
  keywords: string[];
  /** Optional heading override. */
  heading?: string;
  /** Optional intro line under heading. */
  intro?: string;
  /** Max posts to show (default 6). */
  limit?: number;
}

/**
 * Auto-selects the most relevant blog posts for a service page.
 * Prioritises posts whose `keyword` matches the page's topic keywords.
 * Falls back to most-recent posts if not enough matches are found.
 */
const RelatedPosts = ({ keywords, heading = "Related Articles", intro, limit = 6 }: RelatedPostsProps) => {
  const lowered = keywords.map((k) => k.toLowerCase());

  const score = (post: BlogPost) => {
    const k = post.keyword.toLowerCase();
    for (let i = 0; i < lowered.length; i++) {
      if (k === lowered[i]) return 100 - i; // exact match, weighted by priority
      if (k.includes(lowered[i]) || lowered[i].includes(k)) return 50 - i;
    }
    return 0;
  };

  const ranked = [...blogPosts]
    .map((p) => ({ post: p, s: score(p) }))
    .sort((a, b) => {
      if (b.s !== a.s) return b.s - a.s;
      return b.post.date.localeCompare(a.post.date);
    })
    .filter((x) => x.s > 0)
    .slice(0, limit)
    .map((x) => x.post);

  if (ranked.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">From Our Blog</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-3">{heading}</h2>
            {intro && <p className="text-sm text-muted-foreground max-w-2xl mx-auto">{intro}</p>}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ranked.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-card transition-all group flex flex-col"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-2">{post.keyword}</span>
                <h3 className="font-heading text-base font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <span className="text-xs font-semibold text-primary mt-4 inline-flex items-center gap-1">
                  Read article <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;