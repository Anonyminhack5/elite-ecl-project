
import { ServiceType, Stat, ServiceOption, TeamMember } from './types';

export const BUSINESS_NAME = 'Elite Cleaning Service';
export const WHATSAPP_NUMBER = '+2349124894404';

export const SERVICES: ServiceOption[] = [
  { id: '1', name: ServiceType.RESIDENTIAL, description: 'Spotless homes for peaceful living.' },
  { id: '2', name: ServiceType.COMMERCIAL, description: 'Productive and hygienic workspaces.' },
  { id: '3', name: ServiceType.DEEP_CLEAN, description: 'Every corner scrubbed to perfection.' },
  { id: '4', name: ServiceType.POST_CONSTRUCTION, description: 'From dust to diamonds after your build.' },
  { id: '5', name: ServiceType.MOVE_IN_OUT, description: 'Seamless transitions for your move.' },
  { id: '6', name: ServiceType.LAUNDRY, description: 'Fresh, clean, and perfectly pressed garments.' },
  { id: '7', name: ServiceType.WINDOW, description: 'Crystal clear views with streak-free cleaning.' },
];

export const STATS: Stat[] = [
  { value: '30+', label: 'Homes Cleaned' },
  { value: '10+', label: 'Years Of Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'OLASUNKANMI MODINAT YETUNDE', image: 'https://res.cloudinary.com/dcnacu3bu/image/upload/yetunde_n5mjp6.jpg', role: 'Executive Lead' },
  { name: 'AMOLO BRIGHT NWACHUKWU', image: 'https://res.cloudinary.com/dcnacu3bu/image/upload/bright_yp0xnk.jpg', role: 'Operations Director' },
  { name: 'AKINBODE YESIRAT OMORELEWA', image: 'https://res.cloudinary.com/dcnacu3bu/image/upload/yesirat_r5d3pg.jpg', role: 'Service Coordinator' },
  { name: 'SUCCESS CHINEDU ONYEDIKACHI', image: 'https://res.cloudinary.com/dcnacu3bu/image/upload/success_d0kui0.jpg', role: 'Quality Assurance' },
  { name: 'ONUZO FAVOUR CHIOMA', image: 'https://res.cloudinary.com/dcnacu3bu/image/upload/favour_ib7g4c.jpg', role: 'Client Relations' },
  { name: 'ADEBAYO VICTORIA', image: 'https://res.cloudinary.com/dcnacu3bu/image/upload/victoria_mfodag.jpg', role: 'Hospitality Specialist' },
  { name: 'ANOZIE STANLEY AMOBI', image: 'https://res.cloudinary.com/dcnacu3bu/image/upload/stanley_nkzfkx.jpg', role: 'Field Supervisor' },
];
