import Header from './components/header'
import Posts from "./components/posts"
import Footer from "./components/footer"
import data from "./components/postData/data"

const posts = data.map((el, i)=>{
  return(  <Posts key={i}
    time={el.time}
    title={el.title}
    imgLink={el.imgLink}
    text={el.text}
    />
  )
})
console.log(posts)

export default function App() {
  return (
    <div className="App">
        <Header />
        {posts}
        <Footer />
    </div>
  )
}