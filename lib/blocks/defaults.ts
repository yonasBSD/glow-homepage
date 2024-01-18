import { defaults as stackDefaults } from './stack/defaults'
import { defaults as headerDefaults } from './header/defaults'
import { defaults as contentDefaults } from './content/defaults'
import { defaults as imageDefaults } from './image/defaults'
import { defaults as githubCommitsThisMonthDefaults } from './github-commits-this-month/defaults'
import { defaults as spotifyPlayingNowDefaults } from './spotify-playing-now/defaults'
import { defaults as twitterLatestTweetDefaults } from './twitter-latest-tweet/defaults'
import { Blocks } from './types'

export const defaults: Record<Blocks, object> = {
  stack: stackDefaults,
  content: contentDefaults,
  header: headerDefaults,
  image: imageDefaults,
  'github-commits-this-month': githubCommitsThisMonthDefaults,
  'spotify-playing-now': spotifyPlayingNowDefaults,
  'twitter-latest-tweet': twitterLatestTweetDefaults,
}
