/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { ReviewOutDeletedAt } from './reviewOutDeletedAt';
import type { ReviewOutId } from './reviewOutId';
import type { ReviewVersionSchema } from './reviewVersionSchema';
import type { UserStats } from './userStats';

export interface ReviewOut {
  anonymous_name?: string;
  article_id: number;
  comments_count?: number;
  content: string;
  created_at: string;
  deleted_at?: ReviewOutDeletedAt;
  id?: ReviewOutId;
  is_author?: boolean;
  rating: number;
  /** @maxLength 255 */
  subject: string;
  updated_at: string;
  user: UserStats;
  version?: number;
  versions: ReviewVersionSchema[];
}
