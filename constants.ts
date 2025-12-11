import { 
  Smile, 
  ShieldCheck, 
  Users, 
  CreditCard, 
  Sparkles, 
  Stethoscope, 
  BriefcaseMedical, 
  Drill 
} from 'lucide-react';
import { BenefitItem, ServiceItem, TestimonialItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Depoimentos', href: '#testimonials' },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: '1',
    title: 'Atendimento Humanizado',
    description: 'Cuidado e atenção especial para que você se sinta confortável em cada etapa.',
    icon: Users,
  },
  {
    id: '2',
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos modernos para diagnósticos precisos e tratamentos indolores.',
    icon: ShieldCheck,
  },
  {
    id: '3',
    title: 'Equipe Especializada',
    description: 'Profissionais pós-graduados e em constante atualização científica.',
    icon: Stethoscope,
  },
  {
    id: '4',
    title: 'Facilidade de Pagamento',
    description: 'Diversas opções de parcelamento e convênios para caber no seu bolso.',
    icon: CreditCard,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Limpeza e Profilaxia',
    description: 'Remoção de placa e tártaro para manter a saúde gengival e prevenir cáries.',
    icon: Sparkles,
  },
  {
    id: '2',
    title: 'Clareamento Dental',
    description: 'Técnicas seguras para devolver o brilho e a brancura natural do seu sorriso.',
    icon: Smile,
  },
  {
    id: '3',
    title: 'Ortodontia',
    description: 'Alinhadores invisíveis e aparelhos fixos para correção estética e funcional.',
    icon: Drill,
  },
  {
    id: '4',
    title: 'Implantes',
    description: 'Reabilitação oral completa com materiais biocompatíveis de alta durabilidade.',
    icon: BriefcaseMedical,
  },
  {
    id: '5',
    title: 'Restaurações',
    description: 'Reconstrução dentária com resinas de alta qualidade e estética natural.',
    icon: ShieldCheck,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Mariana Costa',
    role: 'Paciente de Ortodontia',
    content: 'O tratamento com alinhadores invisíveis mudou minha autoestima. A equipe foi super atenciosa durante todo o processo.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ricardo Alves',
    role: 'Paciente de Implante',
    content: 'Tinha muito medo de dentista, mas o atendimento humanizado me deixou tranquilo. O resultado do implante ficou perfeito.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    role: 'Clareamento e Limpeza',
    content: 'Ambiente impecável e profissionais excelentes. Faço minha limpeza semestral aqui há 3 anos e não troco.',
    rating: 5,
  },
];