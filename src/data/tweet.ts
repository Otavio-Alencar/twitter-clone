import { Tweet } from '@/types/tweet'
import { user } from './user'

export const tweet: Tweet = {
  id: 1,
  user,
  body: 'Um ótimo dia',
  image: '/images/torre.jpg',
  likeCount: 20,
  commentCount: 71,
  retweetCount: 0,
  liked: true,
  retweeted: false,
  dataPost: new Date(2024, 8, 1, 10, 0, 0),
}
