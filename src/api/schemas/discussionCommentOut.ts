/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { DiscussionCommentOutId } from './discussionCommentOutId';
import type { UserStats } from './userStats';

export interface DiscussionCommentOut {
  author: UserStats;
  content: string;
  created_at: string;
  id?: DiscussionCommentOutId;
  is_author?: boolean;
  is_pseudonymous?: boolean;
  replies: DiscussionCommentOut[];
  upvotes: number;
}
