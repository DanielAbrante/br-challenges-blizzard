export interface InterfaceGameList {
  category: string;
  image: string;
  logo: string;
  name: string;
}

export interface InterfaceFooterItem {
  icon: string;
  title: string;
}

export interface BannersProps {
  id: number;
  title: string;
  description: string;
  gameIcon: string;
  gameLogo: string;
  gameTrailer: string;
  gameLogoTrailer: string;
  isAvailable: boolean;
}