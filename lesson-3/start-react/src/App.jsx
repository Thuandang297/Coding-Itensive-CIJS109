import Card from './component/Card'
import Column from './component/Column'
import SearchArea from './component/SearchArea'
const data = [{ name: "Đặng Văn Nghĩa", className: "10A5", description: "Học nữa, học mãi" },
{ name: "Đặng Văn Ngọc", className: "10A3", description: "Đi một ngày đàng học một sàng khôn" },
{ name: "Lê Hồng Anh", className: "10A6", description: "Học nữa, học mãi" }
]
function App() {
  return (
    <>
    <SearchArea/>
    <Column/>
      {
        data.map(item =>
          <Card name={item.name} className={item.className} description={item.description} />
        )
      }

    </>
  )
}

export default App
