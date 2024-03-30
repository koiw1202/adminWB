module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: '홈페이지',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '차량조회',
        router: {
          name: 'CarList'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '옵션조회',
        router: {
          name: 'OptionList'
        }
      }
    ]
  }
]
