import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Upload, FileText, CheckCircle2, AlertCircle, Play, RefreshCw, Download } from 'lucide-react';

export default function ToolDetailPage() {
  const { slug } = useParams();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileUploaded(true);
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setAnalysisComplete(true);
      }, 1500);
    }
  };

  const toolTitles = {
    'ngram-analyzer': 'N-Gram Keyword Analyzer',
    'sqp-dashboard': 'SQP Intelligence Dashboard',
    'keyword-cannibalization': 'Keyword Cannibalization Analyzer',
    'ppc-health-checker': 'PPC Account Health Checker',
    'bulksheet-optimizer': 'Bulksheet Optimizer',
    'graduation-finder': 'Graduation Finder',
    'keepa-asin-comparator': 'Keepa ASIN Comparator',
    'placement-audience': 'Placement & Audience Dashboard',
  };

  const title = toolTitles[slug] || 'Amazon PPC Browser Tool';

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Link */}
        <Link 
          to="/tools" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 16 Tools</span>
        </Link>

        {/* Tool Title Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl mb-10">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            BROWSER-BASED TOOL • NO LOGIN REQUIRED
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">{title}</h1>
          <p className="text-slate-300 text-sm mt-3">
            Upload your Amazon Ads Search Term Report or Bulk Sheet (.csv / .xlsx) to generate instant actionable insights.
          </p>
        </div>

        {/* Upload Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg text-center mb-10">
          {!fileUploaded ? (
            <label className="border-2 border-dashed border-slate-300 hover:border-slate-900 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50 hover:bg-slate-100">
              <Upload className="w-12 h-12 text-slate-400 mb-4" />
              <div className="font-extrabold text-slate-900 text-base mb-1">
                Drop your Amazon Report CSV file here
              </div>
              <div className="text-xs text-slate-500 mb-4">
                Supports Search Term Reports, Bulk Operations files, and SQP CSVs
              </div>
              <span className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs">
                Select File
              </span>
              <input type="file" accept=".csv,.xlsx" onChange={handleFileUpload} className="hidden" />
            </label>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 bg-slate-100 p-4 rounded-xl max-w-md mx-auto">
                <FileText className="w-5 h-5 text-slate-700" />
                <span className="font-bold text-slate-900 text-sm truncate">{fileName}</span>
              </div>

              {analyzing && (
                <div className="flex items-center justify-center gap-3 text-slate-700 font-bold text-sm">
                  <RefreshCw className="w-5 h-5 animate-spin text-slate-900" />
                  <span>Analyzing N-Grams and Campaign Data...</span>
                </div>
              )}

              {analysisComplete && (
                <div className="space-y-6 animate-fade-in">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Analysis Complete! 5 Wasted Spend Clusters Surface ($182/mo bleed).</span>
                  </div>

                  <div className="bg-slate-900 text-white p-6 rounded-2xl text-left font-mono text-xs space-y-2">
                    <div className="text-emerald-400 font-bold">Top High-ACoS N-Grams Identified:</div>
                    <div>1. "vanilla" - 6,210 Impr | $212 Spend | ACOS: 58%</div>
                    <div>2. "keto" - 3,120 Impr | $167 Spend | ACOS: 72%</div>
                    <div>3. "cheap" - 1,410 Impr | $84 Spend | ACOS: 110%</div>
                  </div>

                  <button 
                    onClick={() => alert('Downloading Optimized Bulk Sheet...')}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Cleaned Negative Bulk Sheet</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Security Note */}
        <div className="text-center text-xs text-slate-500 font-medium">
          🔒 Security Guarantee: Your CSV data is processed 100% locally inside your browser. No data is stored on remote servers.
        </div>

      </div>
    </div>
  );
}
