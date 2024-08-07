'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useCommunitiesApiCreateCommunity } from '@/api/communities/communities';
import { CreateCommunityDetails } from '@/api/schemas';
import FormInput from '@/components/FormInput';
import ImageUpload from '@/components/ImageUpload';
import LabeledTooltip from '@/components/LabeledToolTip';
import MultiLabelSelector from '@/components/MultiLabelSelector';
import { Option } from '@/components/ui/multiple-selector';
import { useAuthStore } from '@/stores/authStore';

import OptionCard from './OptionCard';

interface FileObj {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  errorMessage?: string;
}

type OptionType = 'public' | 'locked' | 'hidden';

interface FormValues {
  name: string;
  description: string;
  tags: Option[];
  type: OptionType;
  profileImage: FileObj;
}

const CreateCommunity = () => {
  const router = useRouter();
  const accessToken = useAuthStore((state) => state.accessToken);

  const { mutate: createCommunity, isPending } = useCommunitiesApiCreateCommunity({
    request: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    mutation: {
      onSuccess: (data) => {
        toast.success('Community created successfully! Redirecting to community page...');
        router.push(`/community/${data.data.slug}`);
      },
      onError: (error) => {
        console.error('Error submitting article:', error);
        toast.error(`${error.response?.data.message || 'An error occurred'}`);
      },
    },
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      type: 'public',
    },
    mode: 'onChange',
  });

  const options: { name: string; description: string; value: OptionType }[] = [
    {
      name: 'Public',
      description: 'Anyone can join and see the community content.',
      value: 'public',
    },
    {
      name: 'Locked',
      description: 'Anyone can see the community but needs permission to join.',
      value: 'locked',
    },
    {
      name: 'Hidden',
      description: 'Only invited users can join and see the community content.',
      value: 'hidden',
    },
  ];

  const onSubmit = (data: FormValues) => {
    const dataToSend: CreateCommunityDetails = {
      name: data.name,
      description: data.description,
      tags: data.tags.map((tag) => tag.value),
      type: data.type,
    };
    const profile_image_file = data.profileImage ? data.profileImage.file : undefined;

    createCommunity({
      data: { payload: { details: dataToSend }, profile_image_file: profile_image_file },
    });
  };

  return (
    <div className="container py-4">
      <div className="mb-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          Create your
          <span className="text-green-500"> Community</span>
        </h1>
        <p className="text-gray-600">
          Create a community to share your interests and connect with people.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8">
        <FormInput<FormValues>
          label="Community Name"
          name="name"
          type="text"
          placeholder="Enter your community name"
          register={register}
          requiredMessage="Title is required"
          maxLengthValue={10}
          maxLengthMessage="Name must not exceed 10 characters"
          info="Your community's name should be unique and descriptive."
          errors={errors}
        />

        <FormInput<FormValues>
          label="Description"
          name="description"
          type="text"
          textArea={true}
          placeholder="Briefly describe your community"
          register={register}
          requiredMessage="Description is required"
          minLengthValue={10}
          minLengthMessage="Description must be at least 10 characters"
          info="Your community's name should be unique and descriptive."
          errors={errors}
        />
        <Controller
          name="tags"
          control={control}
          rules={{ required: 'Authors are required' }}
          render={({ field: { onChange, value }, fieldState }) => (
            <MultiLabelSelector
              label="Tags"
              tooltipText="Help users find your community by adding tags."
              placeholder="Add Tags"
              creatable
              value={value}
              onChange={onChange}
              fieldState={fieldState}
            />
          )}
        />
        {/* Community Type */}
        <div>
          <LabeledTooltip
            label="Community Type"
            info="Select the type of community you want to create."
          />
          <div className="flex space-x-8">
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <>
                  {options.map((option) => (
                    <OptionCard
                      key={option.value}
                      name={option.name}
                      description={option.description}
                      value={option.value}
                      selectedValue={field.value}
                      onChange={field.onChange}
                    />
                  ))}
                </>
              )}
            />
          </div>
        </div>
        {/* Profile Image */}
        <Controller
          name="profileImage"
          control={control}
          rules={{ required: 'Profile Image is required' }}
          render={({}) => (
            <ImageUpload
              control={control}
              name="profileImage"
              label="Community Profile Image"
              info="Upload a profile image for your community"
            />
          )}
        />

        <button
          type="submit"
          className={clsx('mx-auto max-w-md rounded-md bg-green-500 px-4 py-2 text-white', {
            'cursor-not-allowed opacity-50': isPending,
          })}
        >
          {isPending ? 'Loading...' : 'Create Community'}
        </button>
      </form>
    </div>
  );
};

export default CreateCommunity;
