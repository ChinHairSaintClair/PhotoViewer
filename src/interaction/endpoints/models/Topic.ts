type Topic = {
  id: string
  slug: string
  title: string
  description: string
  published_at: string
  updated_at: string
  starts_at: string
  ends_at: any
  only_submissions_after: any
  visibility: string
  featured: boolean
  total_photos: number
  current_user_contributions: any[]
  total_current_user_submissions: any
  links: Links
  status: string
  owners: Owner[]
  cover_photo: CoverPhoto
  preview_photos: PreviewPhoto[]
}

type Links = {
  self: string
  html: string
  photos: string
}

type Owner = {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: any
  twitter_username: string
  portfolio_url: string
  bio: string
  location: string
  links: Links2
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

type Links2 = {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

type ProfileImage = {
  small: string
  medium: string
  large: string
}

type Social = {
  instagram_username: string
  portfolio_url: string
  twitter_username: string
  paypal_email: any
}

type CoverPhoto = {
  id: string
  created_at: string
  updated_at: string
  promoted_at: any
  width: number
  height: number
  color: string
  blur_hash: string
  description: any
  alt_description: string
  urls: Urls
  links: Links3
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  user: User
}

type Urls = {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

type Links3 = {
  self: string
  html: string
  download: string
  download_location: string
}

type TopicSubmissions = {
  wallpapers: Wallpapers
  nature: Nature
}

type Wallpapers = {
  status: string
  approved_on: string
}

type Nature = {
  status: string
}

type User = {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url: any
  bio: string
  location: string
  links: Links4
  profile_image: ProfileImage2
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social2
}

type Links4 = {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

type ProfileImage2 = {
  small: string
  medium: string
  large: string
}

type Social2 = {
  instagram_username: string
  portfolio_url: any
  twitter_username: any
  paypal_email: any
}

type PreviewPhoto = {
  id: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: Urls2
}

type Urls2 = {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export default Topic
