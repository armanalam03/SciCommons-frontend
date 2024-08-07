/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import { customInstance } from '.././custom-instance';
import type { ErrorType } from '.././custom-instance';
import type { MembersResponse, Message } from '.././schemas';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get Community Members
 */
export const communitiesMembersApiGetCommunityMembers = (
  communityName: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<MembersResponse>(
    { url: `/api/communities/${communityName}/members`, method: 'GET', signal },
    options
  );
};

export const getCommunitiesMembersApiGetCommunityMembersQueryKey = (communityName: string) => {
  return [`/api/communities/${communityName}/members`] as const;
};

export const getCommunitiesMembersApiGetCommunityMembersQueryOptions = <
  TData = Awaited<ReturnType<typeof communitiesMembersApiGetCommunityMembers>>,
  TError = ErrorType<Message>,
>(
  communityName: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof communitiesMembersApiGetCommunityMembers>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCommunitiesMembersApiGetCommunityMembersQueryKey(communityName);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof communitiesMembersApiGetCommunityMembers>>
  > = ({ signal }) =>
    communitiesMembersApiGetCommunityMembers(communityName, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!communityName, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof communitiesMembersApiGetCommunityMembers>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type CommunitiesMembersApiGetCommunityMembersQueryResult = NonNullable<
  Awaited<ReturnType<typeof communitiesMembersApiGetCommunityMembers>>
>;
export type CommunitiesMembersApiGetCommunityMembersQueryError = ErrorType<Message>;

/**
 * @summary Get Community Members
 */
export const useCommunitiesMembersApiGetCommunityMembers = <
  TData = Awaited<ReturnType<typeof communitiesMembersApiGetCommunityMembers>>,
  TError = ErrorType<Message>,
>(
  communityName: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof communitiesMembersApiGetCommunityMembers>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getCommunitiesMembersApiGetCommunityMembersQueryOptions(
    communityName,
    options
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Manage Community Member
 */
export const communitiesMembersApiManageCommunityMember = (
  communityId: number,
  userId: number,
  action:
    | 'promote_admin'
    | 'promote_moderator'
    | 'promote_reviewer'
    | 'demote_admin'
    | 'demote_moderator'
    | 'demote_reviewer'
    | 'remove',
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<Message>(
    { url: `/api/communities/${communityId}/manage-member/${userId}/${action}`, method: 'POST' },
    options
  );
};

export const getCommunitiesMembersApiManageCommunityMemberMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof communitiesMembersApiManageCommunityMember>>,
    TError,
    {
      communityId: number;
      userId: number;
      action:
        | 'promote_admin'
        | 'promote_moderator'
        | 'promote_reviewer'
        | 'demote_admin'
        | 'demote_moderator'
        | 'demote_reviewer'
        | 'remove';
    },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof communitiesMembersApiManageCommunityMember>>,
  TError,
  {
    communityId: number;
    userId: number;
    action:
      | 'promote_admin'
      | 'promote_moderator'
      | 'promote_reviewer'
      | 'demote_admin'
      | 'demote_moderator'
      | 'demote_reviewer'
      | 'remove';
  },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof communitiesMembersApiManageCommunityMember>>,
    {
      communityId: number;
      userId: number;
      action:
        | 'promote_admin'
        | 'promote_moderator'
        | 'promote_reviewer'
        | 'demote_admin'
        | 'demote_moderator'
        | 'demote_reviewer'
        | 'remove';
    }
  > = (props) => {
    const { communityId, userId, action } = props ?? {};

    return communitiesMembersApiManageCommunityMember(communityId, userId, action, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CommunitiesMembersApiManageCommunityMemberMutationResult = NonNullable<
  Awaited<ReturnType<typeof communitiesMembersApiManageCommunityMember>>
>;

export type CommunitiesMembersApiManageCommunityMemberMutationError = ErrorType<Message>;

/**
 * @summary Manage Community Member
 */
export const useCommunitiesMembersApiManageCommunityMember = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof communitiesMembersApiManageCommunityMember>>,
    TError,
    {
      communityId: number;
      userId: number;
      action:
        | 'promote_admin'
        | 'promote_moderator'
        | 'promote_reviewer'
        | 'demote_admin'
        | 'demote_moderator'
        | 'demote_reviewer'
        | 'remove';
    },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof communitiesMembersApiManageCommunityMember>>,
  TError,
  {
    communityId: number;
    userId: number;
    action:
      | 'promote_admin'
      | 'promote_moderator'
      | 'promote_reviewer'
      | 'demote_admin'
      | 'demote_moderator'
      | 'demote_reviewer'
      | 'remove';
  },
  TContext
> => {
  const mutationOptions = getCommunitiesMembersApiManageCommunityMemberMutationOptions(options);

  return useMutation(mutationOptions);
};
