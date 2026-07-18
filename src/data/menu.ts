// ============================================================
// Menu Data — Estrutura vazia preparada para cardápio real
// DHDS_VITRINE_ADMIN: Preencher via painel ou editar aqui
// ============================================================

import type { MenuCategory } from '@/types/dhds-vitrine'

export const menuCategories: MenuCategory[] = [
  {
    id: 'entradas',
    label: { pt: 'Entradas', en: 'Starters', fr: 'Entrées', zh: '开胃菜' },
    icon: '🥗',
    items: [
      // DHDS_VITRINE_ADMIN: Adicionar itens reais aqui
      // Exemplo:
      // {
      //   id: 'entrada-01',
      //   name: { pt: 'Nome do Prato', en: 'Dish Name', fr: 'Nom du Plat', zh: '菜名' },
      //   description: { pt: 'Descrição', en: 'Description', fr: 'Description', zh: '描述' },
      //   price: 2500,
      //   currency: 'AOA',
      //   available: true,
      // },
    ],
  },
  {
    id: 'principais',
    label: { pt: 'Pratos Principais', en: 'Main Courses', fr: 'Plats Principaux', zh: '主菜' },
    icon: '🍽️',
    items: [],
  },
  {
    id: 'sobremesas',
    label: { pt: 'Sobremesas', en: 'Desserts', fr: 'Desserts', zh: '甜点' },
    icon: '🍮',
    items: [],
  },
  {
    id: 'bebidas',
    label: { pt: 'Bebidas', en: 'Drinks', fr: 'Boissons', zh: '饮品' },
    icon: '🥂',
    items: [],
  },
  {
    id: 'shishas',
    label: { pt: 'Essências Shisha', en: 'Shisha Flavours', fr: 'Saveurs Shisha', zh: '水烟口味' },
    icon: '💨',
    items: [],
  },
]

export const isMenuAvailable = menuCategories.some(c => c.items.length > 0)
