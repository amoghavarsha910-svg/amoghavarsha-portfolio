import React, { useState, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Code,
  Info,
  Clock,
  CheckCircle2,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { GITHUB_USERNAME } from '../data/portfolio';
import { GitHubRepo } from '../types';
import { TiltCard } from './TiltCard';

export const GitHubSection: React.FC = () => {
  const [activeUsername, setActiveUsername] = useState<string>(GITHUB_USERNAME);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [customInput, setCustomInput] = useState<string>('');

  const isConfigured = activeUsername && activeUsername !== 'YOUR_GITHUB_USERNAME';

  useEffect(() => {
    if (!isConfigured) {
      setRepos([]);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${activeUsername}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) throw new Error('GitHub profile not found');
          if (res.status === 403) throw new Error('GitHub API rate limit reached');
          throw new Error(`Error: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        if (isMounted) {
          const sorted = Array.isArray(data) ? data : [];
          setRepos(sorted);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Unable to fetch repositories');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [activeUsername, isConfigured]);

  const handleTestUsername = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      setActiveUsername(customInput.trim());
    }
  };

  return (
    <section id="github" className="relative py-20 bg-[#050508] overflow-hidden">
      {/* Radial grid */}
      <div className="bg-grid opacity-40" aria-hidden="true" />

      {/* Ambient background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00f2ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="section-title-line mb-3">
            <span className="section-title-badge">
              <Github className="w-3.5 h-3.5" />
              <span>OPEN SOURCE &amp; CODE ACTIVITY</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-2px] text-white font-heading">
            GitHub Activity &amp; Repositories
          </h2>
        </div>

        {/* Not Configured State (Default) */}
        {!isConfigured ? (
          <TiltCard
            id="github-placeholder-card"
            maxTilt={3}
            glowColor="rgba(0, 242, 255, 0.15)"
            className="p-8 sm:p-12 text-center max-w-3xl mx-auto glass-panel border-white/10 rounded-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Github className="w-8 h-8 text-[#00f2ff]" />
            </div>

            <h3 className="text-3xl font-black text-white font-heading mb-3 tracking-tight">
              GitHub profile coming soon.
            </h3>

            <p className="text-[#a0a0a0] text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              The portfolio is configured with a modular <code className="text-[#00f2ff] font-mono text-xs bg-white/5 px-2 py-0.5 rounded">GITHUB_USERNAME</code> variable. Once updated with your username in <code className="text-[#00f2ff] font-mono text-xs bg-white/5 px-2 py-0.5 rounded">src/data/portfolio.ts</code>, your live repositories will appear automatically.
            </p>

            {/* Quick Live Preview / Tester Box */}
            <form
              onSubmit={handleTestUsername}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8"
            >
              <input
                id="github-test-input"
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Enter GitHub username to preview..."
                className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/15 text-white text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-[#00f2ff] focus:ring-1 focus:ring-[#00f2ff]"
              />
              <button
                type="submit"
                id="github-test-submit-btn"
                className="w-full sm:w-auto px-5 py-2.5 btn-primary-bold text-xs whitespace-nowrap"
              >
                Test Live Feed
              </button>
            </form>

            <a
              id="github-placeholder-profile-btn"
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg btn-outline-bold text-xs font-mono uppercase tracking-wider"
            >
              <Github className="w-4 h-4 text-[#00f2ff]" />
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#a0a0a0]" />
            </a>
          </TiltCard>
        ) : (
          /* Live Repositories State */
          <div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 glass-panel border border-white/10 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00f2ff]/10 text-[#00f2ff]">
                  <Github className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">@{activeUsername}</div>
                  <div className="text-xs text-[#a0a0a0] font-mono">Connected via GitHub REST API</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://github.com/${activeUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-outline-bold text-xs font-mono"
                >
                  <span>View GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setActiveUsername(GITHUB_USERNAME)}
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#a0a0a0] hover:text-white text-xs font-mono transition-colors"
                  title="Reset to default configuration"
                >
                  Reset
                </button>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="p-6 rounded-2xl glass-panel border border-white/10 animate-pulse h-44 flex flex-col justify-between"
                  >
                    <div className="h-4 bg-white/10 rounded w-3/4 mb-3" />
                    <div className="h-3 bg-white/5 rounded w-full mb-2" />
                    <div className="h-3 bg-white/5 rounded w-2/3" />
                    <div className="h-3 bg-white/10 rounded w-1/3 mt-4" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20 text-center max-w-lg mx-auto">
                <Info className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <p className="text-red-300 text-sm font-medium">{error}</p>
                <button
                  onClick={() => setActiveUsername(GITHUB_USERNAME)}
                  className="mt-4 px-4 py-1.5 rounded-lg bg-white/10 text-white text-xs font-mono hover:bg-white/20"
                >
                  Back to Default
                </button>
              </div>
            ) : repos.length === 0 ? (
              <div className="p-8 rounded-2xl glass-panel border border-white/10 text-center text-[#a0a0a0] text-sm">
                No public repositories found for this account.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <TiltCard
                    key={repo.id}
                    maxTilt={5}
                    glowColor="rgba(0, 242, 255, 0.15)"
                    className="p-6 flex flex-col justify-between glass-panel border-white/10 hover:border-[#00f2ff]/40 group rounded-2xl"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h4 className="font-bold text-white font-mono text-sm group-hover:text-[#00f2ff] transition-colors truncate">
                          {repo.name}
                        </h4>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded bg-white/5 text-slate-400 hover:text-white"
                          aria-label={`Open repository ${repo.name}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <p className="text-xs text-[#a0a0a0] leading-relaxed line-clamp-3 mb-4">
                        {repo.description || 'No description provided.'}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#a0a0a0]">
                      <div className="flex items-center gap-1.5 text-[#00f2ff]">
                        <Code className="w-3 h-3" />
                        <span>{repo.language || 'Code'}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3 text-slate-400" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
