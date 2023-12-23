function skillMember() {
  return {
    name: 'skillMember',
    type: 'member',
    path: '/skill/member',
    component: () => import('@/views/skill/member'),
    meta: {
      title: '成员管理',
      icon: 'user',
      roles: ['admin']
    }
  }
}