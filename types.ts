
export enum ServiceType {
  RESIDENTIAL = 'Residential Cleaning',
  COMMERCIAL = 'Office/Commercial Cleaning',
  DEEP_CLEAN = 'Deep Cleaning',
  POST_CONSTRUCTION = 'Post-Construction Cleaning',
  MOVE_IN_OUT = 'Move-in/Move-out Cleaning',
  LAUNDRY = 'Laundry & Ironing Service',
  WINDOW = 'Expert Window Cleaning'
}

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceOption {
  id: string;
  name: ServiceType;
  description: string;
}

export interface TeamMember {
  name: string;
  image: string;
  role: string;
}
