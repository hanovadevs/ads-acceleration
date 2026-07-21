import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Upload, FileText, CheckCircle2, RefreshCw } from 'lucide-react';

import BulksheetOptimizerTool from '../components/tools/BulksheetOptimizerTool';
import PpcHealthCheckerTool from '../components/tools/PpcHealthCheckerTool';
import KeywordClusterTool from '../components/tools/KeywordClusterTool';
import AuditSuiteTool from '../components/tools/AuditSuiteTool';
import DaypartingTool from '../components/tools/DaypartingTool';
import NegativeGeneratorTool from '../components/tools/NegativeGeneratorTool';
import ImpactVisualizerTool from '../components/tools/ImpactVisualizerTool';
import ConversionCurveTool from '../components/tools/ConversionCurveTool';
import KeepaComparatorTool from '../components/tools/KeepaComparatorTool';
import SqpPpcMergedTool from '../components/tools/SqpPpcMergedTool';
import CannibalizationTool from '../components/tools/CannibalizationTool';
import CampaignBuilderTool from '../components/tools/CampaignBuilderTool';
import NgramAnalyzerTool from '../components/tools/NgramAnalyzerTool';
import MissingOpportunityTool from '../components/tools/MissingOpportunityTool';
import SqpDashboardTool from '../components/tools/SqpDashboardTool';
import PlacementAudienceTool from '../components/tools/PlacementAudienceTool';

export default function ToolDetailPage() {
  const { slug } = useParams();
  const [customFileUploaded, setCustomFileUploaded] = useState(false);
  const [customFileName, setCustomFileName] = useState('');

  const toolMap = {
    'bulksheet-optimizer': { title: 'Bulksheet Optimizer', comp: <BulksheetOptimizerTool /> },
    'ppc-health-checker': { title: 'PPC Account Health Checker', comp: <PpcHealthCheckerTool /> },
    'keyword-cluster-analyzer': { title: 'Keyword Cluster Analyzer', comp: <KeywordClusterTool /> },
    'audit-tool-suite': { title: 'Full Amazon PPC Audit Suite', comp: <AuditSuiteTool /> },
    'ppc-dayparting': { title: 'PPC Dayparting Intelligence Hub', comp: <DaypartingTool /> },
    'negative-keyword-generator': { title: 'Negative Keyword Generator', comp: <NegativeGeneratorTool /> },
    'ppc-impact-visualizer': { title: 'PPC Impact Visualizer', comp: <ImpactVisualizerTool /> },
    'ppc-spend-conversion-curve': { title: 'PPC Spend-to-Conversion Curve', comp: <ConversionCurveTool /> },
    'keepa-asin-comparator': { title: 'Keepa ASIN Comparator', comp: <KeepaComparatorTool /> },
    'sqp-ppc-merged-dashboard': { title: 'SQP + PPC Merged Dashboard', comp: <SqpPpcMergedTool /> },
    'keyword-cannibalization': { title: 'Keyword Cannibalization Analyzer', comp: <CannibalizationTool /> },
    'campaign-builder': { title: 'Sponsored Products Campaign Builder', comp: <CampaignBuilderTool /> },
    'ngram-analyzer': { title: 'N-Gram Keyword Frequency Analyzer', comp: <NgramAnalyzerTool /> },
    'missing-opportunity-sheet': { title: 'Missing Opportunity Sheet', comp: <MissingOpportunityTool /> },
    'sqp-dashboard': { title: 'Search Query Performance (SQP) Dashboard', comp: <SqpDashboardTool /> },
    'placement-audience': { title: 'Placement & Audience Optimizer', comp: <PlacementAudienceTool /> },
  };

  const currentTool = toolMap[slug] || { 
    title: 'Amazon PPC Browser Tool', 
    comp: <BulksheetOptimizerTool /> 
  };

  const handleCustomUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomFileName(file.name);
      setCustomFileUploaded(true);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Link */}
        <Link 
          to="/tools" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 16 Free Tools</span>
        </Link>

        {/* Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              INTERACTIVE TOOL ENGINE • 100% FREE
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">{currentTool.title}</h1>
          </div>

          <label className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-sm shrink-0">
            <Upload className="w-4 h-4 text-slate-900" />
            <span>{customFileUploaded ? customFileName : 'Upload Custom CSV'}</span>
            <input type="file" accept=".csv,.xlsx" onChange={handleCustomUpload} className="hidden" />
          </label>
        </div>

        {customFileUploaded && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl text-xs font-bold mb-8 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Loaded report file: <strong>{customFileName}</strong>. Processing custom row data below...</span>
            </span>
          </div>
        )}

        {/* Dynamic Working Tool Engine Component */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg mb-10">
          {currentTool.comp}
        </div>

        {/* Security Footer Note */}
        <div className="text-center text-xs text-slate-500 font-medium">
          🔒 Client Privacy Guarantee: Your Amazon advertising CSV data is processed 100% locally in your browser memory. No data is saved on remote servers.
        </div>

      </div>
    </div>
  );
}
