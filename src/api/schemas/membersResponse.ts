/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { UserSchema } from './userSchema';

export interface MembersResponse {
  admins: UserSchema[];
  community_id: number;
  members: UserSchema[];
  moderators: UserSchema[];
  reviewers: UserSchema[];
}
