function skillMember() {
  return {
    name: 'member',
    title: 'Member',
    description: 'Member skill',
    cost: 1,
    maxLevel: 1,
    requirements: [],
    effects: [
      {
        type: 'add',
        target: 'member',
        value: 1,
      },
    ],
  };
}