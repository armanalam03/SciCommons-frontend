/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { CommunityBasicOutProfilePicUrl } from './communityBasicOutProfilePicUrl';

export interface CommunityBasicOut {
  id: number;
  name: string;
  profile_pic_url: CommunityBasicOutProfilePicUrl;
  total_members: number;
  total_published_articles: number;
}