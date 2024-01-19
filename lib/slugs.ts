const FORBIDDEN_SLUGS_REGEXPS = [
  // Meteor app routes
  'page-not-found',
  'docs',
  'terms-of-use',
  'about',
  'pricing',
  'privacy-policy',
  'customers',
  'request-form',
  'request-solution',
  'release-notes',
  'jobs',
  'api-reference',
  'video-tutorials',
  'acts',
  'key-value-stores',
  'schedules',
  'account',
  'sign-up',
  'sign-in-discourse',
  'admin',
  'documentation',
  'change-password',
  'enroll-account',
  'forgot-password',
  'reset-password',
  'sign-in',
  'verify-email',
  'live-status',
  'browser-info',
  'webhooks',
  'health-check',
  'api',
  'change-log',
  'dashboard',
  'community',
  'crawlers',
  'ext',

  // Various strings
  'admin',
  'administration',
  'crawler',
  'act',
  'library',
  'lib',
  'apifier',
  'team',
  'contact',
  'doc',
  'documentation',
  'for-business',
  'for-developers',
  'developers',
  'business',
  'integrations',
  'job',
  'setting',
  'settings',
  'privacy',
  'policy',
  'assets',
  'help',
  'config',
  'configuration',
  'terms',
  'hiring',
  'hire',
  'status',
  'status-page',
  'solutions',
  'support',
  'market',
  'marketplace',
  'download',
  'downloads',
  'username',
  'users',
  'user',
  'login',
  'logout',
  'signin',
  'sign',
  'signup',
  'sign-out',
  'signout',
  'plugins',
  'plug-ins',
  'reset',
  'password',
  'passwords',
  'square',
  'profile-photos',
  'profiles',
  'true',
  'false',
  'js',
  'css',
  'img',
  'images',
  'image',
  'partials',
  'fonts',
  'font',
  'dynamic_templates',
  'app',
  'schedules',
  'community',
  'storage',
  'storages',
  'account',
  'node_modules',
  'bower_components',
  'video',
  'knowledgebase',
  'forum',
  'customers',
  'blog',
  'health-check',
  'health',
  'anim',
  'forum_topics.json',
  'forum_categories.json',
  'me',
  'you',
  'him',
  'she',
  'it',
  'external',
  'actor',
  'crawler',
  'scheduler',
  'api',
  'sdk',
  'puppeteer',
  'webdriver',
  'selenium',
  '(selenium.*webdriver)',
  'undefined',
  'page-analyzer',
  'wp-login.php',
  'welcome.action',
  'echo',
  'proxy',
  'super-proxy',
  'gdpr',
  'case-studies',
  'use-cases',
  'how-to',
  'kb',
  'cookies',
  'cookie-policy',
  'cookies-policy',
  'powered-by',
  'run',
  'runs',
  'actor',
  'actors',
  'act',
  'acts',
  'success-stories',
  'roadmap',
  'join-marketplace',
  'presskit',
  'press-kit',
  'covid-19',
  'covid',
  'covid19',
  'matfyz',
  'ideas',
  'public-actors',
  'resources',
  'partners',
  'affiliate',
  'industries',
  'web-scraping',
  'custom-solutions',
  'solution-provider',
  'alternatives',

  // Special files
  'index',
  'index\\.html',
  '(favicon\\.[a-z]+)',
  'BingSiteAuth.xml',
  '(google.+\\.html)',
  'robots\\.txt',
  '(sitemap\\.[a-z]+)',
  '(apple-touch-icon.*)',
  'security-whitepaper\\.pdf',

  // All hidden files
  '(\\..*)',

  // File starting with xxx-
  '(xxx-.*)',

  // Strings not starting with letter or number
  '([^0-9a-z].*)',

  // Strings not ending with letter or number
  '(.*[^0-9a-z])',

  // Strings where there's more than one underscore, comma or dash in row
  '(.*[_.\\-]{2}.*)',

  // Reserved usernames from https://github.com/shouldbee/reserved-usernames/blob/master/reserved-usernames.json
  '0',
  'about',
  'access',
  'account',
  'accounts',
  'activate',
  'activities',
  'activity',
  'ad',
  'add',
  'address',
  'adm',
  'admin',
  'administration',
  'administrator',
  'ads',
  'adult',
  'advertising',
  'affiliate',
  'affiliates',
  'ajax',
  'all',
  'alpha',
  'analysis',
  'analytics',
  'android',
  'anon',
  'anonymous',
  'api',
  'app',
  'apps',
  'archive',
  'archives',
  'article',
  'asct',
  'asset',
  'atom',
  'auth',
  'authentication',
  'avatar',
  'backup',
  'balancer-manager',
  'banner',
  'banners',
  'beta',
  'billing',
  'bin',
  'blog',
  'blogs',
  'board',
  'book',
  'bookmark',
  'bot',
  'bots',
  'bug',
  'business',
  'cache',
  'cadastro',
  'calendar',
  'call',
  'campaign',
  'cancel',
  'captcha',
  'career',
  'careers',
  'cart',
  'categories',
  'category',
  'cgi',
  'cgi-bin',
  'changelog',
  'chat',
  'check',
  'checking',
  'checkout',
  'client',
  'cliente',
  'clients',
  'code',
  'codereview',
  'comercial',
  'comment',
  'comments',
  'communities',
  'community',
  'company',
  'compare',
  'compras',
  'config',
  'configuration',
  'connect',
  'contact',
  'contact-us',
  'contact_us',
  'contactus',
  'contest',
  'contribute',
  'corp',
  'create',
  'css',
  'dashboard',
  'data',
  'db',
  'default',
  'delete',
  'demo',
  'design',
  'designer',
  'destroy',
  'dev',
  'devel',
  'developer',
  'developers',
  'diagram',
  'diary',
  'dict',
  'dictionary',
  'die',
  'dir',
  'direct_messages',
  'directory',
  'dist',
  'doc',
  'docs',
  'documentation',
  'domain',
  'download',
  'downloads',
  'ecommerce',
  'edit',
  'editor',
  'edu',
  'education',
  'email',
  'employment',
  'empty',
  'end',
  'enterprise',
  'entries',
  'entry',
  'error',
  'errors',
  'eval',
  'event',
  'exit',
  'explore',
  'facebook',
  'faq',
  'favorite',
  'favorites',
  'feature',
  'features',
  'feed',
  'feedback',
  'feeds',
  'file',
  'files',
  'first',
  'flash',
  'fleet',
  'fleets',
  'flog',
  'follow',
  'followers',
  'following',
  'forgot',
  'form',
  'forum',
  'forums',
  'founder',
  'free',
  'friend',
  'friends',
  'ftp',
  'gadget',
  'gadgets',
  'game',
  'games',
  'get',
  'gift',
  'gifts',
  'gist',
  'github',
  'graph',
  'group',
  'groups',
  'guest',
  'guests',
  'help',
  'home',
  'homepage',
  'host',
  'hosting',
  'hostmaster',
  'hostname',
  'howto',
  'hpg',
  'html',
  'http',
  'httpd',
  'https',
  'i',
  'iamges',
  'icon',
  'icons',
  'id',
  'idea',
  'ideas',
  'image',
  'images',
  'imap',
  'img',
  'index',
  'indice',
  'info',
  'information',
  'inquiry',
  'instagram',
  'intranet',
  'invitations',
  'invite',
  'ipad',
  'iphone',
  'irc',
  'is',
  'issue',
  'issues',
  'it',
  'item',
  'items',
  'java',
  'javascript',
  'job',
  'jobs',
  'join',
  'js',
  'json',
  'jump',
  'knowledgebase',
  'language',
  'languages',
  'last',
  'ldap-status',
  'legal',
  'license',
  'link',
  'links',
  'linux',
  'list',
  'lists',
  'log',
  'log-in',
  'log-out',
  'log_in',
  'log_out',
  'login',
  'logout',
  'logs',
  'm',
  'mac',
  'mail',
  'mail1',
  'mail2',
  'mail3',
  'mail4',
  'mail5',
  'mailer',
  'mailing',
  'maintenance',
  'manager',
  'manual',
  'map',
  'maps',
  'marketing',
  'master',
  'me',
  'media',
  'member',
  'members',
  'message',
  'messages',
  'messenger',
  'microblog',
  'microblogs',
  'mine',
  'mis',
  'mob',
  'mobile',
  'movie',
  'movies',
  'mp3',
  'msg',
  'msn',
  'music',
  'musicas',
  'mx',
  'my',
  'mysql',
  'name',
  'named',
  'nan',
  'navi',
  'navigation',
  'net',
  'network',
  'new',
  'news',
  'newsletter',
  'nick',
  'nickname',
  'notes',
  'noticias',
  'notification',
  'notifications',
  'notify',
  'ns',
  'ns1',
  'ns10',
  'ns2',
  'ns3',
  'ns4',
  'ns5',
  'ns6',
  'ns7',
  'ns8',
  'ns9',
  'null',
  'oauth',
  'oauth_clients',
  'offer',
  'offers',
  'official',
  'old',
  'online',
  'openid',
  'operator',
  'order',
  'orders',
  'organization',
  'organizations',
  'overview',
  'owner',
  'owners',
  'page',
  'pager',
  'pages',
  'panel',
  'password',
  'payment',
  'perl',
  'phone',
  'photo',
  'photoalbum',
  'photos',
  'php',
  'phpmyadmin',
  'phppgadmin',
  'phpredisadmin',
  'pic',
  'pics',
  'ping',
  'plan',
  'plans',
  'plugin',
  'plugins',
  'policy',
  'pop',
  'pop3',
  'popular',
  'portal',
  'post',
  'postfix',
  'postmaster',
  'posts',
  'pr',
  'premium',
  'press',
  'price',
  'pricing',
  'privacy',
  'privacy-policy',
  'privacy_policy',
  'privacypolicy',
  'private',
  'product',
  'products',
  'profile',
  'project',
  'projects',
  'promo',
  'pub',
  'public',
  'purpose',
  'put',
  'python',
  'query',
  'random',
  'ranking',
  'read',
  'readme',
  'recent',
  'recruit',
  'recruitment',
  'register',
  'registration',
  'release',
  'remove',
  'replies',
  'report',
  'reports',
  'repositories',
  'repository',
  'req',
  'request',
  'requests',
  'reset',
  'roc',
  'root',
  'rss',
  'ruby',
  'rule',
  'sag',
  'sale',
  'sales',
  'sample',
  'samples',
  'save',
  'school',
  'script',
  'scripts',
  'search',
  'secure',
  'security',
  'self',
  'send',
  'server',
  'server-info',
  'server-status',
  'service',
  'services',
  'session',
  'sessions',
  'setting',
  'settings',
  'setup',
  'share',
  'shop',
  'show',
  'sign-in',
  'sign-up',
  'sign_in',
  'sign_up',
  'signin',
  'signout',
  'signup',
  'site',
  'sitemap',
  'sites',
  'smartphone',
  'smtp',
  'soporte',
  'source',
  'spec',
  'special',
  'sql',
  'src',
  'ssh',
  'ssl',
  'ssladmin',
  'ssladministrator',
  'sslwebmaster',
  'staff',
  'stage',
  'staging',
  'start',
  'stat',
  'state',
  'static',
  'stats',
  'status',
  'store',
  'stores',
  'stories',
  'style',
  'styleguide',
  'stylesheet',
  'stylesheets',
  'subdomain',
  'subscribe',
  'subscriptions',
  'suporte',
  'support',
  'svn',
  'swf',
  'sys',
  'sysadmin',
  'sysadministrator',
  'system',
  'tablet',
  'tablets',
  'tag',
  'talk',
  'task',
  'tasks',
  'team',
  'teams',
  'tech',
  'telnet',
  'term',
  'terms',
  'terms-of-service',
  'terms_of_service',
  'termsofservice',
  'test',
  'test1',
  'test2',
  'test3',
  'teste',
  'testing',
  'tests',
  'theme',
  'themes',
  'thread',
  'threads',
  'tmp',
  'todo',
  'tool',
  'tools',
  'top',
  'topic',
  'topics',
  'tos',
  'tour',
  'translations',
  'trends',
  'tutorial',
  'tux',
  'tv',
  'twitter',
  'undef',
  'unfollow',
  'unsubscribe',
  'update',
  'upload',
  'uploads',
  'url',
  'usage',
  'user',
  'username',
  'users',
  'usuario',
  'vendas',
  'ver',
  'version',
  'video',
  'videos',
  'visitor',
  'watch',
  'weather',
  'web',
  'webhook',
  'webhooks',
  'webmail',
  'webmaster',
  'website',
  'websites',
  'welcome',
  'widget',
  'widgets',
  'wiki',
  'win',
  'windows',
  'word',
  'work',
  'works',
  'workshop',
  'ww',
  'wws',
  'www',
  'www1',
  'www2',
  'www3',
  'www4',
  'www5',
  'www6',
  'www7',
  'wwws',
  'wwww',
  'xfn',
  'xml',
  'xmpp',
  'xpg',
  'xxx',
  'yaml',
  'year',
  'yml',
  'you',
  'yourdomain',
  'yourname',
  'yoursite',
  'yourusername',
];

// Regex matching forbidden slugs.
const FORBIDDEN_REGEXP = new RegExp(
  `^(${FORBIDDEN_SLUGS_REGEXPS.join('|')})$`,
  'i'
);

/**
 * Checks whether slug is listed in FORBIDDEN_SLUGS
 * or matches any root route path.
 */
export function isForbiddenSlug(slug: string): boolean {
  return !!slug.match(FORBIDDEN_REGEXP);
}

export function isReservedSlug(slug: string): boolean {
  const reservedSlugs = ['alex', 'tom', 'will', 'william', 'jack'];

  if (reservedSlugs.includes(slug.toLowerCase())) {
    return true;
  }

  return false;
}

export const regexSlug = /^[a-z0-9_]+$/;
