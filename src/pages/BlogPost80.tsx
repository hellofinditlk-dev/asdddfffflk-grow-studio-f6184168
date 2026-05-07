import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const BlogPost80 = () => (
  <>
    <SEOHead
      title="Advertising Cost in Sri Lanka — Complete 2026 Price Guide | Cypher Digital"
      description="How much does advertising cost in Sri Lanka in 2026? Complete price guide covering Facebook Ads, Google Ads, TikTok, TV, radio, billboard, and newspaper advertising costs."
      canonical="https://cypherdigital.lk/blog/advertising-cost-sri-lanka-2026"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Advertising Cost 2026" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <time className="text-xs text-muted-foreground">May 7, 2026</time>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-3 mb-4">How Much Does Advertising Cost in Sri Lanka? — Complete 2026 Price Guide</h1>
          </header>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <p>One of the most common questions businesses ask is: how much does advertising actually cost in Sri Lanka? Costs depend on channels, industry, audience and goals. Start by understanding which <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">advertising channels in Sri Lanka</Link> are available and what each delivers for your budget.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How Pricing Works</h2>
            <p><strong className="text-foreground">Media spend</strong> goes to the platform (Facebook, Google, TV station). <strong className="text-foreground">Agency/management fees</strong> pay for planning, creative and management. For digital both apply; for traditional you pay media owners and production separately.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Facebook Ads (2026)</h2>
            <table className="w-full text-xs border border-border">
              <thead className="bg-muted"><tr><th className="p-2 text-left">Objective</th><th className="p-2 text-left">Cost (LKR)</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border-t">Cost per click</td><td className="p-2 border-t">8 – 35</td></tr>
                <tr><td className="p-2 border-t">Cost per lead</td><td className="p-2 border-t">150 – 600</td></tr>
                <tr><td className="p-2 border-t">CPM (awareness)</td><td className="p-2 border-t">80 – 250</td></tr>
                <tr><td className="p-2 border-t">Cost per video view</td><td className="p-2 border-t">3 – 15</td></tr>
                <tr><td className="p-2 border-t">Cost per ecommerce conversion</td><td className="p-2 border-t">300 – 1,200</td></tr>
              </tbody>
            </table>
            <p>Recommended budgets: Small business LKR 15K–30K; growing business LKR 30K–75K; established brand LKR 75K–200K+. Management fees add LKR 15K–50K/month. See our full <Link to="/facebook-ads-sri-lanka" className="text-primary underline">Facebook Ads service page</Link>.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Instagram Ads</h2>
            <p>Same Meta Ads Manager. CPC LKR 15–50, CPM LKR 120–350, CPL LKR 200–800. Best for fashion, hospitality, food, beauty and lifestyle.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Google Ads</h2>
            <p>CPC depends on industry: education LKR 40–120; real estate LKR 80–250; legal LKR 100–300; finance LKR 120–400; healthcare LKR 60–180; ecommerce LKR 25–80; restaurants LKR 20–60; hotels LKR 50–150. Recommended monthly budgets LKR 20K–300K+. Visit our <Link to="/google-ads-sri-lanka" className="text-primary underline">Google Ads page</Link>.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">TikTok Ads</h2>
            <p>CPC LKR 10–40, CPM LKR 60–180, CPL LKR 120–500. Minimum daily budget ~LKR 1,800. Best for 18–35 audiences. See <Link to="/tiktok-marketing-sri-lanka" className="text-primary underline">TikTok marketing</Link>.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">YouTube Ads</h2>
            <p>Cost per view LKR 5–20, CPM LKR 150–400, discovery CPC LKR 15–50. Add LKR 50K–200K for video production.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Traditional Media (for context)</h2>
            <p>TV 30s prime: LKR 150K–500K per airing + production LKR 500K–2M. Radio LKR 8K–60K per spot. Newspaper full page LKR 100K–350K. Billboard Colombo LKR 80K–400K/month. Most SMEs cannot justify these costs given limited targeting.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Recommended Budget Allocation</h2>
            <p><strong className="text-foreground">Small business (LKR 30K–60K/mo):</strong> Facebook + Google only. <strong className="text-foreground">Growing (LKR 100K–200K/mo):</strong> Facebook, Google, TikTok, SEO content. <strong className="text-foreground">Established (LKR 300K+/mo):</strong> Add YouTube, outdoor and SEO at scale.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Best ROI Channels</h2>
            <p>For most SMEs, <strong className="text-foreground">Facebook Ads + Google Ads combined</strong> deliver the strongest measurable ROI. Facebook builds awareness and demand; Google captures high-intent searchers.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Get a Custom Quote</h2>
            <p>Every business is different. <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20advertising%20audit" className="text-primary font-semibold hover:underline">📞 Get a free advertising audit on WhatsApp →</a> or visit our <Link to="/contact" className="text-primary underline">contact page</Link>.</p>
          </div>
          <div className="mt-10 text-center"><Link to="/blog" className="text-primary font-semibold underline">← Back to Blog</Link></div>
        </div>
      </div>
    </article>
  </>
);
export default BlogPost80;
