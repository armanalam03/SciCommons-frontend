/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { ArticleOutArticleImageUrl } from './articleOutArticleImageUrl';
import type { ArticleOutArticleLink } from './articleOutArticleLink';
import type { ArticleOutCommunityArticle } from './articleOutCommunityArticle';
import type { ArticleOutId } from './articleOutId';
import type { ArticleOutSlug } from './articleOutSlug';
import type { FAQSchema } from './fAQSchema';
import type { SubmissionType } from './submissionType';
import type { Tag } from './tag';
import type { UserStats } from './userStats';

export interface ArticleOut {
  abstract: string;
  article_image_url?: ArticleOutArticleImageUrl;
  article_link?: ArticleOutArticleLink;
  article_pdf_urls: string[];
  authors: Tag[];
  community_article: ArticleOutCommunityArticle;
  created_at: string;
  faqs: FAQSchema[];
  id?: ArticleOutId;
  is_pseudonymous?: boolean;
  is_submitter: boolean;
  slug?: ArticleOutSlug;
  submission_type: SubmissionType;
  /** @maxLength 500 */
  title: string;
  total_comments: number;
  total_discussions: number;
  total_ratings: number;
  total_reviews: number;
  updated_at: string;
  user: UserStats;
}
