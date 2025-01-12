export interface Celebrity {
  id: number;
  name: string;
  profileImageUrl: string;
  subscriberCount: number;
  restaurantCount: number;
}

export interface Restaurant {
  id: number;
  name: string;
  category: string;
  roadAddress: string;
  phoneNumber: string;
  businessHours: string;
  introduction: string;
  naverMapUrl: string;
  latitude: number;
  longitude: number;
  images: {
    name: string;
    author: string;
    url: string;
    isThumbnail: boolean;
  }[];
  liked: boolean;
  visitedCelebrities: Celebrity[];
}

export interface CelebrityDetail {
  celebrity: Celebrity & {
    introduction: string;
    youtubeContentResults: {
      id: number;
      contentsName: string;
      channelId: string;
      channelUrl: string;
      channelName: string;
      restaurantCount: number;
      subscriberCount: number;
    }[];
  };
  interested: boolean;
}

export type SocialLoginType = "KAKAO" | "NAVER" | "GOOGLE";

export interface UserProfile {
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  serverType: SocialLoginType;
  socialId: string;
  interestedCount: number;
  reviewCount: number;
}

export type SearchResult = {
  regionResults: [
    {
      id: number;
      name: string;
      latitude: number;
      longitude: number;
    },
  ];
  restaurantResults: [
    {
      id: number;
      name: string;
    },
  ];
  celebrityResults: [
    {
      id: number;
      name: string;
      profileImageUrl: string;
    },
  ];
};
