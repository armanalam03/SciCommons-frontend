/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { ReviewCommentOutId } from './reviewCommentOutId';
import type { ReviewCommentOutRating } from './reviewCommentOutRating';
import type { UserStats } from './userStats';

export interface ReviewCommentOut {
  author: UserStats;
  content: string;
  created_at: string;
  id?: ReviewCommentOutId;
  is_author?: boolean;
  is_deleted?: boolean;
  is_pseudonymous?: boolean;
  rating?: ReviewCommentOutRating;
  replies: ReviewCommentOut[];
  upvotes: number;
}
