
// find_path('231', areas) => ['11', '23', '231']

/**
 * 
 * 根据 id 返回其所在的路径，没有返回 null
 * 
 * @param {string|number} id 待查找的 id
 * @param {array} data 待查找的数据
 * @param {array} path 当前已查找的路径
 * @returns {array|null} 查找的路径结果
 */
function find_path (id, data = [], path = []) {
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    
    /** 结束条件：找到直接返回路径 */
    if (item.id === id) {
      return [...path, id]
    }
    
    if (item.children) {
      const result = find_path(id, item.children, [...path, item.id])

      /** 若在 children 找到存在 id 项，返回路径 */
      if (result) {
        return result
      }
    }
  }
  return null
}

var areas = [
  {
    id: '12',
    name: '福建省',
    children: [
      {
        id: '321312',
        name: '福州市',
        children: [
          {
            id: '3213',
            name: '闽侯县'
          }
        ]
      }
    ]
  },
  {
    id: '11',
    name: '广东省',
    children: [
      {
        id: '21',
        name: '广州市',
        children: [
          {
            id: '212',
            name: '天河区'
          }
        ]
      },
      {
        id: '23',
        name: '深圳市',
        children: [
          {
            id: '231',
            name: '南山区'
          },
          {
            id: '232',
            name: '宝安区'
          }
        ]
      }
    ]
  }
]

console.log(find_path('231', areas))
