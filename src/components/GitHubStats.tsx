import {FC, memo, useEffect, useState} from 'react';
import {motion} from 'framer-motion';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

const GitHubStats: FC = memo(() => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch('https://api.github.com/users/cgibsonp');
        const userData = await userResponse.json();
        setStats(userData);

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/cgibsonp/repos?sort=stars&per_page=6');
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="bg-neutral-700/50 rounded-2xl p-8">
        <div className="animate-pulse">
          <div className="h-6 bg-neutral-600 rounded mb-4"></div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-8 bg-neutral-600 rounded mb-2"></div>
                <div className="h-4 bg-neutral-600 rounded"></div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-neutral-600 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const memberSince = new Date(stats.created_at).getFullYear();

  return (
    <motion.div 
      className="bg-gradient-to-br from-neutral-700/50 to-neutral-800/50 rounded-2xl p-8 border border-neutral-600/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-6">
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-3xl font-black text-orange-500">{stats.public_repos}</div>
          <div className="text-sm text-neutral-300 font-medium">Repositories</div>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-3xl font-black text-orange-500">{stats.followers}</div>
          <div className="text-sm text-neutral-300 font-medium">Followers</div>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-3xl font-black text-orange-500">{memberSince}</div>
          <div className="text-sm text-neutral-300 font-medium">Member Since</div>
        </motion.div>
      </div>

      {/* Top Repositories */}
      <div>
        <h4 className="text-lg font-bold text-white mb-4">Popular Repositories</h4>
        <div className="space-y-3">
          {repos.slice(0, 3).map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-neutral-600/30 hover:bg-neutral-600/50 rounded-lg transition-colors duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h5 className="font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                    {repo.name}
                  </h5>
                  <div className="flex items-center gap-4 mt-2 text-sm text-neutral-400">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      ⭐ {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      🍴 {repo.forks_count}
                    </span>
                  </div>
                </div>
                <motion.div
                  className="text-neutral-400 group-hover:text-orange-500"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/cgibsonp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-600 hover:bg-neutral-500 text-white font-semibold rounded-lg transition-colors duration-300 group"
        >
          <span>View Full Profile</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  );
});

GitHubStats.displayName = 'GitHubStats';
export default GitHubStats;