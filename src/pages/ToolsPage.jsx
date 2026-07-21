import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Wrench, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

const ALL_TOOLS = [
  {
    title: 'Bulksheet Optimizer',
    slug: 'bulksheet-optimizer',
    category: 'Optimization',
    desc: 'Import your Amazon Ads bulk file, bulk-edit bids, states, placement adjustments and budgets across SP & SB, then export an upload-ready bulksheet with only your changes.',
    popular: true,
  },
  {
    title: 'PPC Health Checker',
    slug: 'ppc-health-checker',
    category: 'Audit',
    desc: 'Upload your Amazon Ads bulk file and get an instant account health score out of 100. Audits wasted spend, bid efficiency, match type distribution, keyword cannibalization, and account structure.',
    popular: true,
  },
  {
    title: 'Keyword Cluster Analyzer',
    slug: 'keyword-cluster-analyzer',
    category: 'Keywords',
    desc: 'Group Amazon Ads keywords into thematic clusters. Discover which root words drive profitable sales and which are bleeding your budget dry.',
    popular: false,
  },
  {
    title: 'Audit Tool Suite',
    slug: 'audit-tool-suite',
    category: 'Audit',
    desc: 'Full Amazon PPC audit toolkit: Bulk Sheet Audit with 16-sheet Excel report, Search Term Analysis with ACOS band charts, and Beta Report Analysis dashboard.',
    popular: false,
  },
  {
    title: 'PPC Dayparting Intelligence Hub',
    slug: 'ppc-dayparting',
    category: 'Analytics',
    desc: 'Analyze Amazon Sponsored Products hourly campaign CSVs to uncover when your ads perform best — with heatmaps, day/hour breakdowns, and bid adjustment recommendations.',
    popular: false,
  },
  {
    title: 'Negative Keyword Generator',
    slug: 'negative-keyword-generator',
    category: 'Optimization',
    desc: 'Identify underperforming search terms from your bulk operations file and generate a ready-to-upload bulk sheet with those terms added as negative keywords.',
    popular: true,
  },
  {
    title: 'PPC Impact Visualizer',
    slug: 'ppc-impact-visualizer',
    category: 'Reporting',
    desc: 'Upload your Summarizer CSV and mark an optimization date to generate a client-ready before vs after performance report with charts and spend analysis.',
    popular: false,
  },
  {
    title: 'PPC Spend Conversion Curve',
    slug: 'ppc-spend-conversion-curve',
    category: 'Analytics',
    desc: 'Analyze the relationship between ad spend and conversions to optimize budget allocation and maximize ROI.',
    popular: false,
  },
  {
    title: 'Keepa ASIN Comparator',
    slug: 'keepa-asin-comparator',
    category: 'Research',
    desc: 'Upload your Keepa Product Viewer CSV export to instantly compare images, BSR trends, pricing and listing details across all ASINs side by side.',
    popular: true,
  },
  {
    title: 'SQP + PPC Merged Dashboard',
    slug: 'sqp-ppc-merged-dashboard',
    category: 'Analytics',
    desc: 'Merge your SQP report with your Sponsored Products Beta Report to see organic & paid performance side-by-side per keyword. Uncover missing opportunities instantly.',
    popular: false,
  },
  {
    title: 'Keyword Cannibalization Analyzer',
    slug: 'keyword-cannibalization',
    category: 'Optimization',
    desc: 'Detect keywords competing across campaigns. Surface high-risk groups, estimate wasted spend, and identify the best performer per group.',
    popular: true,
  },
  {
    title: 'Campaign Builder',
    slug: 'campaign-builder',
    category: 'Creation',
    desc: 'Auto-generate bulk upload files for Amazon Sponsored Products campaigns with isolated match-type architectures.',
    popular: false,
  },
  {
    title: 'N-Gram Analyzer',
    slug: 'ngram-analyzer',
    category: 'Keywords',
    desc: 'Discover hidden word patterns in your search terms that drive spend, sales, and wasted ad budget.',
    popular: true,
  },
  {
    title: 'Missing Opportunity Sheet',
    slug: 'missing-opportunity-sheet',
    category: 'Keywords',
    desc: 'Identify SP search terms with no Exact or Phrase targeting — surface keyword gaps with trigger counts and opportunity strength.',
    popular: false,
  },
  {
    title: 'SQP Dashboard',
    slug: 'sqp-dashboard',
    category: 'Analytics',
    desc: 'Upload Amazon Search Query Performance Weekly reports to uncover market share gaps, optimize listings, and reallocate PPC spend.',
    popular: true,
  },
  {
    title: 'Placement & Audience Dashboard',
    slug: 'placement-audience',
    category: 'Analytics',
    desc: 'Analyze Amazon PPC performance by distinct placements and optimize by audience segments side-by-side using your bulk file.',
    popular: false,
  },
];

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Optimization', 'Audit', 'Keywords', 'Analytics', 'Reporting', 'Research', 'Creation'];

  const filteredTools = ALL_TOOLS.filter((tool) => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            PROPRIETARY TOOL SUITE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Free Amazon PPC Tools.
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            16+ free browser-based Amazon PPC tools. N-gram analysis, keyword cannibalization detection, SQP dashboards, and bulk sheet generators. No login required.
          </p>

          <div className="mt-6">
            <Link 
              to="/tools/free-amazon-ppc-tools"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 bg-white px-5 py-2.5 rounded-full border border-slate-300 shadow-xs hover:bg-slate-100 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Wondering if these replace Helium 10 or Perpetua? See the breakdown →</span>
            </Link>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools (e.g. N-Gram, Bulk...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* 16 Tool Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    {tool.category}
                  </span>
                  {tool.popular && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                      Popular Tool
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-slate-700 transition-colors">
                  {tool.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {tool.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free / No Login
                </span>
                <Link
                  to={`/tools/${tool.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Open Tool</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
